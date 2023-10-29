const Sequelize = require('sequelize');
const connection = require('../database/db');
const Category = require('../categories/Category');


const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article); // one-to-many
Article.belongsTo(Category); //one-to-one

//Article.sync({force:true})

module.exports = Article;