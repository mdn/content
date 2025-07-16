---
title: String.prototype.padStart()
short-title: padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.padStart
sidebar: jsref
---

The **`padStart()`** method of {{jsxref("String")}} values pads this string with a given string (repeated and/or truncated, if needed) so that the resulting string has a given length. The padding is applied from the start of this string.

{{InteractiveExample("JavaScript Demo: String.prototype.padStart()")}}

```js interactive-example
const str1 = "5";

console.log(str1.padStart(2, "0"));
// Expected output: "05"

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);
// Expected output: "************5581"
```

## Syntax

```js-nolint
padStart(targetLength)
padStart(targetLength, padString)
```

### Parameters

- `targetLength`
  - : The length of the resulting string once the current `str` has been padded. If the value is less than or equal to `str.length`, then `str` is returned as-is.
- `padString` {{optional_inline}}
  - : The string to pad the current `str` with. If `padString` is too long to stay within `targetLength`, it will be truncated from the end. The default value is the space character (U+0020).

### Return value

A {{jsxref("String")}} of the specified `targetLength` with `padString` applied at the start.

## Examples

### Using String.prototype.padStart()

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

### Fixed width string number conversion

```js
// JavaScript version of: (unsigned)
// printf "%0*d" width num
function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, "0");
}

const num = 123;
console.log(leftFillNum(num, 5)); // "00123"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.padStart` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims polyfill of `String.prototype.padStart`](https://www.npmjs.com/package/string.prototype.padstart)
- {{jsxref("String.prototype.padEnd()")}}
