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

The {{domxref("CaptureController")}} interface's **`increaseZoomLevel()`** method increases the captured display surface's zoom level by one increment.

The `increaseZoomLevel()` method must be invoked via [transient activation](/en-US/docs/Glossary/Transient_activation). In addition, the user is asked for permission to share tabs when screen capture is first attempted; if the user denies permission the zoom level cannot be changed even with transient activation.

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
  - : Thrown when:
    - The captured display surface is already at its maximum supported zoom level.
    - An attempt is made to invoke `increaseZoomLevel()` without transient activation.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown when:
    - The page's {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) does not permit the page to use the Captured Surface Control API.
    - Permission to capture the display surface is explicitly denied by the user.

## Examples

### Basic `increaseZoomLevel()` usage

The following snippet adds an event listener to a button so that when it is clicked, the `increaseZoom()` function is called. This in turn calls the `increaseZoomLevel()` method, zooming the captured surface in.

```js
// Create controller and start capture
const controller = new CaptureController();
videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia({
  controller,
});

// ...

incBtn.addEventListener("click", increaseZoom);

async function increaseZoom() {
  try {
    await controller.increaseZoomLevel();
  } catch (e) {
    console.log(e);
  }
}
```

It is generally a best practice to call `increaseZoomLevel()` from within a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block because the zoom level could be changed asynchronously by an entity other than the application, which might lead to an error being thrown. For example, the user might directly interact with the captured surface to zoom in or out.

See [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) for a full working example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
