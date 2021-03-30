const http = require("http")
const sql = require("mysql")

const hostname ='127.2.0.1'
const port = '8089'

//create a databse connection variable
var con = sql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "awamad"
});

//connecting to databse and creating a table in selected database 
con.connect(function(err){
	if(err) throw err;
		console.log("Connected Successfully!!!")

		var qString = "insert into department (dept_id,dept_name,dept_hod,std_count) values(3, 'Information Technology', 'Dr. A.J. Umbharkar',90)"
		con.query(qString, function(err,result) {
			if(err) throw err;
			console.log("1 Row Inserted Successfully!!!")
		});
	
});
