const mysql = require('mysql2');
const mysqlConfig = require('../config/mysql');
const pool = mysql.createPool(mysqlConfig);
const path = require('path');

const login = (req, res)=>{ 
  res.sendFile(path.join(__dirname, '../public/login.html'))
}

const loginProcess = (req, res)=>{
  let sql = `SELECT id, pw, name from customers where id=? and pw=?`
  let values = [req.body.userID, req.body.userPW];
  pool.query(sql, values, (err, rows, field)=>{
    if(err) throw err;
    if(rows.length !== 0)
      req.session.user = {id : req.body.userID, name : rows[0].name};
    console.log(req.session.user);
    res.redirect('/');
  })
}

const join = (req, res)=>{ 
  res.sendFile(path.join(__dirname, '../public/join.html'));
}

const joinProcess = (req, res) => {
  console.log("아이디 중복체크");
  console.log("데이터베이스에 회원 정보입력");
  res.redirect('/auth/login');
}

const logout = (req, res)=>{ 
  req.session.destroy();
  res.redirect('/');
}

const withdrawal = (req, res)=>{ res.send('회원탈퇴'); }

module.exports =  {
  login,
  loginProcess,
  joinProcess,
  join,
  logout,
  withdrawal,
}