const headerView = require('../views/headers')
const middleView = require('../views/middles')
const footerView = require('../views/footers')
const pool = require('./_dbPool');

const userID = (req, res) => {
  let sql = 'select * from customers where id=?';
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
  //비번 확인 req.body.userPW
  //데이터베이스 갱신
}

module.exports = {
  userID,
  userEdit,
}