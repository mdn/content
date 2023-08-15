---
title: "HTMLImageElement: decoding property"
short-title: decoding
slug: Web/API/HTMLImageElement/decoding
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.decoding
---

{{APIRef}}

The **`decoding`** property of the {{domxref("HTMLImageElement")}} interface provides a hint to the browser as to how it should decode the image. More specifically, whether it should wait for the image to be decoded before presenting other content updates or not.

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

For images that are inserted into the DOM inside the viewport, `"async"` can result in flashes of unstyled content, while `"sync"` can result in small amounts of [jank](/en-US/docs/Glossary/Jank). Using the {{domxref("HTMLImageElement.decode()")}} method is usually a better way to achieve atomic presentation without holding up other content.

For images inserted into the DOM outside of the viewport, modern browsers will usually decode them before they are scrolled into view and there will be no noticeable difference using either value.

## Examples

In the below example, you'll likely get an empty image shown on the page as the image is downloaded. Setting `decoding` won't prevent that.

```js
const img = new Image();
img.decoding = "sync";
img.src = "img/logo.png";
document.body.appendChild(img);
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

const img = new Image();
await loadImage("img/logo.png", img);
// Using `sync` can ensure other content is only updated with the image
img.decoding = "sync";
document.body.appendChild(img);
const p = document.createElement("p");
p.textContent = "Image is fully loaded!";
document.body.appendChild(p);
```

A better solution, however, is to use the {{domxref("HTMLImageElement.decode()")}} method to solve this problem. It provides a way to asynchronously decode an image, delaying inserting it into the DOM until it is fully downloaded and decoded, thereby avoiding the empty image problem mentioned above. This is particularly useful if you're dynamically swapping an existing image for a new one, and also prevents unrelated paints outside of this code from being held up while the image is decoding.

Using `img.decoding = "async"` may avoid holding up other content from displaying if the decoding time is long:

```js
const img = new Image();
img.decoding = "async";
img.src = "img/logo.png";
document.body.appendChild(img);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLImageElement.decode()")}} method
- The {{htmlelement("img")}} element `decoding` attribute
- [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) on tunetheweb.com (2023)
