const models = require("../models");

exports.show_lead = (req, res, next) => {
  models.Lead.findOne({ where: { id: req.params.lead_id } }).then((lead) => {
    res.render("lead", { lead });
  });
};
