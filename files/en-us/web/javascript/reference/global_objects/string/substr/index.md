---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
tags:
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.substr
---
{{JSRef}} {{deprecated_header}}

The **`substr()`** method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.

{{EmbedInteractiveExample("pages/js/string-substr.html")}}

## Syntax

```js
substr(start)
substr(start, length)
```

### Parameters

- `start`
  - : The index of the first character to include in the returned substring.
- `length` {{optional_inline}}
  - : The number of characters to extract.

### Return value

A new string containing the specified part of the given string.

## Description

A string's `substr()` method extracts `length` characters from the string, counting from the `start` index.

- If `start >= str.length`, an empty string is returned.
- If `start < 0`, the index starts counting from the end of the string. More formally, in this case the substring starts at `max(start + str.length, 0)`.
- If `start` is omitted or {{jsxref("undefined")}}, it's treated as `0`.
- If `length` is omitted or {{jsxref("undefined")}}, or if `start + length >= str.length`, `substr()` extracts characters to the end of the string.
- If `length < 0`, an empty string is returned.
- For both `start` and `length`, {{jsxref("NaN")}} is treated as `0`.

> **Note:** In Microsoft JScript, negative values of the `start` argument are not considered to refer to the end of the string.

`substr()` is not part of the main ECMAScript specification — it's defined in [Annex B: Additional ECMAScript Features for Web Browsers](https://tc39.es/ecma262/#sec-additional-ecmascript-features-for-web-browsers), which is normative optional for non-browser runtimes. Therefore, people are advised to use the standard [`String.prototype.substring()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) method instead. They differ in the following ways:

- The two parameters of `substr()` are `start` and `length`, while for `substring()`, they are `start` and `end`.
- `substr()`'s `start` index will wrap to the end of the string if it is negative, while `substring()` will clamp it to `0`.
- Negative lengths in `substr()` are treated as zero, while `substring()` will swap the two indexes if `end` is less than `start`.

In some sense, `substr()` is closer to the [`String.prototype.slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) method than to `String.prototype.substring()`, because the indexes of `slice()` also wrap around the string's boundaries, and negative lengths return empty strings. Still, there is no trivial way to migrate `substr()` to either `slice()` or `substring()` without essentially writing a polyfill for `substr()`, so the actual refactored code depends on the knowledge of the range of `a` and `b`.

## Examples

### Using substr()

```js
const aString = 'Mozilla';

console.log(aString.substr(0, 1));   // 'M'
console.log(aString.substr(1, 0));   // ''
console.log(aString.substr(-1, 1));  // 'a'
console.log(aString.substr(1, -1));  // ''
console.log(aString.substr(-3));     // 'lla'
console.log(aString.substr(1));      // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2));  // ''
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.substr` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
