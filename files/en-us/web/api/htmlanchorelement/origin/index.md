---
title: "HTMLAnchorElement: origin property"
short-title: origin
slug: Web/API/HTMLAnchorElement/origin
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.origin
---

{{APIRef("HTML DOM")}}

The
**`HTMLAnchorElement.origin`** read-only property is a
string containing the Unicode serialization of the origin of the
represented URL.

That is:

- for URL using the `http` or `https`, the scheme followed by
  `'://'`, followed by the domain, followed by `':'`, followed by
  the port (the default port, `80` and `443` respectively, if
  explicitly specified);
- for URL using `file:` scheme, the value is browser dependent;
- for URL using the `blob:` scheme, the origin of the URL following
  `blob:`. E.g `"blob:https://mozilla.org"` will have
  `"https://mozilla.org".`

## Value

A string.

## Examples

```js
// An <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.origin; // returns 'https://developer.mozilla.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
