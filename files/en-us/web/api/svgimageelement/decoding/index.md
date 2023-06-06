---
title: "SVGImageElement: decoding property"
short-title: decoding
slug: Web/API/SVGImageElement/decoding
page-type: web-api-instance-property
browser-compat: api.SVGImageElement.decoding
---

{{APIRef}}

The **`decoding`** property of the {{domxref("SVGImageElement")}} interface provides a hint to the browser as to whether it should perform image decoding along with rendering other content and then present it all together (`sync`), or render and present the other content first and then decode the image and present it later (`async`).

## Value

A string representing the decoding hint. Possible values are:

- `sync`
  - : Decode the image synchronously along with rendering the other content, and present everything together. This results in a single presentation step that looks more "correct" (i.e. no intermediate display steps), but it can result in a performance hit, especially for users on slower networks.
- `async`
  - : Decode the image asynchronously, after rendering and presenting the other content. This may result in slightly inferior presentation, as different parts of the content are presented at different times, but it can improve performance, as the other content is available sooner.
- `auto`
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

- [`<img>`: The Image Embed element](/en-US/docs/Web/HTML/Element/img)
