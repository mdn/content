---
title: "HTMLImageElement: decode() method"
short-title: decode()
slug: Web/API/HTMLImageElement/decode
page-type: web-api-instance-method
browser-compat: api.HTMLImageElement.decode
---

{{APIRef("HTML DOM")}}

The **`decode()`**
method of the {{domxref("HTMLImageElement")}} interface returns a
{{jsxref("Promise")}} that resolves once the image is decoded and it is safe to append
it to the DOM.

This can be used to initiate loading of the image prior
to attaching it to an element in the DOM (or adding it to the DOM as a new element), so
that the image can be rendered immediately upon being added to the DOM. This, in turn,
prevents the rendering of the next frame after adding the image to the DOM from causing
a delay while the image loads.

## Syntax

```js-nolint
decode()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that fulfills with `undefined` once the image data is ready to be used.

### Exceptions

- `EncodingError`
  - : A {{domxref('DOMException')}} indicating that an error occurred while decoding the
    image.

## Usage notes

One potential use case for `decode()`: when loading very large images (for
example, in an online photo album), you can present a low resolution thumbnail image
initially and then replace that image with the full-resolution image by instantiating a
new {{domxref("HTMLImageElement")}}, setting its source to the full-resolution image's
URL, then using `decode()` to get a promise which is resolved once the
full-resolution image is ready for use. At that time, you can then replace the
low-resolution image with the full-resolution one that's now available.

## Examples

### Basic usage

The following example shows how to use the `decode()` method to control when
an image is appended to the DOM.

```js
const img = new Image();
img.src = "nebula.jpg";
img
  .decode()
  .then(() => {
    document.body.appendChild(img);
  })
  .catch((encodingError) => {
    // Do something with the error.
  });
```

> [!NOTE]
> Without a {{jsxref('Promise')}}-returning method, you
> would add the image to the DOM in a {{domxref("Window/load_event", "load")}} event handler,
> and handle the error in the {{domxref("HTMLElement/error_event", "error")}} event's handler.

### Avoiding empty images

In the below example, you'll likely get an empty image shown on the page as the image is downloaded:

```js
const img = new Image();
img.src = "img/logo.png";
document.body.appendChild(img);
```

Using `decode()` will delay inserting the image into the DOM until it is fully downloaded and decoded, thereby avoiding the empty image problem:

```js
async function getImage() {
  const img = new Image();
  img.src = "img/logo.png";
  await img.decode();
  document.body.appendChild(img);
  const p = document.createElement("p");
  p.textContent = "Image is fully loaded!";
  document.body.appendChild(p);
}
```

This is particularly useful if you're dynamically swapping an existing image for a new one, and also prevents unrelated paints outside of this code from being held up while the image is decoding.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) on tunetheweb.com (2023)
- The {{domxref("HTMLImageElement.decoding")}} property
