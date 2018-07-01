const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require("./routes/api");

const app = express();
const port = 3030;

// connects to the mongodb running on port number 27017
mongoose.connect("mongodb://localhost:27017/contact_detail");
// mongoose.Promise is deprecated and thus using the global promise
mongoose.Promise = global.Promise;

// returns the static files like html etc
app.use(express.static(__dirname + "/public"));

// parses the body of the request in json
app.use(bodyParser.json());

// defines the routes 
app.use('/api', routes);

// handles the error code
app.use((err, request, response, next) =>{
    console.log(err);
    response.status(400).send({
        error: err.message
    });
})

// listens to the port
app.listen(port, ()=>{
    console.log("Listening on port " + port);
});