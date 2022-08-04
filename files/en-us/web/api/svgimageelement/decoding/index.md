---
title: SVGImageElement.decoding
slug: Web/API/SVGImageElement/decoding
page-type: web-api-instance-property
tags:
  - API
  - Image
  - Property
  - Reference
  - SVG
  - SVG DOM
  - SVGImageElement
  - decoding
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
const img = new Image();
img.decoding = 'sync';
img.src = 'img/logo.svg';
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [\<img>: The Image Embed element](/en-US/docs/Web/HTML/Element/img)
