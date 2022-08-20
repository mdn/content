---
title: Date.prototype.toGMTString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
tags:
  - Date
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Date.toGMTString
---
{{JSRef}} {{deprecated_header}}

The **`toGMTString()`** method converts a date to a string, using Internet Greenwich Mean Time (GMT) conventions. In practice, it's an alias for {{jsxref("Date.prototype.toUTCString()", "toUTCString()")}}.

> **Warning:** `toGMTString()` is deprecated and should no longer be used. It remains implemented only for backward compatibility; please use {{jsxref("Date.prototype.toUTCString()", "toUTCString()")}} instead.

## Syntax

```js
toGMTString()
```

### Return value

The same return value as {{jsxref("Date.prototype.toUTCString()", "toUTCString()")}}.

## Examples

### Simple example

In this example, the `toGMTString()` method interprets the `today` timestamp as a UTC date and formats it using GMT conventions.

```js
const today = new Date();
const str = today.toGMTString(); // deprecated! use toUTCString()

console.log(str); // Mon, 18 Dec 1995 17:28:35 GMT
```

`toGMTString` is just an alias for `toUTCString`, kept for compatibility reasons.

```js
console.log(Date.prototype.toGMTString === Date.prototype.toUTCString); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Date.prototype.toGMTString` in `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
