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

//about route
app.get('/about', function (req, res) {
	res.render('about');
});

//LOGIN ROUTES

//register route
app.get('/register', function (req, res) {
	res.render('register');
});

//login route
app.get('/login', function (req, res) {
	res.render('login');
})

//ARTICLE ROUTES

//article index route
app.get('/articles', function (req, res) {
	pg.connect(connectionString, function (err, client, done) {
		client.query('SELECT * FROM articles', function (err, result) {
			done();
			var data = {
				articles : result.rows
			};
		res.render('articlesIndex', data);
		});
	});
});

//article show route
app.get('/articles/:id', function (req, res) {
	pg.connect(connectionString, function (err, client, done) {
		client.query('SELECT * FROM articles WHERE id=$1', [req.params.id], function (err, result) {
			done();
			var data = result.rows[0];
			res.render('article', data);
		});
	});
});

//article new route
app.get('/new-article', function (req, res) {
	res.render('new-article');
});

//article create route
app.post('/create-article', function (req, res) {
	var articleName = req.body.article_name;
	var articleContent = req.body.article_content;
	var parentCategory = req.body.parent_category;
	var articleAuthor = req.body.article_author;
	pg.connect(connectionString, function (err, client, done) {
		client.query('INSERT INTO articles (article_name, article_content, parent_category, article_author) VALUES ($1, $2, $3, $4)', [articleName, articleContent, parentCategory, articleAuthor], function (err, result) {
			done();
			res.redirect('/articles');
		});
	});
});

//article edit route
app.get('/edit-article/:id', function (req, res) {
	pg.connect(connectionString, function (err, client, done) {
		client.query('SELECT * FROM articles WHERE id=$1', [req.params.id], function (err, result) {
			done();
			var data = result.rows[0];
			res.render('edit-article', data);
		});
	});
});

//article update route
app.put('/update-article/:id', function (req, res) {
	var id = req.params.id;
	var articleName = req.body.article_name;
	var articleContent = req.body.article_content;
	var parentCategory = req.body.parent_category;
	var articleAuthor = req.body.article_author;
	pg.connect(connectionString, function (err, client, done) {
		client.query('UPDATE articles SET article_name=$1, article_content=$2, parent_category=$3, article_author=$4 WHERE id=$5', [articleName, articleContent, parentCategory, articleAuthor, id], function (err, result) {
			done();
			res.redirect('/articles');
		});
	});
});

//article delete route
app.delete('/delete-article/:id', function (req, res) {
	pg.connect(connectionString, function (err, client, done) {
		client.query('DELETE FROM articles WHERE id=$1', [req.params.id], function (err, result) {
			done();
			res.redirect('/articles');
		});
	});
});


//CATEGORIES ROUTE

//categories index route
app.get('/categories', function (req, res) {
	pg.connect(connectionString, function (err, client, done) {
		client.query('SELECT * FROM categories', function (err, result) {
			done();
			var data = {
				categories : result.rows
			};
		res.render('categoriesIndex', data);
		});
	});
});

//categories new route
app.get('/new-category', function (req, res) {
	res.render('new-category');
});

//categories create route
app.post('/create-category', function (req, res) {
	pg.connect(connectionString, function (err, client, done) {
		client.query('INSERT INTO categories')
	});
	res.redirect('/categoriesIndex');
});


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

