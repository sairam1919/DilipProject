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
router.get("/", (req, res) => {
    console.log("Request Received");
    connection.query('SELECT * FROM tickets', function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            if (results.length > 0) {
                apiResponse.statuscode = "200";
                apiResponse.message = "Successfully Fetched the Available Tickets";
                apiResponse.result = results;
                res.status(200).send(apiResponse);
            } else {
                apiResponse.statuscode = "2001";
                apiResponse.message = "No Tickets Available";
                apiResponse.result = results;
                res.status(200).send(apiResponse);
            }
        }
    });
});

router.get("/getTicketbyTicketID/:id", (req, res) => {
    let query1 = 'SELECT * FROM tickets WHERE ticket_id = ' + "'" + req.params.id + "'";
    connection.query(query1, function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            if (results.length > 0) {
                apiResponse.statuscode = "200";
                apiResponse.message = "Successfully Fetched the Available Tickets";
                apiResponse.result = results;
                res.status(200).send(apiResponse);
            } else {
                apiResponse.statuscode = "2001";
                apiResponse.message = "No Tickets Available";
                apiResponse.result = results;
                res.status(200).send(apiResponse);
            }
        }
    });
});

router.get("/getTicketsbyUserName/:id", (req, res) => {
    let query1 = 'SELECT * FROM tickets WHERE user_name = ' + "'" + req.params.id + "'";
    connection.query(query1, function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            if (results.length > 0) {
                apiResponse.statuscode = "200";
                apiResponse.message = "Successfully Fetched the Available Tickets";
                apiResponse.result = results;
                res.status(200).send(apiResponse);
            } else {
                apiResponse.statuscode = "2001";
                apiResponse.message = "No Tickets Available";
                apiResponse.result = results;
                res.status(200).send(apiResponse);
            }
        }
    });
});

router.get("/getTicketsbyAssigneeName/:id", (req, res) => {
    let query1 = 'SELECT * FROM tickets WHERE ticket_assignedto = ' + "'" + req.params.id + "'";
    connection.query(query1, function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            if (results.length > 0) {
                apiResponse.statuscode = "200";
                apiResponse.message = "Successfully Fetched the Available Tickets";
                apiResponse.result = results;
                res.status(200).send(apiResponse);
            } else {
                apiResponse.statuscode = "2001";
                apiResponse.message = "No Tickets Available";
                apiResponse.result = results;
                res.status(200).send(apiResponse);
            }
        }
    });
});

//POST API
router.post("/", (req, res) => {
    let user_name = req.body.user_name;
    let email = req.body.email;
    let ticket_id = req.body.ticket_id;
    let ticket_content = req.body.ticket_content;
    let ticket_area = req.body.ticket_area;
    let ticket_attachments = req.body.ticket_attachments;
    let comments = [];
    let ticket_createddate = req.body.ticket_createddate;
    let ticket_updateddate = req.body.ticket_updateddate;
    let ticket_status = req.body.ticket_status;
    let ticket_resolution = [];
    let ticket_assignedto = '';
    let ticket_createdby = req.body.ticket_createdby;

    var query1 = "INSERT INTO tickets ( user_name, email, ticket_id, ticket_content, ticket_area, ticket_attachments, comments, ticket_createddate, ticket_updateddate,ticket_status, ticket_resolution, ticket_assignedto, ticket_createdby ) VALUES  ( " + "'" + user_name + "'" + " , " + "'" + email + "'" + " , " + "'" + ticket_id + "'" + " , " + "'" + ticket_content + "'" + " , " + "'" + ticket_area + "'" + " , " + "'" + ticket_attachments + "'" + " , " + "'" + comments + "'" + " , " + "'" + ticket_createddate + "'" + " , " + "'" + ticket_updateddate + "'" + " , " + "'" + ticket_status + "'" + " , " + "'" + ticket_resolution + "'" + " , " + "'" + ticket_assignedto + "'" + " , " + "'" + ticket_createdby + "'" + " )";
    connection.query(query1, function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            apiResponse.statuscode = "200";
            apiResponse.message = "Ticket Created Successfully";
            apiResponse.result = {};
            res.status(200).send(apiResponse);
        }
    });
});

router.put("/:id", (req, res) => {
    let ticket_attachments = req.body.ticket_attachments;
    let comments = req.body.comments;
    let ticket_updateddate = req.body.ticket_updateddate;
    let ticket_status = req.body.ticket_status;
    let ticket_resolution = req.body.ticket_resolution;
    let ticket_assignedto = req.body.ticket_assignedto;
    var query1 = "UPDATE tickets SET ticket_attachments= " + "'" + ticket_attachments + "'" + " , comments=  " + "'" + comments + "'" + " , ticket_updateddate=  " + "'" + ticket_updateddate + "'" + " , ticket_status=  " + "'" + ticket_status + "'" + " , ticket_resolution=  " + "'" + ticket_resolution + "'" + " , ticket_assignedto=  " + "'" + ticket_assignedto + "'" + " WHERE ticket_id= " + "'" + req.params.id + "'";
    connection.query(query1, function (error, results, fields) {
        if (error) {
            apiResponse.message = "Error while connecting database"
            apiResponse.statuscode = "400";
            apiResponse.result = error;
            res.status(400).send(apiResponse);
        } else {
            apiResponse.statuscode = "200";
            apiResponse.message = "Ticket Updated Successfully";
            apiResponse.result = {};
            res.status(200).send(apiResponse);
        }
    });
});


module.exports = router;