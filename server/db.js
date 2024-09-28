const mongoose = require('mongoose');

//mongoDB connection
const URI = process.env.MONGODB_URI;

const connectDb = async() =>{
    try {
        await mongoose.connect(URI);
        // console.log(URI);
        console.log("Connected to database Successfully");
    } catch (error) {
        console.log("Database connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;