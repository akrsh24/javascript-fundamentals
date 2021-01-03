//push (at the end)
let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);

console.log("Pushing->", arr);

//push (at the start)
console.log("Unshifting Length->", arr.unshift(6));

//Pop (pop from end)
console.log("Popping->", arr.pop());

//Pop (pop from front)
console.log("Shifting->", arr.shift());

//slice
console.log("Slicing->",arr.slice(2,4));

//slice to return whole new copy
console.log("Slicing whole new copy->",arr.slice(0));

//splice
//deleting elements
arr.splice(1,2);
console.log("Splice to delete->",arr);

//adding elements
arr.splice(1,0,7,8,9,10);
console.log("Splice to add->",arr);

//to return array 
arr.splice(0,0);
console.log("Splice to return array->",arr);

//map
arr.map(a=>console.log(a));

//reduce
console.log("ReducedSum->",arr.reduce((a,b)=>a+b));

//filter
console.log("Filtered->",arr.filter(a=>a>5));

//toString
console.log("ToString->",arr.toString());

//concat
console.log("A".concat("BC"));

//delete
delete(arr[2]);
console.log(arr);

