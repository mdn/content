---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.getUTCDate
---
{{JSRef}}

The **`getUTCDate()`** method returns the day of the month(from
1 to 31) in the specified date according to universal time.

{{EmbedInteractiveExample("pages/js/date-getutcdate.html")}}

## Syntax

```js
getUTCDate()
```

### Return value

A `number`.
If the `Date` object represents a valid date, an integer number ranging from 1 to 31
representing day of month for the given date, according to universal time.
Otherwise, [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN)
if the `Date` object doesn't represent a valid date.

## Examples

### Using getUTCDate()

The following example assigns the day of month of the current date to the variable
`dayOfMonth`.

```js
const today = new Date();
const dayOfMonth = today.getUTCDate();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
