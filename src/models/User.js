import  mongoose from "mongoose";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";

//Define the USer Schema
const UserSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})



// secure the password with bycrpt.js
UserSchema.pre('save', async function (next) {

    const user = this;
    // console.log("this is user:",user)

    if (!user.isModified("password")) {
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashRound = await bcrypt.hash(user.password, saltRound);
        user.password = hashRound;
    } catch (error) {
        next();
    }
});

//verifying with jsonwebtoken.
UserSchema.methods.generateToken = async function () {
    try {
        return JWT.sign({
            userId: this._id,
            email: this.email,
            isAdmin: this.isAdmin
        },
            process.env.JWT_SECRET,
            { expiresIn: '10d' }
        );
    } catch (error) {
        console.log(error);
        throw new Error('Token generation failed');
    }
}

//compare the password for before User login.
UserSchema.methods.comparePassword = async function (password) {
    try {
       return bcrypt.compare(password, this.password);
    } catch (error) {
        console.log(error);
    }
} 


//define the collection name
const User = mongoose.models.User || mongoose.model("User", UserSchema);
 export default User;
