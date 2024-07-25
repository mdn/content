---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.sup
---

{{JSRef}} {{Deprecated_Header}}

The **`sup()`** method of {{jsxref("String")}} values creates a string that embeds this string in a {{HTMLElement("sup")}} element (`<sup>str</sup>`), which causes this string to be displayed as superscript.

> [!NOTE]
> All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.

## Syntax

```js-nolint
sup()
```

### Parameters

None.

### Return value

A string beginning with a `<sup>` start tag, then the text `str`, and then a `</sup>` end tag.

## Examples

### Using sup()

The code below creates an HTML string and then replaces the document's body with it:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.sup();
```

This will create the following HTML:

```html
<sup>Hello, world</sup>
```

Instead of using `sup()` and creating HTML text directly, you should use DOM APIs such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement). For example:

```js
const contentString = "Hello, world";
const elem = document.createElement("sup");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.sup` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("sup")}}
