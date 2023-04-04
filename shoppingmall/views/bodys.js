const tpl = require('./templates');

const indexBodyHTML = (products) =>{
  let template = `<h2>New arrival</h2>`
  template += tpl.tableHTML(products);
  return template;
}

module.exports = {
  indexBodyHTML,
}
