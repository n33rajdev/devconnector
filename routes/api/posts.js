const express = require('express');
const router = express.Router();


// @route GET api/post
// @desc  Test route
// @access Public
router.get('', (req, rsp) => rsp.send('Post Route') );

module.exports = router;