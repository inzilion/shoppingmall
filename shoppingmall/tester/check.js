const express = require('express');
const pcList = require('./pcList');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
  //pcList.forEach(e => {
    console.log(res.redirect(`http://10.94.121.11:3000`));
  //});
});

app.listen(4000);