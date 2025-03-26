var result=[];
for (var index = 5; index <=15; index++) {
    result.push(index);
}
console.log("==================5 to 15====================");

console.log(result.join("   "));

var result2=[];
for (var index = 50; index >=40; index--) {
    result2.push(index);
}
console.log("=====================50 to 40======================");

console.log(result2.join("   "));

var count=null;
var result3=[];
for (var index = 0; true ; index++) {  
    
      
    if( index%2==1 ){
        result3.push(index);
        
        
        count++;
        if (count==15){
            
            break;
        }
        
    }
   
}
console.log("========================15 odd number======================");

console.log(result3.join("   "));

var result4=[];
count=null;
for(var index=0;true;index++){
    if(index%2==0){
        result4.push(index);
        count++;
        if (count==15) {
            break;
        }
    }
}
console.log("========================15 even number======================");

console.log(result4.join("   "));

var result5=[];
count=null;
for(var index=1;true;index++){
    if(index%5==0){
        result5.push(index);
        count++;
        if (count==10) {
            break
        }
    }

}
console.log("========================5 table======================");

console.log(result5.join("   "));


var result6=[];
count=null;
for(var index=100;true;index=index-10){
    if(index%10==0){
        result6.push(index);
        count++;
        if (count==10) {
            break
        }
    }

}
console.log("========================100 to 10======================");

console.log(result6.join("   "));

//break for ends the loop
//contiuoue for skip the loop