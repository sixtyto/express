"use strict";

const { Sequelize } = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Leads", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable("Leads"),
};
