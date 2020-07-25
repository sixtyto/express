const bcrypt = require("bcrypt");
const passport = require("passport");
const models = require("../models");
const passportConfig = require("../passport_setup")(passport);
const flash = require("connect-flash");

exports.show_login = (req, res, next) => {
  res.render("login/login", { formData: {}, errors: {} });
};
exports.show_signup = (req, res, next) => {
  res.render("login/signup", { formData: {}, errors: {} });
};

const saltPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(3), null);

exports.signup = (req, res, next) => {
  const newUser = models.User.build({
    email: req.body.email,
    password: saltPassword(req.body.password),
  });
  newUser.save().then((result) => {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/user/signup",
      failureFlash: true,
    })(req, res, next);
  });
};
exports.login = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/user/login",
    failureFlash: true,
  })(req, res, next);
};

exports.logout = (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
};
