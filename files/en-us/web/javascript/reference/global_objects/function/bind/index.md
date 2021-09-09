---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
tags:
  - ECMAScript 2015
  - ECMAScript 5
  - Function
  - JavaScript
  - Method
  - Polyfill
browser-compat: javascript.builtins.Function.bind
---
{{JSRef}}

The **`bind()`** method creates a new
function that, when called, has its `this` keyword set to the provided
value, with a given sequence of arguments preceding any provided when the new function
is called.

{{EmbedInteractiveExample("pages/js/function-bind.html", "taller")}}

## Syntax

```js
bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, ... , argN)
```

### Parameters

- `thisArg`
  - : The value to be passed as the `this` parameter to the target function
    `func` when the bound function is called. The value is ignored
    if the bound function is constructed using the {{jsxref("Operators/new", "new")}}
    operator. When using `bind` to create a function (supplied as a callback)
    inside a `setTimeout`, any primitive value passed as
    `thisArg` is converted to object. If no arguments are provided
    to `bind `, or if the `thisArg` is
    `null` or `undefined`, the
    `this` of the executing scope is treated as the
    `thisArg` for the new function.
- `arg1, arg2, ...argN`
  {{optional_inline}}
  - : Arguments to prepend to arguments provided to the bound function when invoking
    `func`.

### Return value

A copy of the given function with the specified `this` value, and initial
arguments (if provided).

## Description

The `bind()` function creates a new **bound function**, which
is an _exotic function object_ (a term from ECMAScript 2015) that wraps the
original function object. Calling the bound function generally results in the execution
of its wrapped function.

A bound function has the following internal properties:

- **`[[BoundTargetFunction]]`**
  - : The wrapped function object
- **`[[BoundThis]]`**
  - : The value that is always passed as `this` value when calling the wrapped
    function.
- **`[[BoundArguments]]`**
  - : A list of values whose elements are used as the first arguments to any call to the
    wrapped function.
- **`[[Call]]`**
  - : Executes code associated with this object. Invoked via a function call expression.
    The arguments to the internal method are a `this` value and a list
    containing the arguments passed to the function by a call expression.

When a bound function is called, it calls internal method `[[Call]]` on
`[[BoundTargetFunction]]`, with following arguments
`Call(boundThis, ...args)`. Where
`boundThis` is `[[BoundThis]]`,
`args` is `[[BoundArguments]]`, followed by the
arguments passed by the function call.

A bound function may also be constructed using the {{jsxref("Operators/new", "new")}}
operator. Doing so acts as though the target function had instead been constructed. The
provided `this` value is ignored, while prepended arguments are provided to
the emulated function.

## Examples

### Creating a bound function

The simplest use of `bind()` is to make a function that, no matter how it is
called, is called with a particular `this` value.

A common mistake for new JavaScript programmers is to extract a method from an object,
then to later call that function and expect it to use the original object as its
`this` (e.g., by using the method in callback-based code).

Without special care, however, the original object is usually lost. Creating a bound
function from the function, using the original object, neatly solves this problem:

```js
this.x = 9;    // 'this' refers to global 'window' object here in a browser
const module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX();
//  returns 81

const retrieveX = module.getX;
retrieveX();
//  returns 9; the function gets invoked at the global scope

//  Create a new function with 'this' bound to module
//  New programmers might confuse the
//  global variable 'x' with module's property 'x'
const boundGetX = retrieveX.bind(module);
boundGetX();
//  returns 81
```

### Partially applied functions

The next simplest use of `bind()` is to make a function with pre-specified
initial arguments.

These arguments (if any) follow the provided `this` value and are then
inserted at the start of the arguments passed to the target function, followed by
whatever arguments are passed to the bound function at the time it is called.

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

const list1 = list(1, 2, 3);
//  [1, 2, 3]

const result1 = addArguments(1, 2);
//  3

// Create a function with a preset leading argument
const leadingThirtysevenList = list.bind(null, 37);

// Create a function with a preset first argument.
const addThirtySeven = addArguments.bind(null, 37);

const list2 = leadingThirtysevenList();
//  [37]

const list3 = leadingThirtysevenList(1, 2, 3);
//  [37, 1, 2, 3]

const result2 = addThirtySeven(5);
//  37 + 5 = 42

const result3 = addThirtySeven(5, 10);
//  37 + 5 = 42
//  (the second argument is ignored)
```

### With `setTimeout()`

By default within {{domxref("setTimeout()")}}, the `this` keyword will be set to the
{{domxref("window")}} (or `global`) object. When working with class methods
that require `this` to refer to class instances, you may explicitly bind
`this` to the callback function, in order to maintain the instance.

```js
function LateBloomer() {
  this.petalCount = Math.floor(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
};

const flower = new LateBloomer();
flower.bloom();
//  after 1 second, calls 'flower.declare()'
```

### Bound functions used as constructors

> **Warning:** This section demonstrates JavaScript capabilities and
> documents some edge cases of the `bind()` method.
>
> The methods shown below are not the best way to do things, and probably should not be
> used in any production environment.

Bound functions are automatically suitable for use with the {{jsxref("Operators/new",
  "new")}} operator to construct new instances created by the target function. When a
bound function is used to construct a value, the provided `this` is ignored.

However, provided arguments are still prepended to the constructor call:

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `${this.x},${this.y}`;
};

const p = new Point(1, 2);
p.toString();
// '1,2'

//  not supported in the polyfill below,

//  works fine with native bind:

const YAxisPoint = Point.bind(null, 0/*x*/);

const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0/*x*/);

const axisPoint = new YAxisPoint(5);
axisPoint.toString();                    // '0,5'

axisPoint instanceof Point;              // true
axisPoint instanceof YAxisPoint;         // true
new YAxisPoint(17, 42) instanceof Point; // true
```

Note that you need not do anything special to create a bound function for use with
{{jsxref("Operators/new", "new")}}.

The corollary is that you need not do anything special to create a bound function to be
called plainly, even if you would rather require the bound function to only be called
using {{jsxref("Operators/new", "new")}}.

```js
//  Example can be run directly in your JavaScript console
//  ...continued from above

//  Can still be called as a normal function
//  (although usually this is undesired)
YAxisPoint(13);

`${emptyObj.x},${emptyObj.y}`;
// >  '0,13'
```

If you wish to support the use of a bound function only using {{jsxref("Operators/new",
  "new")}}, or only by calling it, the target function must enforce that restriction.

### Creating shortcuts

`bind()` is also helpful in cases where you want to create a shortcut to a
function which requires a specific `this` value.

Take {{jsxref("Array.prototype.slice()")}}, for example, which you want to use for
converting an array-like object to a real array. You could create a shortcut like this:

```js
const slice = Array.prototype.slice;

// ...

slice.apply(arguments);
```

With `bind()`, this can be simplified.

In the following piece of code, `slice()` is a bound function to the
{{jsxref("Function.prototype.apply()", "apply()")}} function of
{{jsxref("Function")}}, with the `this` value set to the
{{jsxref("Array.prototype.slice()", "slice()")}} function of
{{jsxref("Array.prototype")}}. This means that additional `apply()` calls can
be eliminated:

```js
//  same as "slice" in the previous example
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.apply.bind(unboundSlice);

// ...

slice(arguments);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Function.prototype.bind` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-function)
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "Functions", "", 1)}}
