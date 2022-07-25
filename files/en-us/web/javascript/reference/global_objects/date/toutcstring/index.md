---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.toUTCString
---
{{JSRef}}

The **`toUTCString()`** method converts a date to a string,
using the UTC time zone.

Based on [rfc7231](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.1) and modified according to [ECMA-262 toUTCString](https://tc39.es/ecma262/#sec-date.prototype.toutcstring), it can have negative values in ES2021.

{{EmbedInteractiveExample("pages/js/date-toutcstring.html","shorter")}}

## Syntax

```js
toUTCString()
```

### Return value

A string representing the given date using the UTC time zone.

## Description

The value returned by `toUTCString()` is a string in the form
`Www, dd Mmm yyyy hh:mm:ss GMT`,
Where:

| Format String | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `Www`         | Day of week, as three letters (e.g. Sun, Mon, …)           |
| `dd`          | Day of month, as two digits with leading zero if required    |
| `Mmm`         | Month, as three letters (e.g. Jan, Feb, …)                 |
| `yyyy`        | Year, as four or more digits with leading zeroes if required |
| `hh`          | Hour, as two digits with leading zero if required            |
| `mm`          | Minute, as two digits with leading zero if required          |
| `ss`          | Seconds, as two digits with leading zero if required         |

Prior to ECMAScript 2018, the format of the return value varied according to the
platform. The most common return value was an RFC-1123 formatted date stamp, which is a
slightly updated version of RFC-822 date stamps.

## Examples

### Using toUTCString()

```js
let today = new Date('Wed, 14 Jun 2017 00:00:00 PDT');
let UTCstring = today.toUTCString(); // Wed, 14 Jun 2017 07:00:00 GMT
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
