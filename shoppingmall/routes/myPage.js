const express = require('express');
const router = express.Router();
const myPageHandler = require('../handlers/myPageHandler');

router.use(myPageHandler.index);
router.get('/:userID', myPageHandler.userID);
router.post('/:userID/edit', myPageHandler.userEdit);
router.get('/:userID/cart', myPageHandler.cart);

module.exports = router;