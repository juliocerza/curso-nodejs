const Sequelize = require('sequelize');
const connection = require('./db');
const Ask = connection.define('pergunta', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {});

Ask.sync({force: false}).then(() => {});

module.exports = Ask