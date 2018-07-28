// Imports for needed modules
var express = require('express')
var path = require('path')

// Create the app and import css stylesheets
var app = express()
app.use(express.static(__dirname + '/ui/style'));
app.use(express.static(__dirname + '/ui/js'));


// Send the default webpage to the user
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/ui/index.html'));
})

app.listen(3000);
