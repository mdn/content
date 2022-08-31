---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
tags:
  - Array
  - Array method
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reduce
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.reduce
---
{{JSRef}}

The **`reduce()`** method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.
The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation".
If supplied, an initial value may be used in its place.
Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

Perhaps the easiest-to-understand case for `reduce()` is to return the sum of all the elements in an array:

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

## Syntax

```js
// Arrow function
reduce((previousValue, currentValue) => { /* … */ } )
reduce((previousValue, currentValue, currentIndex) => { /* … */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* … */ } )

reduce((previousValue, currentValue) => { /* … */ } , initialValue)
reduce((previousValue, currentValue, currentIndex) => { /* … */ } , initialValue)
reduce((previousValue, currentValue, currentIndex, array) => { /* … */ }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function(previousValue, currentValue) { /* … */ })
reduce(function(previousValue, currentValue, currentIndex) { /* … */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* … */ })

reduce(function(previousValue, currentValue) { /* … */ }, initialValue)
reduce(function(previousValue, currentValue, currentIndex) { /* … */ }, initialValue)
reduce(function(previousValue, currentValue, currentIndex, array) { /* … */ }, initialValue)
```

### Parameters

- `callbackFn`
  - : A "reducer" function called with the following arguments:
    - `previousValue`
      - : The value resulting from the previous call to `callbackFn`. On first call, `initialValue` if specified, otherwise the value of `array[0]`.
    - `currentValue`
      - : The value of the current element. On first call, the value of `array[0]` if an `initialValue` was specified, otherwise the value of `array[1]`.
    - `currentIndex`
      - : The index position of `currentValue` in the array. On first call, `0` if `initialValue` was specified, otherwise `1`.
    - `array`
      - : The array being traversed.
- `initialValue` {{optional_inline}}
  - : A value to which `previousValue` is initialized the first time the callback is called.
    If `initialValue` is specified, that also causes `currentValue` to be initialized to the first value in the array.
    If `initialValue` is _not_ specified, `previousValue` is initialized to the first value in the array, and `currentValue` is initialized to the second value in the array.

### Return value

The value that results from running the "reducer" callback function to completion over the entire array.

### Exceptions

- {{jsxref("TypeError")}}

  - : The array contains no elements and `initialValue` is not provided.

## Description

The `reduce()` method takes two arguments: a callback function and an optional initial value.
If an initial value is provided, `reduce()` calls the "reducer" callback function on each element in the array, in order. If no initial value is provided, `reduce()` calls the callback function on each element in the array after the first element.

`reduce()` returns the value that is returned from the callback function on the final iteration of the array.

### When to not use reduce()

Recursive functions like `reduce()` can be powerful but sometimes difficult to understand, especially for less experienced JavaScript developers. If code becomes clearer when using other array methods, developers must weigh the readability tradeoff against the other benefits of using `reduce()`. In cases where `reduce()` is the best choice, documentation and semantic variable naming can help mitigate readability drawbacks.

### Behavior during array mutations

The `reduce()` method itself does not mutate the array it is used on. However, it is possible for code inside the callback function to mutate the array. These are the possible scenarios of array mutations and how `reduce()` behaves in these scenarios:

- If elements are appended to the array _after_ `reduce()` begins to iterate over the array, the callback function does not iterate over the appended elements.
- If existing elements of the array do get changed, the values passed to the callback function will be the values from the time that reduce() was first called on the array.
- Array elements that are deleted _after_ the call to `reduce()` begins _and_ before being iterated over are not visited by `reduce()`.

### Edge cases

If the array only has one element (regardless of position) and no `initialValue` is provided, or if `initialValue` is provided but the array is empty, the solo value will be returned _without_ calling `callbackFn`.

If `initialValue` is provided and the array is not empty, then the reduce method will always invoke the callback function starting at index 0.

If `initialValue` is not provided then the reduce method will act differently for arrays with length larger than 1, equal to 1 and 0, as shown in the following example:

```js
const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[    50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax);     // 100

// callback is not invoked
[    50].reduce(getMax);     // 50
[      ].reduce(getMax, 1);  // 1

[      ].reduce(getMax);     // TypeError
```

## Examples

### How reduce() works without an initial value

The code below shows what happens if we call `reduce()` with an array and no initial value.

```js
const array = [15, 16, 17, 18, 19];

function reducer(previousValue, currentValue, index) {
  const returns = previousValue + currentValue;
  console.log(`previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`);
  return returns;
}

array.reduce(reducer);
```

The callback would be invoked four times, with the arguments and return values in each call being as follows:

|             | `previousValue` | `currentValue` | `index` | Return value |
| ------------|-----------------|----------------|---------|--------------|
| First call  | `15`            | `16`           | `1`     | `31`         |
| Second call | `31`            | `17`           | `2`     | `48`         |
| Third call  | `48`            | `18`           | `3`     | `66`         |
| Fourth call | `66`            | `19`           | `4`     | `85`         |

The `array` parameter never changes through the process — it's always `[15, 16, 17, 18, 19]`. The value returned by `reduce()` would be that of the last callback invocation (`85`).

### How reduce() works with an initial value

Here we reduce the same array using the same algorithm, but with an `initialValue` of `10` passed the second argument to `reduce()`:

```js
[15, 16, 17, 18, 19].reduce((previousValue, currentValue) => previousValue + currentValue, 10)
```

The callback would be invoked five times, with the arguments and return values in each call being as follows:

|             | `previousValue` | `currentValue` | `index` | Return value |
| ------------|-----------------|----------------|---------|--------------|
| First call  | `10`            | `15`           | `0`     | `25`         |
| Second call | `25`            | `16`           | `1`     | `41`         |
| Third call  | `41`            | `17`           | `2`     | `58`         |
| Fourth call | `58`            | `18`           | `3`     | `76`         |
| Fifth call  | `76`            | `19`           | `4`     | `95`         |

The value returned by `reduce()` in this case would be `95`.

### Sum of values in an object array

To sum up the values contained in an array of objects, you **must** supply
an `initialValue`, so that each item passes through your function.

```js
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (previousValue, currentValue) => previousValue + currentValue.x,
  0,
);

console.log(sum); // logs 6
```

### Flatten an array of arrays

```js
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (previousValue, currentValue) => previousValue.concat(currentValue),
  [],
);
// flattened is [0, 1, 2, 3, 4, 5]
```

### Counting instances of values in an object

```js
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce((allNames, name) => {
  allNames[name] ??= 0;
  allNames[name]++;
  // Remember to return the object, or the next iteration
  // will receive undefined
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

### Grouping objects by a property

```js
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    acc[key] ??= [];
    acc[key].push(obj);
    return acc;
  }, {});
}

const groupedPeople = groupBy(people, 'age')
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
```

### Concatenating arrays contained in an array of objects using the spread syntax and initialValue

```js
// friends - an array of objects
// where object field "books" is a list of favorite books
const friends = [
  {
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21,
  },
  {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26,
  },
  {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18,
  },
];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
const allbooks = friends.reduce(
  (previousValue, currentValue) => [...previousValue, ...currentValue.books],
  ['Alphabet'],
);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
```

### Remove duplicate items in an array

> **Note:** The same effect can be achieved with {{jsxref("Set")}} and {{jsxref("Array.from()")}} as `const arrayWithNoDuplicates = Array.from(new Set(myArray))` with better performance.

```js
const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
const myArrayWithNoDuplicates = myArray.reduce((previousValue, currentValue) => {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue);
  }
  return previousValue;
}, []);

console.log(myArrayWithNoDuplicates);
```

### Replace .filter().map() with .reduce()

Using {{jsxref("Array.filter()")}} then {{jsxref("Array.map()")}} traverses the array
twice, but you can achieve the same effect while traversing only once with
{{jsxref("Array.reduce()")}}, thereby being more efficient. (If you like `for` loops, you
can filter and map while traversing once with {{jsxref("Array.forEach()")}}.)

```js
const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    previousValue.push(doubled);
  }
  return previousValue;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]
```

### Running Promises in Sequence

```js
/**
 * Chain a series of promise handlers.
 *
 * @param {array} arr - A list of promise handlers, each one receiving the
 * resolved result of the previous handler and returning another promise.
 * @param {*} input The initial value to start the promise chain
 * @return {Object} Final promise with a chain of handlers attached
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input),
  );
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10).then(console.log); // 1200
```

### Function composition enabling piping

```js
// Building-blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Function composition enabling pipe functionality
const pipe = (...functions) => (initialValue) => functions.reduce(
  (acc, fn) => fn(acc),
  initialValue,
);

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6);   // 36
multiply9(9);   // 81
multiply16(16); // 256
multiply24(10); // 240
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.reduce` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.reduceRight()")}}
