---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.big
---

{{JSRef}} {{Deprecated_Header}}

The **`big()`** method of {{jsxref("String")}} values creates a string that embeds this string in a {{HTMLElement("big")}} element (`<big>str</big>`), which causes this string to be displayed in a big font.

> [!NOTE]
> All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. For the case of `big()`, the `<big>` element itself has been removed from the HTML specification and shouldn't be used anymore. Web developers should use [CSS](/en-US/docs/Web/CSS) properties instead.

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

The code below creates an HTML string and then replaces the document's body with it:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.big();
```

This will create the following HTML:

```html
<big>Hello, world</big>
```

> [!WARNING]
> This markup is invalid, because `big` is no longer a valid element.

Instead of using `big()` and creating HTML text directly, you should use CSS to manipulate fonts. For example, you can manipulate {{cssxref("font-size")}} through the {{domxref("HTMLElement/style", "element.style")}} attribute:

```js
document.getElementById("yourElemId").style.fontSize = "2em";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.big` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("big")}}
