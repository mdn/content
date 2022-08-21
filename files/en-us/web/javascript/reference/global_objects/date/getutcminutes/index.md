---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.getUTCMinutes
---
{{JSRef}}

The **`getUTCMinutes()`** method returns the minutes in the
specified date according to universal time.

{{EmbedInteractiveExample("pages/js/date-getutcminutes.html")}}

## Syntax

```js
getUTCMinutes()
```

### Return value

A `number`.
If the `Date` object represents a valid date, an integer between 0 and 59,
representing the minutes in the given date according to universal time.
Otherwise, [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN)
if the `Date` object doesn't represent a valid date.

## Examples

### Using getUTCMinutes()

The following example assigns the minutes portion of the current time to the variable
`minutes`.

```js
const today = new Date();
const minutes = today.getUTCMinutes();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
