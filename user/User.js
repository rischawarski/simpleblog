const  Sequelize = require("sequelize");
const conn = require('../database/dabase');

const User = conn.define('users',{
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

//User.sync({force:false});

module.exports = User;
