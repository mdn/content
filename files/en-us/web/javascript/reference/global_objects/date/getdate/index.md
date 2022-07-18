---
title: Date.prototype.getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.getDate
---
{{JSRef}}

The **`getDate()`** method returns the day of the month for the
specified date according to local time.

{{EmbedInteractiveExample("pages/js/date-getdate.html","shorter")}}

## Syntax

```js
getDate()
```

### Return value

An integer number, between 1 and 31, representing the day of the month for the given
date according to local time.

## Examples

### Using getDate()

The second statement below assigns the value 25 to the variable `day`, based
on the value of the {{jsxref("Date")}} object `Xmas95`.

```js
const Xmas95 = new Date('December 25, 1995 23:15:30');
const day = Xmas95.getDate();

console.log(day); // 25
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
