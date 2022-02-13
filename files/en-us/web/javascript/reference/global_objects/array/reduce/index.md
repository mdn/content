---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/Reduce
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

The **`reduce()`** method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.
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
reduce((previousValue, currentValue) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function(previousValue, currentValue) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
```

### Parameters

- `callbackFn`
  - : A “reducer” function that takes four arguments:
    - `previousValue`: the value resulting from the previous call to `callbackFn`.
      On first call, `initialValue` if specified, otherwise the value of `array[0]`.
    - `currentValue`: the value of the current element.
      On first call, the value of `array[0]` if an `initialValue` was specified, otherwise the value of `array[1]`.
    - `currentIndex`: the index position of `currentValue` in the array.
      On first call, `0` if `initialValue` was specified, otherwise `1`.
    - `array`: the array to traverse.

- `initialValue` {{optional_inline}}
  - : A value to which *previousValue* is initialized the first time the callback is called.
    If `initialValue` is specified, that also causes `currentValue` to be initialized to the first value in the array.
    If `initialValue` is *not* specified, `previousValue` is initialized to the first value in the array, and `currentValue` is initialized to the second value in the array.

### Return value

The value that results from running the “reducer” callback function to completion over the entire array.

### Exceptions

- {{jsxref("TypeError")}}

  - : The array contains no elements and `initialValue` is not provided.

## Description

`reduce` takes two arguments, a callback function and an optional initial value.
`reduce` calls the callback, as a function, once for each element after the first element present in the array, in ascending order.

`reduce` returns whatever is returned from the callback on the final iteration.

### When to not use reduce()

Recursive functions like `reduce` can be powerful, but sometimes difficult to understand,
especially for less experienced JavaScript developers.
If code becomes clearer when using other array methods,
developers must weigh the readability tradeoff against the other benefits
of using reduce.
In cases where reduce is the best choice, documentation and semantic variable
naming can help mitigate readability drawnbacks.

### Behavior during array mutations

`reduce` does not mutate the array it is used on, however it is possible for code inside the callback to mutate
the array.

If elements are appended to the array after `reduce` begins to iterate over the array, the appended
elememts are not visited by *callbackfn*.

If existing elements of the array are changed, their value as passed to *callbackfn* will be the value at the time `reduce` visits them.

Elements that are deleted after the call to `reduce` begins and before being visited are not visited.

### Edge cases

If the array only has one element (regardless of position) and no *initialValue* is provided, or if *initialValue* is provided but the array is empty, the solo value will be returned _without_ calling _`callbackFn`._

If *initialValue* is provided and the array is not empty, then the reduce method will always invoke the callback function starting at index 0.

If *initialValue* is not provided then the reduce method will act differently for arrays with length larger than 1, equal to 1 and 0, as shown in the following example:

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

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

array.reduce(reducer);
```

The callback would be invoked four times, with the arguments and return values in each call being as follows:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">
        <code><var>callback</var></code> iteration
      </th>
      <th scope="col">
        <code><var>previousValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentIndex</var></code>
      </th>
      <th scope="col">
        <code><var>array</var></code>
      </th>
      <th scope="col">return value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">first call</th>
      <td><code>15</code></td>
      <td><code>16</code></td>
      <td><code>1</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>31</code></td>
    </tr>
    <tr>
      <th scope="row">second call</th>
      <td><code>31</code></td>
      <td><code>17</code></td>
      <td><code>2</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>48</code></td>
    </tr>
    <tr>
      <th scope="row">third call</th>
      <td><code>48</code></td>
      <td><code>18</code></td>
      <td><code>3</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>66</code></td>
    </tr>
    <tr>
      <th scope="row">fourth call</th>
      <td><code>66</code></td>
      <td><code>19</code></td>
      <td><code>4</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>85</code></td>
    </tr>
  </tbody>
</table>

The value returned by `reduce()` would be that of the last callback invocation (`85`).

### How reduce() works with an initial value

Here we reduce the same array using the same algorithm, but with an *initialValue* of `10` passed the second argument to `reduce()`:

```js
[15, 16, 17, 18, 19].reduce( (previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 10 )
```

The callback would be invoked five times, with the arguments and return values in each call being as follows:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">
        <code><var>callback</var></code> iteration
      </th>
      <th scope="col">
        <code><var>previousValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentIndex</var></code>
      </th>
      <th scope="col">
        <code><var>array</var></code>
      </th>
      <th scope="col">return value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">first call</th>
      <td><code>10</code></td>
      <td><code>15</code></td>
      <td><code>0</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>25</code></td>
    </tr>
    <tr>
      <th scope="row">second call</th>
      <td><code>25</code></td>
      <td><code>16</code></td>
      <td><code>1</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>41</code></td>
    </tr>
    <tr>
      <th scope="row">third call</th>
      <td><code>41</code></td>
      <td><code>17</code></td>
      <td><code>2</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>58</code></td>
    </tr>
    <tr>
      <th scope="row">fourth call</th>
      <td><code>58</code></td>
      <td><code>18</code></td>
      <td><code>3</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>76</code></td>
    </tr>
    <tr>
      <th scope="row">fifth call</th>
      <td><code>76</code></td>
      <td><code>19</code></td>
      <td><code>4</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>95</code></td>
    </tr>
  </tbody>
</table>

The value returned by `reduce()` in this case would be `95`.

### Sum all the values of an array

```js
let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
  return previousValue + currentValue
}, 0)
// sum is 6
```

Alternatively written with an arrow function:

```js
let total = [ 0, 1, 2, 3 ].reduce(
  ( previousValue, currentValue ) => previousValue + currentValue,
  0
)
```

### Sum of values in an object array

To sum up the values contained in an array of objects, you **must** supply
an *initialValue*, so that each item passes through your function.

```js
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.x
}, initialValue)

console.log(sum) // logs 6
```

Alternatively written with an arrow function:

```js
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (previousValue, currentValue) => previousValue + currentValue.x
    , initialValue
)

console.log(sum) // logs 6
```

### Flatten an array of arrays

```js
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(previousValue, currentValue) {
    return previousValue.concat(currentValue)
  },
  []
)
// flattened is [0, 1, 2, 3, 4, 5]
```

Alternatively written with an arrow function:

```js
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( previousValue, currentValue ) => previousValue.concat(currentValue),
  []
)
```

### Counting instances of values in an object

```js
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

### Grouping objects by a property

```js
let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age')
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
```

### Bonding arrays contained in an array of objects using the spread operator and initialValue

```js
// friends - an array of objects
// where object field "books" is a list of favorite books
let friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}]

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
let allbooks = friends.reduce(function(previousValue, currentValue) {
  return [...previousValue, ...currentValue.books]
}, ['Alphabet'])

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
```

### Remove duplicate items in an array

> **Note:** If you are using an environment compatible with
> {{jsxref("Set")}} and {{jsxref("Array.from()")}}, you could use
> `let arrayWithNoDuplicates = Array.from(new Set(myArray))` to get an array where
> duplicate items have been removed.

```js
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

console.log(myArrayWithNoDuplicates)
```

### Replace .filter().map() with .reduce()

Using {{jsxref("Array.filter()")}} then {{jsxref("Array.map()")}} traverses the array
twice, but you can achieve the same effect while traversing only once with
{{jsxref("Array.reduce()")}}, thereby being more efficient. (If you like `for` loops, you
can filter and map while traversing once with {{jsxref("Array.forEach()")}}).

```js
const numbers = [-5, 6, 2, 0,];

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
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  )
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5)
  })
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2)
  })
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4)
  })
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10)
  .then(console.log)   // 1200
```

### Function composition enabling piping

```js
// Building-blocks to use for composition
const double = x => x + x
const triple = x => 3 * x
const quadruple = x => 4 * x

// Function composition enabling pipe functionality
const pipe = (...functions) => initialValue => functions.reduce(
    (acc, fn) => fn(acc),
    initialValue
)

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)

// Usage
multiply6(6)   // 36
multiply9(9)   // 81
multiply16(16) // 256
multiply24(10) // 240
```

### Write map using reduce

```js
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, initialValue) {
    return this.reduce(function(mappedArray, currentValue, currentIndex, array) {
      mappedArray[currentIndex] = callback.call(initialValue, currentValue, currentIndex, array)
      return mappedArray
    }, [])
  }
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, currentIndex, array) => currentValue + currentIndex + array.length
) // [5, 7, , 10]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.reduce` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.reduceRight()")}}
