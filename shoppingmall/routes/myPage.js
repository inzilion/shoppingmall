const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{ res.send('사용자 정보 도메인')});
router.get('/:userID', (req, res)=>{res.send(`${req.params.userID}의 개인페이지`)});
router.get('/:userID/edit', (req, res)=>{ res.send(`${req.params.userID}의 수정페이지`)});
router.get('/:userID/cart', (req, res)=>{ res.send(`${req.params.userID}의 장바구니`)});

module.exports = router;