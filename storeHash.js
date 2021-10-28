const db = require('./db.js');
const bcrypt = require('bcrypt');

const saltRounds = 10;

var username = "starbuck";
var password = "ldfgkj78%^&appdKO039*";

//query statement to store hash
var statement = "UPDATE user_table SET password = $1 WHERE username = $2";

//salt, hash, and store
bcrypt.hash(password, saltRounds, function(err, hash){
    let values = [hash, username]; //query values
    // store hash in database
    db.query(statement, values, function(err,res){
        if (err) throw err;
        else {
            console.log("stored!");
        }
    })
})