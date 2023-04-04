const indexHeaderHTML = (userID) =>{
  let template = `<h2>DaPara</h2>`
  if (userID == undefined)
    template += `<a href="/auth/login">로그인</a>해주세요.`;
  else 
    template += `${userID}님 반갑고 <a href="/auth/logout">logout</a>`;
  return template + '<br>';
}

module.exports = {
  indexHeaderHTML,
}
