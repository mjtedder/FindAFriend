let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();

let PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require(path.join(__dirname, './app/routing/apiRoutes'))(app)
require(path.join(__dirname, './app/routing/htmlRoutes'))(app)

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});