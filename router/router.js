const express = require("express");
const bodyParser = require("body-parser");

// import router 
const {getUser} = require("../controller/userController")
const router = express.Router();
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.route("/getUser").get(getUser)
module.exports = router;