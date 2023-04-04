const header = require('../views/headers')
const body = require('../views/bodys')
const footer = require('../views/footers')

const index = (req, res)=>{
  let userID = undefined;
  if(req.session.user != undefined)
    userID = req.session.user.id;
  res.send(header.indexHeaderHTML(userID) +
          body.indexBodyHTML() +
          footer.indexFooterHTML());
}

module.exports =  {
  index,
}
