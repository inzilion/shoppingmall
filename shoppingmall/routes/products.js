const express = require('express');
const router = express.Router();
const productsHandler = require('../handlers/productsHandler.js');

router.get('/', (req, res)=>{ res.send('상품정보 도메인')});
router.get('/list', productsHandler.list);
router.get('/category/:productClass', productsHandler.productClass);
router.get('/event', (req, res)=>{ res.send('행사상품 리스트')});
router.get('/registration', productsHandler.registration);
router.post('/registrationProcess', productsHandler.registrationProcess);
router.get('/:productNum', productsHandler.productNum);
router.get('/:productNum/modification', (req, res)=>{ res.send(`${req.params.productNum}의 수정`)});
router.get('/:productNum/delete', (req, res)=>{ res.send(`${req.params.productNum}의 삭제`)});

module.exports = router;


