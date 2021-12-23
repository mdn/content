---
title: Array.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
tags:
  - Array
  - Beginner
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.@@iterator
---
{{JSRef}}

The **`@@iterator`** method is part of [The
iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol), that defines how to synchronously iterate over a sequence of
values.

The initial value of the **`@@iterator`** property is the same
function object as the initial value of the {{jsxref("Array.prototype.values()",
  "values()")}} property.

## Syntax

```js
[Symbol.iterator]()
```

### Return value

The initial value given by the {{jsxref("Array.prototype.values()", "values()")}}
**iterator**. By default, using `arr[Symbol.iterator]` will
return the {{jsxref("Array.prototype.values()", "values()")}} function.

## Examples

### Iteration using for...of loop

#### HTML

```html
<ul id="letterResult">
</ul>
```

#### JavaScript

```js
const arr = ['a', 'b', 'c'];
const eArr = arr[Symbol.iterator]();
const letterResult = document.getElementById('letterResult');
// your browser must support for..of loop
// and let-scoped variables in for loops
// const and var could also be used
for (let letter of eArr) {
  const li = document.createElement('LI');
  li.textContent = letter;
  letterResult.appendChild(li);
}
```

#### Result

{{EmbedLiveSample('Iteration_using_for...of_loop', '', '', '',
  'Web/JavaScript/Reference/Global_Objects/Array/@@iterator')}}

### Alternative iteration

```js
var arr = ['a', 'b', 'c', 'd', 'e'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // a
console.log(eArr.next().value); // b
console.log(eArr.next().value); // c
console.log(eArr.next().value); // d
console.log(eArr.next().value); // e
```

### Use Case for brace notation

The use case for this syntax over using the dot notation
(`Array.prototype.values()`) is in a case where you don't know what object is
going to be ahead of time. If you have a function that takes an iterator and then
iterate over the value, but don't know if that Object is going to have a
\[Iterable].prototype.values method. This could be a built-in object like [String](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)
object or a custom object.

```js
function logIterable(it) {
 if (!(Symbol.iterator in Object.getPrototypeOf(it)
 /* or "Symbol.iterator in Object.__proto__"
    or "it[Symbol.iterator]" */)) {
   console.log(it, ' is not an iterable object...');
   return;
 }

 var iterator = it[Symbol.iterator]();
  // your browser must support for..of loop
  // and let-scoped variables in for loops
  // const and var could also be used
  for (let letter of iterator) {
      console.log(letter);
  }
}

// Array
logIterable(['a', 'b', 'c']);
// a
// b
// c

// string
logIterable('abc');
// a
// b
// c

logIterable(123);
// 123 " is not an iterable object..."
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Array.prototype[@@iterator]` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.values()")}}
