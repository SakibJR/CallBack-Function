let number = 1;

for(i = 0; i < 60; i++){
    
     console.log(number);
     number++;
    
    while(number % 3 === 0 && number % 5 === 0){
        console.log("FIZZBUZZ");
        number++;
    }
    
    while (number % 3 === 0){
        
        console.log("FIZZ");
        number++;
    }
    while(number % 5 === 0 && number % 3 !== 0){
        console.log("BUZZ");
        number++;
        
    }
    
 
}