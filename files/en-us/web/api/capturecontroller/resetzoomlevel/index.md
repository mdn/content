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

The {{domxref("CaptureController")}} interface's **`resetZoomLevel()`** method resets the captured display surface's zoom to its initial level, which is `100`.

The `resetZoomLevel()` method must be invoked via [transient activation](/en-US/docs/Glossary/Transient_activation), in which case the user is asked for permission to zoom the captured page. If the relevant permission is already `"granted"`, transient activation and permission gathering is not needed.

## Syntax

```js-nolint
resetZoomLevel()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with {{jsxref("undefined")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : An attempt is made to invoke `forwardWheel()` without transient activation, when permission to use it has not already been granted by the user.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown when:
    - A {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) is set that does not permit the page to use the Captured Surface Control API.
    - Permission to zoom the captured display surface is explicitly denied by the user.

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
  await controller.resetZoomLevel();
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
