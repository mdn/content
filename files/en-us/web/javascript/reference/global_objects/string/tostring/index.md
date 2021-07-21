---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.toString
---
{{JSRef}}

The **`toString()`** method returns a string representing the
specified object.

{{EmbedInteractiveExample("pages/js/string-tostring.html")}}

## Syntax

```js
toString()
```

### Return value

A string representing the calling object.

## Description

The {{jsxref("String")}} object overrides the `toString()` method of the
{{jsxref("Object")}} object; it does not inherit
{{jsxref("Object.prototype.toString()")}}. For {{jsxref("String")}} objects, the
`toString()` method returns a string representation of the object and is the
same as the {{jsxref("String.prototype.valueOf()")}} method.

## Examples

### Using `toString()`

The following example displays the string value of a {{jsxref("String")}} object:

```js
var x = new String('Hello world');

console.log(x.toString()); // logs 'Hello world'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("String.prototype.valueOf()")}}
