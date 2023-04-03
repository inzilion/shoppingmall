const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{ res.send('사용자인증 도메인')});
router.get('/login', (req, res)=>{ res.send('로그인')});
router.get('/logout', (req, res)=>{ res.send('로그아웃')});
router.get('/join', (req, res)=>{ res.send('회원가입')});
router.get('/withdrawal', (req, res)=>{ res.send('회원탈퇴')});

module.exports = router;