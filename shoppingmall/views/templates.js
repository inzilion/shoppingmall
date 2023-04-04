const tableHTML = (items) => {
  let template ='';
  if(items == undefined)
    template += 'No item.'
  else {
    template += '<table><thead><tr>';
    const keys = Object.keys(items[0]);
    for(k of keys)  template += `<th>${k}</th>`;
    template +='</tr></thead><tbody>';
    for(item of items){
      template += '<tr>'
      keys.forEach(key =>{template += `<td>${item[key]}</td>`});
      template +='</tr>'
    }
    template += '</tbody></table>';
  }
  return template;
}

module.exports = {
  tableHTML,
}