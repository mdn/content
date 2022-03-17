---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.toJSON
---
{{JSRef}}

The **`toJSON()`** method returns a string representation of
the {{jsxref("Date")}} object.

{{EmbedInteractiveExample("pages/js/date-tojson.html")}}

## Syntax

```js
toJSON()
```

### Return value

A string representation of the given date.

## Description

{{jsxref("Date")}} instances refer to a specific point in time. Calling
`toJSON()` returns a string (using {{jsxref("Date.prototype.toISOString()",
  "toISOString()")}}) representing the {{jsxref("Date")}} object's value. This method is
generally intended to, by default, usefully serialize {{jsxref("Date")}} objects during
[JSON](/en-US/docs/Glossary/JSON) serialization.

## Examples

### Using toJSON()

```js
var jsonDate = (new Date()).toJSON();
var backToDate = new Date(jsonDate);

console.log(jsonDate); //2015-10-26T07:46:36.611Z
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
