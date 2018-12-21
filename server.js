const express = require('express');
const hbs = require('handlebars');


var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.render('index.hbs');
});

app.get('/about', function(req, res) {
    res.render('about.hbs');
});

app.listen(3000, function() {
    console.log("Up and running on port 3000");
});  
