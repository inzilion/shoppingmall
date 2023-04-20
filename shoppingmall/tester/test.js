obj = { '18': '', '19': '', qty18: '6', qty19: '7' };

objArr = Object.keys(obj).slice(0,2);
console.log(objArr);

objArr.map(num=>console.log(obj['qty'+ num]));

