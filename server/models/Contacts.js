const {Schema, model, default: mongoose} = require("mongoose");

const contactSchema = Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    }
})

const Contact = new mongoose.model("Contact", contactSchema);

module.exports = Contact;