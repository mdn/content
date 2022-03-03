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
toString();
```

### Return value

A string representing the calling object.

## Description

The {{jsxref("String")}} object overrides the `toString()` method of the
{{jsxref("Object")}} object; it does not inherit
{{jsxref("Object.prototype.toString()")}}. For {{jsxref("String")}} objects, the
`toString()` method returns a string representation of the object and is the
same as the {{jsxref("String.prototype.valueOf()")}} method. Using `toString()` on a {{jsxref("Number")}} object returns the binary equivalent. Using `parseInt().toString()` on a {{jsxref("String")}} object returns the binary equivalent.

## Examples

### Using `toString()`

The following example displays the string value of a {{jsxref("String")}} object:

```js
var x = new String("Hello world");

console.log(x.toString()); // logs 'Hello world'
```

The following example displays the binary value of a {{jsxref("String")}} object:

```js
var x = new String("13");

console.log(parseInt(x).toString(2)); // logs '1101'
```

The following example displays the binary value of a {{jsxref("Number")}} object:

```js
var x = new Number(13);

console.log(x.toString(2)); // logs '1101'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("String.prototype.valueOf()")}}
