const express = require('express');
const router = express.Router();
const errorsHandler = require('../handlers/errorsHandler');

router.get('/', (req, res)=>{ res.send('에러처리 도메인')});
router.get('/login', errorsHandler.login);
router.get('/join', errorsHandler.join);

module.exports = router;