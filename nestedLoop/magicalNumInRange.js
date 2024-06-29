//WAP to print and count all the magical number in a range (81,1458,1729)
//without using return and without parameters

// function magical() {
//   let starting = 1;
//   let ending = 2000;
//   let count = 0;
//   for (let i = starting; i <= ending; i++) {
//     var num = i;
//     var revers = 0;
//     var sum = 0;
//     while (num != 0) {
//       sum = sum + (num % 10);
//       num = parseInt(num / 10);
//     }
//     var num = sum;
//     while (sum != 0) {
//       revers = revers * 10 + (sum % 10);
//       sum = parseInt(sum / 10);
//     }
//     if (num * revers === i) {
//       count++;
//       console.log(`${i} is a magical number`);
//     }
//   }
//   console.log(`count = ${count}`);
// }
// magical();

//output ==> 1 is a magical number
// 81 is a magical number
// 1458 is a magical number
// 1729 is a magical number
//count = 4

//------------------------------------------------------------

//WAP to print and count all the magical number in a range (81,1458,1729)
//with using return and without parameters

// function magical() {
//   let starting = 1;
//   let ending = 2000;
//   let count = 0;
//   const arr = [];
//   for (let i = starting; i <= ending; i++) {
//     var num = i;
//     var revers = 0;
//     var sum = 0;
//     while (num != 0) {
//       sum = sum + (num % 10);
//       num = parseInt(num / 10);
//     }
//     var num = sum;
//     while (sum != 0) {
//       revers = revers * 10 + (sum % 10);
//       sum = parseInt(sum / 10);
//     }
//     if (num * revers === i) {
//       count++;
//       arr.push(i);
//     }
//   }
//   return `from ${starting} to ${ending} these are ${arr} is magical number and count = ${count}`;
// }
// console.log(magical());

//output ==> from 1 to 2000 these are 1,81,1458,1729 is magical number and count = 4

//------------------------------------------------------------

//WAP to print and count all the magical number in a range (81,1458,1729)
//without using return and with parameters

// function magical(starting, ending) {
//   let count = 0;
//   for (let i = starting; i <= ending; i++) {
//     var num = i;
//     var revers = 0;
//     var sum = 0;
//     while (num != 0) {
//       sum = sum + (num % 10);
//       num = parseInt(num / 10);
//     }
//     var num = sum;
//     while (sum != 0) {
//       revers = revers * 10 + (sum % 10);
//       sum = parseInt(sum / 10);
//     }
//     if (num * revers === i) {
//       count++;
//       console.log(
//         `form range ${starting} to ${ending} these are ${i} is a magical number`
//       );
//     }
//   }
//   console.log(`from range ${starting} to ${ending} the count = ${count}`);
// }
// magical(1, 100000);
// magical(1, 100);

//output ==> form range 1 to 100000 these are 1 is a magical number
// form range 1 to 100000 these are 81 is a magical number
// form range 1 to 100000 these are 1458 is a magical number
// form range 1 to 100000 these are 1729 is a magical number
// from range 1 to 100000 the count = 4
// form range 1 to 100 these are 1 is a magical number
// form range 1 to 100 these are 81 is a magical number
// from range 1 to 100 the count = 2

//------------------------------------------------------------

//WAP to print and count all the magical number in a range (81,1458,1729)
//with using return and with parameters

function magical(starting, ending) {
  let count = 0;
  const arr = [];
  for (let i = starting; i <= ending; i++) {
    var num = i;
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
    if (num * revers === i) {
      count++;
      arr.push(i);
    }
  }
  return `from ${starting} to ${ending} these are ${arr} is magical number and count = ${count}`;
}
console.log(magical(1, 100));
console.log(magical(1, 1000));
console.log(magical(1, 10000));

//output ==> from 1 to 100 these are 1,81 is magical number and count = 2
// from 1 to 1000 these are 1,81 is magical number and count = 2
// from 1 to 10000 these are 1,81,1458,1729 is magical number and count = 4
