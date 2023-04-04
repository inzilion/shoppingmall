const express = require('express');
const authRouter = require('./routes/auth');
const myPageRouter = require('./routes/myPage');
const productsRouter = require('./routes/products');
const app = express();

app.get('/', (req, res)=>{ res.send('홈');});
app.use('/auth', authRouter);
app.use('/myPage', myPageRouter);
app.use('/products', productsRouter);
app.listen(3000);