---
title: HTMLAreaElement.origin
slug: Web/API/HTMLAreaElement/origin
page-type: web-api-instance-property
tags:
  - API
  - HTMLAreaElement
  - Property
  - Read-only
  - Reference
browser-compat: api.HTMLAreaElement.origin
---
{{APIRef("HTML DOM")}}

The
**`HTMLAreaElement.origin`** read-only property is a
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
// An <area id="myArea" href="https://developer.mozilla.org/en-US/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.origin; // returns 'https://developer.mozilla.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.
