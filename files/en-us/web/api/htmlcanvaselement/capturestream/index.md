---
title: HTMLCanvasElement.captureStream()
slug: Web/API/HTMLCanvasElement/captureStream
tags:
  - Canvas
  - Experimental
  - Frame Capture
  - HTMLCanvasElement
  - Interface
  - Media
  - Media Capture DOM Elements
  - Method
  - Reference
  - Web
  - captureStream
browser-compat: api.HTMLCanvasElement.captureStream
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("HTMLCanvasElement")}}
**`captureStream()`** method returns a
{{domxref("MediaStream")}} which includes a
{{domxref("CanvasCaptureMediaStreamTrack")}} containing a real-time video capture of
the canvas's contents.

## Syntax

```js
MediaStream = canvas.captureStream(frameRate);
```

### Parameters

- `frameRate` {{optional_inline}}
  - : A double-precision floating-point value that indicates the rate of capture of each
    frame. If not set, a new frame will be captured each time the canvas changes; if set
    to `0`, frames will not be captured automatically; instead, they will only
    be captured when the returned track's
    {{domxref("CanvasCaptureMediaStreamTrack.requestFrame", "requestFrame()")}} method is
    called.

### Return value

A reference to a {{domxref("MediaStream")}} object, which has a single
{{domxref("CanvasCaptureMediaStreamTrack")}} in it.

### Exceptions

- `NotSupportedError`
  - : The value of `frameRate` is negative.

## Example

```js
// Find the canvas element to capture
var canvasElt = document.querySelector('canvas');

// Get the stream
var stream = canvasElt.captureStream(25); // 25 FPS

// Do things to the stream
// E.g. Send it to another computer using an RTCPeerConnection
//      pc is an RTCPeerConnection created elsewhere
pc.addStream(stream);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement.captureStream()")}}, which allows capturing a stream
  from a media element.
- {{domxref("MediaStream")}}
- {{domxref("Media Capture and Streams API")}}
