//WAP to check if the is armstrong or not
//without using return and without parameters

// function armstrong() {
//   var orgNum = 371;
//   var num = orgNum;
//   var sum = 0;
//   while (num != 0) {
//     sum = sum + (num % 10) ** 3;
//     num = parseInt(num / 10);
//   }
//   if (orgNum === sum) console.log(`${orgNum} is armstrong number`);
//   else console.log(`${orgNum} is not armstrong number`);
// }

// armstrong();

//output ==> 371 is armstrong number

//--------------------------------

//WAP to check if the is armstrong or not
//with using return and without parameters

// function armstrong() {
//   var orgNum = 407;
//   var num = orgNum;
//   var sum = 0;
//   while (num != 0) {
//     sum = sum + (num % 10) ** 3;
//     num = parseInt(num / 10);
//   }
//   if (orgNum === sum) return `${orgNum} is armstrong number`;
//   else return `${orgNum} is not armstrong number`;
// }
// console.log(armstrong());

//output ==> 407 is armstrong number

//--------------------------------

//WAP to check if the is armstrong or not
//without using return and with parameters

// function armstrong(orgNum) {
//   var num = orgNum;
//   var sum = 0;
//   while (num != 0) {
//     sum = sum + (num % 10) ** 3;
//     num = parseInt(num / 10);
//   }
//   if (orgNum === sum) console.log(`${orgNum} is armstrong number`);
//   else console.log(`${orgNum} is not armstrong number`);
// }
// armstrong(1);
// armstrong(153);
// armstrong(370);
// armstrong(371);
// armstrong(407);
// armstrong(999);

//output
// 153 is armstrong number
// 370 is armstrong number
// 371 is armstrong number
// 407 is armstrong number
// 999 is not armstrong number

//--------------------------------

//WAP to check if the is armstrong or not
//without using return and with parameters

function armstrong(orgNum) {
  var num = orgNum;
  var sum = 0;
  while (num != 0) {
    sum = sum + (num % 10) ** 3;
    num = parseInt(num / 10);
  }
  if (orgNum === sum) return `${orgNum} is armstrong number`;
  else return `${orgNum} is not armstrong number`;
}
console.log(armstrong(1));
console.log(armstrong(153));
console.log(armstrong(370));
console.log(armstrong(371));
console.log(armstrong(407));
console.log(armstrong(1111));

//output
// 153 is armstrong number
// 370 is armstrong number
// 371 is armstrong number
// 407 is armstrong number
// 1111 is not armstrong number
