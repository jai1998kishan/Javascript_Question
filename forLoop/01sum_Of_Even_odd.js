//WAP to print sum of even and odd numbers in specific range
//without using return and parameters

// function sumOfEvenOdd() {
//   var starting = 1;
//   var ending = 10;
//   var evenSum = 0;
//   var oddSum = 0;
//   for (let i = starting; i <= ending; i++) {
//     if (i % 2 == 0) evenSum += i;
//     else oddSum += i;
//   }
//   console.log(`sum of even = ${evenSum}  and sum of odd = ${oddSum}`);
// }
// sumOfEvenOdd();

//output == sum of even = 30  and sum of odd = 25

//--------------------------------------------------------------------

//WAP to print sum of even and odd numbers in specific range
//with using return and without using parameters

// function sumOfEvenOdd() {
//   var starting = 1;
//   var ending = 10;
//   var evenSum = 0;
//   var oddSum = 0;
//   for (let i = starting; i <= ending; i++) {
//     if (i % 2 == 0) evenSum += i;
//     else oddSum += i;
//   }
//   return `sum of even is = ${evenSum}  and sum of odd is = ${oddSum}`;
// }
// const result = sumOfEvenOdd();
// console.log(result);
// console.log(sumOfEvenOdd());

//output == sum of even = 30  and sum of odd = 25

//-------------------------------------------------------------------

//WAP to print sum of even and odd numbers in specific range
//without using return and with using parameters

// function sumOfEvenOdd(starting, ending, evenSum, oddSum) {
//   for (let i = starting; i <= ending; i++) {
//     if (i % 2 == 0) evenSum += i;
//     else oddSum += i;
//   }
//   console.log(`sum of even is = ${evenSum}  and sum of odd is = ${oddSum}`);
// }
// var starting = 1;
// var ending = 10;
// var evenSum = 0;
// var oddSum = 0;
// sumOfEvenOdd(starting, ending, evenSum, oddSum);

//output == sum of even = 30  and sum of odd = 25

//-----------------------------------------------------------------

//WAP to print sum of even and odd numbers in specific range
//with using return and with using parameters

function sumOfEvenOdd(starting, ending, evenSum, oddSum) {
  for (let i = starting; i <= ending; i++) {
    if (i % 2 == 0) evenSum += i;
    else oddSum += i;
  }
  return `sum of even is = ${evenSum}  and sum of odd is = ${oddSum}`;
}
var starting = 1;
var ending = 10;
var evenSum = 0;
var oddSum = 0;
const result = sumOfEvenOdd(starting, ending, evenSum, oddSum);
console.log(result);

//output == sum of even = 30  and sum of odd = 25
