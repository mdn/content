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

An integer number, between 0 and 59, representing the seconds in the given date
according to universal time.

## Examples

### Using getUTCSeconds()

The following example assigns the seconds portion of the current time to the variable
`seconds`.

```js
var today = new Date();
var seconds = today.getUTCSeconds();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
