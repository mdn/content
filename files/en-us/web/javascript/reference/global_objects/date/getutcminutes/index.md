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

An integer number, between 0 and 59, representing the minutes in the given date
according to universal time.

## Examples

### Using getUTCMinutes()

The following example assigns the minutes portion of the current time to the variable
`minutes`.

```js
var today = new Date();
var minutes = today.getUTCMinutes();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
