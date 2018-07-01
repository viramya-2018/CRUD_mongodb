const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name:{
        type: String
        // required: [true, 'Name field is required']
    },
    number:{
        type: String
        // required: [true, "Number is required"]
    },
    gender:{
        type: String,
        default: "Male"
    },
    bloodGroup:{
        type: String
    }
})

const Contacts = mongoose.model('contact', contactSchema);
module.exports = Contacts;