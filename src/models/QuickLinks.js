import mongoose from "mongoose";

const linkSchema =new mongoose.Schema({
    linkName: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
}) 

const QuickLinks = mongoose.models.QuickLink ||  mongoose.model("QuickLink", linkSchema);
export default QuickLinks;