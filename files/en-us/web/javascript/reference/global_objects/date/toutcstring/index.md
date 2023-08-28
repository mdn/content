---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.toUTCString
---

{{JSRef}}

The **`toUTCString()`** method of {{jsxref("Date")}} instances returns a string representing this date in the [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.1) format, with negative years allowed. The timezone is always UTC. `toGMTString()` is an alias of this method.

{{EmbedInteractiveExample("pages/js/date-toutcstring.html","shorter")}}

## Syntax

```js-nolint
toUTCString()
```

### Parameters

None.

### Return value

A string representing the given date using the UTC time zone (see description for the format). Returns `"Invalid Date"` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

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

### Aliasing

JavaScript's `Date` API was inspired by Java's `java.util.Date` library (while the latter had become de facto legacy since Java 1.1 in 1997). In particular, the Java `Date` class had a method called `toGMTString` — which was poorly named, because the [Greenwich Mean Time](https://en.wikipedia.org/wiki/Greenwich_Mean_Time) is not equivalent to the [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time), while JavaScript dates always operate by UTC time. For web compatibility reasons, `toGMTString` remains as an alias to `toUTCString`, and they refer to the exact same function object. This means:

```js
Date.prototype.toGMTString.name === "toUTCString";
```

## Examples

### Using toUTCString()

```js
const d = new Date(0);
console.log(d.toUTCString()); // 'Thu, 01 Jan 1970 00:00:00 GMT'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
