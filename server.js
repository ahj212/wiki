var express = require('express');
var app = express();
var fs = require('fs');
var root = __dirname;
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var logger = require('morgan');
var path = require('path');
var db = require('/db.js');
var pg = require('pg');

app.listen(3000);

app.engine('handlebars', exphbs({defaultLayout: 'main', extname: 'handlebars'}));
app.set('views', path.join(root, 'views'));
app.set('view engine', 'handlebars');

app.user(bodyParser.urlencoded());
app.use(express.static('public'));
app.user(logger('dev'));

app.use(methodOverride(function (req, res) {
	if (req.body && typeof req.body === 'object' && '_method' in req.body) {
		var method = req.body._method;
		delete req.body._method;
		return method;
	}
}));

fs.readdirSync('./controllers').forEach(function (file) {
	if(file.substr(-3) == '.js') {
		route = require('./controllers/' + file);
		console.log('this is the route', route);
		route.controller(app);
	}
});

//ROOT ROUTE
app.get('/', function (req, res) {
	res.render('home');
});