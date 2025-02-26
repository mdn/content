---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.link
---

{{JSRef}} {{Deprecated_Header}}

The **`link()`** method of {{jsxref("String")}} values creates a string that embeds this string in an {{HTMLElement("a")}} element (`<a href="...">str</a>`), to be used as a hypertext link to another URL.

> [!NOTE]
> All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.

## Syntax

```js-nolint
link(url)
```

### Parameters

- `url`
  - : Any string that specifies the `href` attribute of the `<a>` element; it should be a valid URL (relative or absolute), with any `&` characters escaped as `&amp;`.

### Return value

A string beginning with an `<a href="url">` start tag (double quotes in `url` are replaced with `&quot;`), then the text `str`, and then an `</a>` end tag.

## Examples

### Using link()

The code below creates an HTML string and then replaces the document's body with it:

```js
const contentString = "MDN Web Docs";

document.body.innerHTML = contentString.link("https://developer.mozilla.org/");
```

This will create the following HTML:

```html
<a href="https://developer.mozilla.org/">MDN Web Docs</a>
```

Instead of using `link()` and creating HTML text directly, you should use DOM APIs such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement). For example:

```js
const contentString = "MDN Web Docs";
const elem = document.createElement("a");
elem.href = "https://developer.mozilla.org/";
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.link` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("a")}}
