const Sequelize = require('sequelize');
const connection = new Sequelize('guiaperguntas', 'root', '$pwd$Ba2', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;