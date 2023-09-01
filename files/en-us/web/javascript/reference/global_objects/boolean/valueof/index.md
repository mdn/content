---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Boolean.valueOf
---

{{JSRef}}

The **`valueOf()`** method of {{jsxref("Boolean")}} values returns the primitive value of a
{{jsxref("Boolean")}} object.

{{EmbedInteractiveExample("pages/js/boolean-valueof.html")}}

## Syntax

```js-nolint
valueOf()
```

### Parameters

None.

### Return value

The primitive value of the given {{jsxref("Boolean")}} object.

## Description

The `valueOf()` method of {{jsxref("Boolean")}} returns the primitive value
of a `Boolean` object or literal `Boolean` as a Boolean data type.

This method is usually called internally by JavaScript and not explicitly in code.

## Examples

### Using `valueOf()`

```js
x = new Boolean();
myVar = x.valueOf(); // assigns false to myVar
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.valueOf()")}}
