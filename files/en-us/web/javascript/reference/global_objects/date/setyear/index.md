---
title: Date.prototype.setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
tags:
- Date
- Deprecated
- JavaScript
- Method
- Prototype
- Reference
browser-compat: javascript.builtins.Date.setYear
---
{{JSRef}} {{deprecated_header}}

The **`setYear()`** method sets the year for a specified date according to local
time. Because `setYear()` does not set full years ("year 2000 problem"), it is
no longer used and has been replaced by the
{{jsxref("Date.prototype.setFullYear()", "setFullYear()")}}
method.

## Syntax

```js
setYear(yearValue)
```

### Parameters

- `yearValue`
  - : An integer.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated
date.

## Description

If `yearValue` is a number between 0 and 99 (inclusive), then the year for
`dateObj` is set to `1900 + yearValue`. Otherwise, the year for `dateObj` is set
to `yearValue`.

## Examples

### Using setYear()

The first two lines set the year to 1996. The third sets the year to 2000.

```js
var theBigDay = new Date();

theBigDay.setYear(96);
theBigDay.setYear(1996);
theBigDay.setYear(2000);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
