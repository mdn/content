---
title: "CaptureController: getSupportedZoomLevels() method"
short-title: getSupportedZoomLevels()
slug: Web/API/CaptureController/getSupportedZoomLevels
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.CaptureController.getSupportedZoomLevels
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The {{domxref("CaptureController")}} interface's **`getSupportedZoomLevels()`** method returns the different zoom levels that the captured display surface supports.

## Syntax

```js-nolint
getSupportedZoomLevels()
```

### Parameters

None.

### Return value

An array of numbers representing the different zoom levels that the captured display surface supports.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : The capturing {{domxref("MediaStream")}} returned by the originating {{domxref("MediaDevices.getDisplayMedia()")}} call is no longer capturing, for example because the associated {{domxref("MediaStreamTrack")}} objects have had {{domxref("MediaStreamTrack.stop", "stop()")}} called on them.
- `NotSupportedError` {{domxref("DOMException")}}
  - : The surface type being captured is not a browser tab.

## Examples

### Basic `getSupportedZoomLevels()` usage

In our live demo, shown in [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control), we grab the supported zoom levels of the captured display surface by running `getSupportedZoomLevels()`, storing the resulting array in a variable called `zoomLevels`:

```js
const zoomLevels = controller.getSupportedZoomLevels();
```

This is later used in a function called `updateZoomButtonState()`. The problem this solves is that, if you try to zoom out below the minimum supported zoom level, or zoom in above the maximum supported zoom level, {{domxref("CaptureController.decreaseZoomLevel", "decreaseZoomLevel()")}}/{{domxref("CaptureController.increaseZoomLevel", "increaseZoomLevel()")}} will throw an `InvalidStateError` {{domxref("DOMException")}}.

> [!NOTE]
> It is generally a best practice to call `decreaseZoomLevel()` and `increaseZoomLevel()` from within a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block because the zoom level could be changed asynchronously by an entity other than the application, which might lead to an error being thrown. For example, the user might directly interact with the captured surface to zoom in or out.

The `updateZoomButtonState()` function avoids this issue by first making sure both the "Zoom out" and "Zoom in" buttons are enabled. It then does two checks:

- If the current zoom level is equal to the minimum supported zoom level (stored in the first value of the `zoomLevels` array), we disable the "Zoom out" button so the user can't zoom out any further.
- If the current zoom level is equal to the maximum supported zoom level (stored in the last value of the `zoomLevels` array), we disable the "Zoom in" button so the user can't zoom in any further.

```js
function updateZoomButtonState() {
  decBtn.disabled = false;
  incBtn.disabled = false;
  if (controller.zoomLevel === zoomLevels[0]) {
    decBtn.disabled = true;
  } else if (controller.zoomLevel === zoomLevels[zoomLevels.length - 1]) {
    incBtn.disabled = true;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
