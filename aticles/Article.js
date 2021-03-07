const  Sequelize = require("sequelize");
const conn = require('../database/dabase');
const Category   = require('../categories/Category');

const Article = conn.define('articles',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    slug:{
        type:Sequelize.STRING,
        allowNull:false
    },
    body:{
        type:Sequelize.TEXT,
        allowNull:false
    }
});
Category.hasMany(Article);
Article.belongsTo(Category);

//Article.sync({force:true});

module.exports = Article;
