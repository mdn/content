---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.getUTCSeconds
---
{{JSRef}}

The **`getUTCSeconds()`** method returns the seconds in the
specified date according to universal time.

{{EmbedInteractiveExample("pages/js/date-getutcseconds.html", "shorter")}}

## Syntax

```js
getUTCSeconds()
```

### Return value

A `number`.
If the `Date` object represents a valid date, an integer between 0 and 59, representing
the seconds in the given date according to universal time.
Otherwise, [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN)
if the `Date` object doesn't represent a valid date.

## Examples

### Using getUTCSeconds()

The following example assigns the seconds portion of the current time to the variable
`seconds`.

```js
const today = new Date();
const seconds = today.getUTCSeconds();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
