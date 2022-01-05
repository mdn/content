---
title: TypedArray.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/values
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.values
---
{{JSRef}}

The **`values()`** method returns a new _array iterator_ object
that contains the values for each index in the array.

{{EmbedInteractiveExample("pages/js/array-values.html")}}

## Syntax

```js
values()
```

### Return value

A new _array iterator_ object.

## Examples

### Iteration using for...of loop

```js
var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();

for (let letter of iterator) {
  console.log(letter);
}  //"a" "b" "c" "d" "e"
```

`Array.prototype.values` is default implementation of
`Array.prototype[Symbol.iterator]`.

```js
Array.prototype.values === Array.prototype[Symbol.iterator]      //true
```

### Iteration using .next()

```js
var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();
iterator.next();               // Object { value: "a", done: false }
iterator.next().value;         // "b"
iterator.next()["value"];      // "c"
iterator.next();               // Object { value: "d", done: false }
iterator.next();               // Object { value: "e", done: false }
iterator.next();               // Object { value: undefined, done: true }
iteraror.next().value;         // undefined 
```

> **Warning:** One-use: the array iterator object is one use or temporary object

example:

```js
var arr = ['a', 'b', 'c', 'd', 'e'];
 var iterator = arr.values();
 for (let letter of iterator) {
 console.log(letter);
} //"a" "b" "c" "d" "e"
for (let letter of iterator) {
console.log(letter);
} // undefined
```

**reason:** When `next().done=true`  or
`currentIndex>length` the `for..of` loop ends. See [Iteration
protocols.](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

**Value**: there are no values stored in the array Iterator
object; instead it stores the address of the array used in its creation and so depends
on the values stored in that array.

```js
var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();
console.log(iterator);        // Array Iterator {  }
iterator.next().value;        // "a"
arr[1]='n';
iterator.next().value;        //  "n"
```

> **Note:** If the values in the array changed the array iterator object values change too.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `TypedArray.prototype.values` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
