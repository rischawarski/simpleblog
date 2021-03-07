# Simple Blog RMT
## A simple blog for small notice

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)


And a blog for small news structured with

- NodeJS
- Express
- Msql

- ## Features
- Create and edit categories for posts
- Create and edit articles
- Login for access to section-based administrator route
- Index with pagination of articles


Made from the NodeJS Training Course taught by Professor [Victor Lima][teach] on the udemy platform

> my goal is to show what i learned while i was learning how to use request routes and  responses with nodeJS i learned to use hash session upload server use template engine and much more that can be proven in the project

## Tech

Simple Blog  uses a number of open source projects to work properly:

- [Express] - Fast, unopinionated, minimalist web framework
- [ejs] - Embedded JavaScript templates
- [body-parser] - Node.js body parsing middleware
- [mysql2] - Fast mysql driver. Implements core protocol, prepared statements, ssl and compression in native JS
- [node.js] - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [sequelize] - Multi dialect ORM for Node.JS
- [slugfy] - Convert string to slug
- [express-session] - Simple session middleware for Express
- [bcryptjs] - Optimized bcrypt in JavaScript with zero dependencies


## Installation

Simple Blog requires [Node.js](https://nodejs.org/) v10+ to run.

- open the folder database / database.js file and change the file variables to suit your mysql environment
- go to the localhost:3000/admin/users/create
- to create a user who will have access to the admin route.
- localhost:3000/admin/articles
- localhost:3000/admin/categories
Install the dependencies and devDependencies and start the server.


```sh
cd simpleblog
npm i
node index.js
```




## Plugins

The simple blog is currently extended with the following plugins
Instructions on how to use them in your own application are at the link below.

| Plugin | README |
| ------ | ------ |
| TinyMCE | [https://www.tiny.cloud/docs/][tinymce] 

<img width="1439" alt="Captura de Tela 2021-03-07 às 11 46 55" src="https://user-images.githubusercontent.com/38566736/110243944-52918a80-7f3b-11eb-8c28-8e0ca943fb63.png">

<img width="1438" alt="Captura de Tela 2021-03-07 às 11 49 01" src="https://user-images.githubusercontent.com/38566736/110243954-59b89880-7f3b-11eb-875c-aae5055d8baa.png">

<img width="1440" alt="Captura de Tela 2021-03-07 às 11 49 13" src="https://user-images.githubusercontent.com/38566736/110243964-60471000-7f3b-11eb-85d8-dce24c0975e7.png">

<img width="1438" alt="Captura de Tela 2021-03-07 às 11 49 43" src="https://user-images.githubusercontent.com/38566736/110243974-65a45a80-7f3b-11eb-856e-8d50c50ade73.png">


    
   [teach]:<https://www.udemy.com/user/victor-lima-67/>
   [Express]: <http://expressjs.com>
   [ejs]: <https://ejs.co/>
   [body-parser]: <https://www.npmjs.com/package/body-parser>
   [mysql2]: <https://www.npmjs.com/package/mysql2>
   [node.js]: <http://nodejs.org>
   [sequelize]: <https://sequelize.org/>
   [slugfy]:https://www.npmjs.com/package/slugify
   [express-session]: <https://www.npmjs.com/package/express-session>
   [bcryptjs]: <https://www.npmjs.com/package/bcryptjs>
   [tinymce]:<https://www.tiny.cloud/docs/>
   