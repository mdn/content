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

The {{domxref("CaptureController")}} interface's **`decreaseZoomLevel()`** method decreases the captured display surface's zoom level by one increment.

The `decreaseZoomLevel()` method must be invoked via [transient activation](/en-US/docs/Glossary/Transient_activation), in which case the user is asked for permission to zoom the captured page. If the relevant permission is already `"granted"`, transient activation and permission gathering is not needed.

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
  - : Thrown when:
    - The captured display surface is already at its minimum supported zoom level.
    - An attempt is made to invoke `forwardWheel()` without transient activation, when permission to use it has not already been granted by the user.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown when:
    - A {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) is set that does not permit the page to use the Captured Surface Control API.
    - Permission to zoom the captured display surface is explicitly denied by the user.

## Examples

### Basic `decreaseZoomLevel()` usage

The following snippet adds an event listener to a button so that when it is clicked, the `decreaseZoom()` function is called. This in turn calls the `decreaseZoomLevel()` method, zooming the captured surface out.

```js
// Create controller and start capture
const controller = new CaptureController();
videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia({
  controller,
});

// ...

decBtn.addEventListener("click", decreaseZoom);

async function decreaseZoom() {
  try {
    await controller.decreaseZoomLevel();
  } catch (e) {
    console.log(e);
  }
}
```

It is generally a best practice to call `decreaseZoomLevel()` from within a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block because the zoom level could be changed asynchronously by an entity other than the application, which might lead to an error being thrown. For example, the user might directly interact with the captured surface to zoom in or out.

See [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) for a full working example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
