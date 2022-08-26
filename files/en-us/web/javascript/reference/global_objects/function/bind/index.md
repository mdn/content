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
bind(thisArg, arg1, /* …, */ argN)
```

### Parameters

- `thisArg`
  - : The value to be passed as the `this` parameter to the target function `func` when the bound function is called. If the function is not in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) and [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) will be replaced with the global object, and primitive values will be converted to objects. The value is ignored if the bound function is constructed using the {{jsxref("Operators/new", "new")}} operator.
- `arg1, …, argN` {{optional_inline}}
  - : Arguments to prepend to arguments provided to the bound function when invoking `func`.

### Return value

A copy of the given function with the specified `this` value, and initial
arguments (if provided).

## Description

The `bind()` function creates a new **bound function**. Calling the bound function generally results in the execution of its wrapped function. The bound function will store the parameters passed — which include the value of `this` and the first few arguments — as its internal state. These values are stored in advance, instead of being passed at call time. You can generally see `const boundFn = fn.bind(thisArg, arg1, arg2)` as being equivalent to `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)`.

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
this.x = 9;    // 'this' refers to the global object (e.g. 'window') in non-strict mode
const module = {
  x: 81,
  getX() { return this.x; }
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

> **Note:** If you run this example in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) (e.g. in ECMAScript modules, or through the `"use strict"` directive), the global `this` value will be undefined, causing the `retrieveX` call to fail.
>
> If you run this in a Node CommonJS module, the top-scope `this` will be pointing to `module.exports` instead of `globalThis`, regardless of being in strict mode or not. However, in functions, the reference of unbound `this` still follows the rule of "`globalThis` in non-strict, `undefined` in strict". Therefore, in non-strict mode (default), `retrieveX` will return `undefined` because `this.x = 9` is writing to a different object (`module.exports`) from what `getX` is reading from (`globalThis`).

### Partially applied functions

The next simplest use of `bind()` is to make a function with pre-specified
initial arguments.

These arguments (if any) follow the provided `this` value and are then
inserted at the start of the arguments passed to the target function, followed by
whatever arguments are passed to the bound function at the time it is called.

```js
function list(...args) {
  return args;
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

const list1 = list(1, 2, 3);
//  [1, 2, 3]

const result1 = addArguments(1, 2);
//  3

// Create a function with a preset leading argument
const leadingThirtySevenList = list.bind(null, 37);

// Create a function with a preset first argument.
const addThirtySeven = addArguments.bind(null, 37);

const list2 = leadingThirtySevenList();
//  [37]

const list3 = leadingThirtySevenList(1, 2, 3);
//  [37, 1, 2, 3]

const result2 = addThirtySeven(5);
//  37 + 5 = 42

const result3 = addThirtySeven(5, 10);
//  37 + 5 = 42
//  (the second argument is ignored)
```

### With setTimeout()

By default within {{domxref("setTimeout()")}}, the `this` keyword will be set to the
{{domxref("window")}} (or `global`) object. When working with class methods
that require `this` to refer to class instances, you may explicitly bind
`this` to the callback function, in order to maintain the instance.

```js
class LateBloomer {
  constructor() {
    this.petalCount = Math.floor(Math.random() * 12) + 1;
  }
  bloom() {
    // Declare bloom after a delay of 1 second
    setTimeout(this.declare.bind(this), 1000);
  }
  declare() {
    console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
  }
}

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

Point.prototype.toString = function () {
  return `${this.x},${this.y}`;
};

const p = new Point(1, 2);
p.toString();
// '1,2'

let YAxisPoint = Point.bind(null, 0/*x*/);

const emptyObj = {};
YAxisPoint = Point.bind(emptyObj, 0/*x*/);

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
`Array.prototype`. This means that additional `apply()` calls can
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

- [Polyfill of `Function.prototype.bind` in `core-js`](https://github.com/zloirock/core-js#ecmascript-function)
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "Functions", "", 1)}}
