---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.toTimeString
---

{{JSRef}}

The **`toTimeString()`** method of {{jsxref("Date")}} instances returns a string representing the time portion of this date interpreted in the local timezone.

{{EmbedInteractiveExample("pages/js/date-totimestring.html","shorter")}}

## Syntax

```js-nolint
toTimeString()
```

### Parameters

None.

### Return value

A string representing the time portion of the given date (see description for the format). Returns `"Invalid Date"` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Description

{{jsxref("Date")}} instances refer to a specific point in time. `toTimeString()` interprets the date in the local timezone and formats the _time_ part in English. It always uses the format of `hh:mm:ss GMT±xxxx (TZ)`, where:

| Format String | Description                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| `hh`          | Hour, as two digits with leading zero if required                                                     |
| `mm`          | Minute, as two digits with leading zero if required                                                   |
| `ss`          | Seconds, as two digits with leading zero if required                                                  |
| `±xxxx`       | The local timezone's offset — two digits for hours and two digits for minutes (e.g. `-0500`, `+0800`) |
| `TZ`          | The timezone's name (e.g. `PDT`, `PST`)                                                               |

For example: "04:42:04 GMT+0000 (Coordinated Universal Time)".

- If you only want to get the _date_ part, use {{jsxref("Date/toDateString", "toDateString()")}}.
- If you want to get both the date and time, use {{jsxref("Date/toString", "toString()")}}.
- If you want to make the date interpreted as UTC instead of local timezone, use {{jsxref("Date/toUTCString", "toUTCString()")}}.
- If you want to format the date in a more user-friendly format (e.g. localization), use {{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}}.

## Examples

### Using toTimeString()

```js
const d = new Date(0);

console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(d.toTimeString()); // "00:00:00 GMT+0000 (Coordinated Universal Time)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
