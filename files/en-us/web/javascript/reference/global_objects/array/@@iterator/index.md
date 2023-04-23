---
title: Array.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.@@iterator
---

{{JSRef}}

The **`[@@iterator]()`** method of {{jsxref("Array")}} instances implements the [iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) and allows arrays to be consumed by most syntaxes expecting iterables, such as the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and {{jsxref("Statements/for...of", "for...of")}} loops. It returns an [array iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) that yields the value of each index in the array.

The initial value of this property is the same function object as the initial value of the {{jsxref("Array.prototype.values")}} property.

## Syntax

```js-nolint
array[Symbol.iterator]()
```

### Return value

The same return value as {{jsxref("Array.prototype.values()")}}: a new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) that yields the value of each index in the array.

## Examples

### Iteration using for...of loop

Note that you seldom need to call this method directly. The existence of the `@@iterator` method makes arrays [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), and iterating syntaxes like the `for...of` loop automatically calls this method to obtain the iterator to loop over.

#### HTML

```html
<ul id="letterResult"></ul>
```

#### JavaScript

```js
const arr = ["a", "b", "c"];
const letterResult = document.getElementById("letterResult");
for (const letter of arr) {
  const li = document.createElement("li");
  li.textContent = letter;
  letterResult.appendChild(li);
}
```

#### Result

{{EmbedLiveSample('Iteration_using_for...of_loop', '', '')}}

### Manually hand-rolling the iterator

You may still manually call the `next()` method of the returned iterator object to achieve maximum control over the iteration process.

```js
const arr = ["a", "b", "c", "d", "e"];
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e
```

### Handling strings and string arrays with the same function

Because both [strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) and arrays implement the iterable protocol, a generic function can be designed to handle both inputs in the same fashion. This is better than calling {{jsxref("Array.prototype.values()")}} directly, which requires the input to be an array, or at least an object with such a method.

```js
function logIterable(it) {
  if (typeof it[Symbol.iterator] !== "function") {
    console.log(it, "is not iterable.");
    return;
  }
  for (const letter of it) {
    console.log(letter);
  }
}

// Array
logIterable(["a", "b", "c"]);
// a
// b
// c

// String
logIterable("abc");
// a
// b
// c

// Number
logIterable(123);
// 123 is not iterable.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype[@@iterator]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`TypedArray.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator)
- [`String.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator)
- {{jsxref("Symbol.iterator")}}
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
