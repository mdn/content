---
title: "CaptureController: forwardWheel() method"
short-title: forwardWheel()
slug: Web/API/CaptureController/forwardWheel
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.CaptureController.forwardWheel
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The {{domxref("CaptureController")}} interface's **`forwardWheel()`** method starts forwarding {{domxref("Element.wheel_event", "wheel")}} events fired on the referenced element to the viewport of an associated captured display surface.

The `forwardWheel()` method must be invoked via [transient activation](/en-US/docs/Glossary/Transient_activation), in which case the user is asked for permission to scroll the captured page. Specifically, the only events that can successfully invoke it are `click` and `input`. If the relevant permission is already `"granted"`, transient activation and permission gathering is not needed.

## Syntax

```js-nolint
forwardWheel(element)
```

### Parameters

- `element`
  - : A reference to the element whose `wheel` events you want to forward to the associated captured display surface.

### Return value

A {{jsxref("Promise")}} that fulfills with {{jsxref("undefined")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown when:
    - The capturing {{domxref("MediaStream")}} returned by the originating {{domxref("MediaDevices.getDisplayMedia()")}} call is no longer capturing, for example because the associated {{domxref("MediaStreamTrack")}} objects have had {{domxref("MediaStreamTrack.stop", "stop()")}} called on them.
    - The application is capturing itself.
    - An attempt is made to invoke `forwardWheel()` without transient activation, when permission to use it has not already been granted by the user.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown when:
    - A {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) is set that does not permit the page to use the Captured Surface Control API.
    - Permission to forward wheel events is explicitly denied by the user.
- `NotSupportedError` {{domxref("DOMException")}}
  - : The surface type being captured is not a browser tab.

## Examples

### Basic `forwardWheel()` usage

In our live demo, explained in [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control), we call a function called `startForwarding()` after the capturing `getDisplayMedia()` promise fulfills:

```js
// Create controller and start capture
const controller = new CaptureController();
videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia({
  controller,
});

// ...

startForwarding();
```

This function calls the `forwardWheel()` method, passing it a reference to the `<video>` element the captured stream is being displayed in:

```js
async function startForwarding() {
  try {
    await controller.forwardWheel(videoElem);
  } catch (e) {
    console.log(e);
  }
}
```

This results in the {{domxref("Element.wheel_event", "wheel")}} events fired on the referenced element being forwarded to the captured display surface, allowing the capturing app to scroll it.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
