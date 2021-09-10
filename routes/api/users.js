const express = require('express');
const router = express.Router();


// @route POST api/user
// @desc  Register user
// @access Public
router.post('', (req, rsp) => {
    console.log(req.body);
    rsp.send('User Route');
});

module.exports = router;