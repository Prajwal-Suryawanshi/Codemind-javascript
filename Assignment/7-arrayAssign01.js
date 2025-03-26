
let fruit_seasonal=["banana","orange","apple","mango","watermelon"];

console.log(" first element:  ",fruit_seasonal[0],"  ||   last element:  ",fruit_seasonal[fruit_seasonal.length-1]);

console.log(fruit_seasonal);
fruit_seasonal.splice(0,0,"papaya");
console.log(fruit_seasonal);

console.log(fruit_seasonal.splice(-2,1));

fruit_seasonal.push("Pineapple");
console.log(fruit_seasonal);

fruit_seasonal.splice(-2,0,"Dragon Fruit");
console.log(fruit_seasonal);

fruit_seasonal[2]="kiwi";
console.log(fruit_seasonal);

console.log(fruit_seasonal.slice(0,4));

