//WAP to print and count all the armstrong number in a range
//without using return and without parameters

// function armstrong() {
//   let starting = 100;
//   let ending = 1000;
//   let count = 0;
//   for (let i = starting; i <= ending; i++) {
//     let sum = 0;
//     let num = i;
//     while (num != 0) {
//       sum = sum + (num % 10) ** 3;
//       num = parseInt(num / 10);
//     }
//     if (i === sum) {
//       count++;
//       console.log(`${i} is armstrong number`);
//     }
//   }
//   console.log(`count = ${count}`);
// }
// armstrong();

//output ==> 153 is armstrong number
// 370 is armstrong number
// 371 is armstrong number
// 407 is armstrong number
// count = 4

//--------------------------------------------------

//WAP to print and count all the armstrong number in a range
//with using return and without parameters

// function armstrong() {
//   let starting = 1;
//   let ending = 1000;
//   let count = 0;
//   let arr = [];
//   for (let i = starting; i <= ending; i++) {
//     let sum = 0;
//     let num = i;
//     while (num != 0) {
//       sum = sum + (num % 10) ** 3;
//       num = parseInt(num / 10);
//     }
//     if (i === sum) {
//       count++;
//       arr.push(i);
//     }
//   }
//   return `from range ${starting} to ${ending} these numbers ${arr} are armstrong and count = ${count}`;
// }
// console.log(armstrong());

//output ==> from range 1 to 1000 these numbers 1,153,370,371,407 are armstrong and count = 5

//--------------------------------------------------

//WAP to print and count all the armstrong number in a range
//without using return and with parameters

// function armstrong(starting, ending) {
//   let count = 0;
//   for (let i = starting; i <= ending; i++) {
//     let sum = 0;
//     let num = i;
//     while (num != 0) {
//       sum = sum + (num % 10) ** 3;
//       num = parseInt(num / 10);
//     }
//     if (i === sum) {
//       count++;
//       console.log(`${i} is armstrong number`);
//     }
//   }
//   console.log(`count = ${count}`);
// }
// armstrong(100, 200);

//output ==> 153 is armstrong number
// count = 1

//--------------------------------------------------
