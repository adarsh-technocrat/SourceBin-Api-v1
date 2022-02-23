const express = require("express");
const { createPostBin } = require("../controllers/sourceBinController");

const router = express.Router();

router.route("/bin").post(createPostBin);

module.exports = router;
