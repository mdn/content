---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - String
  - Polyfill
browser-compat: javascript.builtins.String.strike
---
{{JSRef}} {{deprecated_header}}

The **`strike()`** method creates a {{HTMLElement("strike")}}
HTML element that causes a string to be displayed as struck-out text.

## Syntax

```js
strike()
```

### Return value

A string containing a {{HTMLElement("strike")}} HTML element.

## Description

The `strike()` method embeds a string in a `<strike>` element: `"<strike>str</strike>"`.

## Examples

### Using strike()

The following example uses deprecated string methods to change the formatting of a string:

```js
const worldString = 'Hello, world';

console.log(worldString.blink()); // <blink>Hello, world</blink>
console.log(worldString.bold()); // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike()); // <strike>Hello, world</strike>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.strike` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
