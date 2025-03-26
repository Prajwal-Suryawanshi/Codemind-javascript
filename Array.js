let arr=[12,13,14,15,16,17,18,19];
console.log(arr);
console.log(arr.length);
console.log(arr[10]);
arr[2]=33;
console.log(arr);

console.log("========slice operator=========");
console.log(arr.slice(-3,-1));
console.log(arr.slice(-5));
console.log(arr);
console.log("========splice operator==============");

console.log(arr.splice(2,2));//it means from position 2nd and two element delete from array 
console.log(arr);

arr.splice(2,0,99,42);
//it means from 2nd position 0 element it refer dont delete any element add next element 99,42
console.log(arr);

