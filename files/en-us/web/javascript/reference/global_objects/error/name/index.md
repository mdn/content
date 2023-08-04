---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.Error.name
---

{{JSRef}}

The **`name`** data property of `Error.prototype` is shared by all {{jsxref("Error")}} instances. It represents the name for the type of error. For `Error.prototype.name`, the initial value is `"Error"`. Subclasses like {{jsxref("TypeError")}} and {{jsxref("SyntaxError")}} provide their own `name` properties.

## Value

A string. For `Error.prototype.name`, the initial value is `"Error"`.

{{js_property_attributes(1, 0, 1)}}

## Description

By default, {{jsxref("Error")}} instances are given the name "Error". The `name` property, in addition to the {{jsxref("Error/message", "message")}} property, is used by the {{jsxref("Error.prototype.toString()")}} method to create a string representation of the error.

## Examples

### Throwing a custom error

```js
const e = new Error("Malformed input"); // e.name is 'Error'

e.name = "ParseError";
throw e;
// e.toString() would return 'ParseError: Malformed input'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
