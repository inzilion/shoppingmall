const headerView = require('../views/headers')
const middleView = require('../views/middles')
const footerView = require('../views/footers')

const index = (req, res)=>{
  let header = headerView.indexHTML(req.session.user);
  let middle = middleView.indexHTML();
  let footer = footerView.indexHTML();  
  
  res.send(header + middle + footer);
}

module.exports =  {
  index,
}
