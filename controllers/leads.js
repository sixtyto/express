const models = require("../models");

exports.show_leads = (req, res, next) => {
  models.Lead.findAll().then((leads) => {
    res.render("leads", { leads });
  });
};
