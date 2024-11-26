---
title: "BrowserCaptureMediaStreamTrack: restrictTo() method"
short-title: restrictTo()
slug: Web/API/BrowserCaptureMediaStreamTrack/restrictTo
page-type: web-api-instance-method
browser-compat: api.BrowserCaptureMediaStreamTrack.restrictTo
---

{{APIRef("Screen Capture extensions")}}{{SeeCompatTable}}{{securecontext_header}}

The **`restrictTo()`** method of the {{domxref("BrowserCaptureMediaStreamTrack")}} interface restricts a self-capture stream to a specific rendered restriction target element.

## Syntax

```js-nolint
restrictTo(restrictionTarget)
```

### Parameters

- `restrictionTarget`
  - : A {{domxref("RestrictionTarget")}} instance representing the element the stream should be restricted to, or `null`/`undefined`, in which case any previously-set restriction is removed from the track.

### Return value

A {{jsxref("Promise")}} that resolves to {{jsxref("undefined")}}.

The promise will reject if:

- The track [`kind`](/en-US/docs/Web/API/MediaStreamTrack/kind) is not `"video"`, or its [`readyState`](/docs/Web/API/MediaStreamTrack/readyState) is not `"live"`.
- The restriction target element no longer exists.
- The track being restricted has clones or is not a track captured from the user's screen.
- `RestrictionTarget` is not one of the values specified above.
- `RestrictionTarget` was created in a tab other than the one being captured.

## Examples

### Basic restriction example

```js
// Create restriction target from DOM element
const demoElem = document.querySelector("#demo");
const restrictionTarget = await RestrictionTarget.fromElement(demoElem);

// Capture video stream from user's webcam and isolate video track
const stream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
const [track] = stream.getVideoTracks();

// Restrict video track
await track.restrictTo(restrictionTarget);

// Broadcast restricted stream in <video> element
videoElem.srcObject = stream;
```

See [Using the Element Capture and Region Capture APIs](/en-US/docs/Web/API/Screen_Capture_extensions/Element_Region_Capture) for in-context example code.

### Stopping the restriction

You can stop the restriction by making a call to `restrictTo()` on the same track, passing an argument of `null` to it:

```js
// Stop restricting
await track.restrictTo(null);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture extensions](/en-US/docs/Web/API/Screen_Capture_extensions)
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
