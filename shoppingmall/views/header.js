const indexHeader = (userID) =>{
  let template = `<h2>여기는 만물상입니다.</h2>`
  if (userID == undefined)
    template += `<a href="/auth/login">로그인</a>해주세요.`;
  else 
    template += `${userID}님 반갑고 <a href="/auth/logout">logout</a>`;
  return template;
}

module.exports = {
  indexHeader,
}
