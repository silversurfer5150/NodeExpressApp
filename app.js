const express = require('express');
const app = express();

// include Mustache templating engine and import the data to run into it
const mustacheExpress = require('mustache-express');
const data = require('./data.js');

// Used to make the styles, images (static assets) visible to the app
app.use(express.static('public'));

// Setup for Mustache, select the views folder as the main template to load
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// Allows the main root to render the template
app.get('/', function(req, res) {
	res.render('index', { appData: data.codingTools } );
});

// deals with 404 errors
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/404.html');
});

app.listen(3000);

