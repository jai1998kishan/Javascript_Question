//WAP to check if the given is magical number or not (81,1458,1729)
//without using return and without parameters

// function magical() {
//   var orgNum = 1729;
//   var num = orgNum;
//   var revers = 0;
//   var sum = 0;
//   while (num != 0) {
//     sum = sum + (num % 10);
//     num = parseInt(num / 10);
//   }
//   var num = sum;
//   while (sum != 0) {
//     revers = revers * 10 + (sum % 10);
//     sum = parseInt(sum / 10);
//   }
//   if (num * revers === orgNum) console.log(`${orgNum} is a magical number`);
//   else console.log(`${orgNum} is not a magical number`);
// }
// magical();

//output ==> 1729 is a magical number

//------------------------------------------------

//WAP to check if the given is magical number or not (81,1458,1729)
//with using return and without parameters

// function magical() {
//   var orgNum = 1458;
//   var num = orgNum;
//   var revers = 0;
//   var sum = 0;
//   while (num != 0) {
//     sum = sum + (num % 10);
//     num = parseInt(num / 10);
//   }
//   var num = sum;
//   while (sum != 0) {
//     revers = revers * 10 + (sum % 10);
//     sum = parseInt(sum / 10);
//   }
//   if (num * revers === orgNum) return `${orgNum} is a magical number`;
//   else return `${orgNum} is not a magical number`;
// }
// console.log(magical());

//output ==> 1458 is a magical number

//------------------------------------------------

//WAP to check if the given is magical number or not (81,1458,1729)
//without using return and with parameters

// function magical(orgNum) {
//   var num = orgNum;
//   var revers = 0;
//   var sum = 0;
//   while (num != 0) {
//     sum = sum + (num % 10);
//     num = parseInt(num / 10);
//   }
//   var num = sum;
//   while (sum != 0) {
//     revers = revers * 10 + (sum % 10);
//     sum = parseInt(sum / 10);
//   }
//   if (num * revers === orgNum) console.log(`${orgNum} is a magical number`);
//   else console.log(`${orgNum} is not a magical number`);
// }
// magical(81);

//output ==> 81 is a magical number

//------------------------------------------------

//WAP to check if the given is magical number or not (81,1458,1729)
//with using return and with parameters

function magical(orgNum) {
  var revers = 0;
  var sum = 0;
  while (num != 0) {
    sum = sum + (num % 10);
    num = parseInt(num / 10);
  }
  var num = sum;
  while (sum != 0) {
    revers = revers * 10 + (sum % 10);
    sum = parseInt(sum / 10);
  }
  if (num * revers === orgNum) return `${orgNum} is a magical number`;
  else return `${orgNum} is not a magical number`;
}
console.log(magical(81));
console.log(magical(1458));
console.log(magical(1729));
console.log(magical(999));
console.log(magical(121));

//output ==> 81 is a magical number
// 1458 is a magical number
// 1729 is a magical number
// 999 is not a magical number
// 121 is not a magical number
