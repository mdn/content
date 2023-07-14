---
title: "Error: message"
slug: Web/JavaScript/Reference/Global_Objects/Error/message
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.Error.message
---

{{JSRef}}

The **`message`** data property of an {{jsxref("Error")}} instance is a human-readable description of the error.

## Value

A string corresponding to the value passed to the [`Error()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) constructor as the first argument.

{{js_property_attributes(1, 0, 1)}}

## Description

This property contains a brief description of the error if one is available or has been set. The `message` property combined with the {{jsxref("Error.prototype.name", "name")}} property is used by the {{jsxref("Error.prototype.toString()")}} method to create a string representation of the Error.

By default, the `message` property is an empty string, but this behavior can be overridden for an instance by specifying a message as the first argument to the {{jsxref("Error/Error", "Error")}} constructor.

## Examples

### Throwing a custom error

```js
const e = new Error("Could not parse input");
// e.message is 'Could not parse input'
throw e;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}
