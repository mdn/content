---
title: Date.prototype.getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.getFullYear
---
{{JSRef}}

The **`getFullYear()`** method returns the year of the
specified date according to local time.

Use this method instead of the {{jsxref("Date.prototype.getYear()", "getYear()")}}
method.

{{EmbedInteractiveExample("pages/js/date-getfullyear.html","shorter")}}

## Syntax

```js
getFullYear()
```

### Return value

A number corresponding to the year of the given date, according to local time.

## Description

The value returned by `getFullYear()` is an absolute number. For dates
between the years 1000 and 9999, `getFullYear()` returns a four-digit number,
for example, 1995. Use this function to make sure a year is compliant with years after
2000\.

## Examples

### Using getFullYear()

The following example assigns the four-digit value of the current year to the variable
`year`.

```js
const today = new Date();
const year = today.getFullYear();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.getYear()")}}
