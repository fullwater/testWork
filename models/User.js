var sequelize = require('../config/connection.js');

const Sequelize = require('sequelize');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    mail: Sequelize.STRING,
    facebookID: Sequelize.STRING,
    about: Sequelize.TEXT,
}, {
    timestamps: false,
    tableName: "user"
});

module.exports = User;