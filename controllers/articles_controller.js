var Article = require('../models/article.js').Article;

module.exports.controller = function(app) {

//article - index page
  app.get('/articles', function (req, res) {
    Article.all(function( data ){
      res.render('articleIndex', { articles : data } );
    });
  });

//article - new


//article - show


//article - edit


//article - update


//article - delete


};