const headerView = require('../views/headers')
const middleView = require('../views/middles')
const footerView = require('../views/footers')
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
    let header = headerView.indexHTML(req.session.user);
    let middle = middleView.myPageHTML(rows[0]);
    let footer = footerView.indexHTML();
    res.send(header + middle + footer);
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
        let header = headerView.indexHTML(req.session.user);
        let middle = '수정완료';
        let footer = footerView.indexHTML();
        res.send(header + middle + footer);
      })
    }
    else{
      let header = headerView.indexHTML(req.session.user);
      let middle = '비밀번호가 일치하지 않습니다.';
      let footer = footerView.indexHTML();
      res.send(header + middle + footer);
    }
  })  
}

module.exports = {
  index,
  userID,
  userEdit,
}