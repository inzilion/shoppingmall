const tpl = require('./templates');

const indexBodyHTML = (products) =>{
  let template = `<div style ="height:300px; background-color:#00ffE5;">
                  <h2>New arrival</h2>`
  template += tpl.tableHTML(products);
  template += '</div>'
  return template;
}

module.exports = {
  indexBodyHTML,
}
