const perfectNumber = function (num) {
    let temp = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            temp += i;
        }
    }
    if (temp === num && temp !== 0) {
        console.log('perfect');
    } else {
        console.log('not perfect');
    } 
    
}
perfectNumber(6);