'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('user', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: Sequelize.STRING,
        mail: Sequelize.STRING,
        facebookID: Sequelize.STRING,
        about: Sequelize.TEXT,
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('user');
  }
};
