//WAP to print and count all the perfect number in range
//without using return and without using parameters

// function isPerfectNumber() {
//   let starting = 1;
//   let ending = 1000;
//   let count = 0;
//   for (let i = starting; i <= ending; i++) {
//     // Guard Clause for non-positive
//     // or non-integer input
//     if (!Number.isInteger(starting) || starting <= 0) {
//       console.log("Please provide a valid positive integer.");
//       return false;
//     }

//     let n = i;
//     let sum = 0;
//     // Loop to find proper divisors
//     // and calculate the sum
//     for (let j = 1; j < n; j++) {
//       if (n % j === 0) {
//         sum += j;
//       }
//     }
//     // Check if the sum of proper divisors
//     // equals the original number
//     const isPerfect = sum === n;
//     // Output the result
//     if (isPerfect) {
//       count++;
//       console.log(`${i} is a perfect number.`);
//     }
//   }
//   console.log(`count = ${count}`);
// }
// isPerfectNumber();

//output ==> 6 is a perfect number.
// 28 is a perfect number.
// 496 is a perfect number.
// count = 3

//-------------------------------------------------------

//WAP to print and count all the perfect number in range
//with using return and without using parameters

// function isPerfectNumber() {
//   let starting = 1;
//   let ending = 1000;
//   let count = 0;
//   const arr = [];
//   for (let i = starting; i <= ending; i++) {
//     if (!Number.isInteger(starting) || starting <= 0) {
//       console.log("Please provide a valid positive integer.");
//       return false;
//     }

//     let n = i;
//     let sum = 0;

//     for (let j = 1; j < n; j++) {
//       if (n % j === 0) {
//         sum += j;
//       }
//     }

//     const isPerfect = sum === n;

//     if (isPerfect) {
//       count++;
//       arr.push(i);
//     }
//   }
//   return `from range ${starting} to ${ending} these are ${arr} perfect number and  count = ${count}`;
// }
// console.log(isPerfectNumber());

//output ==> from range 1 to 1000 these are 6,28,496 perfect number and  count = 3

//-------------------------------------------------------

//WAP to print and count all the perfect number in range
//without using return and with using parameters

// function isPerfectNumber(starting, ending) {
//   let count = 0;
//   for (let i = starting; i <= ending; i++) {
//     if (!Number.isInteger(starting) || starting <= 0) {
//       console.log("Please provide a valid positive integer.");
//       return false;
//     }

//     let n = i;
//     let sum = 0;

//     for (let j = 1; j < n; j++) {
//       if (n % j === 0) {
//         sum += j;
//       }
//     }

//     const isPerfect = sum === n;

//     if (isPerfect) {
//       count++;
//       console.log(`${i} is a perfect number.`);
//     }
//   }
//   console.log(`count = ${count}`);
// }
// isPerfectNumber(1, 10000);

//output ==> 6 is a perfect number.
// 28 is a perfect number.
// 496 is a perfect number.
// 8128 is a perfect number.
// count = 4

//----------------------------------------------------------

//WAP to print and count all the perfect number in range
//with using return and with using parameters

function isPerfectNumber(starting, ending) {
  let count = 0;
  const arr = [];
  for (let i = starting; i <= ending; i++) {
    if (!Number.isInteger(starting) || starting <= 0) {
      console.log("Please provide a valid positive integer.");
      return false;
    }

    let n = i;
    let sum = 0;

    for (let j = 1; j < n; j++) {
      if (n % j === 0) {
        sum += j;
      }
    }

    const isPerfect = sum === n;

    if (isPerfect) {
      count++;
      arr.push(i);
    }
  }
  return `from range ${starting} to ${ending} these are ${arr} perfect number and  count = ${count}`;
}
console.log(isPerfectNumber(1, 100));
console.log(isPerfectNumber(1, 1000));
console.log(isPerfectNumber(1, 10000));
console.log(isPerfectNumber(1, 100000));

//output ==> from range 1 to 100 these are 6,28 perfect number and  count = 2
// from range 1 to 1000 these are 6,28,496 perfect number and  count = 3
// from range 1 to 10000 these are 6,28,496,8128 perfect number and  count = 4
// from range 1 to 100000 these are 6,28,496,8128 perfect number and  count = 4
