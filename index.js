// EXAMPLE 1 - Iterate through a Map object in JavaScript

const map1 = new Map([
  ['country', 'Chile'],
  ['age', 30],
]);

map1.set('name', 'bobby hadz');

map1.forEach((value, key) => {
  // Chile country
  // 30 age
  // bobby hadz name
  console.log(value, key);
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - Iterate through a Map object using a `for...of` loop

// const map1 = new Map([
//   ['country', 'Chile'],
//   ['age', 30],
// ]);

// map1.set('name', 'bobby hadz');

// for (const [key, value] of map1) {
//   // country Chile
//   // age 30
//   // name bobby hadz
//   console.log(key, value);
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Iterating over the Keys or Values of a Map object

// const map1 = new Map([
//   ['country', 'Chile'],
//   ['age', 30],
// ]);

// map1.set('name', 'bobby hadz');

// for (const key of map1.keys()) {
//   // country
//   // age
//   // name
//   console.log(key);
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Iterate over a Map in Reverse Order

// const map1 = new Map([
//   ['one', 1],
//   ['two', 2],
// ]);

// // 👇️ [['two', 2], ['one', 1]]
// const reversedArr = Array.from(map1).reverse();

// reversedArr.forEach(([key, value]) => {
//   console.log(key, value); // 👉️ two 2, one 1
// });
