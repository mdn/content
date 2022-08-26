---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.toTimeString
---
{{JSRef}}

The **`toTimeString()`** method returns the time portion of a {{jsxref("Date")}} object interpreted in the local timezone in English.

{{EmbedInteractiveExample("pages/js/date-totimestring.html","shorter")}}

## Syntax

```js
toTimeString()
```

### Return value

A string representing the time portion of the given date in human readable form in English.

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

- If you want to get the _date_ part, use [`toDateString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString).
- If you want to get both the date and time, use [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString).
- If you want to make the date interpreted as UTC instead of local timezone, use [`toUTCString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString).
- If you want to format the date in a more user-friendly format (e.g. localization), use [`toLocaleTimeString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString).

## Examples

### A basic usage of toTimeString()

```js
const d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString());     // Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toTimeString()); // 14:39:07 GMT-0600 (PDT)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
