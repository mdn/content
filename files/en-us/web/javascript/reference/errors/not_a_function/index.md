---
title: 'TypeError: "x" is not a function'
slug: Web/JavaScript/Reference/Errors/Not_a_function
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "is not a function" occurs when there was an attempt to call a
value from a function, but the value is not actually a function.

## Message

```plain
TypeError: "x" is not a function. (V8-based & Firefox & Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

It attempted to call a value from a function, but the value is not actually a function.
Some code expects you to provide a function, but that didn't happen.

Maybe there is a typo in the function name? Maybe the object you are calling the method
on does not have this function? For example, JavaScript `Objects` have no
`map` function, but the JavaScript `Array` object does.

There are many built-in functions in need of a (callback) function. You will have to
provide a function in order to have these methods working properly:

- When working with {{jsxref("Array")}} or {{jsxref("TypedArray")}} objects:

  - {{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}},
    {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}},
    {{jsxref("Array.prototype.filter()")}}, {{jsxref("Array.prototype.reduce()")}},
    {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}

- When working with {{jsxref("Map")}} and {{jsxref("Set")}} objects:

  - {{jsxref("Map.prototype.forEach()")}} and {{jsxref("Set.prototype.forEach()")}}

## Examples

### A typo in the function name

In this case, which happens way too often, there is a typo in the method name:

```js example-bad
const x = document.getElementByID("foo");
// TypeError: document.getElementByID is not a function
```

The correct function name is `getElementById`:

```js example-good
const x = document.getElementById("foo");
```

### Function called on the wrong object

For certain methods, you have to provide a (callback) function and it will work on
specific objects only. In this example, {{jsxref("Array.prototype.map()")}} is used,
which will work with {{jsxref("Array")}} objects only.

```js example-bad
const obj = { a: 13, b: 37, c: 42 };

obj.map(function (num) {
  return num * 2;
});

// TypeError: obj.map is not a function
```

Use an array instead:

```js example-good
const numbers = [1, 4, 9];

numbers.map(function (num) {
  return num * 2;
}); // [2, 8, 18]
```

### Function shares a name with a pre-existing property

Sometimes when making a class, you may have a property and a function with the same
name. Upon calling the function, the compiler thinks that the function ceases to exist.

```js example-bad
function Dog() {
  this.age = 11;
  this.color = "black";
  this.name = "Ralph";
  return this;
}

Dog.prototype.name = function (name) {
  this.name = name;
  return this;
};

const myNewDog = new Dog();
myNewDog.name("Cassidy"); // TypeError: myNewDog.name is not a function
```

Use a different property name instead:

```js example-good
function Dog() {
  this.age = 11;
  this.color = "black";
  this.dogName = "Ralph"; // Using this.dogName instead of .name
  return this;
}

Dog.prototype.name = function (name) {
  this.dogName = name;
  return this;
};

const myNewDog = new Dog();
myNewDog.name("Cassidy"); // Dog { age: 11, color: 'black', dogName: 'Cassidy' }
```

### Using parentheses for multiplication

In math, you can write 2 × (3 + 5) as 2\*(3 + 5) or just 2(3 + 5).

Using the latter will throw an error:

```js example-bad
const sixteen = 2(3 + 5);
console.log(`2 x (3 + 5) is ${sixteen}`);
// Uncaught TypeError: 2 is not a function
```

You can correct the code by adding a `*` operator:

```js example-good
const sixteen = 2 * (3 + 5);
console.log(`2 x (3 + 5) is ${sixteen}`);
// 2 x (3 + 5) is 16
```

### Import the exported module correctly

Ensure you are importing the module correctly.

An example helpers library (`helpers.js`)

```js
const helpers = function () {};

helpers.groupBy = function (objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    acc[key] ??= [];
    acc[key].push(obj);
    return acc;
  }, {});
};

export default helpers;
```

The correct import usage (`App.js`):

```js
import helpers from "./helpers";
```

## See also

- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
