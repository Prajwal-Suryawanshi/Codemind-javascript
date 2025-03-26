
let mapFun={
    name:"Prajwal",
    surname:"Suryawanshi",
    address:"Kolhapur"
}

console.log(mapFun);

console.log("\n================= update value ========================");
mapFun.address="pune";
console.log(mapFun.address);

console.log("\n================= deleting properties ==================");
delete mapFun.surname;
console.log(mapFun);

console.log("\n================= adding new key in map =================");
mapFun.college="seti";
console.log(mapFun);


console.log("\n================= Nested Map =================");
let student={
    name:"Prajwal",
    surname:"suryawanshi",
    age: 22,
    college:"seti, Panhala",
    address:{
        tal:"Karveer",
        dist:"Kolhapur",
        area:"shukrawar peth"
    }
}
console.log("List of all key values of address \n",student.address);
console.log(student.address.tal,"   ",student.address.dist);


let studentFun={
    name:"Prajwal",
    surname:"suryawanshi",
    age: 22,
    college:"seti, Panhala",
    address: function(){
        console.log(this.name," address is Kolhapur");
    }
}

console.log("\n================ function =====================");
console.log(studentFun.address());

