---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - String
  - Polyfill
browser-compat: javascript.builtins.String.italics
---
{{JSRef}} {{deprecated_header}}

The **`italics()`** method creates an {{HTMLElement("i")}} HTML
element that causes a string to be italic.

## Syntax

```js
italics()
```

### Return value

A string containing a {{HTMLElement("i")}} HTML element.

## Description

The `italics()` method embeds a string in an `<i>` element:
"`<i>str</i>`".

## Examples

### Using italics()

The following example uses string methods to change the formatting of a string:

```js
var worldString = 'Hello, world';
console.log(worldString.blink());  // <blink>Hello, world</blink>
console.log(worldString.bold());  // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike());  // <strike>Hello, world</strike>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `String.prototype.italics` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.strike()")}}
