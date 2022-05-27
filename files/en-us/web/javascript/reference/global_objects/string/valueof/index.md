---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.valueOf
---
{{JSRef}}

The **`valueOf()`** method returns the primitive value of a
{{jsxref("String")}} object.

{{EmbedInteractiveExample("pages/js/string-valueof.html")}}

## Syntax

```js
valueOf()
```

### Return value

A string representing the primitive value of a given {{jsxref("String")}} object.

## Description

The `valueOf()` method of {{jsxref("String")}} returns the primitive value
of a {{jsxref("String")}} object as a string data type. This value is equivalent to
{{jsxref("String.prototype.toString()")}}.

This method is usually called internally by JavaScript and not explicitly in code.

## Examples

### Using `valueOf()`

```js
const x = new String('Hello world');
console.log(x.valueOf()); // Displays 'Hello world'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
