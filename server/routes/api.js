const express = require('express');
const router = express.Router();
const mysql = require('mysql');

//Initialling connection string
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sram@225',
    database: 'timesheetmanagement'
});

let apiResponse = { "message": "", "result": "", "statuscode": "" };

//GET API to Fetch all Users
router.get("/user", (req, res) => {
    connection.query('SELECT * FROM user_data', function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            if (results.length > 0) {
                apiResponse.statuscode = "200";
                apiResponse.message = "Successfully Fetched the UserDetails";
                apiResponse.result = results;
                res.status(200).send(apiResponse);
            } else {
                apiResponse.statuscode = "2001";
                apiResponse.message = "No Users Available";
                apiResponse.result = results;
                res.status(200).send(apiResponse);
            }
        }
    });
});

router.get("/company", (req, res) => {
    connection.query('SELECT * FROM company', function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            if (results.length > 0) {
                apiResponse.statuscode = "200";
                apiResponse.message = "Successfully Fetched the Company Details";
                apiResponse.result = results;
                res.status(200).send(apiResponse);
            } else {
                apiResponse.statuscode = "2001";
                apiResponse.message = "No Company Details Available";
                apiResponse.result = [];
                res.status(200).send(apiResponse);
            }
        }
    });
});

router.get("/service", (req, res) => {
    connection.query('SELECT * FROM service', function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            if (results.length > 0) {
                apiResponse.statuscode = "200";
                apiResponse.message = "Successfully Fetched the Services";
                apiResponse.result = results;
                res.status(200).send(apiResponse);
            } else {
                apiResponse.statuscode = "2001";
                apiResponse.message = "No Services Available";
                apiResponse.result = results;
                res.status(200).send(apiResponse);
            }
        }
    });
});

router.get("/timeactivity", (req, res) => {
    connection.query('SELECT * FROM time_activity', function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            if (results.length > 0) {
                apiResponse.statuscode = "200";
                apiResponse.message = "Successfully Fetched the Time Activity Details";
                apiResponse.result = results;
                res.status(200).send(apiResponse);
            } else {
                apiResponse.statuscode = "2001";
                apiResponse.message = "No Time Activity Details Available";
                apiResponse.result = results;
                res.status(200).send(apiResponse);
            }
        }
    });
});


router.post("/login", (req, res) => {
    let UserName = req.body.user_name;
    let Password = req.body.password;
    let query1 = 'SELECT * FROM user_data WHERE user_data.user_name=' + "'" + UserName + "'";
    connection.query(query1, function (error, results, fields) {
        if (error) {
            console.log("Error while connecting database" + error);
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            if (results.length && results[0].user_name === UserName && results[0].password === Password) {
                apiResponse.statuscode = "200";
                apiResponse.message = "User Authenticated Successfully";
                apiResponse.result = results[0];
                res.send(apiResponse);
            } else {
                apiResponse.statuscode = "400";
                apiResponse.message = "Unable to Authenticate the User";
                apiResponse.result = " ";
                res.status(500).send(apiResponse);
            }
        }
    });
})

//POST API
router.post("/user", (req, res) => {
    let user_name = req.body.user_name;
    let role = req.body.role;
    let password = req.body.password;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;

    var query1 = "INSERT INTO user_data ( first_name, last_name, user_name, email, password, role ) VALUES ( " + "'" + first_name + "'" + " , " + "'" + last_name + "'" + " , " + "'" + user_name + "'" + " , " + "'" + email + "'" + " , " + "'" + password + "'" + " , " + "'" + role + "'" + " )";
    connection.query(query1, function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            apiResponse.statuscode = "200";
            apiResponse.message = "User Created Successfully";
            apiResponse.result = results;
            res.status(200).send(apiResponse);
        }
    });
});

//POST API
router.post("/timeactivity", (req, res) => {
    let customer_name = req.body.customer_name;
    let name = req.body.name;
    let date = req.body.date;
    let service_name = req.body.service_name;
    let billable = req.body.billable;
    let time = req.body.time;
    let description = req.body.description;

    var query1 = "INSERT INTO time_activity ( customer_name, name, date, service_name, billable, time, description ) VALUES ( " + "'" + customer_name + "'" + " , " + "'" + name + "'" + " , " + "'" + date + "'" + " , " + "'" + service_name + "'" + " , " + billable + " , " + "'" + time + "'" + " , " + "'" + description + "'" + " )";
    connection.query(query1, function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            apiResponse.statuscode = "200";
            apiResponse.message = "User Created Successfully";
            apiResponse.result = results;
            res.status(200).send(apiResponse);
        }
    });
});

//POST API
router.post("/service", (req, res) => {
    let service_name = req.body.service_name;
    var query1 = "INSERT INTO service ( service_name ) VALUES ( " + "'" + service_name + "'" + " )";
    connection.query(query1, function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            apiResponse.statuscode = "200";
            apiResponse.message = "Company Created Successfully";
            apiResponse.result = results;
            res.status(200).send(apiResponse);
        }
    });
});

//POST API
router.post("/company", (req, res) => {
    let company_name = req.body.company_name;
    var query1 = "INSERT INTO company ( company_name ) VALUES ( " + "'" + company_name + "'" + " )";
    connection.query(query1, function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            apiResponse.statuscode = "200";
            apiResponse.message = "Company Created Successfully";
            apiResponse.result = results;
            res.status(200).send(apiResponse);
        }
    });
});


//PUT API
router.put("/changePassword/:id", (req, res) => {
    var query1 = 'SELECT * FROM user_data WHERE user_data.user_name=' + "'" + req.params.id + "'";
    connection.query(query1, function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            if (!(results[0].password === req.body.oldPassword)) {
                apiResponse.statuscode = "404";
                apiResponse.message = "Password Does Not Match..!";
                apiResponse.result = '';
                res.status(500).send(apiResponse);
            }
        }
    });
    var query2 = "UPDATE user_data SET password= " + "'" + req.body.newPassword + "'" + " WHERE user_data.user_name=" + "'" + req.params.id + "'";
    connection.query(query2, function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            apiResponse.statuscode = "200";
            apiResponse.message = "Password Updated Successfully";
            apiResponse.result = results;
            res.status(200).send(apiResponse);
        }
    });
});


module.exports = router;