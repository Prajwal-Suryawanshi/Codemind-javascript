let professor={
    name:"Dr. abc",
    dob:"12/2/13",
    gender:"M",
    school:"maharashtra school",
    marriedStatus:true,
    degrees:{
        engineering:"csc",
        phd:"adv. computing",
        diploma:"dipl cse"
    },
    certificate:["Hacker rank participation","certificate in IFE course", "certificate in adv programming"],
}

console.log();

professor.totalExperience=14;

professor.name="Dr. xyz"
console.log(professor);

professor.certificate.splice(1,0,"Oracle Certified");
console.log(professor.certificate);

console.log(professor.certificate[professor.certificate.length-1]);

for (let key in professor) {
    console.log(professor.key);
    
}
