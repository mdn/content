---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.fontsize
---

{{JSRef}} {{Deprecated_Header}}

The **`fontsize()`** method of {{jsxref("String")}} values creates a string that embeds this string in a {{HTMLElement("font")}} element (`<font size="...">str</font>`), which causes this string to be displayed in the specified font size.

> [!NOTE]
> All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. For the case of `fontsize()`, the `<font>` element itself has been removed from the HTML specification and shouldn't be used anymore. Web developers should use [CSS](/en-US/docs/Web/CSS) properties instead.

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

The code below creates an HTML string and then replaces the document's body with it:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontsize(7);
```

This will create the following HTML:

```html
<font size="7">Hello, world</font>
```

> [!WARNING]
> This markup is invalid, because `font` is no longer a valid element.

Instead of using `fontsize()` and creating HTML text directly, you should use CSS to manipulate fonts. For example, you can manipulate {{cssxref("font-size")}} through the {{domxref("HTMLElement/style", "element.style")}} attribute:

```js
document.getElementById("yourElemId").style.fontSize = "7pt";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.fontsize` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("font")}}
