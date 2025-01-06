function index(req, res) {
  if (!req.session.user) {
      return res.redirect('/auth/sign-in')
  }
  res.render('home', { title: 'Home Page', user: req.session.user })
}


module.exports = { index }