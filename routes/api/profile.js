const express = require("express");
const router = express.Router();

// @router    GET api/profile
// @desc      Test route
// @access    Public (means requried validation token or not)
router.get("/", (req, res) => res.send("Profile route"));

module.exports = router;
