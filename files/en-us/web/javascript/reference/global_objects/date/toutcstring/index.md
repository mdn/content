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

The **`toUTCString()`** method converts a date to a string, interpreting it in the UTC time zone.

Based on [rfc7231](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.1) and modified according to [ECMA-262 toUTCString](https://tc39.es/ecma262/#sec-date.prototype.toutcstring), it can have negative values.

{{EmbedInteractiveExample("pages/js/date-toutcstring.html","shorter")}}

## Syntax

```js
toUTCString()
```

### Return value

A string representing the given date using the UTC time zone.

## Description

The value returned by `toUTCString()` is a string in the form `Www, dd Mmm yyyy hh:mm:ss GMT`, where:

| Format String | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `Www`         | Day of week, as three letters (e.g. `Sun`, `Mon`)            |
| `dd`          | Day of month, as two digits with leading zero if required    |
| `Mmm`         | Month, as three letters (e.g. `Jan`, `Feb`)                  |
| `yyyy`        | Year, as four or more digits with leading zeroes if required |
| `hh`          | Hour, as two digits with leading zero if required            |
| `mm`          | Minute, as two digits with leading zero if required          |
| `ss`          | Seconds, as two digits with leading zero if required         |

## Examples

### Using toUTCString()

```js
const today = new Date('Wed, 14 Jun 2017 00:00:00 PDT');
const UTCstring = today.toUTCString(); // Wed, 14 Jun 2017 07:00:00 GMT
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
