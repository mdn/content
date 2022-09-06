---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
tags:
  - Advanced
  - Intermediate
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.padStart
---
{{JSRef}}

The **`padStart()`** method pads the
current string with another string (multiple times, if needed) until the resulting
string reaches the given length. The padding is applied from the start of the
current string.

{{EmbedInteractiveExample("pages/js/string-padstart.html")}}

## Syntax

```js
padStart(targetLength)
padStart(targetLength, padString)
```

### Parameters

- `targetLength`
  - : The length of the resulting string once the current `str` has
    been padded. If the value is less than `str.length`, then
    `str` is returned as-is.
- `padString` {{optional_inline}}
  - : The string to pad the current `str` with. If
    `padString` is too long to stay within the
    `targetLength`, it will be truncated from the end.
    The default value is the unicode "space" character (U+0020).

### Return value

A {{jsxref("String")}} of the specified `targetLength` with
`padString` applied from the start.

## Examples

### Basic examples

```js
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```

### Fixed width string number conversion

```js
// JavaScript version of: (unsigned)
//  printf "%0*d" width num
function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, 0);
}

const num = 123;
console.log(leftFillNum(num, 5));
// expected output: "00123"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.padStart` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.padEnd()")}}
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/string.polyfill.js)
