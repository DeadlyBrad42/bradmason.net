var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

console.log('Starting server on ' + port);

/* serves main page */
app.get('/', function(req, res) {
   res.sendFile(__dirname + '\\index.html');
});

/* serves data */
app.get('/data.json', function(req, res) {
   res.sendFile(__dirname + '\\data.json');
});

 /* serve asset files */
app.use('/assets', express.static(__dirname + '/assets'));

/* serve JS files */
app.use('/scripts', express.static(__dirname + '/scripts'));

/* Serve CSS files */
app.get('/styles/portfolio.css', function (req, res) {
    res.sendFile(__dirname + '\\styles\\portfolio.css');
});

app.listen(port, function() {
    console.log('Listening on ' + port);
});
