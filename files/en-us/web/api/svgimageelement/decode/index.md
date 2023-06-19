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
returning a {{jsxref('Promise')}} that resolves image is decoded and it is safe to append
the image to the DOM.

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

In the below example, you'll likely get an empty image shown on the page as the image is downloaded:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const svg = document.querySelector("svg");

const img = document.createElementNS(SVG_NS, "image");
img.src = "img/logo.svg";
svg.appendChild(img);
```

Using `decode()` will delay inserting the image into the DOM until it is fully downloaded and decoded, thereby avoiding the empty image problem:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const svg = document.querySelector("svg");

async function getImage() {
  const img = document.createElementNS(SVG_NS, "image");
  img.src = "img/logo.svg";
  await img.decode();
  svg.appendChild(img);
  const text = document.createElementNS(SVG_NS, "text");
  text.textContent = "Image is fully loaded!";
  svg.appendChild(text);
}
```

This is particularly useful if you're dynamically swapping an existing image for a new one, and also prevents unrelated paints outside of this code from being held up while the image is decoding.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLImageElement.decode()")}}: The same thing, but for HTML
  {{HTMLElement("image")}} elements
