const indexHeaderHTML = (user) =>{
  let template = `<div style="font-size:30px;display:inline-block;width:300px;"><b>Da Paradise</b></div>`
  if (user == undefined)  
    template += `<div style="display:inline-block;"><a href="/auth/login">Login</a></div>`;
  else                      
    template += `<div style="display:inline-block;"><a href="/myPage/${user.id}">${user.name}</a>
                  <a href="/auth/logout">Logout</a></div>`;
  return template + '<br>';
}

module.exports = {
  indexHeaderHTML,
}
