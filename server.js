var express = require('express');
var port = 3475;
var app = express();
var path = require('path');

var hbs = require('hbs');

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.engine('html', hbs.__express);
app.set('view engine', 'html');

app.listen(port);
console.log("Express started on " + port);

app.get("/", function(req, res){
  res.render('index');
});

app.use(function(req, res, next) {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});


app.use(function(req, res, next) {
  res.status(500);

  // respond with html page
  if (req.accepts('html')) {
    res.render('500', { url: req.url });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Forbidden');
});


app.get("/404", function(req, res){
  res.render("404");
});

app.get("/500", function(req, res){
  res.render("503");
});
