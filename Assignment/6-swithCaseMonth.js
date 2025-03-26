var monthSwitchCase= function(params) {
    switch (params) {
        case 1:
            return "january"
            break;
        
        case 2:
            return"february";
            break;    

        case 3:
            return "march";
            break;    
    
        case 4:
            return "april";
            break;    
        
        case 5:
            return "may";
            break;    
            
        case 6:
            return "jun";
            break;    
                
        case 7:
            return "july";
            break;    
                    
        case 8:
            return "august";
            break;    
                        
        case 9:
            return "september";
            break;    
                            
        case 10:
            return "October"
            break;    
                                
        case 11:
            return "november";
            break;    
                                    
        case 12:
            return "december";
            break;    
                                        
                                                                                                                                                                                                                                        
        default:
            return "you have enter wrong key";
            break;
    }
}

console.log(" For key value 0 month is ",monthSwitchCase(0));
console.log(" For key value 2 month is ",monthSwitchCase(2));
console.log(" For key value 5 month is ",monthSwitchCase(5));
console.log(" For key value 12 month is ",monthSwitchCase(12));
console.log(" For key value 15 month is ",monthSwitchCase(0));
console.log(" For key value 100 month is ",monthSwitchCase(0));
