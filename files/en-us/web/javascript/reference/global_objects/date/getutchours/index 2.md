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

An integer number, between 0 and 23, representing the hours in the given date according
to universal time.

## Examples

### Using getUTCHours()

The following example assigns the hours portion of the current time to the variable
`hours`.

```js
var today = new Date();
var hours = today.getUTCHours();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
