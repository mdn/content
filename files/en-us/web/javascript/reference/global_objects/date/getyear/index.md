---
title: Date.prototype.getYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getYear
tags:
  - Date
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Date.getYear
---
{{JSRef}} {{deprecated_header}}

The **`getYear()`** method returns the year in the specified
date according to local time. Because `getYear()` does not return full years
("year 2000 problem"), it is no longer used and has been replaced by the
{{jsxref("Date.prototype.getFullYear", "getFullYear()")}} method.

## Syntax

```js
getYear()
```

### Return value

A number representing the year of the given date, according to local time, minus 1900.

## Description

- For years greater than or equal to 2000, the value returned by
  `getYear()` is 100 or greater. For example, if the year is 2026,
  `getYear()` returns 126.
- For years between and including 1900 and 1999, the value returned by
  `getYear()` is between 0 and 99. For example, if the year is 1976,
  `getYear()` returns 76.
- For years less than 1900, the value returned by `getYear()` is less than
  0\. For example, if the year is 1800, `getYear()` returns -100.

To take into account years before and after 2000, you should use
{{jsxref("Date.prototype.getFullYear", "getFullYear()")}} instead of
`getYear()` so that the year is specified in full.

## Backward compatibility

### Behavior in JavaScript 1.2 and earlier

The `getYear()` method returns either a 2-digit or 4-digit year:

- For years between and including 1900 and 1999, the value returned by
  `getYear()` is the year minus 1900. For example, if the year is 1976, the
  value returned is 76.
- For years less than 1900 or greater than 1999, the value returned by
  `getYear()` is the four-digit year. For example, if the year is 1856, the
  value returned is 1856. If the year is 2026, the value returned is 2026.

## Examples

### Years between 1900 and 1999

The second statement assigns the value 95 to the variable `year`.

```js
const Xmas = new Date('December 25, 1995 23:15:00');
const year = Xmas.getYear(); // returns 95
```

### Years above 1999

The second statement assigns the value 100 to the variable `year`.

```js
const Xmas = new Date('December 25, 2000 23:15:00');
const year = Xmas.getYear(); // returns 100
```

### Years below 1900

The second statement assigns the value -100 to the variable `year`.

```js
const Xmas = new Date('December 25, 1800 23:15:00');
const year = Xmas.getYear(); // returns -100
```

### Setting and getting a year between 1900 and 1999

The third statement assigns the value 95 to the variable `year`,
representing the year 1995.

```js
const Xmas = new Date('December 25, 2015 23:15:00');
Xmas.setYear(95);
const year = Xmas.getYear(); // returns 95
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Date.prototype.getYear` in `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
