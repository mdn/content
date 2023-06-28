---
title: "CanvasCaptureMediaStreamTrack: requestFrame() method"
short-title: requestFrame()
slug: Web/API/CanvasCaptureMediaStreamTrack/requestFrame
page-type: web-api-instance-method
browser-compat: api.CanvasCaptureMediaStreamTrack.requestFrame
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("CanvasCaptureMediaStreamTrack")}} method
**`requestFrame()`** requests that a frame be captured from
the canvas and sent to the stream.

Applications that need to carefully control
the timing of rendering and frame capture can use `requestFrame()` to
directly specify when it's time to capture a frame.

To prevent automatic capture of frames, so that frames are only captured when
`requestFrame()` is called, specify a value of 0 for the
{{domxref("HTMLCanvasElement.captureStream", "captureStream()")}} method when creating
the stream.

## Syntax

```js-nolint
stream.requestFrame()
```

### Return value

`undefined`

## Usage notes

There is currently an issue flagged in the specification pointing out that at this
time, no exceptions are being thrown if the canvas isn't origin-clean. This may change
in the future, so it would be wise to plan ahead and watch for exceptions such as
`SecurityError` (although the specific error that might be thrown is not
mentioned in the spec, this is a likely candidate).

## Example

```js
// Find the canvas element to capture
const canvasElt = document.querySelector("canvas");

// Get the stream
const stream = canvasElt.captureStream(25); // 25 FPS

// Send the current state of the canvas as a frame to the stream
stream.getVideoTracks()[0].requestFrame();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasCaptureMediaStreamTrack")}}, the interface it belongs to.
- {{HTMLElement("canvas")}}
