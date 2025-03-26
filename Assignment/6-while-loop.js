var index=5;
var result=[];

    while(index<=15){
        result.push(index);
        index++;
    }    
console.log(result.join("   "));

var result2=[];
var count=null;
index=0;

while (true) {
    if(index%2==1){
        result2.push(index);
        index++;
        count++;
        if(count==15){
            break;
        }
    }
}
console.log(result2.join("  "));

