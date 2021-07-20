---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.getUTCFullYear
---
{{JSRef}}

The **`getUTCFullYear()`** method returns the year in the
specified date according to universal time.

{{EmbedInteractiveExample("pages/js/date-getutcfullyear.html")}}

## Syntax

```js
getUTCFullYear()
```

### Return value

A number representing the year in the given date according to universal time.

## Description

The value returned by `getUTCFullYear()` is an absolute number that is
compliant with year-2000, for example, 1995.

## Examples

### Using getUTCFullYear()

The following example assigns the four-digit value of the current year to the variable
`year`.

```js
var today = new Date();
var year = today.getUTCFullYear();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
