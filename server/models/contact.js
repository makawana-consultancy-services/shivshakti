const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    phone_number: {
        type: Number,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    },
})

const Contact  = mongoose.model('Contact',contactSchema)

module.exports = Contact;