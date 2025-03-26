let arr=[11,12,13,14,15,16,17,18,19,20];


console.log("===================array traversing using for of loop=============================");

for (const element of arr) {
    console.log(element);
    
}
console.log("=====================Reverse traveling array=======================");

for(var index=arr.length-1;index>=0;index--){
    console.log(arr[index]);
    
}

console.log("=================Remove duplicate element==============");
let Array=[1,2,3,4,1,2];
console.log(Array);

let a=[...new Set(Array)];
console.log(a);


