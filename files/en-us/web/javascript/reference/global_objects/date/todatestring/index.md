---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.toDateString
---
{{JSRef}}

The **`toDateString()`** method returns the date portion of a {{jsxref("Date")}} object interpreted in the local timezone in English.

{{EmbedInteractiveExample("pages/js/date-todatestring.html")}}

## Syntax

```js
toDateString()
```

### Return value

A string representing the date portion of the given {{jsxref("Date")}} object in human readable form in English.

## Description

{{jsxref("Date")}} instances refer to a specific point in time. `toDateString()` interprets the date in the local timezone and formats the _date_ part in English. It always uses the following format, separated by spaces:

1. First three letters of the week day name
2. First three letters of the month name
3. Two-digit day of the month, padded on the left a zero if necessary
4. Four-digit year (at least), padded on the left with zeros if necessary. May have a negative sign

For example: "Thu Jan 01 1970".

- If you want to get the _time_ part, use [`toTimeString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString).
- If you want to get both the date and time, use [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString).
- If you want to make the date interpreted as UTC instead of local timezone, use [`toUTCString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString).
- If you want to format the date in a more user-friendly format (e.g. localization), use [`toLocaleDateString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString).

## Examples

### A basic usage of toDateString()

```js
const d = new Date(1993, 5, 28, 14, 39, 7);

console.log(d.toString());     // logs Mon Jun 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toDateString()); // logs Mon Jun 28 1993
```

> **Note:** Month are 0-indexed when used as an argument of {{jsxref("Date")}} (thus 0 corresponds to January and 11 to December).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
