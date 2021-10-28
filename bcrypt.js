//To use bcrypt, we must include the module.
const bcrypt = require ('bcrypt');
// Next, we set the saltRounds value. 
//The higher the saltRounds value, the more time the hashing algorithm takes.
const saltRounds = 10;
//Declare a password variable
var password = "Fkdj^45ci@Jad";
//Generate a salt
//using asynchronously
bcrypt.genSalt(saltRounds, function(err, salt){
    //returns salt
    //We now add the hash function inside genSalt.
    //We pass bcrypt.hash() these parameters:Password,Salt,Callback of error and the returned hash
    bcrypt.hash(password, salt, function(err, hash){
        // returns hash
        console.log(hash);
    })

})


//combining hash and salt
//bcrypt.hash(password, saltRounds, function(err, hash){});
