const jwt = require("jsonwebtoken");
const User = require("../models/User");

const fetchUser = async(req, res, next)=>{

    const token = req.header("auth-token");
    // console.log(token);

    if(!token){
        return res.status(400).json({msg: "No token found "});
    }

    try {
    const isVerified = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(isVerified)
    const userData = await User.findOne({email: isVerified.email});
    // console.log(userData);
    if (!userData) {
        return res.status(404).json({ msg: "User not found" });
    }

    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    next();
    } catch (error) {
        console.log("UnAuthorized token/ Invalid token.", error);
    }
    
}

module.exports= fetchUser;