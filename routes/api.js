const express = require('express');
const router = express.Router();
const Contacts = require('../model/contacts');

// get request : view
router.get("/contacts", (request, response, next) => {
    // fetches all the contacts in the DB
    // then returns it in the response
    Contacts.find({}).then(function (contact) {
        console.log(contact);
        response.send(contact);
    })
});

// post request : insert
router.post("/contacts", (request, response, next) => {
    console.log(request.body);
    // Creates new entry in the DB. 
    // and then returns the inserted contact in the response
    // if err occurs then the control is passes to next middleware
    Contacts.create(request.body).then((contact) => {
        response.send(contact);
    }).catch(next);
});

// put request : update
router.put("/contacts/:number", (request, response, next) => {
    // get the id of the object to be updated
    var id = request.params.number;

    // updates the object by the id 
    // then returns the new updated contact in the response
    // if err occures then the control is passed to the next middleware
    Contacts.findByIdAndUpdate({ _id: id }, request.body).then(() => {
        Contacts.findOne({
            _id: id
        }).then(function (contact) {
            response.send(contact);
        })
    }).catch(next);
});

// delete request : delete
router.delete("/contacts/:number", (request, response, next) => {
    // get the id of the object to be updated
    var id = request.params.number;

    // removes the object by the id
    // then returns the deleted contact in the response
    // if err occurs then the control is passed to the next middleware
    Contacts.findByIdAndRemove({
        _id: id
    }).then(function (contact) {
        response.send(contact);
    }).catch(next);
});

module.exports = router;