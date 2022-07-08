---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
tags:
  - JavaScript
  - Property
  - Prototype
browser-compat: javascript.builtins.Error.name
---
{{JSRef}}

The **`name`** property represents a name for the type of error. The initial value is "Error".

## Description

By default, {{jsxref("Error")}} instances are given the name "Error". The `name` property, in addition to the {{jsxref("Error.prototype.message", "message")}} property, is used by the {{jsxref("Error.prototype.toString()")}} method to create a string representation of the error.

## Examples

### Throwing a custom error

```js
const e = new Error('Malformed input'); // e.name is 'Error'

e.name = 'ParseError';
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
