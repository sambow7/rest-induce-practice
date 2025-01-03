async function index(req, res) {

  try {
      if (!req.session.user) {
          return res.redirect('auth/sign-in')
      }
      const books = await Book.find({}).populate('createdBy');
      res.render('books', { title: 'Book List', books })
  } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal server error');
  }

};


module.exports = { index };