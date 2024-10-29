---
title: "MediaStreamTrack: applyConstraints() method"
short-title: applyConstraints()
slug: Web/API/MediaStreamTrack/applyConstraints
page-type: web-api-instance-method
browser-compat: api.MediaStreamTrack.applyConstraints
---

{{APIRef("Media Capture and Streams")}}

The **`applyConstraints()`** method of the {{domxref("MediaStreamTrack")}} interface applies a set of constraints to the track; these constraints let the website or app establish ideal values and acceptable ranges of values for the constrainable properties of the track, such as frame rate, dimensions, echo cancellation, and so forth.

Constraints can be used to ensure that the media meets certain guidelines you prefer.
For example, you may prefer high-density video but require that the frame rate be a little low to help keep the data rate low enough not overtax the network.
Constraints can also specify ideal and/or acceptable sizes or ranges of sizes.
See [Applying constraints](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#applying_constraints) in [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints) for more information on how to apply your preferred constraints.

## Syntax

```js-nolint
applyConstraints()
applyConstraints(constraints)
```

### Parameters

- `constraints` {{optional_inline}}
  - : A {{domxref("MediaTrackConstraints")}} object listing the constraints to apply to the track's constrainable properties; any existing constraints are replaced with the new values specified, and any constrainable properties not included are restored to their default constraints.
    If this parameter is omitted, all currently set custom constraints are cleared.
    This object represents the basic set of constraints that must apply for the {{jsxref("Promise")}} to resolve.
    The object may contain an advanced property containing an array of additional `MediaTrackConstraints` objects, which are treated as exact requires.

### Return value

A {{jsxref("Promise")}} which resolves when the constraints have been successfully applied.
If the constraints cannot be applied, the promise is rejected with a {{domxref("OverconstrainedError")}} that is a {{domxref("DOMException")}} whose name is `OverconstrainedError` with additional parameters, and, to indicate that the constraints could not be met.
This can happen if the specified constraints are too strict to find a match when attempting to configure the track.

## Examples

The following shows how to specify a basic and advanced set of constraints.
It specifies that the page or web app needs a width between 640 and 1280 and a height between 480 and 720, with the later number in each pair being preferred.
The advanced property further specifies that an image size of 1920 by 1280 is the preferred or an {{glossary("aspect ratio")}} of 1.333 if that is not available.
Note that these constraints also illustrate what the spec refers to as a _backoff strategy_.

```js
const constraints = {
  width: { min: 640, ideal: 1280 },
  height: { min: 480, ideal: 720 },
  advanced: [{ width: 1920, height: 1280 }, { aspectRatio: 1.333 }],
};

navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  const track = mediaStream.getVideoTracks()[0];
  track
    .applyConstraints(constraints)
    .then(() => {
      // Do something with the track such as using the Image Capture API.
    })
    .catch((e) => {
      // The constraints could not be satisfied by the available devices.
    });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [MediaStream Image Capture API](/en-US/docs/Web/API/MediaStream_Image_Capture_API)
