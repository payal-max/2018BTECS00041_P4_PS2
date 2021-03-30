const http = require('http');
var sql = require('mysql');


//create a databse connection variable
var con = sql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "AWAMAD"
});

//connecting to databse and creating a table in selected database 
con.connect(function(err){
	if(err) throw err;
		console.log("Connected Successfully!!!")

		var qString = "create table Department(dept_id int not null primary key, dept_name varchar(50), dept_hod varchar(50),std_count int)"
		
		con.query(qString, function(err,result) {
			if(err) throw err;
			console.log("Table Created Successfully!!!")
		});
	
});



