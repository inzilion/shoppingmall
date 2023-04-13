const pool = require('./_dbPool');
const list = (req, res)=>{
  let sql = `SELECT idproducts, name, price, DATE_FORMAT(registrationDate, '%Y-%m-%d') AS date, seller From products`;
  pool.query(sql, (err, rows, field)=>{
    res.render('productsList.html', { products: rows});
  })  
}

module.exports =  {
  list,
}
