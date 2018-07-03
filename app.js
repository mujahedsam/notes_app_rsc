var express = require('express');
var bodyParser = require('body-parser');
var nodemon = require('nodemon');
var routes = require('./routes/index')
var cors = require('cors');
//init app
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors());

app.use('/', routes);

// Set Port
app.set('port', (process.env.PORT || 8900));

app.listen(app.get('port'), function() {
	console.log('Server banged on port ' + app.get('port'));
});