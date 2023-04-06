const header = require('../views/headers')
const body = require('../views/middles')
const footer = require('../views/footers')

const index = (req, res)=>{
  let userName = undefined;
  if(req.session.user != undefined)
    userName = req.session.user.name;
  res.send(header.indexHeaderHTML(userName) +
          body.indexBodyHTML() +
          footer.indexFooterHTML());
}

module.exports =  {
  index,
}
