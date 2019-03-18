const express = require('express');
const path = require('path');
const app = express();
const port = 3011;

//Base logger function
app.use(function(req, res, next) {
    console.log("GOT REQUEST: " + req.path);

    //Pass the request on
    next();
});

// Public assets
app.use(express.static(path.join(__dirname, '/public')));
app.use('/scripts', express.static(path.join(__dirname, '/public/scripts')));
app.use('/styles', express.static(path.join(__dirname, '/public/css')));
app.use('/fonts', express.static(path.join(__dirname, '/public/fonts')));
app.use('/imgs', express.static(path.join(__dirname, '/public/imgs')));

// App assets
app.use('/sk', express.static(path.join(__dirname, '/views')));
app.use('/sk-styles', express.static(path.join(__dirname, '/styles')));

// Route for handling the data
app.get('/data', function (req, res) {
    res.status(404).send('TODO: 404 page');
});

//Base routes
app.get('/', layout);
app.get('/gallery', layout);
app.get('/order', layout);
app.get('/contact', layout);
app.get('/pricing', layout);

function layout(req, res) {
    console.log("Sending layout");
    return res.sendFile(path.join(__dirname + '/views/layout.html'));
};

//404 Non defined routes
app.get('*', function(req, res){
    res.status(404).send('TODO: 404 page');
});


// Start the server and listen for requests
app.listen(port, function () { 
    console.log(`Example app listening on port ${port}!`);
});