const express = require("express");
const {
    getHomepage,
    getAboutpage,
    getSample,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomepage);
router.get("/about", getAboutpage);

router.get("/sample", getSample);

module.exports = router; // export default
