---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.forEach
---
{{JSRef}}

The **`forEach()`** method executes a provided function once
for each array element.

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## Syntax

```js
// Arrow function
forEach((element) => { /* … */ })
forEach((element, index) => { /* … */ })
forEach((element, index, array) => { /* … */ })

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function(element) { /* … */ })
forEach(function(element, index) { /* … */ })
forEach(function(element, index, array){ /* … */ })
forEach(function(element, index, array) { /* … */ }, thisArg)
```

### Parameters

- `callbackFn`

  - : Function to execute on each element.

    The function is called with the following arguments:

    - `element`
      - : The current element being processed in the array.
    - `index`
      - : The index of `element` in the array.
    - `array`
      - : The array `forEach()` was called upon.

- `thisArg` {{optional_inline}}
  - : Value to use as `this` when executing `callbackFn`.

### Return value

`undefined`.

## Description

`forEach()` calls a provided `callbackFn` function once
for each element in an array in ascending index order. It is not invoked for index properties
that have been deleted or are uninitialized. (For sparse arrays, [see example below](#no_operation_for_uninitialized_values_sparse_arrays).)

`callbackFn` is invoked with three arguments:

1. the value of the element
2. the index of the element
3. the Array object being traversed

If a `thisArg` parameter is provided to `forEach()`,
it will be used as callback's `this` value. The
`thisArg` value ultimately observable by
`callbackFn` is determined according to
[the usual rules for determining the `this` seen by a function](/en-US/docs/Web/JavaScript/Reference/Operators/this).

The range of elements processed by `forEach()` is set before the first
invocation of `callbackFn`. Elements which are assigned to indexes
already visited, or to indexes outside the range, will not be visited by
`callbackFn`. If existing elements of the array are changed or
deleted, their value as passed to `callbackFn` will be the value at
the time `forEach()` visits them; elements that are deleted before being
visited are not visited. If elements that are already visited are removed (e.g. using
{{jsxref("Array.prototype.shift()", "shift()")}}) during the iteration, later elements
will be skipped. ([See this example, below](#modifying_the_array_during_iteration).)

> **Warning:** Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

`forEach()` executes the `callbackFn` function once for
each array element; unlike {{jsxref("Array.prototype.map()", "map()")}} or
{{jsxref("Array.prototype.reduce()", "reduce()")}} it always returns the value
{{jsxref("undefined")}} and is not chainable. The typical use case is to execute side
effects at the end of a chain.

`forEach()` does not mutate the array on which it is called. (However,
`callbackFn` may do so)

> **Note:** There is no way to stop or break a `forEach()` loop other than by throwing
> an exception. If you need such behavior, the `forEach()` method is the
> wrong tool.
>
> Early termination may be accomplished with:
>
> - A simple [for](/en-US/docs/Web/JavaScript/Reference/Statements/for)
>   loop
> - A [for...of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
>   / [for...in](/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
>   loops
> - {{jsxref("Array.prototype.every()")}}
> - {{jsxref("Array.prototype.some()")}}
> - {{jsxref("Array.prototype.find()")}}
> - {{jsxref("Array.prototype.findIndex()")}}
>
> Array methods: {{jsxref("Array.prototype.every()", "every()")}},
> {{jsxref("Array.prototype.some()", "some()")}}, {{jsxref("Array.prototype.find()",
    "find()")}}, and {{jsxref("Array.prototype.findIndex()", "findIndex()")}} test the
> array elements with a predicate returning a truthy value to determine if further
> iteration is required.

> **Note:** `forEach` expects a synchronous function.
>
> `forEach` does not wait for promises. Make sure you are aware of the
> implications while using promises (or async functions) as `forEach` callback.
>
> ```js
> const ratings = [5, 4, 5];
> let sum = 0;
>
> const sumFunction = async (a, b) => a + b;
>
> ratings.forEach(async (rating) => {
>   sum = await sumFunction(sum, rating);
> });
>
> console.log(sum);
> // Naively expected output: 14
> // Actual output: 0
> ```

## Examples

### No operation for uninitialized values (sparse arrays)

```js
const arraySparse = [1, 3, /* empty */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

// 1
// 3
// 7
// numCallbackRuns: 3
// comment: as you can see the missing value between 3 and 7 didn't invoke callback function.
```

### Converting a for loop to forEach

```js
const items = ['item1', 'item2', 'item3'];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach((item) => {
  copyItems.push(item);
});
```

### Printing the contents of an array

> **Note:** In order to display the content of an array in the console,
> you can use {{domxref("console/table", "console.table()")}}, which prints a formatted
> version of the array.
>
> The following example illustrates an alternative approach, using
> `forEach()`.

The following code logs a line for each element in an array:

```js
const logArrayElements = (element, index, array) => {
  console.log(`a[${index}] = ${element}`);
};

// Notice that index 2 is skipped, since there is no item at
// that position in the array.
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### Using thisArg

The following (contrived) example updates an object's properties from each entry in the
array:

```js
class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(array) {
    // Only function expressions will have its own this binding
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  }
}

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); // 16
```

Since the `thisArg` parameter (`this`) is provided to
`forEach()`, it is passed to `callback` each time it's
invoked. The callback uses it as its `this` value.

> **Note:** If passing the callback function used an
> [arrow function expression](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions),
> the `thisArg` parameter could be omitted,
> since all arrow functions lexically bind the {{jsxref("Operators/this", "this")}}
> value.

### An object copy function

The following code creates a copy of a given object.

There are different ways to create a copy of an object. The following is just one way
and is presented to explain how `Array.prototype.forEach()` works by using
`Object.*` utility functions.

```js
const copy = (obj) => {
  const copy = Object.create(Object.getPrototypeOf(obj));
  const propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
};

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1); // obj2 looks like obj1 now
```

### Modifying the array during iteration

The following example logs `one`, `two`, `four`.

When the entry containing the value `two` is reached, the first entry of the
whole array is shifted off—resulting in all remaining entries moving up one position.
Because element `four` is now at an earlier position in the array,
`three` will be skipped.

`forEach()` does not make a copy of the array before iterating.

```js
const words = ['one', 'two', 'three', 'four'];
words.forEach((word) => {
  console.log(word);
  if (word === 'two') {
    words.shift(); //'one' will delete from array
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']
```

### Flatten an array

The following example is only here for learning purpose. If you want to flatten an
array using built-in methods you can use {{jsxref("Array.prototype.flat()")}}.

```js
const flatten = (arr) => {
  const result = [];
  arr.forEach((i) => {
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      result.push(i);
    }
  });
  return result;
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.forEach` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
