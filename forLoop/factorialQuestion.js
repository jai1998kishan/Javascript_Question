//WAP to print factorial of any specific number
//without using return and without using parameters

// function factorial() {
//   let n = 5;
//   let ans = 1;
//   if (n === 0) return 1;
//   for (let i = 2; i <= n; i++) ans = ans * i;
//   console.log(`factorial of ${n} is  ${ans}`);
// }
// factorial();

// output  == > factorial of 5 is  120

//------------------------------------------------------

//WAP to print factorial of any specific number
//with using return and without using parameters

// function factorial() {
//   let n = 9;
//   let ans = 1;
//   if (n === 0) return 1;
//   for (let i = 2; i <= n; i++) ans = ans * i;
//   return `factorial of ${n} is  ${ans}`;
// }
// console.log(factorial());

// output  == > factorial of 9 is  362880

//------------------------------------------------------

//WAP to print factorial of any specific number
//without using return and with using parameters

// function factorial(n) {
//   let ans = 1;
//   if (n === 0) return 1;
//   for (let i = 2; i <= n; i++) ans = ans * i;
//   console.log(`factorial of ${n} is  ${ans}`);
// }
// factorial(12);

// output  == > factorial of 5 is  479001600

//------------------------------------------------------------

//WAP to print factorial of any specific number
//with using return and with using parameters

function factorial(n) {
  let ans = 1;
  if (n === 0) return 1;
  for (let i = 2; i <= n; i++) ans = ans * i;
  return `factorial of ${n} is  ${ans}`;
}
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(9));
console.log(factorial(6));

// output  == > factorial of 3 is  6
// factorial of 5 is  120
// factorial of 9 is  362880
// factorial of 6 is  720
