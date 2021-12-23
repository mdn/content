---
title: VideoFrame
slug: Web/API/VideoFrame
tags:
  - API
  - Interface
  - Reference
  - VideoFrame
browser-compat: api.VideoFrame
---
{{DefaultAPISidebar("Web Codecs API")}}

The **`VideoFrame`** interface of the {{domxref('Web Codecs API','','',' ')}} represents a frame of a video.

## Description

A `VideoFrame` object can be created or accessed in a number of ways. The {{domxref("MediaStreamTrackProcessor")}} breaks a media track into individual `VideoFrame` objects.

A `VideoFrame` is a {{domxref("CanvasImageSource")}} and has a constructor that accepts a `CanvasImageSource`. This means that a frame can be created from an image or video element.

A second constructor enables the creation of a `VideoFrame` from its binary pixel representation in a {{domxref("BufferSource")}}.

Created frames may then turned into a media track, for example with the {{domxref("MediaStreamTrackGenerator")}} interface that creates a media track from a stream of frames.

## Constructor

- {{domxref("VideoFrame.VideoFrame()")}}
  - : Creates a new `VideoFrame` object.

## Properties


- {{domxref("VideoFrame.format")}}{{ReadOnlyInline}}
  - : Returns the pixel format of the `VideoFrame`.
- {{domxref("VideoFrame.codedWidth")}}{{ReadOnlyInline}}
  - : Returns the width of the `VideoFrame` in pixels, potentially including non-visible padding, and prior to considering potential ratio adjustments.
- {{domxref("VideoFrame.codedHeight")}}{{ReadOnlyInline}}
  - : Returns the height of the `VideoFrame` in pixels, potentially including non-visible padding, and prior to considering potential ratio adjustments.
- {{domxref("VideoFrame.codedRect")}}{{ReadOnlyInline}}
  - : Returns a {{domxref("DOMRectReadOnly")}} with the width and height matching `codedWidth` and `codedHeight`.
- {{domxref("VideoFrame.visibleRect")}}{{ReadOnlyInline}}
  - : Returns a {{domxref("DOMRectReadOnly")}} describing the visible rectangle of pixels for this `VideoFrame`.
- {{domxref("VideoFrame.displayWidth")}}{{ReadOnlyInline}}
  - : Returns the width of the `VideoFrame` when displayed after applying aspect ratio adjustments.
- {{domxref("VideoFrame.displayHeight")}}{{ReadOnlyInline}}
  - : Returns the height of the `VideoFrame` when displayed after applying aspect ratio adjustments.
- {{domxref("VideoFrame.duration")}}{{ReadOnlyInline}}
  - : Returns an integer indicating the duration of the video in microseconds.
- {{domxref("VideoFrame.timestamp")}}{{ReadOnlyInline}}
  - : Returns an integer indicating the timestamp of the video in microseconds.
- {{domxref("VideoFrame.colorSpace")}}{{ReadOnlyInline}}
  - : Returns a {{domxref("VideoColorSpace")}} object.

## Methods

- {{domxref("VideoFrame.allocationSize()")}}
  - : Returns the number of bytes required to hold the `VideoFrame` as filtered by options passed into the method.
- {{domxref("VideoFrame.clone()")}}
  - : Creates a new `VideoFrame` object with reference to the same media resource as the original.
- {{domxref("VideoFrame.close()")}}
  - : Clears all states and releases the reference to the media resource.

## Examples

In the following example frames are returned from a {{domxref("MediaStreamTrackProcessor")}}, then encoded. See the full example and read more about it in the article [Video processing with WebCodecs](https://web.dev/webcodecs/).

```js
let frame_counter = 0;

const track = stream.getVideoTracks()[0];
const media_processor = new MediaStreamTrackProcessor(track);

const reader = media_processor.readable.getReader();
while (true) {
    const result = await reader.read();
    if (result.done)
      break;

    let frame = result.value;
    if (encoder.encodeQueueSize > 2) {
      // Too many frames in flight, encoder is overwhelmed
      // let's drop this frame.
      frame.close();
    } else {
      frame_counter++;
      const insert_keyframe = (frame_counter % 150) == 0;
      encoder.encode(frame, { keyFrame: insert_keyframe });
      frame.close();
    }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Video processing with WebCodecs](https://web.dev/webcodecs/)
- [WebCodecs examples](https://w3c.github.io/webcodecs/samples/)

