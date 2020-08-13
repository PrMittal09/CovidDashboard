const express = require('express');
const path = require('path');

const app = express();

const compression = require('compression');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Dashboard'));
app.use(compression());

app.get('*.js', function(req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
});

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/Dashboard/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);