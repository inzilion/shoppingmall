const express = require('express');
const router = express.Router();
const myPageHandler = require('../handlers/myPageHandler');

router.use(myPageHandler.index);
router.get('/:userID', myPageHandler.userID);
router.post('/:userID/edit', myPageHandler.userEdit);
router.get('/:userID/cart', (req, res)=>{ res.send(`${req.session.user.name}의 장바구니`)});

module.exports = router;