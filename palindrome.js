let st1 = 'hAnaH';
let low = st1.toLowerCase();
let spl = low.split("").reverse().join("");

if (low == spl) {
    console.log(st1,' is a palindrome');

} else {
    console.log(st1,'is not a palidrome');
}