---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.fontsize
---
{{JSRef}} {{deprecated_header}}

The **`fontsize()`** method creates a {{HTMLElement("font")}}
HTML element that causes a string to be displayed in the specified font size.

> **Note:** The \<font> element has been removed in [HTML5](/en-US/docs/Glossary/HTML5) and shouldn't be used anymore.
> Instead web developers should use [CSS](/en-US/docs/Web/CSS) properties.

## Syntax

```js
fontsize(size)
```

### Parameters

- `size`
  - : An integer between 1 and 7, a string representing a signed integer between 1 and 7.

### Return value

A string containing a {{HTMLElement("font")}} HTML element.

## Description

When you specify size as an integer, you set the font size of `str` to one
of the 7 defined sizes. When you specify `size` as a string such as "-2", you
adjust the font size of `str` relative to 3, the default value.

## Examples

### Using fontsize()

The following example uses string methods to change the size of a string:

```js
const worldString = 'Hello, world';

console.log(worldString.small());     // <small>Hello, world</small>
console.log(worldString.big());       // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</font>
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

- [Polyfill of `String.prototype.fontsize` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.big()")}}
- {{jsxref("String.prototype.small()")}}
