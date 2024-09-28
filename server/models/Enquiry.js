const {Schema, default: mongoose} = require("mongoose");

const enquirySchema = Schema({
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
    },
    enquiry:{
        type: String,
        required: true
    }
})

const Enquiry = new mongoose.model("Enquiries", enquirySchema);

module.exports = Enquiry;