const Sequelize = require('sequelize');

const sequelize = new Sequelize('testPr', 'root', 'root', {
    dialect: 'mysql'
});

module.exports = sequelize;