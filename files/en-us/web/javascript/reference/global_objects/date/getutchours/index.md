---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.getUTCHours
---
{{JSRef}}

The **`getUTCHours()`** method returns the hours in the
specified date according to universal time.

{{EmbedInteractiveExample("pages/js/date-getutchours.html")}}

## Syntax

```js
getUTCHours()
```

### Return value

A `number`.
If the `Date` object represents a valid date, an integer between 0 and 23, representing the hours in the given date according
to Coordinated Universal Time.
Otherwise, [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN)
if the `Date` object doesn't represent a valid date.

## Examples

### Using getUTCHours()

The following example assigns the hours portion of the current time to the variable
`hours`.

```js
const today = new Date();
const hours = today.getUTCHours();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
