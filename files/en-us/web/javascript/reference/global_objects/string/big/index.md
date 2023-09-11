---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.big
---

{{JSRef}} {{deprecated_header}}

The **`big()`** method of {{jsxref("String")}} values creates a string that embeds this string in a {{HTMLElement("big")}} element (`<big>str</big>`), which causes this string to be displayed in a big font.

> **Note:** All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. For the case of `big()`, the `<big>` element itself has been removed in [HTML5](/en-US/docs/Glossary/HTML5) and shouldn't be used anymore. Web developers should use [CSS](/en-US/docs/Web/CSS) properties Instead.

## Syntax

```js-nolint
big()
```

### Parameters

None.

### Return value

A string beginning with a `<big>` start tag, then the text `str`, and then a `</big>` end tag.

## Examples

### Using big()

The following example uses string methods to change the size of a string:

```js
const worldString = "Hello, world";

console.log(worldString.small()); // <small>Hello, world</small>
console.log(worldString.big()); // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</font>
```

With the {{domxref("HTMLElement/style", "element.style")}} object you can get the element's `style` attribute and manipulate it more generically, for example:

```js
document.getElementById("yourElemId").style.fontSize = "2em";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.big` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.small()")}}
