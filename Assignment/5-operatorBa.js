
var checking=function(params,params2) {
       
    return  params> params2? params:params2;
    
}

var res=checking(10,-10);
console.log(" max number in 10 and -10 is " ,res);

res=checking(800,899)
console.log("max number between 800 and 899 is",res);


var isEvenOdd= function(params) {
    var val1="even";
    var val2="odd";
    return  params%2==0 ? val1 : val2 ;
}

console.log(" value 29 is ",isEvenOdd(29));
console.log(" value 44 is ",isEvenOdd(44));
console.log(" value 0 is ",isEvenOdd(0));
console.log(" value 101 is ",isEvenOdd(101));

var wordLength=function(params){
    var val1="even";
    var val2="odd";
    return  (params.length)%2==0 ? val1 : val2 ;
}

console.log("word javaScript length is ",wordLength("javaScript"));
console.log("word developer length is ",wordLength("developer"));
console.log("word google length is ",wordLength("Google"));









