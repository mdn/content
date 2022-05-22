---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.getMilliseconds
---
{{JSRef}}

The **`getMilliseconds()`** method returns the milliseconds in
the specified date according to local time.

{{EmbedInteractiveExample("pages/js/date-getmilliseconds.html","shorter")}}

## Syntax

```js
getMilliseconds()
```

### Return value

A number, between 0 and 999, representing the milliseconds for the given date according
to local time.

## Examples

### Using getMilliseconds()

The following example assigns the milliseconds portion of the current time to the
variable `milliseconds`:

```js
const today = new Date();
const milliseconds = today.getMilliseconds();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
