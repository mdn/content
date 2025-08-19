---
title: "CaptureController: zoomlevelchange event"
short-title: zoomlevelchange
slug: Web/API/CaptureController/zoomlevelchange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.CaptureController.zoomlevelchange_event
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}

The **`zoomlevelchange`** event of the {{domxref("CaptureController")}} interface is fired when the captured display surface's zoom level changes.

Specifically, this occurs when:

- The {{domxref("CaptureController.increaseZoomLevel", "increaseZoomLevel()")}}, {{domxref("CaptureController.decreaseZoomLevel", "decreaseZoomLevel()")}}, or {{domxref("CaptureController.resetZoomLevel", "resetZoomLevel()")}} methods are called on a controller that is actively controlling a captured display surface.
- The user changes the zoom level in the captured surface.
- The user changes the captured display surface to another one that has a different zoom level.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("zoomlevelchange", (event) => { })

onzoomlevelchange = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Basic `zoomlevelchange` usage

When a captured display surface's zoom level changes, a `zoomlevelchange` event fires on the controller, which can be used to run an event handler such as the following. This writes the updated zoom level to an output element of some kind.

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
