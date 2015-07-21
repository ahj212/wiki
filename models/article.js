var db = require('../db.js');

module.exports.Article = {

  create : function(postObj, callback){
    db.create('articles', postObj, function (data) {
      callback( data );
    });
  }//,

  // find : function(id, callback){
  //   db.find('articles', id, function (data) {
  //     callback( data[0] );
  //   });
  // },

  // update : function(id, postObj, callback){
  //  db.update('articles', postObj, id, function (data) {
  //    callback( data );
  //  })
  // },

  // delete : function(id, callback){
  //   db.delete('articles', req.params.id, function (data) {
  //     callback( data );
  //   });
  // },

  // all : function(callback){
  //   db.all('articles', function (data) {
  //     callback( data );
  //   });
  // }

};