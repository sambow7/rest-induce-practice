const User = require('../models/user');
const bcrypt = require('bcrypt');

function signUp(req, res) {
    res.render('auth/sign-up')
}

async function signUpPost(req, res) {
    try {
        const { username, password, confirmPassword } = req.body;

        if (!username || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required." })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "password and confirmPassword must be matched" })
        }

        const userInDatabase = await User.findOne({ username });

        if (userInDatabase) {
            return res.status(400).json({ message: "Username already taken." })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = {
            username,
            password: hashedPassword
        }
        await User.create(newUser);
        res.status(201).redirect('/');

    } catch (error) {
        console.error('Error suring sign-up:', error)
        res.status(500).json({ message: "An Error occurred during sign-up. Please try again." })
    }
}

function signIn(req, res) {
    res.render('auth/sign-in')
};

async function signInPost(req, res) {

    try {

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required." })
        }

        const userInDatabase = await User.findOne({ username });
        if (!userInDatabase) {
            return res.status(401).json({ message: "Login failed. Invalid username" })
        }

        const validPassword = await bcrypt.compare(password, userInDatabase.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Login Failed, Invalid password" })
        }

        req.session.user = {
            id: userInDatabase._id,
            username: userInDatabase.username
        }
        res.status(200).redirect('/')
    } catch (error) {
        console.error('Error during sign in:', error);
        res.status(500).json({ message: "An error occurred during sign in. Please try again." })
    }

};

function signout(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "An error occurred during logout." })
        }
        res.redirect('/')
    })
}
module.exports = { signUp, signUpPost, signIn, signInPost, signout };