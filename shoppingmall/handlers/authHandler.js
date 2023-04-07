const pool = require('./_dbPool');
const path = require('path');

const getDate = (d) => `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
const getTime = (d) => `${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
const getDateTime = (d) => getDate(d) + ' ' + getTime(d);


const login = (req, res) => {
  if(req.session.user === undefined)
    res.sendFile(path.join(__dirname, '../public/login.html'));
  else
    res.redirect(`/myPage/${req.session.user.id}`);
}

const loginProcess = (req, res)=>{
  let sql = `SELECT id, pw, name from customers where id=? and pw=?`
  let values = [req.body.userID, req.body.userPW];
  pool.query(sql, values, (err, rows, field)=>{
    if(err) throw err;
    if(rows.length !== 0){
      req.session.user = {id : req.body.userID, name : rows[0].name};
      console.log(req.session.user);
      res.redirect('/');
    }
    else
      res.redirect('/errors/login');
  })
}

const join = (req, res) => res.sendFile(path.join(__dirname, '../public/join.html'));

const joinProcess = (req, res) => {
  let sql = `SELECT id FROM customers WHERE id='${req.body.userID}'`;
  pool.query(sql, (err, rows, field)=>{
    if(err) throw err;
    if(rows.length == 0){
      let sql = 'INSERT INTO customers (id, name, pw, joinDate, lastLogin, grade, loginFailCnt, accountSuspension) ';
          sql += 'VALUES(?, ?, ?, ?, ?, ?, ?, ?)';
      let values = [req.body.userID, req.body.userName, req.body.userPW,
                    getDateTime(new Date()), getDateTime(new Date()), '돌', 0, 0];
      pool.query(sql, values, (err, rows, field)=>{
        if(err) throw err;
        let template = `<h4>${req.body.userName}님이 등록되었습니다.</h4>`;
        template += '<a href="/auth/login">Login</a>';
        res.send(template);
      })
    }
    else
      res.redirect('/errors/join');
  })
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