const express = require("express");
const router = express.Router();
const fetchadmin = require("../middlewares/fetchAdmin");
const { getAllUsers, getContact, getAllUserEnquiry, postInfo, getUserById, deleteUserById, updateUserById, deleteContactById, deleteEnquiryById, getEnquiryById} = require("../controllers/admin-controller");
const fetchUser = require("../middlewares/fetchUser");

router.get("/getAllUsers", fetchUser, fetchadmin, getAllUsers);
router.get("/getContact", fetchUser, fetchadmin, getContact);
router.get("/getAllUserEnquiry", fetchUser, fetchadmin, getAllUserEnquiry);
router.post("/postInfo", fetchUser, fetchadmin, postInfo);
router.get("/users/:id", fetchUser, fetchadmin, getUserById);
router.patch("/users/update/:id", fetchUser, fetchadmin, updateUserById);
router.get("/enquiry/view/:id", fetchUser, fetchadmin, getEnquiryById);
router.delete("/users/delete/:id", fetchUser, fetchadmin, deleteUserById)
router.delete("/contacts/delete/:id", fetchUser, fetchadmin, deleteContactById);
router.delete("/enquiry/delete/:id", fetchUser, fetchadmin, deleteEnquiryById);


module.exports = router;