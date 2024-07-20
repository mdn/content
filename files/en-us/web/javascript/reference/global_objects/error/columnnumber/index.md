---
title: "Error: columnNumber"
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
page-type: javascript-instance-data-property
status:
  - non-standard
browser-compat: javascript.builtins.Error.columnNumber
---

{{JSRef}} {{Non-standard_Header}}

The **`columnNumber`** data property of an {{jsxref("Error")}} instance contains the column number in the line of the file that raised this error.

## Value

A positive integer.

{{js_property_attributes(1, 0, 1)}}

## Examples

### Using columnNumber

```js
try {
  throw new Error("Could not parse input");
} catch (err) {
  console.log(err.columnNumber); // 9
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.lineNumber")}}
- {{jsxref("Error.prototype.fileName")}}
