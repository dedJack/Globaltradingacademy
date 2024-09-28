const User = require('../models/User');

const home = async (req, res) => {
    console.log("i am home");
}

//Route 1: for register by using post.
const register = async (req, res) => {
    try {
        console.log("hiii")
        // console.log(req.body);
        const { name, email, phone, password } = req.body;

        
        //checking if user already exist..
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "Email already exist." });
        }

        //new user created...
        const newUser = await User.create({
            name,
            email,
            phone,
            password
        });
        return res.status(201).json({
            msg: "User register successfull",
            token: await newUser.generateToken(),
            userId: newUser._id.toString()
        })
    } catch (error) {
         res.status(500).json({ msg: "server error during Registration." });
    }
}

//Route 2: for login by using post.
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        //find the user if exists.
        const userExist = await User.findOne({ email });
        // console.log(userExist);

        //return status 400 if user doesnot exists.
        if (!userExist) {
            return res.status(400).json({ msg: "User credential invalid" })
        }

        //comparing password.
        const passCompare = await userExist.comparePassword(password);

        if (passCompare) {
            res.status(200).json({
                msg: "Login successfull",
                token: await userExist.generateToken(),
                userId: userExist._id
            })
        } else {
            return res.status(401).json({ msg: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
    }
}

//Route 3: Getting user details from the server.
const getUser = async (req, res) => {
    try {
        // Fetch the userId from the middleware (fetchUser)
        const userEmail = req.user.email;

        // Fetch the user and exclude the password field
        const user = await User.findOne({email: userEmail}).select("-password");

        // If user not found (though unlikely since it's fetched through a verified token)
        if (!user) {
            return res.status(404).json({ msg: "User not found". user });
        }

        // Return the user object excluding the password
        return res.status(200).json({ msg: user });
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};


module.exports = { home, register, login, getUser };