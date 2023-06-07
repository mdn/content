---
title: "SVGImageElement: decoding property"
short-title: decoding
slug: Web/API/SVGImageElement/decoding
page-type: web-api-instance-property
browser-compat: api.SVGImageElement.decoding
---

{{APIRef}}

The **`decoding`** property of the {{domxref("SVGImageElement")}} interface provides a hint to the browser as to whether it should perform image decoding synchronously or asynchronously.

## Value

A string representing the decoding hint. Possible values are:

- `"sync"`
  - : Decode the image synchronously.
- `"async"`
  - : Decode the image asynchronously. This can be useful when loading images dynamically using JavaScript, as it stops the execution thread from being blocked on the image decoding, leading to performance improvements.
- `"auto"`
  - : No preference for the decoding mode; the browser decides what is best for the user. This is the default value.

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

- The SVG {{SVGElement("image")}} element {{SVGAttr("decoding")}} attribute.
