//WAP to print and count all the palidrome number in a range
//without using return and without using parameters

// function palidrome() {
//   let starting = 100;
//   let ending = 150;
//   let count = 0;
//   for (let i = starting; i <= ending; i++) {
//     let num = i;
//     let revers = 0;
//     while (num != 0) {
//       revers = revers * 10 + (num % 10);
//       num = parseInt(num / 10);
//     }
//     if (revers == i) {
//       console.log(`from range ${starting} to ${ending} ${i} is palidrome`);
//       count++;
//     }
//   }
//   console.log(`count  =  ${count}`);
// }
// palidrome();

//output  ==> from range 100 to 150 101 is palidrome
// from range 100 to 150 111 is palidrome
// from range 100 to 150 121 is palidrome
// from range 100 to 150 131 is palidrome
// from range 100 to 150 141 is palidrome
// count  =  5

//----------------------------------------------------------------------

//WAP to print and count all the palidrome number in a range
//with using return and without using parameters

// function palidrome() {
//   let starting = 100;
//   let ending = 150;
//   let count = 0;
//   let arr = [];
//   for (let i = starting; i <= ending; i++) {
//     let num = i;
//     let revers = 0;
//     while (num != 0) {
//       revers = revers * 10 + (num % 10);
//       num = parseInt(num / 10);
//     }
//     if (revers == i) {
//       count++;
//       arr.push(i);
//     }
//   }
//   return `${arr} these are palidrome and count = ${count}`;
// }
// console.log(palidrome());

//output ==> 101,111,121,131,141 these are palidrome and count = 5

//----------------------------------------------------------------------

//WAP to print and count all the palidrome number in a range
//without using return and with using parameters

// function palidrome(starting, ending) {
//   let count = 0;
//   for (let i = starting; i <= ending; i++) {
//     let num = i;
//     let revers = 0;
//     while (num != 0) {
//       revers = revers * 10 + (num % 10);
//       num = parseInt(num / 10);
//     }
//     if (revers == i) {
//       console.log(`from range ${starting} to ${ending} ${i} is palidrome`);
//       count++;
//     }
//   }
//   console.log(`count  =  ${count}`);
// }
// palidrome(150, 200);

//output  ==> from range 150 to 200 151 is palidrome
// from range 150 to 200 161 is palidrome
// from range 150 to 200 171 is palidrome
// from range 150 to 200 181 is palidrome
// from range 150 to 200 191 is palidrome
// count  =  5

//---------------------------------------------------------

//WAP to print and count all the palidrome number in a range
//with using return and with using parameters

function palidrome() {
  let starting = 100;
  let ending = 150;
  let count = 0;
  let arr = [];
  for (let i = starting; i <= ending; i++) {
    let num = i;
    let revers = 0;
    while (num != 0) {
      revers = revers * 10 + (num % 10);
      num = parseInt(num / 10);
    }
    if (revers == i) {
      count++;
      arr.push(i);
    }
  }
  return `${arr} these are palidrome and count = ${count}`;
}
console.log(palidrome(1, 50));
console.log(palidrome(50, 100));
console.log(palidrome(100, 150));
console.log(palidrome(150, 200));
console.log(palidrome(200, 250));

//output ==> 101,111,121,131,141 these are palidrome and count = 5
// 101,111,121,131,141 these are palidrome and count = 5
// 101,111,121,131,141 these are palidrome and count = 5
// 101,111,121,131,141 these are palidrome and count = 5
// 101,111,121,131,141 these are palidrome and count = 5
