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
  - Polyfill
browser-compat: javascript.builtins.Date.setYear
---
{{JSRef}} {{deprecated_header}}

The legacy **`setYear()`** method sets the year for a specified date according to local time.

However, the way the legacy `setYear()` method sets year values is different from how the preferred {{jsxref("Date.prototype.setFullYear()", "setFullYear()")}} method sets year values — and in some cases, also different from how `new Date()` and {{jsxref("Date.parse()")}} set year values. Specifically, given two-digit numbers, such as `22` and `61`:

- `setYear()` interprets any two-digit number as an offset to `1900`; so `date.setYear(22)` results in the year value being set to `1922`, and `date.setYear(61)` results in the year value being set to `1961`. (In contrast, while `new Date(61, 1)` also results in the year value being set to `1961`, `new Date("2/1/22")` results in the year value being set to `2022`; and similarly for {{jsxref("Date.parse()")}}).

- {{jsxref("Date.prototype.setFullYear()", "setFullYear()")}} does no special interpretation but instead uses the literal two-digit value as-is to set the year; so `date.setFullYear(61)` results in the year value being set to `0061`, and `date.setFullYear(22)` results in the year value being set to `0022`.

Because of those differences in behavior, you should no longer use the legacy `setYear()` method, but should instead use the preferred {{jsxref("Date.prototype.setFullYear()", "setFullYear()")}} method.

## Syntax

```js
setYear(yearValue)
```

### Parameters

- `yearValue`
  - : An integer.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If `yearValue` is a number between 0 and 99 (inclusive), then the year for
`dateObj` is set to `1900 + yearValue`. Otherwise, the year for
`dateObj` is set to `yearValue`.

## Examples

### Using setYear()

The first two lines set the year to 1996. The third sets the year to 2000.

```js
const theBigDay = new Date();

theBigDay.setYear(96);
theBigDay.setYear(1996);
theBigDay.setYear(2000);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Date.prototype.setYear` in `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
