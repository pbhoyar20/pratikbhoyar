var express=require('express');
var app=express();

var employeeController=function(req,res){
	var employees=[
	{ empId:101, empfirstName:"pratik",emplastName:"bhoyar",expYears:4,devCenter:"mumbai",empDprt:"accounts"},
    { empId: 102, empfirstName: "rohan", emplastName: "kolhapurkar", expYears: 2, devCenter: "new-york", empDprt:"marketing"},
    { empId: 103, empfirstName: "gaurav", emplastName: "sonawane", expYears: 5, devCenter: "dubai", empDprt:"HR"},
    { empId: 104, empfirstName: "shubham", emplastName: "rathi", expYears: 3.5, devCenter: "barcelona", empDprt:"reasearch and develpoment"},
	{ empId: 105, empfirstName: "shubham", emplastName: "jironkar", expYears: 6.5, devCenter: "chennai", empDprt:"purchase"}
	];
	res.send(employees);
};
	 
	 app.get('/employees',employeeController );
var server = app.listen(8080, function () {
	var host =server.address().address
	var port= server.address().port

  console.log("Example app listening at http://localhost:8080", host, port)
})


