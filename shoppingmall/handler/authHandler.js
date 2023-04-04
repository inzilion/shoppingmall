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

const joinProcess = (req, res) => {
  console.log("회원가입하는 과정");
  res.redirect('/auth/login');
}

const join = (req, res)=>{ 
  res.sendFile(path.join(__dirname, '../public/join.html'));
}

const logout = (req, res)=>{ res.send('로그아웃'); }

const withdrawal = (req, res)=>{ res.send('회원탈퇴'); }

module.exports =  {
  login,
  loginProcess,
  joinProcess,
  join,
  logout,
  withdrawal,
}