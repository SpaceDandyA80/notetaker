const bodyParser = require('body-parser');
const express = require('express')
const path = require('path');

const app = express()
const PORT = process.env.PORT || 8081;
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// Declare static folder to be served. It contains the js, images, css, etc.
app.use(express.static('public'));

require('./routes/api-route.js')(app);
require('./routes/html-route.js')(app);


app.listen(PORT, function(){
    console.log("app listening on PORT: " + PORT)
});