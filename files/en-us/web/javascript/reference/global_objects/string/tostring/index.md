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

The **`toString()`** method of a string object returns a string representing the specified string.

{{EmbedInteractiveExample("pages/js/string-tostring.html")}}

## Syntax

```js
toString()
```

### Return value

The string value of the `String` wrapper object.

## Description

The {{jsxref("String")}} object overrides the `toString()` method of the
{{jsxref("Object")}} object; it does not inherit
{{jsxref("Object.prototype.toString()")}}. For {{jsxref("String")}} objects, the
`toString()` method returns a string representation of the object and is the
same as the {{jsxref("String.prototype.valueOf()")}} method.

## Examples

### Using toString()

The following example displays the string value of a {{jsxref("String")}} object:

```js
const x = new String("Hello world");

console.log(x.toString()); // logs 'Hello world'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.valueOf()")}}
