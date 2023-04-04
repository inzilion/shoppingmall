const express = require('express');
const router = express.Router();
const indexHandler = require('../handler/indexHandler');

router.get('/', indexHandler.index);

module.exports = router;