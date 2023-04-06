const indexHeaderHTML = (user) =>{
  let template = `<h1>Da Paradise</h1>`
  if (user == undefined)  
    template += `<a href="/auth/login">로그인</a>해주세요.`;
  else                      
    template += `<a href="/myPage/${user.id}">${user.name}</a>님 반갑고 
                  <a href="/auth/logout">logout</a>`;
  return template + '<br>';
}

module.exports = {
  indexHeaderHTML,
}
