var mysql = require("mysql");

connection = mysql.createConnection({

    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",

    database: "burgers_db"

})





connection.connect(function (err) {

    if (err) {

        console.log("An error occured" + err.stack)

        return;

    }

    console.log("connected as " + connection.threadId)

})





module.exports = connection;