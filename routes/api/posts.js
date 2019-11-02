const express = require("express");
const router = express.Router();

// @router    GET api/posts
// @desc      Test route
// @access    Public (means requried validation token or not)
router.get("/", (req, res) => res.send("Posts route"));

module.exports = router;
