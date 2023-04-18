items = [1, 3, 5];

//위에 배열에 각 요소의 2배값 중에서 5 이상되는 값들의 합을 구하시오.

console.log(items.map(i=>i*2).filter(i=>i>=5).reduce((s,i)=>s+=i));

// newItems = items.map(item => item + 1);
// console.log(items, newItems);

// newItems = items.filter(item => item < 5);
// console.log(items, newItems);

// newItems = items.reduce((a, b) => a += b );
// console.log(items, newItems);



