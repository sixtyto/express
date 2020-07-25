const models = require("../models");

exports.show_login = (req, res, next) => {
  res.render("login/login", { formData: {}, errors: {} });
};
exports.show_signup = (req, res, next) => {
  res.render("login/signup", { formData: {}, errors: {} });
};
exports.signup = () => {};
exports.login = () => {};
