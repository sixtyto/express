const models = require("../models");

exports.show_lead = (req, res, next) => {
  models.Lead.findOne({ where: { id: req.params.lead_id } }).then((lead) => {
    res.render("lead/lead", { lead });
  });
};

exports.show_edit_lead = (req, res, next) => {
  models.Lead.findOne({ where: { id: req.params.lead_id } }).then((lead) => {
    res.render("lead/edit_lead", { lead });
  });
};

exports.edit_lead = (req, res, next) => {
  models.Lead.update(
    { email: req.body.lead_email },
    { where: { id: req.params.lead_id } }
  ).then((result) => {
    res.redirect("/lead/" + req.params.lead_id);
  });
};
