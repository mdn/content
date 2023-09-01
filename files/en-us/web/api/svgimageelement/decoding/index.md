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
  - : Decode the image synchronously for atomic presentation with other content.
- `"async"`
  - : Decode the image asynchronously and allow other content to be rendered before this completes.
- `"auto"`
  - : No preference for the decoding mode; the browser decides what is best for the user. This is the default value, but different browsers have different defaults:
    - Chromium defaults to `"sync"`.
    - Firefox defaults to `"async"`.
    - Safari defaults to `"sync"` except in a small number of circumstances.

## Usage notes

The `decoding` property provides a hint to the browser as to whether it should perform image decoding along with other tasks in a single step (`"sync"`), or allow other content to be rendered before this completes (`"async"`). In reality, the differences between the two values are often difficult to perceive and, where there are differences, there is often a better way.

For images that are inserted into the DOM inside the viewport, `"async"` can result in flashes of unstyled content, while `"sync"` can result in small amounts of [jank](/en-US/docs/Glossary/Jank). Using the {{domxref("SVGImageElement.decode()")}} method is usually a better way to achieve atomic presentation without holding up other content.

For images inserted into the DOM outside of the viewport, modern browsers will usually decode them before they are scrolled into view and there will be no noticeable difference using either value.

## Examples

In the below example, you'll likely get an empty image shown on the page as the image is downloaded. Setting `decoding` won't prevent that.

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const svg = document.querySelector("svg");

const img = document.createElementNS(SVG_NS, "image");
img.decoding = "sync";
img.setAttribute("href", "img/logo.svg");
svg.appendChild(img);
```

Inserting an image after download can make the `decoding` property more relevant:

```js
async function loadImage(url, elem) {
  return new Promise((resolve, reject) => {
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}

const SVG_NS = "http://www.w3.org/2000/svg";
const svg = document.querySelector("svg");

const img = document.createElementNS(SVG_NS, "image");
await loadImage("img/logo.svg", img);
// Using `sync` can ensure other content is only updated with the image
img.decoding = "sync";
svg.appendChild(img);
const text = document.createElementNS(SVG_NS, "text");
text.textContent = "Image is fully loaded!";
svg.appendChild(text);
```

A better solution, however, is to use the {{domxref("SVGImageElement.decode()")}} method to solve this problem. It provides a way to asynchronously decode an image, delaying inserting it into the DOM until it is fully downloaded and decoded, thereby avoiding the empty image problem mentioned above. This is particularly useful if you're dynamically swapping an existing image for a new one, and also prevents unrelated paints outside of this code from being held up while the image is decoding.

Using `img.decoding = "async"` may avoid holding up other content from displaying if the decoding time is long:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const svg = document.querySelector("svg");

const img = document.createElementNS(SVG_NS, "image");
img.decoding = "async";
img.setAttribute("href", "img/logo.svg");
svg.appendChild(img);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("SVGImageElement.decode()")}} method
- The SVG {{SVGElement("image")}} element {{SVGAttr("decoding")}} attribute.
