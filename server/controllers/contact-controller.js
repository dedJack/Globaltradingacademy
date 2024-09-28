const Contact = require("../models/Contacts");
const Enquiry = require("../models/Enquiry");

// Route 1: Route to post contact form.

const contactForm = async (req, res) => {
    try {
        // console.log(req.body);
        const newContact = await Contact.create(req.body);
        return res.status(201).json({ message: "Contact saved successfully", newContact });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server error" });
    }
}

const enquiryForm = async(req, res)=>{
    try{
        console.log(req.body);
        const newEnquiry = await Enquiry.create(req.body);
        return res.status(201).json({message:"Enquiry saved successfully"});
    }catch(error){
        return res.status(500).json({message:"Internal server error"});
    }
}

module.exports = { contactForm, enquiryForm };