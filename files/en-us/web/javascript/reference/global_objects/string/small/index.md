---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.small
---

{{JSRef}} {{Deprecated_Header}}

The **`small()`** method of {{jsxref("String")}} values creates a string that embeds this string in a {{HTMLElement("small")}} element (`<small>str</small>`), which causes this string to be displayed in a small font.

> [!NOTE]
> All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.

## Syntax

```js-nolint
small()
```

### Parameters

None.

### Return value

A string beginning with a `<small>` start tag, then the text `str`, and then a `</small>` end tag.

## Examples

### Using small()

The code below creates an HTML string and then replaces the document's body with it:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.small();
```

This will create the following HTML:

```html
<small>Hello, world</small>
```

Instead of using `small()` and creating HTML text directly, you should use DOM APIs such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement). For example:

```js
const contentString = "Hello, world";
const elem = document.createElement("small");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.small` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("small")}}
