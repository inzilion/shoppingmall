const pool = require('./_dbPool');
const headerView = require('../views/headers')
const middleView = require('../views/middles')
const footerView = require('../views/footers');

const list = (req, res)=>{
  let sql = `SELECT idproducts, name, price, registrationDate, seller From products`;

  pool.query(sql, (err, rows, field)=>{
    let header = headerView.indexHTML(req.session.user);
    let middle = middleView.indexHTML(rows);
    let footer = footerView.indexHTML();  
    res.send(header + middle + footer);
  })  
}

module.exports =  {
  list,
}
