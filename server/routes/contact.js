const express = require("express");
const router = express.Router();
const {contactForm, enquiryForm, getInformation, getAllLink, deleteLinkById} = require("../controllers/contact-controller");
const fetchUser = require("../middlewares/fetchUser");
const fetchAdmin = require("../middlewares/fetchAdmin");

router.route("/contact").post(contactForm);
router.route("/enquiry").post(enquiryForm);
router.route("/information").get(getInformation);
router.get("/getAllLinks", getAllLink);
router.delete("/getAllLinks/delete/:id",fetchUser, fetchAdmin, deleteLinkById);

module.exports = router;