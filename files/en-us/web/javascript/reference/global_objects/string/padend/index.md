---
title: String.prototype.padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.padEnd
---

{{JSRef}}

The **`padEnd()`** method of {{jsxref("String")}} values pads this string with a given
string (repeated, if needed) so that the resulting string reaches a given length. The
padding is applied from the end of this string.

{{InteractiveExample("JavaScript Demo: String.padEnd()")}}

```js interactive-example
const str1 = "Breaded Mushrooms";

console.log(str1.padEnd(25, "."));
// Expected output: "Breaded Mushrooms........"

const str2 = "200";

console.log(str2.padEnd(5));
// Expected output: "200  "
```

## Syntax

```js-nolint
padEnd(targetLength)
padEnd(targetLength, padString)
```

### Parameters

- `targetLength`
  - : The length of the resulting string once the current `str` has
    been padded. If the value is less than or equal to `str.length`, the
    current string will be returned as-is.
- `padString` {{optional_inline}}
  - : The string to pad the current `str` with. If
    `padString` is too long to stay within
    `targetLength`, it will be truncated: for left-to-right
    languages the left-most part and for right-to-left languages the right-most will be
    applied. The default value for this parameter is " "
    (`U+0020`).

### Return value

A {{jsxref("String")}} of the specified `targetLength` with the
`padString` applied at the end of the current
`str`.

## Examples

### Using padEnd

```js
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.padEnd` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.padStart()")}}
