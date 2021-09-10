const express = require('express');
const router = express.Router();


// @route GET api/profile
// @desc  Test route
// @access Public
router.get('', (req, rsp) => rsp.send('Profile Route') );

module.exports = router;