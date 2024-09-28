const express = require("express");
const router = express.Router();
const {contactForm, enquiryForm} = require("../controllers/contact-controller");

router.route("/contact").post(contactForm);
router.route("/enquiry").post(enquiryForm);

module.exports = router;