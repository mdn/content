---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.link
---
{{JSRef}} {{deprecated_header}}

The **`link()`** method creates a string representing the code
for an {{HTMLElement("a")}} HTML element to be used as a hypertext link to another URL.

## Syntax

```js
link(url)
```

### Parameters

- `url`
  - : Any string that specifies the `href` attribute of the
    `<a>` element; it should be a valid URL (relative or absolute), with
    any `&` characters escaped as `&amp;`, and any
    `"` characters escaped as `&quot;`.

### Return value

A string containing an {{HTMLElement("a")}} HTML element.

## Description

Use the `link()` method to create an HTML snippet for a hypertext link. The
returned string can then be added to the document via {{domxref("document.write()")}} or
{{domxref("element.innerHTML")}}.

Links created with the `link()` method become elements in the
`links` array of the `document` object. See
{{domxref("document.links")}}.

## Examples

### Using link()

The following example displays the word "MDN" as a hypertext link that returns the user
to the Mozilla Developer Network.

```js
const hotText = 'MDN';
const url = 'https://developer.mozilla.org/';

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
