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
{{jsxref("Promise")}} that resolves when the image is decoded and it is safe to append
the image to the DOM.

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

A {{jsxref('Promise')}} which is resolved once the image data is ready to be used.

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

The following example shows how to use the `decode()` method to control when
an image is appended to the DOM. Without a {{jsxref('Promise')}}-returning method, you
would add the image to the DOM in a {{domxref("Window/load_event", "load")}} event handler, such as by using
the {{domxref("HTMLImageElement.load_event", "img.onload")}} event handler, and by
handling the error in the {{domxref("Element/error_event", "error")}} event's handler.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
