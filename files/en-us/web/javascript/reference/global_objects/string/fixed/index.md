---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.fixed
---

{{JSRef}} {{Deprecated_Header}}

The **`fixed()`** method of {{jsxref("String")}} values creates a string that embeds this string in a {{HTMLElement("tt")}} element (`<tt>str</tt>`), which causes this string to be displayed in a fixed-width font.

> [!NOTE]
> All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. For the case of `fixed()`, the `<tt>` element itself has been removed from the HTML specification and shouldn't be used anymore. Web developers should use [CSS](/en-US/docs/Web/CSS) properties instead.

## Syntax

```js-nolint
fixed()
```

### Parameters

None.

### Return value

A string beginning with a `<tt>` start tag, then the text `str`, and then a `</tt>` end tag.

## Examples

### Using fixed()

The code below creates an HTML string and then replaces the document's body with it:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fixed();
```

This will create the following HTML:

```html
<tt>Hello, world</tt>
```

> [!WARNING]
> This markup is invalid, because `tt` is no longer a valid element.

Instead of using `fixed()` and creating HTML text directly, you should use CSS to manipulate fonts. For example, you can manipulate {{cssxref("font-family")}} through the {{domxref("HTMLElement/style", "element.style")}} attribute:

```js
document.getElementById("yourElemId").style.fontFamily = "monospace";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.fixed` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("tt")}}
