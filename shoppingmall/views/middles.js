const tpl = require('./templates');

const indexHTML = (products) =>{
  let template = `<div style ="height:300px; background-color:#00ffE5;">
                  <h2>New arrival</h2>`
  template += tpl.tableHTML(products);
  template += '</div>'
  return template;
}

const myPageHTML = (user) =>{
  let template = `<div style ="height:300px; background-color:#ffE500;">
                  <form method="post" action="/myPage/${user.id}/edit">
                    <h3>${user.name}의 상세정보</h3>
                    아이디 : ${user.id}<br>
                    이름 : ${user.name}<br>
                    등급 : ${user.grade}<br>
                    비밀번호 : <input type="password" value='' name="userPW"><br>
                    전화 : <input type="text" value='${user.phone}' name="userPhone"><br>
                    이메일 : <input type="text" value='${user.email}' name="userEmail"><br>
                    마지막 접속일 : ${user.lastLogin}<br>
                    <input type="submit" value="Edit">
                  </from>`
  template += '</div>'
  return template;
}

module.exports = {
  indexHTML,
  myPageHTML,
}
