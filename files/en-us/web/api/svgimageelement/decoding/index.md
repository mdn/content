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
  - : Decode the image asynchronously.
- `"auto"`
  - : No preference for the decoding mode; the browser decides what is best for the user. This is the default value.

## Usage notes

In theory, this property provides a hint to the browser as to whether it should perform image decoding along with other tasks in a single step (`"sync"`), or do other tasks first and then decode the image (`"async"`).

In reality, `decoding` is not very useful. If we imagine a situation in which you have dynamically loaded an image and then added it to the DOM, the decode time will be so small for most images that in most situations you won't notice any difference. In addition, `decoding` doesn't stop the image from being added to the DOM, so you will probably get a flash of empty image as it finishes downloading.

## Examples

In the below example, you'll likely get an empty image shown on the page as the image is downloaded. Setting `decoding` won't prevent that.

```js
const SVG_NS = "http://www.w3.org/2000/svg";

const img = document.createElementNS(SVG_NS, "image");
img.decoding = "sync";
img.setAttribute("href", "img/logo.svg");
```

Instead, you can use the {{domxref("SVGImageElement.decode()")}} method to solve this problem. It provides a way to asynchronously decode an image, pausing inserting it into the DOM until it is fully downloaded and decoded, thereby avoiding the empty image problem described above. This is particularly useful if you're dynamically swapping an existing image for a new one.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("SVGImageElement.decode()")}} method
- The SVG {{SVGElement("image")}} element {{SVGAttr("decoding")}} attribute.
