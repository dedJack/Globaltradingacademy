const { mongoose, Schema } = require("mongoose");

const infoSchema = Schema({
    message: {
        type: String,
        required: true
    }
})

const Information = new mongoose.model("Information", infoSchema);
module.exports = Information;