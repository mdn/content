---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.fontsize
---

{{JSRef}} {{deprecated_header}}

The **`fontsize()`** method creates a string that embeds a string in a {{HTMLElement("font")}} element (`<font size="...">str</font>`), which causes a string to be displayed in the specified font size.

> **Note:** All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. For the case of `fontsize()`, the `<font>` element itself has been removed in [HTML5](/en-US/docs/Glossary/HTML5) and shouldn't be used anymore. Web developers should use [CSS](/en-US/docs/Web/CSS) properties instead.

## Syntax

```js-nolint
fontsize(size)
```

### Parameters

- `size`
  - : An integer between 1 and 7, or a string representing a signed integer between 1 and 7.

### Return value

A string beginning with a `<font size="size">` start tag (double quotes in `size` are replaced with `&quot;`), then the text `str`, and then a `</font>` end tag.

## Description

The `fontsize()` method itself simply joins the string parts together without any validation or normalization. However, to create valid {{HTMLElement("font")}} elements, When you specify size as an integer, you set the font size of `str` to one of the 7 defined sizes. You can specify `size` as a string such as `"-2"` or `"+3"` to adjust the font size of `str` relative to 3, the default value.

## Examples

### Using fontsize()

The following example uses string methods to change the size of a string:

```js
const worldString = "Hello, world";

console.log(worldString.small()); // <small>Hello, world</small>
console.log(worldString.big()); // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</font>
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

- [Polyfill of `String.prototype.fontsize` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.big()")}}
- {{jsxref("String.prototype.small()")}}
