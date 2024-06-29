//WAP to revers the number
//without using return and without parameters

// function reversNumber() {
//   var num = 12345;
//   var rev = 0;
//   while (num != 0) {
//     rev = rev * 10 + (num % 10);
//     num = parseInt(num / 10);
//   }
//   console.log(`revers of the number is ${rev}`);
// }
// reversNumber();

//output ==> revers of the number is 54321

//----------------------------------------------------

//WAP to revers the number
//with using return and without parameters

// function reversNumber() {
//   var num = 98765;
//   var rev = 0;
//   while (num != 0) {
//     rev = rev * 10 + (num % 10);
//     num = parseInt(num / 10);
//   }
//   return `revers of the number is ${rev}`;
// }
// console.log(reversNumber());

//output ==> revers of the number is 56789

//----------------------------------------------------

//WAP to revers the number
//without using return and with parameters

// function reversNumber(num) {
//   var rev = 0;
//   while (num != 0) {
//     rev = rev * 10 + (num % 10);
//     num = parseInt(num / 10);
//   }
//   console.log(`revers of the number is ${rev}`);
// }
// reversNumber(123456789);

//output ==> revers of the number is 987654321

//----------------------------------------------------

//WAP to revers the number
//with using return and with parameters

function reversNumber(num) {
  var rev = 0;
  while (num != 0) {
    rev = rev * 10 + (num % 10);
    num = parseInt(num / 10);
  }
  return `revers of the number is ${rev}`;
}
console.log(reversNumber(123456789));
console.log(reversNumber(54321));

//output ==> revers of the number is 987654321
//   revers of number is 12345
