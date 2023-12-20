---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.toDateString
---

{{JSRef}}

The **`toDateString()`** method of {{jsxref("Date")}} instances returns a string representing the date portion of this date interpreted in the local timezone.

{{EmbedInteractiveExample("pages/js/date-todatestring.html")}}

## Syntax

```js-nolint
toDateString()
```

### Parameters

None.

### Return value

A string representing the date portion of the given date (see description for the format). Returns `"Invalid Date"` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Description

{{jsxref("Date")}} instances refer to a specific point in time. `toDateString()` interprets the date in the local timezone and formats the _date_ part in English. It always uses the following format, separated by spaces:

1. First three letters of the week day name
2. First three letters of the month name
3. Two-digit day of the month, padded on the left a zero if necessary
4. Four-digit year (at least), padded on the left with zeros if necessary. May have a negative sign

For example: "Thu Jan 01 1970".

- If you only want to get the _time_ part, use {{jsxref("Date/toTimeString", "toTimeString()")}}.
- If you want to get both the date and time, use {{jsxref("Date/toString", "toString()")}}.
- If you want to make the date interpreted as UTC instead of local timezone, use {{jsxref("Date/toUTCString", "toUTCString()")}}.
- If you want to format the date in a more user-friendly format (e.g. localization), use {{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}}.

## Examples

### Using toDateString()

```js
const d = new Date(0);

console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(d.toDateString()); // "Thu Jan 01 1970"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
