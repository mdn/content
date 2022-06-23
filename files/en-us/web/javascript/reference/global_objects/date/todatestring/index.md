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

The **`toDateString()`** method returns the date portion of a
{{jsxref("Date")}} object in English in the following format separated by spaces:

1. First three letters of the week day name
2. First three letters of the month name
3. Two digit day of the month, padded on the left a zero if necessary
4. Four digit year (at least), padded on the left with zeros if necessary

E.g. "Thu Jan 01 1970".

{{EmbedInteractiveExample("pages/js/date-todatestring.html")}}

## Syntax

```js
toDateString()
```

### Return value

A string representing the date portion of the given {{jsxref("Date")}} object in human
readable form in English.

## Description

{{jsxref("Date")}} instances refer to a specific point in time. Calling
{{jsxref("Date.prototype.toString()", "toString()")}} will return the date formatted in
a human readable form in English. Sometimes it is desirable to obtain a string of the time
portion; such a thing can be accomplished with the `toTimeString()` method.

The `toDateString()` method is especially useful because compliant engines
implementing [ECMA-262](/en-US/docs/Web/JavaScript/Language_Resources) may
differ in the string obtained from {{jsxref("Date.prototype.toString()", "toString()")}}
for {{jsxref("Date")}} objects, as the format is implementation-dependent and simple
string slicing approaches may not produce consistent results across multiple engines.

## Examples

### A basic usage of toDateString()

```js
const d = new Date(1993, 5, 28, 14, 39, 7);

console.log(d.toString());     // logs Mon Jun 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toDateString()); // logs Mon Jun 28 1993
```

> **Note:** Month are 0-indexed when used as an argument of
> {{jsxref("Date")}} (thus 0 corresponds to January and 11 to December).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
