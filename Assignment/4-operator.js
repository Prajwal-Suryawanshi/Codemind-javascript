
var squareOfWordLength= function(params) {
    
    return params.length;
}

var res=squareOfWordLength("javaScript");
console.log("length of word js is",res);

console.log("square of it length is",res*res);

res= squareOfWordLength("Google Chrome");

console.log("length of word google is",res);
console.log("square of it length is",res*res);

res= squareOfWordLength("web developer smart");

console.log("length of word web developer smart is",res);
console.log("square of it length is",res*res);

var wordLengthOperation=function(){

    console.log("String length is ","i am ui developer".length);
    console.log("split in to array is ","i am ui developer".split(" "));

    console.log("length divide by word is ","i am ui developer".length/ ("i am ui developer".split(" ")).length);
    
}

wordLengthOperation();

var multiplyByTotal=function() {
    console.log("i am ui developer".length);
    console.log("total word are present is string is",("i am ui developer".split(" ")).length);
    
    console.log("word length into no of words ","i am ui developer".length*("i am ui developer".split(" ")).length);
    
}
multiplyByTotal();








