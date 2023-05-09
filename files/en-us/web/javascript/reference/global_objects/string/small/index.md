---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.small
---

{{JSRef}} {{deprecated_header}}

The **`small()`** method creates a string that embeds a string in a {{HTMLElement("small")}} element (`<small>str</small>`), which causes a string to be displayed in a small font.

> **Note:** All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.

## Syntax

```js-nolint
small()
```

### Return value

A string beginning with a `<small>` start tag, then the text `str`, and then a `</small>` end tag.

## Examples

### Using small()

The following example uses string methods to change the size of a string:

```js
const worldString = "Hello, world";

console.log(worldString.small()); // <small>Hello, world</small>
console.log(worldString.big()); // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</fontsize>
```

With the {{domxref("HTMLElement/style", "element.style")}} object you can get the element's `style` attribute and manipulate it more generically, for example:

```js
document.getElementById("yourElemId").style.fontSize = "0.7em";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.small` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.big()")}}
