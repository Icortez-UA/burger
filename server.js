var express = require('express');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");


var burgerRoutes = require('./controllers/burgers_controller')



app.use(burgerRoutes);



app.listen(PORT, function() {

    console.log("Listening on  " + PORT)

});