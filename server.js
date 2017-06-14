// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./modules/index');

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
// index has been required --> now we need to use it
app.use('/', index);

// globals
var port = process.env.PORT || 7899;

// spin up server
app.listen(port, function(){
  console.log('server up on:', port);
});
