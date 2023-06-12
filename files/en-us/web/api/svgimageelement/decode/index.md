---
title: "SVGImageElement: decode() method"
short-title: decode()
slug: Web/API/SVGImageElement/decode
page-type: web-api-instance-method
browser-compat: api.SVGImageElement.decode
---

{{APIRef("SVG")}}

The **`decode()`** method of the
{{domxref("SVGImageElement")}} interface initiates asynchronous decoding of an image,
returning a {{jsxref('Promise')}} that resolves once the image data is ready
for use.

## Syntax

```js-nolint
decode()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} which resolves once the image data is ready to be used, such as
by appending it to the DOM, replacing an existing image, and so forth.

### Exceptions

None.

## Examples

Using `decode()` like this provides a way to asynchronously decode an image, pausing inserting it into the DOM until it is fully downloaded and decoded, thereby avoiding showing empty images. This is particularly useful if you're dynamically swapping an existing image for a new one.

```js
const SVG_NS = "http://www.w3.org/2000/svg";

const img = document.createElementNS(SVG_NS, "image");
img.setAttribute("href", "img/logo.svg");
await img.decode();
// Add image to the DOM
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLImageElement.decode()")}}: The same thing, but for HTML
  {{HTMLElement("image")}} elements
