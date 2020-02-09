var connection = require('../config/connection')

function questionToArr(num) {

    var array = [];



    for (var i = 0; i < num; i++) {

        array.push("?");

    }



    return array.toString();

}



function objSql(ob) {

 var array = [];

 for (var key in ob) {

     var value = ob[key];

     if (Object.hasOwnProperty.call(ob, key)) {

         console.log((Object.hasOwnProperty.call(ob, key)))

         if (typeof value === "string" && value.indexOf(" ") >= 0) {

             value = "'" + value + "'";

         }

         array.push(key + "=" + value);

     }

 }

 return array.toString();

}









var orm = {

    selectAll: function(Input, cb) {
    
        var selectAllQuery = "SELECT * FROM " + Input + ";";
    
        connection.query(selectAllQuery, function(err, res) {
    
            if (err) {
    
                throw err;
    
            }
    
            cb(res);
    
        });
    
    },
    
    insertOne: function(table, cols, vals, cb) {    
        var insertOneQuery = "INSERT INTO " + table;    
    
        insertOneQuery += " (";
    
        insertOneQuery += cols.toString();
    
        insertOneQuery += ") "
    
        insertOneQuery += " VALUES (";
    
        insertOneQuery += questionToArr(vals.length);
    
        insertOneQuery += ") ";
        
        connection.query(insertOneQuery, vals, function(err, res) {
    
            if (err) {
    
                throw err;
    
            }
    
            cb(res);
    
        })
    
    
    
    },
    
    updateOne: function(table, objColVals, condition, cb) {
    
        var updateOneQuery = "UPDATE " + table;
    
    
    
        updateOneQuery += " SET ";
    
        updateOneQuery +=  objSql(objColVals);
    
        updateOneQuery += " WHERE ";
    
        updateOneQuery += condition;
    
        connection.query(updateOneQuery, function(err, res) {
    
            if (err) {
    
                throw err
    
            }
    
            cb(res);
    
        })
    
        },
    
        delete: function(table, condition, cb) {
    
            var queryString = "DELETE FROM " + table;
    
            queryString += " WHERE ";
    
            queryString += condition;
    
    
    
            connection.query(queryString, function(err, result) {
    
                if (err) {
    
                throw err;
    
                }
    
                cb(result);
    
            })
    
        }
    
    };
    
    module.exports = orm;