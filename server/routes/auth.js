const express = require('express');
const {home, register, login, getUser} = require('../controllers/auth-controller');
const fetchUser = require("../middlewares/fetchUser");
const router = express.Router();

router.get("/", home);
router.post("/register", register);
router.post("/login", login);
router.get("/getUser", fetchUser, getUser);


module.exports = router;