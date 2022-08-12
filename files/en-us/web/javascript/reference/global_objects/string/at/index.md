---
title: String.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/String/at
tags:
  - String
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
  - at
browser-compat: javascript.builtins.String.at
---
{{JSRef}}

The **`at()`** method takes an integer value and returns a new {{jsxref('String')}} consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.

{{EmbedInteractiveExample("pages/js/string-at.html")}}

## Syntax

```js
at(index)
```

### Parameters

- `index`
  - : The index (position) of the string character to be returned. Supports relative indexing from the end of the string when passed a negative index; i.e. if a negative number is used, the character returned will be found by counting back from the end of the string.

### Return value

A {{jsxref('String')}} consisting of the single UTF-16 code unit located at the specified position. Returns {{jsxref('undefined')}} if the given index can not be found.

## Examples

### Return the last character of a string

The following example provides a function which returns the last character found in a specified string.

```js
// A function which returns the last character of a given string
function returnLast(arr) {
  return arr.at(-1);
}

let invoiceRef = 'myinvoice01';

console.log(returnLast(invoiceRef));
// Logs: '1'

invoiceRef = 'myinvoice02';

console.log(returnLast(invoiceRef));
// Logs: '2'
```

### Comparing methods

Here we compare different ways to select the penultimate (last but one) character of a {{jsxref('String')}}. Whilst all below methods are valid, it highlights the succinctness and readability of the `at()` method.

```js
const myString = 'Every green bus drives fast.';

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length-2);
console.log(lengthWay); // Logs: 't'

// Using slice() method
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // Logs: 't'

// Using at() method
const atWay = myString.at(-2);
console.log(atWay); // Logs: 't'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.at` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [A polyfill for the at() method](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
