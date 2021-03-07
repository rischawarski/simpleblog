const port = 3000;
//Imports
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const conn = require('./database/dabase');
const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./aticles/articleController');
const userController = require('./user/UserController');
const Article = require('./aticles/Article');
const Category = require('./categories/Category');
const Users = require('./user/User.js');

//settings
app.set('view engine', 'ejs');
app.use(session({
    secret:'aiosilver',
    cookie:{
        maxAge:30000000
    }
}));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// database communication
conn
    .authenticate()
    .then(()=>{
    }).catch((e)=>{
        console.log(e);
    });
// Use Routes
    app.use("/",categoriesController);
    app.use("/",articlesController);
    app.use("/",userController);

// route main
app.get('/', (req, res) => {
    Article.findAll({
        order:[
            [ 'id','DESC']
        ],
        limit:4
    }).then(articles =>{
        Category.findAll().then(categories =>{
            res.render("index",{articles:articles,categories:categories});
    });
        });
    
});
app.get('/:slug', (req, res) => {
    let slug = req.params.slug;
    Article.findOne({
        where:{
            slug:slug
        }
    }).then(article =>{
        if(article != undefined){
                Category.findAll().then(categories =>{
            res.render("article",{article:article,categories:categories});
    });
        }else{
            res.redirect('/');
        }
    }).catch(err =>{
        res.redirect('/');
    });
});

app.get('/category/:slug', (req, res) => {
    let slug = req.params.slug;
    Category.findOne({
        where:{
            slug:slug
        },
        include:[{model:Article}]
    }).then(category =>{
        if(category != undefined){
            Category.findAll().then(categories =>{
                res.render('index',{articles:category.articles,categories:categories});
            })
        }else{
            res.render('/');
        }
    }).catch(err =>{
        res.render('/');
    })
});

// Up Server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});