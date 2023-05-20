---
title: "SVGImageElement: decoding property"
short-title: decoding
slug: Web/API/SVGImageElement/decoding
page-type: web-api-instance-property
browser-compat: api.SVGImageElement.decoding
---

{{APIRef}}

The **`decoding`** property of the {{domxref("SVGImageElement")}} interface represents a hint given to the browser on how it should decode the image.

## Value

A string representing the decoding hint. Possible values are:

- `sync`
  - : Decode the image synchronously for atomic presentation with other content.
- `async`
  - : Decode the image asynchronously to reduce delay in presenting other content.
- `auto`
  - : Default mode, which indicates no preference for the decoding mode. The browser decides what is best for the user.

## Examples

```js
const SVG_NS = "http://www.w3.org/2000/svg";

const img = document.createElementNS(SVG_NS, "image");
img.decoding = "sync";
img.setAttribute("href", "img/logo.svg");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<img>`: The Image Embed element](/en-US/docs/Web/HTML/Element/img)
