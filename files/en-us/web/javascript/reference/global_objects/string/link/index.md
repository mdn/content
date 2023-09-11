---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.link
---

{{JSRef}} {{deprecated_header}}

The **`link()`** method of {{jsxref("String")}} values creates a string that embeds this string in an {{HTMLElement("a")}} element (`<a href="...">str</a>`), to be used as a hypertext link to another URL.

> **Note:** All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.

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

The following example displays the word "MDN" as a hypertext link that returns the user to the Mozilla Developer Network.

```js
const hotText = "MDN";
const url = "https://developer.mozilla.org/";

console.log(`Click to return to ${hotText.link(url)}`);
// Click to return to <a href="https://developer.mozilla.org/">MDN</a>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.link` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.anchor()")}}
- {{domxref("document.links")}}
