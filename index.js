let db = require("./db");
let defaultAccount = require("./models/account.model");
let signInFunction = require("./services/signin.service");

const DBConnection = require("./services/DBConnection");

console.log("ok");
console.log(db);

console.log(defaultAccount);
console.log(defaultAccount.username);

signInFunction("admin", "1234");


let dbConnection = new DBConnection();
dbConnection.connect();
dbConnection.disconnect();