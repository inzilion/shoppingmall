
const login = (req, res)=>{
  let template = '<h3>아이디 또는 비밀번호가 일치하지 않습니다.</h3>'
  template += '<a href="/auth/login">Login</a>';
  res.send(template);
}

const join = (req, res)=>{
  let template = '<h3>이미 사용중인 아이디입니다.</h3>'
  template += '<a href="/auth/join">Join us</a>';
  res.send(template);
}

module.exports =  {
  login,
  join,
}
