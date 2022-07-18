---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.valueOf
---
{{JSRef}}

The **`valueOf()`** method returns the primitive value of a
{{jsxref("Date")}} object.

{{EmbedInteractiveExample("pages/js/date-valueof.html")}}

## Syntax

```js
valueOf()
```

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the given date, or {{jsxref("NaN")}} in case of an invalid date.

## Description

The `valueOf()` method returns the primitive value of a {{jsxref("Date")}}
object as a number data type, the number of milliseconds since midnight 01 January, 1970
UTC.

This method is functionally equivalent to the {{jsxref("Date.prototype.getTime()")}}
method.

This method is usually called internally by JavaScript and not explicitly in code.

## Examples

### Using valueOf()

```js
const x = new Date(56, 6, 17);
const myVar = x.valueOf();      // assigns -424713600000 to myVar
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Date.prototype.getTime()")}}
