const bcrypt = require ('bcrypt'); // require bcrypt

const saltRounds = 10;  //  Data processing speed
var password = "Fkdj^45ci@Jad";  // Original Password
var password2 = "djlfhjd(456";
bcrypt.hash(password, saltRounds, function(err, hash) { // Salt + Hash
  bcrypt.compare(password2, hash, function(err, result) {  // Compare
    // if passwords match
    if (result) {
          console.log("It matches!")
    }
    // if passwords do not match
    else {
          console.log("Invalid password!");
    }
  });
});

