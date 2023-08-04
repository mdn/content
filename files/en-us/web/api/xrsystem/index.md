---
title: XRSystem
slug: Web/API/XRSystem
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRSystem
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) interface **`XRSystem`** provides methods which let you get access to an {{domxref("XRSession")}} object representing a WebXR session. With that `XRSession` in hand, you can use it to interact with the Augmented Reality (AR) or Virtual Reality (VR) device.

{{InheritanceDiagram}}

## Instance properties

_While `XRSystem` directly offers no properties, it does inherit properties from its parent interface, {{domxref("EventTarget")}}._

## Instance methods

_In addition to inheriting methods from its parent interface, {{domxref("EventTarget")}}, the `XRSystem` interface includes the following methods:_

- {{DOMxRef("XRSystem.isSessionSupported", "isSessionSupported()")}} {{Experimental_Inline}}
  - : Returns a promise which resolves to `true` if the browser supports the given session mode.
    Resolves to `false` if the specified mode isn't supported.
- {{DOMxRef("XRSystem.requestSession", "requestSession()")}} {{Experimental_Inline}}
  - : Returns a promise that resolves to a new {{DOMxRef("XRSession")}} with the specified session mode.

## Events

- {{domxref("XRSystem.devicechange_event", "devicechange")}} {{Experimental_Inline}}
  - : Sent when the set of available XR devices has changed.
    Also available using the `ondevicechange` event handler.

## Usage notes

This interface was previously known as `XR` in earlier versions of the specification; if you see references to `XR` in code or documentation, replace that with `XRSystem`.

## Examples

The following example shows how to use both {{domxref("XRSystem.isSessionSupported", "isSessionSupported()")}} and {{domxref("XRSystem.requestSession", "requestSession()")}}.

```js
if (navigator.xr) {
  immersiveButton.addEventListener("click", onButtonClicked);
  navigator.xr.isSessionSupported("immersive-vr").then((isSupported) => {
    immersiveButton.disabled = !isSupported;
  });
}

function onButtonClicked() {
  if (!xrSession) {
    navigator.xr.requestSession("immersive-vr").then((session) => {
      // onSessionStarted() not shown for reasons of brevity and clarity.
      onSessionStarted(session);
    });
  } else {
    // Shut down the already running XRSession
    xrSession.end().then(() => {
      // Since there are cases where the end event is not sent, call the handler here as well.
      onSessionEnded();
    });
  }
}
```

This code starts by checking to see if WebXR is available by looking for the {{domxref("navigator.xr")}} property. If it's found, we know WebXR is present, so we proceed by establishing a handler for the button which the user can click to toggle immersive VR mode on and off.

However, we don't yet know if the desired immersive mode is available. To determine this, we call `isSessionSupported()`, passing it the desired session option before enabling the button, `immersiveButton`, which the user can then use to switch to immersive mode only if immersive VR mode is available. If immersive VR isn't available, the button is disabled to prevent its use.

The `onButtonClicked()` function checks to see if there's already a session running. If there isn't, we use `requestSession()` to start one and, once the returned promise resolves, we call a function `onSessionStarted()` to set up our session for rendering and so forth.

If, on the other hand, there is already an ongoing XR session, we instead call {{domxref("XRSession.end", "end()")}} to end the current session. When the current session ends, the {{domxref("XRSession.end_event", "end")}} event is sent, so set `xrSession` to `null` in its handler to record the fact that we no longer have an ongoing session. That way, if the user clicks the button again, a new session will start.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
