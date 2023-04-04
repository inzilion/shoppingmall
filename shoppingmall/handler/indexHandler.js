const header = require('../views/header')
const body = require('../views/body')
const footer = require('../views/footer')

const index = (req, res)=>{
  let userID = undefined;
  if(req.session.user != undefined)
    userID = req.session.user.id;
  res.send(header.indexHeader(userID) 
          + body.indexBody()
          + footer.indexFooter());
}

module.exports =  {
  index,
}