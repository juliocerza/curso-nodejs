const Sequelize = require('sequelize')
const connection = new Sequelize('guiapress', 'root', '$pwd$Ba2', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;