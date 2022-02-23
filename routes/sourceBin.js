const express = require("express");
const {
  createPostBin,
  initialRoute,
} = require("../controllers/sourceBinController");

const router = express.Router();

router.route("/").get(initialRoute);
router.route("/bin").post(createPostBin);

module.exports = router;
