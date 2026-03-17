---
title: "HTMLCanvasElement: toBlob() method"
short-title: toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
page-type: web-api-instance-method
browser-compat: api.HTMLCanvasElement.toBlob
---

{{APIRef("Canvas API")}}

The **`HTMLCanvasElement.toBlob()`** method creates a {{domxref("Blob")}} object representing the image contained in the canvas.
This file may be cached on the disk or stored in memory at the discretion of the user agent.

The desired file format and image quality may be specified.
If the file format is not specified, or if the given format is not supported, then the data will be exported as `image/png`.
Browsers are required to support `image/png`; many will support additional formats including `image/jpeg` and `image/webp`.

The created image will have a resolution of 96dpi for file formats that support encoding resolution metadata.

## Syntax

```js-nolint
toBlob(callback)
toBlob(callback, type)
toBlob(callback, type, quality)
```

### Parameters

- `callback`
  - : A callback function with the resulting {{domxref("Blob")}} object as a single argument.
    `null` may be passed if the image cannot be created for any reason.
- `type` {{optional_inline}}
  - : A string indicating the image format.
    The default type is `image/png`; that type is also used if the given type isn't supported.
- `quality` {{optional_inline}}
  - : A {{jsxref("Number")}} between `0` and `1` indicating the image quality to be used when creating images using file formats that support lossy compression (such as `image/jpeg` or `image/webp`).
    A user agent will use its default quality value if this option is not specified, or if the number is outside the allowed range.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `SecurityError`
  - : The canvas's bitmap is not origin-clean; at least some of its contents have or may have been loaded from a site other than the one from which the document itself was loaded.

## Examples

### Getting a file representing the canvas

Once you have drawn content into a canvas, you can convert it into a file of any supported image format.
The code snippet below, for example, takes the image in the {{HTMLElement("canvas")}} element whose ID is "canvas", obtains a copy of it as a PNG image, then appends a new {{HTMLElement("img")}} element to the document, whose source image is the one created using the canvas.

```js
const canvas = document.getElementById("canvas");

canvas.toBlob((blob) => {
  const newImg = document.createElement("img");
  const url = URL.createObjectURL(blob);

  newImg.src = url;
  document.body.appendChild(newImg);
});
```

Note that here we're creating a PNG image; if you add a second parameter to the `toBlob()` call, you can specify another image type supported by the user agent.
For example, to get the image in JPEG format:

```js
canvas.toBlob(
  (blob) => {
    /* … */
  },
  "image/jpeg",
  0.95,
); // JPEG at 95% quality
```

Note that we don't immediately revoke the object URL after the image has loaded, because doing so would make the image unusable for user interactions (such as right-clicking to save the image or opening it in a new tab). For long-lived applications, you should revoke object URLs when they're no longer needed (such as when the image is removed from the DOM) to free up memory by calling the {{DOMxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} method and passing in the object URL string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Blob")}}
