---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.bold
---
{{JSRef}} {{deprecated_header}}

The **`bold()`** method creates a {{HTMLElement("b")}} HTML
element that causes a string to be displayed as bold.

## Syntax

```js
bold()
```

### Return value

A string containing a {{HTMLElement("b")}} HTML element.

## Description

The `bold()` method embeds a string in a `<b>` element:
"`<b>str</b>`".

## Examples

### Using bold()

The following example uses deprecated string methods to change the formatting of a string:

```js
const worldString = 'Hello, world';

console.log(worldString.blink());   // <blink>Hello, world</blink>
console.log(worldString.bold());    // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike());  // <strike>Hello, world</strike>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.bold` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
