const fetchUser = require("./fetchUser");

const fetchadmin = async(req, res, next)=>{
    try {
        const adminRole = req.user.isAdmin;
        // console.log(req.user);
        // res.status(200).json(req.user);
        if(!adminRole){
            res.status(401).json({message:"Admin unauthorized"});
        }
        next();
    } catch (error) {
        res.status(401).json({error: "cannot fetch admin error "});
    }
}

module.exports = fetchadmin;