const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator/check');

// @route POST api/user
// @desc  Register user
// @access Public
router.post(
  '',
  [
    body('name', 'name is required').not().isEmpty(),
    body('email', 'provide email').isEmail(),
    body('password', 'Provide password').isLength({ min: 6 }),
  ],
  (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('User Route');
  }
);

module.exports = router;
