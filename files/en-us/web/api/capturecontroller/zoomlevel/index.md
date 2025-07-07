---
title: "CaptureController: zoomLevel property"
short-title: zoomLevel
slug: Web/API/CaptureController/zoomLevel
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.CaptureController.zoomLevel
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}

The **`zoomLevel`** read-only property of the {{domxref("CaptureController")}} interface returns the captured display surface's current zoom level.

## Value

A number representing the current zoom percentage of the captured display surface.

## Examples

### Basic `zoomLevel` usage

In our live demo, shown in [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control), we use the `zoomLevel` property inside an event handler function for the controller's {{domxref("CaptureController.zoomlevelchange_event", "zoomlevelchange")}} event. When the event fires, the updated `zoomLevel` percentage is written to an `<output>` element.

```js
// Create controller and start capture
const controller = new CaptureController();
videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia({
  controller,
});

// ...

controller.addEventListener(
  "zoomlevelchange",
  () => (outputElem.textContent = `${controller.zoomLevel}%`),
);
```

See [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) for a full working example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
