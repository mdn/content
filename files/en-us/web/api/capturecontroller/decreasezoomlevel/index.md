---
title: "CaptureController: decreaseZoomLevel() method"
short-title: decreaseZoomLevel()
slug: Web/API/CaptureController/decreaseZoomLevel
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.CaptureController.decreaseZoomLevel
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The {{domxref("CaptureController")}} interface's **`decreaseZoomLevel()`** method decreases the captured display surface's zoom percentage to the next level down.

## Syntax

```js-nolint
decreaseZoomLevel()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with {{jsxref("undefined")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : The captured display surface is already at its minimum supported zoom level.
- `NotAllowedError` {{domxref("DOMException")}}
  - : The operation is disallowed by a {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy).

## Examples

### Basic `decreaseZoomLevel()` usage

The following snippet adds an event listener to a button so that when it is clicked, the `decreaseZoom()` function is called. This in turn calls the `decreaseZoomLevel()` method, zooming the captured surface out.

```js
decBtn.addEventListener("click", decreaseZoom);

async function decreaseZoom() {
  controller.decreaseZoomLevel();
}
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
