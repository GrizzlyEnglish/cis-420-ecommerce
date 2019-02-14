const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

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

// App assets
app.use('/sk', express.static(path.join(__dirname, '/views')));

// Route for handling the data
app.get('/data', function (req, res) {
    res.send('TODO');
});

//Base routes
app.get('/', layout);
app.get('/gallery', layout);
app.get('/order', layout);
app.get('/contact', layout);

function layout(req, res) {
    console.log("Sending layout");
    return res.sendFile(path.join(__dirname + '/views/layout.html'));
};

// Start the server and listen for requests
app.listen(port, function () { 
    console.log(`Example app listening on port ${port}!`);
});