let n = 'abcdef';
let x = n.length;
let r = 2;
let fact1 = 1;
let fact2 = 1;
for(i=1;i<=x;i++){
    fact1 = fact1*i;
}
for(j=1;j<=r;j++){
    fact2 = fact2*j;
}
let fact = (fact1/fact2);
console.log(fact);

