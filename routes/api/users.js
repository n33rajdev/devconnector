const express = require('express');
const router = express.Router();


// @route POST api/user
// @desc  Test route
// @access Public
router.post('', (req, rsp) => rsp.send('User Route') );

module.exports = router;