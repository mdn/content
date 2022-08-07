---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.small
---
{{JSRef}} {{deprecated_header}}

The **`small()`** method creates a {{HTMLElement("small")}}
HTML element that causes a string to be displayed in a small font.

## Syntax

```js
small()
```

### Return value

A string containing a {{HTMLElement("small")}} HTML element.

## Description

The `small()` method embeds a string in a `<small>` element: `"<small>str</small>"`.

## Examples

### Using small()

The following example uses string methods to change the size of a string:

```js
const worldString = 'Hello, world';

console.log(worldString.small());     // <small>Hello, world</small>
console.log(worldString.big());       // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</fontsize>
```

With the {{domxref("HTMLElement/style", "element.style")}} object you can get
the element's `style` attribute and manipulate it more generically, for
example:

```js
document.getElementById('yourElemId').style.fontSize = '0.7em';
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.small` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.big()")}}
