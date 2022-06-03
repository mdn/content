---
title: ImageDecoder
slug: Web/API/ImageDecoder
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - ImageDecoder
browser-compat: api.ImageDecoder
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`ImageDecoder`** interface of the {{domxref('WebCodecs API','','','true')}} provides a way to unpack and decode encoded image data.

## Constructor

- {{domxref("ImageDecoder.ImageDecoder", "ImageDecoder()")}}
  - : Creates a new `ImageDecoder` object.

## Properties

- {{domxref("ImageDecoder.complete")}}{{ReadOnlyInline}}
  - : Returns a {{jsxref("boolean")}} indicating whether encoded data is completely buffered.
- {{domxref("ImageDecoder.completed")}}{{ReadOnlyInline}}
  - : Returns a {{jsxref("Promise")}} that resolves once `complete` is true.
- {{domxref("ImageDecoder.tracks")}}{{ReadOnlyInline}}
  - : Returns an {{domxref("ImageTrackList")}} object listing the available tracks and providing a method for selecting a track to decode.
- {{domxref("ImageDecoder.type")}}{{ReadOnlyInline}}
  - : Returns a {{jsxref("DOMString")}} reflecting the [mime type](https://en.wikipedia.org/wiki/Media_type) configured during construction.

## Methods

- {{domxref("ImageDecoder.close()")}}
  - : Ends all pending work and releases system resources.
- {{domxref("ImageDecoder.decode()")}}
  - : Enqueues a control message to decode the frame of an image.
- {{domxref("ImageDecoder.isTypeSupported()")}}
  - : Indicates if the provided [mime type](https://en.wikipedia.org/wiki/Media_type) is supported for unpacking and decoding.
- {{domxref("ImageDecoder.reset()")}}
  - : Aborts all pending `decode()` operations.

## Examples

Given an {{HTMLElement("canvas")}} element:

```html
<canvas></canvas>
```

the following code decodes and renders an animated image to that canvas:

```js
let imageDecoder = null;
let imageIndex = 0;

function renderImage(result) {
  const canvas = document.querySelector('canvas');
  const canvasContext = canvas.getContext('2d');

  canvasContext.drawImage(result.image, 0, 0);

  const track = imageDecoder.tracks.selectedTrack;

  // We check complete here since `frameCount` won't be stable until all data
  // has been received. This may cause us to receive a RangeError during the
  // decode() call below which needs to be handled.
  if (imageDecoder.complete) {
    if (track.frameCount == 1)
      return;

    if (imageIndex + 1 >= track.frameCount)
      imageIndex = 0;
  }

  // Decode the next frame ahead of display so it's ready in time.
  imageDecoder.decode({frameIndex: ++imageIndex})
      .then(
          nextResult => setTimeout(
              _ => {
                renderImage(nextResult);
              },
              result.image.duration / 1000.0))
      .catch(e => {
        // We can end up requesting an imageIndex past the end since we're using
        // a ReadableStrem from fetch(), when this happens just wrap around.
        if (e instanceof RangeError) {
          imageIndex = 0;
          imageDecoder.decode({frameIndex: imageIndex}).then(renderImage);
        } else {
          throw e;
        }
      });
}

function decodeImage(imageByteStream) {
  imageDecoder = new ImageDecoder({data: imageByteStream, type: 'image/gif'});
  imageDecoder.decode({frameIndex: imageIndex}).then(renderImage);
}

fetch('fancy.gif').then(response => decodeImage(response.body));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
