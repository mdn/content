---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.getUTCDay
---
{{JSRef}}

The **`getUTCDay()`** method returns the day of the week in the
specified date according to universal time, where 0 represents Sunday.

{{EmbedInteractiveExample("pages/js/date-getutcday.html")}}

## Syntax

```js
getUTCDay()
```

### Return value

An integer number corresponding to the day of the week for the given date, according to
universal time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

## Examples

### Using getUTCDay()

The following example assigns the weekday portion of the current date to the variable
`weekday`.

```js
var today = new Date();
var weekday = today.getUTCDay();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
