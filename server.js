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
