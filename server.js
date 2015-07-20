//loading npm
var express = require('express');
var logger = require('morgan');
var path = require('path');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var pg = require('pg');

var app = express();

//setting up handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main', extname: 'handlebars'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

//setting up body-parser
app.use(bodyParser.urlencoded({extended: true}));

//loading static files
app.use(express.static('public'));
app.use(logger('dev'));

//setting method-override
app.use(methodOverride(function(req, res) {
 if (req.body && typeof req.body === 'object' && '_method' in req.body) {
   // look in urlencoded POST bodies and delete it
   var method = req.body._method
   delete req.body._method
   return method
 }
}));

//listening to port 3000
app.listen(3000);

//connection string to db
var connectionString = "pg://localhost/wiki_app_development";

//ROUTES

//home route
app.get('/', function (req, res) {
	res.render('home');
});

//ARTICLE ROUTES

//article index route
app.get('/articles', function (req, res) {
	//add pg.connect
	res.render('articlesIndex');
});

//article show route
app.get('/articles/:id', function (req, res) {
	//add pg.connect
	res.render('article');
});

//article new route
app.get('/new-article', function (req, res) {
	//add pg.connect
	res.render('new-article');
});

//article create route
app.post('/create-article', function (req, res) {
	//add pg.connect
	res.redirect('/articlesIndex');
});

//article edit route
app.get('/edit-article/:id', function (req, res) {
	//add pg.connect
	res.render('edit-article');
});

//article update route
app.put('/update-article/:id', function (req, res) {
	//add pg.connect
	res.redirect('/articlesIndex');
});

//article delete route
app.delete('/delete-article/:id', function (req, res) {
	//add pg.connect
	res.redirect('/articlesIndex');
})

// categories 
// categories/articles

// we have seven routes that we can hit
// I: Index, All 'artists', GET '/artist'
// S: Show, ONE OR INDIVIDUAL, GET '/artists/:id'
// N: New, Render creation form, GET '/artists/new'
// C: Create, post route  has no render, will typically have a redirect, POST '/artists'
// E: Edit, renders a form filled with info, GET '/artists/edit/:id'
// U: Update, has no render, PUT '/artists/:id'
// D: Delete, has no render, DELETE '/artists/:id'

