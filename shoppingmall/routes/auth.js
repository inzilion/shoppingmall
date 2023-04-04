const express = require('express');
const router = express.Router();
const authHandler = require('../handler/authHandler');

router.get('/', (req, res)=>{ res.send('사용자인증 도메인')});
router.get('/login', authHandler.login);
router.post('/loginProcess', authHandler.loginProcess);
router.get('/logout', authHandler.logout);
router.get('/join', authHandler.join);
router.post('/joinProcess', authHandler.joinProcess);
router.get('/withdrawal', authHandler.withdrawal);

module.exports = router;