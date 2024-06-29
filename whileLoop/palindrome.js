//WAP to check if the number is Palindrome or not
//without using return and without parameters

// function palindrome() {
//   var orgNum = 123218;
//   var num = orgNum;
//   var revers = 0;
//   while (num != 0) {
//     revers = revers * 10 + (num % 10);
//     num = parseInt(num / 10);
//   }
//   if (orgNum === revers) console.log(`${orgNum} is a palindrome`);
//   else console.log(`${orgNum} is not a palindrome`);
// }
// palindrome();

// output ==> 123218 is not a palindrome

//--------------------------------------

//WAP to check if the number is Palindrome or not
//with using return and without parameters

// function palindrome() {
//   var orgNum = 12321;
//   var num = orgNum;
//   var revers = 0;
//   while (num != 0) {
//     revers = revers * 10 + (num % 10);
//     num = parseInt(num / 10);
//   }
//   if (orgNum === revers) return `${orgNum} is a palindrome`;
//   else return `${orgNum} is not a palindrome`;
// }
// console.log(palindrome());

// output ==> 12321 is a palindrome

//--------------------------------------

//WAP to check if the number is Palindrome or not
//without using return and with parameters

// function palindrome(orgNum) {
//   var num = orgNum;
//   var revers = 0;
//   while (num != 0) {
//     revers = revers * 10 + (num % 10);
//     num = parseInt(num / 10);
//   }
//   if (orgNum === revers) console.log(`${orgNum} is a palindrome`);
//   else console.log(`${orgNum} is not a palindrome`);
// }
// palindrome(121);

// output ==> 121 is a palindrome

//--------------------------------------

//WAP to check if the number is Palindrome or not
//with using return and with parameters

function palindrome(orgNum) {
  var num = orgNum;
  var revers = 0;
  while (num != 0) {
    revers = revers * 10 + (num % 10);
    num = parseInt(num / 10);
  }
  if (orgNum === revers) return `${orgNum} is a palindrome`;
  else return `${orgNum} is not a palindrome`;
}
console.log(palindrome(12321));
console.log(palindrome(121));
console.log(palindrome(1));
console.log(palindrome(100));
console.log(palindrome(111));

// output ==> 12321 is a palindrome
// 121 is a palindrome
// 1 is a palindrome
// 100 is not a palindrome
// 111 is a palindrome
