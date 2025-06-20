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

The **`zoomLevel`** read-only property of the
{{domxref("CaptureController")}} interface returns the captured display surface's current zoom percentage.

## Value

A number representing the current zoom percentage of the captured display surface.

## Examples

### Basic `zoomLevel` usage

When a captured display surface's zoom level changes, a {{domxref("CaptureController.zoomlevelchange_event", "zoomlevelchange")}} event fires on the controller, which can be used to run an event handler such as the following. This writes the updated zoom percentage to an output element of some kind.

```js
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
