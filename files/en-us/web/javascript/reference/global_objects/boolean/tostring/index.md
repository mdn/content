---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
tags:
  - Boolean
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Boolean.toString
---
{{JSRef}}

The **`toString()`** method returns a string representing the
specified Boolean object.

{{EmbedInteractiveExample("pages/js/boolean-tostring.html")}}

## Syntax

```js
toString()
```

### Return value

A string representing the specified {{jsxref("Boolean")}} object.

## Description

The {{jsxref("Boolean")}} object overrides the `toString` method of the
{{jsxref("Object")}} object; it does not inherit
{{jsxref("Object.prototype.toString()")}}. For `Boolean` objects, the
`toString` method returns a string representation of the object.

JavaScript calls the `toString()` method automatically when a
{{jsxref("Boolean")}} is to be represented as a text value or when a
{{jsxref("Boolean")}} is referred to in a string concatenation.

For {{jsxref("Boolean")}} objects and values, the built-in `toString()`
method returns the string `"true"` or `"false"` depending on the
value of the boolean object.

## Examples

### Using toString()

In the following code, `flag.toString()` returns `"true"`:

```js
const flag = new Boolean(true);
const myVar = flag.toString();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toString()")}}
