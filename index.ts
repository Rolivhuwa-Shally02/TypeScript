function checkIfOddOrEven (input: number): number {

    let math = input % 2 ;
    
        if ( math === 0){
    console.log(" number is even = " + input);
        }
    
        else {
           console.log(" input is odd = " + input);   
        }  
    
        return math;
    }
    
    console.log(checkIfOddOrEven(9))