---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
tags:
  - Function
  - JavaScript
  - Method
browser-compat: javascript.builtins.Function.call
---
{{JSRef}}

The **`call()`** method calls the function with a given `this` value and arguments provided individually.

{{EmbedInteractiveExample("pages/js/function-call.html")}}

## Syntax

```js
call()
call(thisArg)
call(thisArg, arg1, /* …, */ argN)
```

### Parameters

- `thisArg`
  - : The value to use as `this` when calling `func`. If the function is not in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) and [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) will be replaced with the global object, and primitive values will be converted to objects.
- `arg1, …, argN` {{optional_inline}}
  - : Arguments for the function.

### Return value

The result of calling the function with the specified `this` value and arguments.

## Description

> **Note:** This function is almost identical to {{jsxref("Function.prototype.apply()", "apply()")}}, except that `call()` accepts an **argument list**, while `apply()` accepts a **single array of arguments** — for example, `func.apply(this, ['eat', 'bananas'])` vs. `func.call(this, 'eat', 'bananas')`.

The `call()` allows for a function/method belonging to one object to be
assigned and called for a different object.

`call()` provides a new value of `this` to the function/method.
With `call()`, you can write a method once and then inherit it in another
object, without having to rewrite the method for the new object.

## Examples

### Using call() to chain constructors for an object

You can use `call` to chain constructors for an object (similar to Java).

In the following example, the constructor for the `Product` object is
defined with two parameters: `name` and `price`.

Two other functions, `Food` and `Toy`, invoke
`Product`, passing `this`, `name`, and
`price`. `Product` initializes the properties `name`
and `price`, both specialized functions define the `category`.

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

const cheese = new Food('feta', 5);
const fun = new Toy('robot', 40);
```

### Using call() to invoke an anonymous function

In this example, we create an anonymous function and use `call` to invoke it
on every object in an array.

The main purpose of the anonymous function here is to add a `print` function
to every object, which is able to print the correct index of the object in the array.

> **Note:** Passing the object as `this` value is not strictly necessary, but is done
> for explanatory purpose.

```js
const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

function assignPrintMethod(i) {
  this.print = function () {
    console.log(`#${i} ${this.species}: ${this.name}`);
  }
  this.print();
}

for (let i = 0; i < animals.length; i++) {
  assignPrintMethod.call(animals[i], i);
}
```

### Using call() to invoke a function and specifying the context for 'this'

In the example below, when we call `greet`, the value of `this`
will be bound to object `obj`.

```js
function greet() {
  const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
}

const obj = {
  animal: 'cats',
  sleepDuration: '12 and 16 hours',
};

greet.call(obj);  // cats typically sleep between 12 and 16 hours
```

### Using call() to invoke a function and without specifying the first argument

In the example below, we invoke the `display` function without passing the
first argument. If the first argument is not passed, the value of `this` is
bound to the global object.

```js
// var creates a property on the global object
var globProp = 'Wisen';

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // logs "globProp value is Wisen"
```

In strict mode, the value of `this` will be `undefined`.

```js
'use strict';

var globProp = 'Wisen';

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // throws TypeError: Cannot read the property of 'globProp' of undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.apply()")}}
- [Introduction to Object-Oriented JavaScript](/en-US/docs/Learn/JavaScript/Objects)
