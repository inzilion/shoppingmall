const express = require('express');
const session = require('express-session');
const authRouter = require('./routes/auth');
const myPageRouter = require('./routes/myPage');
const productsRouter = require('./routes/products');
const sessionConfig = require('./config/session');
const app = express();

app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{ 
  console.log(req.session);
  res.send('홈');
});
app.use('/auth', authRouter);
app.use('/myPage', myPageRouter);
app.use('/products', productsRouter);
app.listen(3000);