---
title: "CaptureController: increaseZoomLevel() method"
short-title: increaseZoomLevel()
slug: Web/API/CaptureController/increaseZoomLevel
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.CaptureController.increaseZoomLevel
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The {{domxref("CaptureController")}} interface's **`increaseZoomLevel()`** method increases the captured display surface's zoom percentage to the next level up.

## Syntax

```js-nolint
increaseZoomLevel()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with {{jsxref("undefined")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : The captured display surface is already at its maximum supported zoom level.
- `NotAllowedError` {{domxref("DOMException")}}
  - : The operation is disallowed by a {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy).

## Examples

### Basic `increaseZoomLevel()` usage

The following snippet adds an event listener to a button so that when it is clicked, the `increaseZoom()` function is called. This in turn calls the `increaseZoomLevel()` method, zooming the captured surface in.

```js
incBtn.addEventListener("click", increaseZoom);

async function increaseZoom() {
  controller.increaseZoomLevel();
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
