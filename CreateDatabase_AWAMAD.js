const http = require("http")
const sql = require("mysql")



//create a database connection variable
var con = sql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	
})

//connecting to database and creating a database 
/*con.connect(function(err){
	if(err) throw err;
		console.log("Connected Successfully!!!")
*/
con.connect(function(err){
	if(err) throw err;
		console.log("Connected Successfully!!!")

con.query("create database AWAMAD", function(err,result) {
			if(err) throw err;
			console.log("Database Created Successfully!!!")
		})
})	