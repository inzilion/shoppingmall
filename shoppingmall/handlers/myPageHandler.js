const pool = require('./_dbPool');

const index = (req, res, next) => {
  if(req.session.user === undefined)
    res.redirect('/');
  else
    next();
}

const userID = (req, res) => {
  let sql = 'SELECT * FROM customers WHERE id=?';
  let values = [req.session.user.id]
  pool.query(sql, values, (err, rows, field)=>{
    if (err) throw err;
    res.render('myPage.html', { user : rows[0] } );
  })
}

const userEdit = (req, res) => {
  let sql = `SELECT pw FROM customers WHERE id = ?`;
  let values = [req.session.user.id];
  pool.query(sql, values, (err, rows, field)=>{
    if(err) throw err;
    if(req.body.userPW === rows[0].pw){
      let sql = `UPDATE customers SET phone=?, email=? WHERE id=?`;
      let values = [req.body.userPhone, req.body.userEmail, req.session.user.id];
      pool.query(sql, values, (err, field)=>{
        if(err) throw err;
        let msg = '수정완료';
        res.render('message.html', {message : msg});
      })
    } else {
      let msg = '비밀번호가 일치하지 않습니다.';
      res.render('message.html', {message : msg});
    }
  })  
}

const cart = (req, res)=>{
  let sql =  `SELECT * FROM carts A LEFT JOIN products B ON A.productID = B.idproducts 
        UNION SELECT * FROM carts A RIGHT JOIN products B ON A.productID = B.idproducts 
        WHERE A.customerID=?`;
  let values = [req.session.user.id];
  pool.query(sql, values, (err, rows, field)=>{
    if(err) throw err;
    res.render('cart.html', {user : req.session.user, products: rows} )
  }) 
}

const cartProcess = (req, res)=>{
  let sql = "INSERT INTO carts (customerID, productID, cartsQuantity) value (?, ?, ?)";
  let values = [req.session.user.id, req.body.productID, req.body.quantity];
  pool.query(sql, values, (err, field)=>{
    if(err) throw err;
    res.render('message.html', {message:"장바구니에 추가되었습니다.", user : req.session.user});
  })
}

const cartDelete = (req, res)=>{
  let sql = "DELETE FROM carts WHERE idcarts in (?)";
  let values = Object.keys(req.body);
  values = [values.slice(0, values.length/2)];
  pool.query(sql, values, (err, field)=>{
    if(err) throw err;
    res.redirect(`/myPage/${req.session.user.id}/cart`);
  })
}

const cartOrder = (req, res)=>{
  console.log(req.body);
  
  res.render('order.html', {user : req.body.user,
                            products : [{},{},{}], 
                            address : "가짜주소" ,
                            totalPrice : "0원입니다." })
}


module.exports = {
  index,
  userID,
  userEdit,
  cart,
  cartProcess,
  cartDelete,
  cartOrder, 
}