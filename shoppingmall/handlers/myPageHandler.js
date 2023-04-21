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
  pool.query(`SELECT address FROM customers WHERE id='${req.session.user.id}'`, (err, rows, field)=>{
    if(err) throw err;
    const myAddress = rows[0].address;

    let sql =  `SELECT idcarts, idproducts, name, price, quantity FROM carts A LEFT JOIN products B ON A.productID = B.idproducts WHERE idcarts in (?)
          UNION SELECT idcarts, idproducts, name, price, quantity FROM carts A RIGHT JOIN products B ON A.productID = B.idproducts WHERE idcarts in (?)`

    let cartIds = Object.keys(req.body);
    cartIds = cartIds.slice(0, cartIds.length/2);
    let values = [cartIds, cartIds];
    pool.query(sql, values, (err, rows, field)=>{
      if (err) throw err;
      rows.map(row =>row.cartQuantity = req.body['qty'+ row.idcarts]);
      req.session.user.order = rows;
      res.render('order.html', {user : req.session.user,
        products : rows, 
        address : myAddress ,
        totalPrice : rows.reduce((sum, row)=>{return sum+=(row.price * row.cartQuantity)}, 0)
      })
    })
  })
}

const cartPayment = (req, res)=>{
  req.session.user.order.map(row =>{
    pool.query(`DELETE FROM carts WHERE idcarts=${row.idcarts}`, (err, field)=>{
      if(err) throw err;
      let sql = `UPDATE products SET quantity=${row.quantity-row.cartQuantity} WHERE idproducts=${row.idproducts}`
      pool.query(sql, (err, field)=>{
        if(err) throw err;
      })
    })
  })
  res.render('message.html', {message : '결재가 완료되었습니다.', user : req.session.user});
}



module.exports = {
  index,
  userID,
  userEdit,
  cart,
  cartProcess,
  cartDelete,
  cartOrder,
  cartPayment, 
}