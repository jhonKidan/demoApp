//import express from 'express';
const express = require('express');
const app = express();
const port = 9000;

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "jhon",
  password: "7777777",
  database: "jhon",
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
});


// allow CORS to all
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// post request handler to add a new employee to the database
// use express.json() to parse the body of the request
app.use(express.json());
app.post('/add-employee', (req,res) =>{
    console.log(req.body);
    // write the  sql query to add to the database table named employee_test it should have the following columns firstName, lastName, email, password
    // the values should be the ones sent in the request body
    const sql = `INSERT INTO employee_test (first_name, last_name, email, password) VALUES ('${req.body.firstName}', '${req.body.lastName}', '${req.body.email}', '${req.body.password}')`;

    // execute the query
    connection.query(sql, (err, result) => {
        if(err) {
            console.log(err);
            res.status(500).send('Failed to add employee');
            return;
        }
        console.log('Employee added successfully');
        res.status(200).send('Employee added successfully');
    });
}
);




// post request handler to login an employee which comes to this route /login 

app.post('/login', (req,res)=>{
    console.log(req.body);
    // write the sql query to retrieve the employee with the email and password  provided by the user and compare it with the database
    const sql = `SELECT * FROM employee_test WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;

    // execute the query
    connection.query(sql, (err, result) => {
        if(err) {
            console.log(err);
            res.status(500).send('Failed to login');
            return;
        }
        if(result.length === 0) {
            res.status(404).send('Employee not found');
            return;
        }
        console.log('Employee logged in successfully');
        res.status(200).send('Employee logged in successfully');
    });
})


//listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});