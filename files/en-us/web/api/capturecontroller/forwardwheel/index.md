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

The `forwardWheel` method must be invoked via [transient activation](/en-US/docs/Glossary/Transient_activation). Specifically, the only events that can successfully invoke it are `click` and `input`.

## Syntax

```js-nolint
forwardWheel(element)
```

### Parameters

- `element`
  - : A reference to the element whose captured `wheel` events you want to forward to the associated captured display surface.

### Return value

A {{jsxref("Promise")}} that fulfills with {{jsxref("undefined")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown when:
    - The capturing {{domxref("MediaStream")}} returned by the originating {{domxref("MediaDevices.getDisplayMedia()")}} call is no longer capturing, for example because the associated {{domxref("MediaStreamTrack")}} objects have had {{domxref("MediaStreamTrack.stop", "stop()")}} called on them.
    - The application is capturing itself.
    - an attempt was made to invoke `forwardWheel()` without transient activation.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown when:
    - The operation is disallowed by a {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy).
    - Permission to forward wheel events was explicitly denied by the user.
- `NotSupportedError` {{domxref("DOMException")}}
  - : The surface type being captured is not a browser tab.

## Examples

### Basic `forwardWheel()` usage

In our live demo, explained in [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control), we call a function called `startForwarding()` after the capturing `getDisplayMedia()` promise fulfills:

```js
videoElem.srcObject =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);

// ..

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
