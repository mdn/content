---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.big
---
{{JSRef}} {{deprecated_header}}

The **`big()`** method creates a {{HTMLElement("big")}} HTML
element that causes a string to be displayed in a big font.

> **Note:** The \<big> element has been removed in [HTML5](/en-US/docs/Glossary/HTML5) and shouldn't be used anymore.
> Instead web developers should use [CSS](/en-US/docs/Web/CSS) properties.

## Syntax

```js
big()
```

### Return value

A string containing a {{HTMLElement("big")}} HTML element.

## Description

The `big()` method embeds a string in a `<big>` element:
"`<big>str</big>`".

## Examples

### Using big()

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
document.getElementById('yourElemId').style.fontSize = '2em';
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.big` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.small()")}}
