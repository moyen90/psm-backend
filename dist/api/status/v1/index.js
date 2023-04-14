"use strict";
const router2 = require('express').Router();
router2.get('/status', (req, res) => {
    res.status(200).json({
        status: 'ok'
    });
});
module.exports = router2;
