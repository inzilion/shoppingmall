const path = require('path');

const login = (req, res)=>{ 
  res.sendFile(path.join(__dirname, '../public/login.html'))
}

const loginProcess = (req, res)=>{
  console.log(`${req.body.userID} : ${req.body.userPW}`);
  console.log('데이터베이스에서 검증을 구현이 생략');
  req.session.user = {id : req.body.userID, pw : req.body.userPW};
  res.redirect('/');
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