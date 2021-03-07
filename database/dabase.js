const Sequelize = require('sequelize');
//change the variables { user,password } for your mysql settings

const user =    'your user';
const password = 'your password';

const conn = new Sequelize('blog','user','password',{
    host:'localhost',
    dialect: 'mysql',
    timezone:"-03:00"
});

module.exports = conn;