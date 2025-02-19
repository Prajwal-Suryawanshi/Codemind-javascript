var st="    hey how are you ?";
console.log("==============================1=============================");

console.log(st);

console.log("\n==============================2=============================");

console.log("string length is ",st.length);

console.log("\n==============================3=============================");

console.log("first space trim :",st.trimStart());
console.log("length after trim: ",(st.trimStart()).length);

console.log("\n==============================4=============================");

console.log("extra space in string",(st.length-st.trimStart().length));

console.log("\n==============================5=============================");

console.log("first character in string is ",(st.trimStart()).charAt(0),
            " \nand last character is ",st.charAt(st.length-1));

console.log("\n==============================6=============================");

console.log(" The number of word in string is ",(st.trim()).length);

console.log("total string in sentence is ",((st.trim()).split(" ")).length);

console.log("\n==============================7=============================");

console.log("The index of word 'are' at position ",(st.trim()).indexOf("are"));

console.log("\n==============================8=============================");

console.log("Substring between 3 to 10 position in string : ",(st.trim()).substring(3,11));

console.log("\n==============================9=============================");

console.log("String end with 'hello' word : ",(st.trim()).startsWith("hello"));

console.log("\n==============================10=============================");

console.log("String ends with '?' :",(st.trim()).endsWith("?"));











