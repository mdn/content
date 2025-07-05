---
title: "CaptureController: resetZoomLevel() method"
short-title: resetZoomLevel()
slug: Web/API/CaptureController/resetZoomLevel
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.CaptureController.resetZoomLevel
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The {{domxref("CaptureController")}} interface's **`resetZoomLevel()`** method resets the captured display surface's zoom percentage to its initial level, which is `100`.

## Syntax

```js-nolint
resetZoomLevel()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with {{jsxref("undefined")}}.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : The operation is disallowed by a {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy).

## Examples

### Basic `resetZoomLevel()` usage

The following snippet adds an event listener to a button so that when it is clicked, the `resetZoom()` function is called. This in turn calls the `resetZoomLevel()` method, resetting the captured surface's zoom level to `100`.

```js
// Create controller and start capture
const controller = new CaptureController();
videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia({
  controller,
});

// ...

resetBtn.addEventListener("click", resetZoom);

async function resetZoom() {
  controller.resetZoomLevel();
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
