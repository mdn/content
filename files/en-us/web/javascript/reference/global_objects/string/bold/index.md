---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.bold
---

{{JSRef}} {{Deprecated_Header}}

The **`bold()`** method of {{jsxref("String")}} values creates a string that embeds this string in a {{HTMLElement("b")}} element (`<b>str</b>`), which causes this string to be displayed as bold.

> [!NOTE]
> All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.

## Syntax

```js-nolint
bold()
```

### Parameters

None.

### Return value

A string beginning with a `<b>` start tag, then the text `str`, and then a `</b>` end tag.

## Examples

### Using bold()

The code below creates an HTML string and then replaces the document's body with it:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.bold();
```

This will create the following HTML:

```html
<b>Hello, world</b>
```

Instead of using `bold()` and creating HTML text directly, you should use DOM APIs such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement). For example:

```js
const contentString = "Hello, world";
const elem = document.createElement("b");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.bold` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("b")}}
