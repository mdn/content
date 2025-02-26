---
title: String.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/String/at
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.at
---

{{JSRef}}

The **`at()`** method of {{jsxref("String")}} values takes an integer value and returns a new {{jsxref("String")}} consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.

{{InteractiveExample("JavaScript Demo: String.at()")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"
```

## Syntax

```js-nolint
at(index)
```

### Parameters

- `index`
  - : The index (position) of the string character to be returned. Supports relative indexing from the end of the string when passed a negative index; i.e. if a negative number is used, the character returned will be found by counting back from the end of the string.

### Return value

A {{jsxref("String")}} consisting of the single UTF-16 code unit located at the specified position. Returns {{jsxref("undefined")}} if the given index can not be found.

## Examples

### Return the last character of a string

The following example provides a function which returns the last character found in a specified string.

```js
// A function which returns the last character of a given string
function returnLast(str) {
  return str.at(-1);
}

let invoiceRef = "my-invoice01";

console.log(returnLast(invoiceRef)); // '1'

invoiceRef = "my-invoice02";

console.log(returnLast(invoiceRef)); // '2'
```

### Comparing methods

Here we compare different ways to select the penultimate (last but one) character of a {{jsxref("String")}}. Whilst all below methods are valid, it highlights the succinctness and readability of the `at()` method.

```js
const myString = "Every green bus drives fast.";

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length - 2);
console.log(lengthWay); // 't'

// Using slice() method
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // 't'

// Using at() method
const atWay = myString.at(-2);
console.log(atWay); // 't'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.at` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
