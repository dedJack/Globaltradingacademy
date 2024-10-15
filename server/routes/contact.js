const express = require("express");
const router = express.Router();
const {contactForm, enquiryForm, getInformation, postInfo} = require("../controllers/contact-controller");

router.route("/contact").post(contactForm);
router.route("/enquiry").post(enquiryForm);
router.route("/information").get(getInformation);

module.exports = router;