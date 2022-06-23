---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.fixed
---
{{JSRef}} {{deprecated_header}}

The **`fixed()`** method creates a {{HTMLElement("tt")}} HTML
element that causes a string to be displayed in fixed-pitch font.

## Syntax

```js
fixed()
```

### Return value

A string representing a {{HTMLElement("tt")}} HTML element.

## Description

The `fixed()` method embeds a string in a `<tt>` element:
"`<tt>str</tt>`".

## Examples

### Using fixed()

The following example uses the `fixed` method to change the formatting of a
string:

```js
const worldString = 'Hello, world';
console.log(worldString.fixed()); // "<tt>Hello, world</tt>"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.fixed` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
