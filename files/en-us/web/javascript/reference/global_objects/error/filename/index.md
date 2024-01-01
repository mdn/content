---
title: "Error: fileName"
slug: Web/JavaScript/Reference/Global_Objects/Error/fileName
page-type: javascript-instance-data-property
status:
  - non-standard
browser-compat: javascript.builtins.Error.fileName
---

{{JSRef}} {{Non-standard_Header}}

The **`fileName`** data property of an {{jsxref("Error")}} instance contains the path to the file that raised this error.

## Value

A string.

{{js_property_attributes(1, 0, 1)}}

## Description

This non-standard property contains the path to the file that raised this error. If called from a debugger context, the Firefox Developer Tools for example, "debugger eval code" is returned.

## Examples

### Using fileName

```js
const e = new Error("Could not parse input");
throw e;
// e.fileName could look like "file:///C:/example.html"
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.lineNumber")}}
