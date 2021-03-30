const http = require("http")
const sql = require("mysql")
//create a databse connection variable
var con = sql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "awamad"
})

//connecting to databse and creating a table in selected database 
con.connect(function(err){
	if(err) throw err;
		console.log("Connected Successfully!!!")

		var gString = "select * from department"
		con.query(gString, function(err,result, fields) {
			if(err) throw err;
			console.log(result);

			console.log(result[0].dept_id);
			console.log(result[1].dept_id);

		})
	
})
