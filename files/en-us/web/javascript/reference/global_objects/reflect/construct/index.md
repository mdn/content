---
title: Reflect.construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
  - Polyfill
browser-compat: javascript.builtins.Reflect.construct
---
{{JSRef}}

The static **`Reflect.construct()`** method acts like the
{{jsxref("Operators/new", "new")}} operator, but as a function. It is equivalent to
calling `new target(...args)`. It gives also the added option to specify a
different prototype.

{{EmbedInteractiveExample("pages/js/reflect-construct.html", "taller")}}

## Syntax

```js
Reflect.construct(target, argumentsList)
Reflect.construct(target, argumentsList, newTarget)
```

### Parameters

- `target`
  - : The target function to call.
- `argumentsList`
  - : An array-like object specifying the arguments with which
    `target` should be called.
- `newTarget` {{optional_inline}}
  - : The constructor whose prototype should be used. See also the [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target)
    operator. If `newTarget` is not present, its value defaults
    to `target`.

### Return value

A new instance of `target` (or `newTarget`,
if present), initialized by `target` as a constructor with the
given `argumentsList`.

### Exceptions

A {{jsxref("TypeError")}}, if `target` or
`newTarget` are not constructors.

## Description

`Reflect.construct()` allows you to invoke a constructor with a variable
number of arguments. (This would also be possible by using the
[spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) combined with the
[`new` operator](/en-US/docs/Web/JavaScript/Reference/Operators/new).)

```js
const obj = new Foo(...args);
const obj = Reflect.construct(Foo, args);
```

### Reflect.construct() vs Object.create()

Prior to the introduction of `Reflect`, objects could be constructed using
an arbitrary combination of constructor and prototype by using
{{jsxref("Object.create()")}}.

```js
function OneClass() {
  this.name = 'one';
}

function OtherClass() {
  this.name = 'other';
}

// Calling this:
const obj1 = Reflect.construct(OneClass, args, OtherClass);

// ...has the same result as this:
const obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, args);

console.log(obj1.name); // 'one'
console.log(obj2.name); // 'one'

console.log(obj1 instanceof OneClass); // false
console.log(obj2 instanceof OneClass); // false

console.log(obj1 instanceof OtherClass); // true
console.log(obj2 instanceof OtherClass); // true


// Another example to demonstrate below:

function func1(a, b, c, d) {
  console.log(arguments[3]);
}

function func2(d, e, f, g) {
  console.log(arguments[3]);
}

const obj1 = Reflect.construct(func1, ['I', 'Love', 'my', 'country']);
```

However, while the end result is the same, there is one important difference in the
process. When using `Object.create()` and
{{jsxref("Function.prototype.apply()")}}, the `new.target` operator will
point to `undefined` within the function used as the constructor, since the
`new` keyword is not being used to create the object.

When invoking `Reflect.construct()`, on the other hand, the
`new.target` operator will point to the `newTarget`
parameter if supplied, or `target` if not.

```js
function OneClass() {
  console.log('OneClass');
  console.log(new.target);
}
function OtherClass() {
  console.log('OtherClass');
  console.log(new.target);
}

const obj1 = Reflect.construct(OneClass, args);
// Output:
//     OneClass
//     function OneClass { ... }

const obj2 = Reflect.construct(OneClass, args, OtherClass);
// Output:
//     OneClass
//     function OtherClass { ... }

const obj3 = Object.create(OtherClass.prototype);
OneClass.apply(obj3, args);
// Output:
//     OneClass
//     undefined
```

## Examples

### Using Reflect.construct()

```js
const d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date  // true
d.getFullYear()    // 1776
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.construct` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Operators/new", "new")}}
- [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target)
