---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.sub
---

{{JSRef}} {{Deprecated_Header}}

The **`sub()`** method of {{jsxref("String")}} values creates a string that embeds this string in a {{HTMLElement("sub")}} element (`<sub>str</sub>`), which causes this string to be displayed as subscript.

> [!NOTE]
> All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.

## Syntax

```js-nolint
sub()
```

### Parameters

None.

### Return value

A string beginning with a `<sub>` start tag, then the text `str`, and then a `</sub>` end tag.

## Examples

### Using sub()

The code below creates an HTML string and then replaces the document's body with it:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.sub();
```

This will create the following HTML:

```html
<sub>Hello, world</sub>
```

Instead of using `sub()` and creating HTML text directly, you should use DOM APIs such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement). For example:

```js
const contentString = "Hello, world";
const elem = document.createElement("sub");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.sub` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("sub")}}
