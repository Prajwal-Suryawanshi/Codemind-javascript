
var voteRegistration=function(val){
    if(18<=val && val<=80){
        console.log("you are eligible for vote",val);
    }
    else{
        console.log("you are note eligible ",val);
        
    }
}

voteRegistration(45);
voteRegistration(17);
voteRegistration(8);
voteRegistration(-10);
voteRegistration(200);
voteRegistration(0);
voteRegistration(null);

