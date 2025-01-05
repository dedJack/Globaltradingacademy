const User = require("../models/User");
const Contacts = require("../models/Contacts")
const Enquiry = require("../models/Enquiry");
const Information = require("../models/Information");
const QuickLinks = require("../models/QuickLinks");

//Route 1: fetch all users by using GET.
const getAllUsers = async (req, res) => {
    try {
        const user = await User.find({}, { password: 0 });
        if (!user || user.length === 0) {
            return res.status(404).json({ error: "Users not found..." });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching users:", error); // Log error for debugging
        return res.status(500).json({ msg: "Internal server error" });
    }
}

//Route 2: fetch all contacts by using GET.
const getContact = async (req, res) => {
    try {
        const contacts = await Contacts.find();
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ error: "Contacts not found..." });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }
}

//Route 3: fetch all enquiries by using GET.
const getAllUserEnquiry = async (req, res) => {
    try {
        const enquiry = await Enquiry.find();
        if (!enquiry || enquiry.length === 0) {
            return res.status(404).json({ error: "Enquiries Not Found" });
        }
        return res.status(200).json(enquiry);
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }
}

//Route 4: Send imp message to the database by using POST.
const postInfo = async (req, res) => {
    try {
        const { message } = req.body;
        const impMessage = new Information({ message });
        const savedMessage = await impMessage.save();
        return res.status(201).json({ message: "Information saved successfully", savedMessage });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

//Route 5: get Single user for updating.
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const singleUser = await User.findOne({ _id: id }, { password: 0 });
        return res.status(200).json(singleUser);
    } catch (error) {
        return res.status(500).json({ message: "Didn't get the single user." });
    }
}

//Route 6: get Single enquiry for view by using GET.
const getEnquiryById = async (req, res) => {
    try {
        const enquiryId = req.params.id;
        const singleEnquiry = await Enquiry.findOne({ _id: enquiryId });

        if (!singleEnquiry) {
            return res.status(200).json({ message: "Enquiry not found." });
        }
        return res.status(200).json(singleEnquiry);
    } catch (error) {
        return res.status(500).json({ message: "Didn't get the single enquiry." });
    }
}

//Route 7: Update single user by using PATCH.
const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const updateUser = await User.updateOne(
            { _id: id },
            { $set: updatedData }
        );

        return res.status(200).json(updateUser);
    } catch (error) {
        return res.status(500).json({ message: "Didn't update teh user." });
    }
}

//Route 8: Delete single user by using DELETE.
const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        return res.status(200).json({ message: "User deleted successfully." })
    } catch (error) {
        return res.status(500).json({ message: "error deleting user." });
    }
}

//Route 9: Delete contact by id by using DELETE.
const deleteContactById = async (req, res) => {
    try {
        const contactId = req.params.id;
        // Check if the contact exists
        const contact = await Contacts.findById(contactId);
        if (!contact) {
            return res.status(404).json({ message: "Contact not found." });
        }
        await Contacts.deleteOne({ _id: contactId });
        return res.status(200).json({ message: "Contact deleted successfully." });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting contact." });
    }
}

//Route 10: Delete enquiry by id by using DELETE.
const deleteEnquiryById = async (req, res) => {
    try {
        const enquiryId = req.params.id;
        const enquiry = await Enquiry.findById(enquiryId);
        if (!enquiry) {
            return res.status(404).json({ message: "Enquiry not found." });
        }

        await Enquiry.deleteOne({ _id: enquiryId });
        return res.status(200).json({ message: "Enquiry deleted successfully." });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting enquiry." });
    }
}

//Route 11: Send important links by using POST.
const postLink = async (req, res) => {
    try {
        const { linkName, link } = req.body;

        const existlink = await QuickLinks.findOne({ link });
        if (existlink) {
            return res.status(400).json({ message: "Link already exist." });
        }

        await QuickLinks.create({ linkName, link });
        return res.status(200).json({ message: "Link saved successfully." });
    } catch (error) {
        // console.log("error saving link", error);
        return res.status(500).json({message: "Error saving link." });
    }
}




module.exports = { getAllUsers, getContact, getAllUserEnquiry, postInfo, getUserById, deleteUserById, updateUserById, deleteContactById, deleteEnquiryById, getEnquiryById, postLink };