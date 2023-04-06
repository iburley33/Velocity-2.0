const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    console.log("nope, please login")
    res.redirect('/login');
  } else {
    console.log("yep, proceed")
    next();
  }
};

module.exports = withAuth;
