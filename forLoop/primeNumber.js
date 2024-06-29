//WAP to check if number is prime or not
//without using return and without parameters

// function prime() {
//   var flag = false;
//   var num = 7;
//   for (let i = 2; i <= num ** 0.5; i++) {
//     if (num % i == 0) flag = true;
//   }
//   if (flag == true) console.log(`${num} not a prime number`);
//   else console.log(`${num}  a prime number`);
// }
// prime();

//output == 7  a prime number

//------------------------------------------------------

//WAP to check if number is prime or not
//with using return and without parameters

// function prime() {
//   var flag = false;
//   var num = 22;
//   for (let i = 2; i <= num ** 0.5; i++) {
//     if (num % i == 0) flag = true;
//   }
//   if (flag == true) return `${num} not a prime number`;
//   else return `${num}  a prime number`;
// }
// console.log(prime());

//output == 22 not a prime number

//------------------------------------------------

//WAP to check if number is prime or not
//without using return and with parameters

// function prime(num) {
//   var flag = false;
//   for (let i = 2; i <= num ** 0.5; i++) {
//     if (num % i == 0) flag = true;
//   }
//   if (flag == true) console.log(`${num} not a prime number`);
//   else console.log(`${num}  a prime number`);
// }
// var num = 23;
// prime(num);

//output == 23 a prime number

//---------------------------------------------------------

//WAP to check if number is prime or not
//with using return and without parameters

function prime(num) {
  var flag = false;
  for (let i = 2; i <= num ** 0.5; i++) {
    if (num % i == 0) flag = true;
  }
  if (flag == true) return `${num} not a prime number`;
  else return `${num}  a prime number`;
}
var num = 27;
console.log(prime(num));

//output == 29 a prime number
