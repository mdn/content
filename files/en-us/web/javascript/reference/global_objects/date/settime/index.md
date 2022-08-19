---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.setTime
---
{{JSRef}}

The **`setTime()`** method sets the {{jsxref("Date")}} object
to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.

{{EmbedInteractiveExample("pages/js/date-settime.html", "taller")}}

## Syntax

```js
setTime(timeValue)
```

### Parameters

- `timeValue`
  - : An integer representing the number of milliseconds since 1 January 1970, 00:00:00
    UTC.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date
(effectively, the value of the argument).

## Description

Use the `setTime()` method to help assign a date and time to another
{{jsxref("Date")}} object.

## Examples

### Using setTime()

```js
const theBigDay = new Date('July 1, 1999');
const sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
