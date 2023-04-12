const login = (req, res)=>{
  let msg = '아이디 또는 비밀번호가 일치하지 않습니다.';
  res.render('message.html', {message : msg});
}

const join = (req, res)=>{
  let msg = '이미 사용중인 아이디입니다.';
  res.render('message.html', {message : msg});
}

module.exports =  {
  login,
  join,
}
