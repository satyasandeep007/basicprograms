let num = 12;
let i;

    for ( i = 2; i <= num; i++) {
        if (num % i ===0) {
            break;
        }
    }
    if(i==num){
        console.log(num,'is prime');
    } else{
        console.log(num, 'is not prime');
        
    }