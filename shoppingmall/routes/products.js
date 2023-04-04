const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{ res.send('상품정보 도메인')});
router.get('/list', (req, res)=>{ res.send('전체상품 리스트')});
router.get('/category/:productClass/list', (req, res)=>{res.send(`카테고리가 ${req.params.productClass} 상품 리스트`)});
router.get('/event', (req, res)=>{ res.send('행사상품 리스트')});
router.get('/registration', (req, res)=>{ res.send(`상품등록`)});
router.get('/:productNum', (req, res)=>{ res.send(`${req.params.productNum}의 상세정보`)});
router.get('/:productNum/modification', (req, res)=>{ res.send(`${req.params.productNum}의 수정`)});
router.get('/:productNum/delete', (req, res)=>{ res.send(`${req.params.productNum}의 삭제`)});

module.exports = router;


