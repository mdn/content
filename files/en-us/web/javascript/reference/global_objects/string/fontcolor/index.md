---
title: String.prototype.fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.fontcolor
---

{{JSRef}} {{Deprecated_Header}}

The **`fontcolor()`** method of {{jsxref("String")}} values creates a string that embeds this string in a {{HTMLElement("font")}} element (`<font color="...">str</font>`), which causes this string to be displayed in the specified font color.

> [!NOTE]
> All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. For the case of `fontcolor()`, the `<font>` element itself has been removed from the HTML specification and shouldn't be used anymore. Web developers should use [CSS](/en-US/docs/Web/CSS) properties instead.

## Syntax

```js-nolint
fontcolor(color)
```

### Parameters

- `color`
  - : A string expressing the color as a hexadecimal RGB triplet or as a string literal. String literals for color names are listed in the [CSS color reference](/en-US/docs/Web/CSS/color_value).

### Return value

A string beginning with a `<font color="color">` start tag (double quotes in `color` are replaced with `&quot;`), then the text `str`, and then a `</font>` end tag.

## Description

The `fontcolor()` method itself simply joins the string parts together without any validation or normalization. However, to create valid {{HTMLElement("font")}} elements, if you express color as a hexadecimal RGB triplet, you must use the format `rrggbb`. For example, the hexadecimal RGB values for salmon are red=FA, green=80, and blue=72, so the RGB triplet for salmon is `"FA8072"`.

## Examples

### Using fontcolor()

The code below creates an HTML string and then replaces the document's body with it:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontcolor("red");
```

This will create the following HTML:

```html
<font color="red">Hello, world</font>
```

> [!WARNING]
> This markup is invalid, because `font` is no longer a valid element.

Instead of using `fontcolor()` and creating HTML text directly, you should use CSS to manipulate fonts. For example, you can manipulate {{cssxref("color")}} through the {{domxref("HTMLElement/style", "element.style")}} attribute:

```js
document.getElementById("yourElemId").style.color = "red";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.fontcolor` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("font")}}
