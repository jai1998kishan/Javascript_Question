//WAP to check if the number is NEON or not
//without using return and without parameters

// function isNeon() {
//   var num = 9;
//   var sqNum = num * num;
//   var sum = 0;
//   while (sqNum != 0) {
//     sum = sum + (sqNum % 10);
//     sqNum = parseInt(sqNum / 10);
//   }
//   if (sum == num) console.log(`${num} is neon`);
//   else console.log(`${num} is not neon`);
// }
// isNeon();

//output ==> 9 is neon

//--------------------------------------------------------------

//WAP to check if the number is NEON or not
//with using return and without parameters

// function isNeon() {
//   var num = 1;
//   var sqNum = num * num;
//   var sum = 0;
//   while (sqNum != 0) {
//     sum = sum + (sqNum % 10);
//     sqNum = parseInt(sqNum / 10);
//   }
//   if (sum == num) return `${num} is neon`;
//   else return `${num} is not neon`;
// }
// console.log(isNeon());

//output ==> 1 is neon

//--------------------------------------------------------------

//WAP to check if the number is NEON or not
//without using return and with parameters

// function isNeon(num) {
//   var sqNum = num * num;
//   var sum = 0;
//   while (sqNum != 0) {
//     sum = sum + (sqNum % 10);
//     sqNum = parseInt(sqNum / 10);
//   }
//   if (sum == num) console.log(`${num} is neon`);
//   else console.log(`${num} is not neon`);
// }
// isNeon(9);
// isNeon(1);
// isNeon(10);

/*
output ==> 9 is neon
            1 is neon
        10 is not neon
*/

//--------------------------------------------------------------

//WAP to check if the number is NEON or not
//with using return and with parameters

function isNeon(num) {
  var sqNum = num * num;
  var sum = 0;
  while (sqNum != 0) {
    sum = sum + (sqNum % 10);
    sqNum = parseInt(sqNum / 10);
  }
  if (sum == num) return `${num} is neon`;
  else return `${num} is not neon`;
}
console.log(isNeon(9), isNeon(1), isNeon(10));

/*
output ==> 9 is neon 1 is neon 10 is not neon
*/
