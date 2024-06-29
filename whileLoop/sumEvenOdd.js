//WAP to calculate sum of even and odd digits of a specific number
//without using return and without parameters

// function sumOfEvenOddDigit() {
//   var num = 12345;
//   var evensum = 0;
//   var oddSum = 0;
//   while (num != 0) {
//     var r = num % 10;
//     num = Math.floor(num / 10);
//     if (r % 2 == 0) evensum = evensum + r;
//     else oddSum = oddSum + r;
//   }
//   console.log(`sum of even ${evensum}  and sum of odd ${oddSum}`);
// }
// sumOfEvenOddDigit();

//output ==> sum of even 6  and sum of odd 9

//--------------------------------------------------------------------------

//WAP to calculate sum of even and odd digits of a specific number
//with using return and without parameters

// function sumOfEvenOddDigit() {
//   var num = 123457;
//   var evensum = 0;
//   var oddSum = 0;
//   while (num != 0) {
//     var r = num % 10;
//     num = Math.floor(num / 10);
//     if (r % 2 == 0) evensum = evensum + r;
//     else oddSum = oddSum + r;
//   }
//   return ` sum of even ${evensum}  and sum of odd ${oddSum}`;
// }
// console.log(sumOfEvenOddDigit());

//output ==> sum of even 6  and sum of odd 16

//-------------------------------------------------------------------------

//WAP to calculate sum of even and odd digits of a specific number
//without using return and with parameters

// function sumOfEvenOddDigit() {
//   var evensum = 0;
//   var oddSum = 0;
//   while (num != 0) {
//     var r = num % 10;
//     num = Math.floor(num / 10);
//     if (r % 2 == 0) evensum = evensum + r;
//     else oddSum = oddSum + r;
//   }
//   console.log(`sum of even ${evensum}  and sum of odd ${oddSum}`);
// }
// var num = 12345678;
// sumOfEvenOddDigit(num);

//output ==> sum of even 20  and sum of odd 16

//-------------------------------------------------------------------------

//WAP to calculate sum of even and odd digits of a specific number
//without using return and with parameters

function sumOfEvenOddDigit() {
  var evensum = 0;
  var oddSum = 0;
  while (num != 0) {
    var r = num % 10;
    num = Math.floor(num / 10);
    if (r % 2 == 0) evensum = evensum + r;
    else oddSum = oddSum + r;
  }
  return `sum of even ${evensum}  and sum of odd ${oddSum}`;
}
var num = 123456789;
console.log(sumOfEvenOddDigit(num));

//output ==> sum of even 20  and sum of odd 25
