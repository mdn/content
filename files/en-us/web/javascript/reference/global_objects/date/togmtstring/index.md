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

The **`toGMTString()`** method converts a date to a string,
using Internet Greenwich Mean Time (GMT) conventions. The exact format of the value
returned by `toGMTString()` varies according to the platform and browser, in
general it should represent a human readable date string.

> **Note:** `toGMTString()` is deprecated and should no longer
> be used. It remains implemented only for backward compatibility; please use
> {{jsxref("Date.prototype.toUTCString()", "toUTCString()")}} instead.

## Syntax

```js
toGMTString()
```

### Return value

A string representing the given date following the Internet Greenwich Mean Time (GMT)
convention.

## Examples

### Simple example

In this example, the `toGMTString()` method converts the date to GMT (UTC)
using the operating system's time-zone offset and returns a string value that is similar
to the following form. The exact format depends on the platform.

```js
var today = new Date();
var str = today.toGMTString();  // deprecated! use toUTCString()

console.log(str);               // Mon, 18 Dec 1995 17:28:35 GMT
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Date.prototype.toGMTString` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
