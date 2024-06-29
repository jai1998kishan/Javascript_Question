//WAP to count number of even and odd digits in number
//without using return and without parameters

// function countEvenOddDigit() {
//   var num = 1234567;
//   var evenCount = 0;
//   var oddCount = 0;
//   while (num != 0) {
//     var r = num % 10;
//     if (r % 2 == 0) evenCount++;
//     else oddCount++;
//     num = parseInt(num / 10);
//   }
//   console.log(
//     `even number digits ${evenCount} and odd number of digits ${oddCount}`
//   );
// }
// countEvenOddDigit();

//output ==> even number digits 3 and odd number of digits 4

//--------------------------------------------------------

//WAP to count number of even and odd digits in number
//with using return and without parameters

// function countEvenOddDigit() {
//   var num = 12345678;
//   var evenCount = 0;
//   var oddCount = 0;
//   while (num != 0) {
//     var r = num % 10;
//     if (r % 2 == 0) evenCount++;
//     else oddCount++;
//     num = parseInt(num / 10);
//   }
//   return `even number digits ${evenCount} and odd number of digits ${oddCount}`;
// }
// console.log(countEvenOddDigit());

//output ==> even number digits 4 and odd number of digits 4

//----------------------------------------------------------------

//WAP to count number of even and odd digits in number
//without using return and without parameters

// function countEvenOddDigit(num) {
//   var evenCount = 0;
//   var oddCount = 0;
//   while (num != 0) {
//     var r = num % 10;
//     if (r % 2 == 0) evenCount++;
//     else oddCount++;
//     num = parseInt(num / 10);
//   }
//   console.log(
//     `even number digits ${evenCount} and odd number of digits ${oddCount}`
//   );
// }
// var num = 98765456789;
// countEvenOddDigit(num);

//output ==> even number digits 5 and odd number of digits 6

//--------------------------------------------------------

//WAP to count number of even and odd digits in number
//with using return and with parameters

function countEvenOddDigit(num) {
  var evenCount = 0;
  var oddCount = 0;
  while (num != 0) {
    var r = num % 10;
    if (r % 2 == 0) evenCount++;
    else oddCount++;
    num = parseInt(num / 10);
  }
  return `even number digits ${evenCount} and odd number of digits ${oddCount}`;
}

console.log(countEvenOddDigit(23224551323411));

// output ==> even number digits 4 and odd number of digits 4
