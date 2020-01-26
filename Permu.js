let n = 'abcd';
let x = n.length;
let pow = Math.pow(x,x);
let fact = 1;
for(i=1;i<=x;i++){
    fact = fact*i;
}
console.log(fact,pow);
// console.log(pow);

let perm = pow / fact;
console.log(perm);
