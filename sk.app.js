const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Public assets
app.use(express.static(path.join(__dirname, '/public')));
app.use('/scripts', express.static(path.join(__dirname, '/public/scripts')));
app.use('/styles', express.static(path.join(__dirname, '/public/css')));
app.use('/fonts', express.static(path.join(__dirname, '/public/fonts')));

// App assets
app.use('/sk', express.static(path.join(__dirname, '/views/')));

// Route for handling the data
app.get('/data', function (req, res) {
    res.send('TODO');
});

// Any route just render the same view
// Vue will handle the routing
app.get('/*', function (req, res) {
    return res.sendFile(path.join(__dirname + '/views/layout.html'));
});

// Start the server and listen for requests
app.listen(port, function () { 
    console.log(`Example app listening on port ${port}!`);
});