let from = 2;
let to = 30;

for (let num = from; num <= to; num++) {
  if (num % num == 0 && num % 2 == 1) {
    console.log(num, 'It is prime number');
  }
  else if (num == 2) {
    console.log('It is prime number');
  }
  else {
    console.log('it is composite number');
  }
}

