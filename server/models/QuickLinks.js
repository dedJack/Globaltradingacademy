const { mongoose, Schema } = require("mongoose");

const linkSchema = Schema({
    linkName: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
}) 

const QuickLinks = new mongoose.model("QuickLink", linkSchema);
module.exports = QuickLinks;