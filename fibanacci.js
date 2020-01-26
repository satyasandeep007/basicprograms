let i = 0;
console.log(i);

let j = 1;
console.log(j);

for (let x = 2; x < 9; x++) {
    
    let sum = i+j;
    console.log(sum);
    
    i=j;
    j=sum;
}