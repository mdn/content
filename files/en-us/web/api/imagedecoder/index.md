---
title: ImageDecoder
slug: Web/API/ImageDecoder
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ImageDecoder
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`ImageDecoder`** interface of the {{domxref('WebCodecs API','','','true')}} provides a way to unpack and decode encoded image data.

## Constructor

- {{domxref("ImageDecoder.ImageDecoder", "ImageDecoder()")}} {{Experimental_Inline}}
  - : Creates a new `ImageDecoder` object.

## Instance properties

- {{domxref("ImageDecoder.complete")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a boolean value indicating whether encoded data is completely buffered.
- {{domxref("ImageDecoder.completed")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves once `complete` is true.
- {{domxref("ImageDecoder.tracks")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an {{domxref("ImageTrackList")}} object listing the available tracks and providing a method for selecting a track to decode.
- {{domxref("ImageDecoder.type")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string reflecting the [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) configured during construction.

## Static methods

- {{domxref("ImageDecoder.isTypeSupported()")}} {{Experimental_Inline}}
  - : Indicates if the provided [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) is supported for unpacking and decoding.

## Instance methods

- {{domxref("ImageDecoder.close()")}} {{Experimental_Inline}}
  - : Ends all pending work and releases system resources.
- {{domxref("ImageDecoder.decode()")}} {{Experimental_Inline}}
  - : Enqueues a control message to decode the frame of an image.
- {{domxref("ImageDecoder.reset()")}} {{Experimental_Inline}}
  - : Aborts all pending `decode()` operations.

## Examples

Given a {{HTMLElement("canvas")}} element:

```html
<canvas></canvas>
```

the following code decodes and renders an animated image to that canvas:

```js
let imageDecoder = null;
let imageIndex = 0;

function renderImage(result) {
  const canvas = document.querySelector("canvas");
  const canvasContext = canvas.getContext("2d");

  canvasContext.drawImage(result.image, 0, 0);

  const track = imageDecoder.tracks.selectedTrack;

  // We check complete here since `frameCount` won't be stable until all
  // data has been received. This may cause us to receive a RangeError
  // during the decode() call below which needs to be handled.
  if (imageDecoder.complete) {
    if (track.frameCount === 1) return;

    if (imageIndex + 1 >= track.frameCount) imageIndex = 0;
  }

  // Decode the next frame ahead of display so it's ready in time.
  imageDecoder
    .decode({ frameIndex: ++imageIndex })
    .then((nextResult) =>
      setTimeout(() => {
        renderImage(nextResult);
      }, result.image.duration / 1000.0),
    )
    .catch((e) => {
      // We can end up requesting an imageIndex past the end since
      // we're using a ReadableStream from fetch(), when this happens
      // just wrap around.
      if (e instanceof RangeError) {
        imageIndex = 0;
        imageDecoder.decode({ frameIndex: imageIndex }).then(renderImage);
      } else {
        throw e;
      }
    });
}

function decodeImage(imageByteStream) {
  imageDecoder = new ImageDecoder({ data: imageByteStream, type: "image/gif" });
  imageDecoder.decode({ frameIndex: imageIndex }).then(renderImage);
}

fetch("fancy.gif").then((response) => decodeImage(response.body));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
