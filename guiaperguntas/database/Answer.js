const Sequelize = require('sequelize');
const connection = require('./db');
const Answer = connection.define('respostas', {
    corpo:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {});

Answer.sync({force: false}).then(() => {});

module.exports = Answer