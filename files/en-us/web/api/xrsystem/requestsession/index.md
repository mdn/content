---
title: 'XRSystem: requestSession()'
slug: Web/API/XRSystem/requestSession
page-type: web-api-instance-method
tags:
  - API
  - AR
  - Augmented Reality
  - Experimental
  - Method
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XR
  - XRSystem
  - requestSession
browser-compat: api.XRSystem.requestSession
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **{{domxref("XRSystem")}}** interface's
**`requestSession()`** method returns a {{jsxref("promise")}}
which resolves to an {{domxref("XRSession")}} object through which you can manage the
requested type of WebXR session.

While only one immersive VR session can be active at a time, multiple
inline sessions can be in progress at once.

## Syntax

```js
requestSession(mode)
requestSession(mode, options)
```

### Parameters

- `mode`

  - : A {{jsxref("String")}} defining the XR session mode. The supported modes are:

    - {{Experimental_Inline}} `immersive-ar`: The session's output will be given exclusive access to the immersive device,
      but the rendered content will be blended with the real-world environment.
      The session's {{DOMxRef("XRSession.environmentBlendMode", "environmentBlendMode")}} indicates the method
      to be used to blend the content together.
    - `immersive-vr`: Indicates that the rendered session will be displayed using an immersive XR device
      in VR mode; it is not intended to be overlaid or integrated into the surrounding environment.
      The {{DOMxRef("XRSession.environmentBlendMode", "environmentBlendMode")}} is expected to be
      `opaque` if possible, but might be `additive` if the hardware requires it.
    - `inline`: The output is presented inline within the context of an element in a standard HTML document,
      rather than occupying the full visual space. Inline sessions can be presented in either mono or stereo mode,
      and may or may not have viewer tracking available. Inline sessions don't require special hardware and should be
      available on any {{Glossary("user agent")}} offering WebXR API support.

- `options` {{Optional_Inline}}

  - : An object to configure the {{domxref("XRSession")}}. If none are included, the device will use a default feature configuration for all options.
    - `requiredFeatures` {{Optional_Inline}}: An array of values which the returned {{domxref("XRSession")}}
      _must_ support. See [Session features](#session_features) below.
    - `optionalFeatures` {{Optional_Inline}}: An array of values identifying features which the returned
      {{domxref("XRSession")}} may optionally support. See [Session features](#session_features) below.
    - `domOverlay` {{Optional_Inline}}: An object with a required `root` property that specifies the overlay element that will be displayed to the user as the content of the DOM overlay. See the [example below](#requesting_a_session_with_a_dom_overlay).
    - `depthSensing` {{Optional_Inline}}: An object with two required properties {{domxref("XRSession.depthUsage", "usagePreference")}} and {{domxref("XRSession.depthDataFormat", "dataFormatPreference")}} to configure how to perform depth sensing. See the [example below](#requesting_a_depth-sensing_session).

### Return value

A {{jsxref("Promise")}} that resolves with an {{domxref("XRSession")}} object if the
device and user agent support the requested mode and features.

### Exceptions

This method doesn't throw true exceptions; instead, it rejects the returned promise,
passing into it a {{domxref("DOMException")}} whose `name` is one of the
following:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the requested session mode is `immersive-vr` but there is already an
    immersive VR session either currently active or in the process of being set up. There
    can only be one immersive VR session at a time.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Returned if there is no WebXR-compatible device available, or the device does not support the
    specified `sessionMode`; this can also be thrown if any of the
    _required_ options are unsupported.
- `SecurityError` {{domxref("DOMException")}}
  - : Returned if permission to enter the specified XR mode is denied. This can happen for a number
    of reasons, which are covered in more detail in [Permissions and security](/en-US/docs/Web/API/WebXR_Device_API/Permissions_and_security).

## Session features

The following session features and reference spaces can be requested, either as `optionalFeatures` or `requiredFeatures`.

- `anchor`
  - : Enable use of {{domxref("XRAnchor")}} objects.
- `bounded-floor`
  - : Similar to the `local` type, except the user is not expected to move outside a predetermined boundary, given by the {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} in the returned object.
- `depth-sensing`
  - : Enable the ability to obtain depth information using {{domxref("XRDepthInformation")}} objects.
- `dom-overlay`
  - : Enable allowing to specify a DOM overlay element that will be displayed to the user.
- `hand-tracking`
  - : Enable articulated hand pose information from hand-based input controllers (see {{domxref("XRHand")}} and {{domxref("XRInputSource.hand")}}).
- `hit-test`
  - : Enable hit testing features for performing hit tests against real world geometry.
- `layers`
  - : Enable the ability to create various layer types (other than {{domxref("XRProjectionLayer")}}).
- `light-estimation`
  - : Enable the ability to estimate environmental lighting conditions using {{domxref("XRLightEstimate")}} objects.
- `local`
  - : Enable a tracking space whose native origin is located near the viewer's position at the time the session was created. The exact position depends on the underlying platform and implementation. The user isn't expected to move much if at all beyond their starting position, and tracking is optimized for this use case.
- `local-floor`
  - : Similar to the `local` type, except the starting position is placed in a safe location for the viewer to stand, where the value of the y axis is 0 at floor level. If that floor level isn't known, the {{Glossary("user agent")}} will estimate the floor level. If the estimated floor level is non-zero, the browser is expected to round it such a way as to avoid fingerprinting (likely to the nearest centimeter).
- `secondary-views`
  - : Enable {{domxref("XRView")}} objects to be secondary views. This can be used for first-person observer views used for video capture, or "quad views" where there are two views per eye, with differing resolution and fields of view.
- `unbounded`
  - : Enable a tracking space which allows the user total freedom of movement, possibly over extremely long distances from their origin point. The viewer isn't tracked at all; tracking is optimized for stability around the user's current position, so the native origin may drift as needed to accommodate that need.
- `viewer`
  - : Enable a tracking space whose native origin tracks the viewer's position and orientation.

### Security requirements

Several session features and the various reference spaces have minimum security and privacy requirements, like asking for user consent and/or requiring the {{HTTPHeader("Feature-Policy")}}: [`xr-spatial-tracking`](/en-US/docs/Web/HTTP/Headers/Feature-Policy/xr-spatial-tracking) directive to be set. See also [Permissions and security](/en-US/docs/Web/API/WebXR_Device_API/Permissions_and_security) for more details.

| Session feature | User consent requirement            | Feature policy requirement |
| --------------- | ----------------------------------- | -------------------------- |
| `bounded-floor` | Always required                     | `xr-spatial-tracking`      |
| `depth-sensing` | —                                   | `xr-spatial-tracking`      |
| `hand-tracking` | Always required                     | —                          |
| `hit-test`      | —                                   | `xr-spatial-tracking`      |
| `local`         | Always required for inline sessions | `xr-spatial-tracking`      |
| `local-floor`   | Always required                     | `xr-spatial-tracking`      |
| `unbounded`     | Always required                     | `xr-spatial-tracking`      |
| `viewer`        | Always required                     | —                          |

## Examples

### Creating an immersive VR session

The following example calls `requestSession()` requesting an
`"immersive-vr"` session. If the {{jsxref("Promise")}} resolves, it sets up a
session and initiates the animation loop.

```js
navigator.xr.requestSession("immersive-vr")
.then((xrSession) => {
  xrSession.addEventListener('end', onXRSessionEnded);
  // Do necessary session setup here.
  // Begin the session's animation loop.
  xrSession.requestAnimationFrame(onXRAnimationFrame);
}).catch((error) => {
  // "immersive-vr" sessions are not supported
  console.error("'immersive-vr' isn't supported, or an error occurred activating VR!");
});
```

### Verifying WebXR support and using a button to start VR mode

The following example shows how to use both `isSessionSupported()` and
`requestSession()`. First, it checks to see if WebXR is available by
verifying the existence of {{domxref("navigator.xr")}}. Next, it calls
`isSessionSupported()`, passing it the desired session option before enabling
controls for entering XR. Adding controls is a necessary step because entering XR
requires a user action. Finally, the `onButtonClicked()` method calls
`requestSession()` using the same session option passed to
`isSessionSupported()`.

```js
if (navigator.xr) {
  navigator.xr.isSessionSupported('immersive-vr')
  .then((isSupported) => {
    if (isSupported) {
      immersiveButton.addEventListener('click', onButtonClicked);
      immersiveButton.textContent = 'Enter XR';
      immersiveButton.disabled = false;
    } else {
      console.error("WebXR doesn't support immersive-vr mode!");
    }
  });
} else {
  console.error("WebXR is not available!");
}

function onButtonClicked() {
  if (!xrSession) {
    navigator.xr.requestSession('immersive-vr')
    .then((session) => {
      xrSession = session;
      // onSessionStarted() not shown for reasons of brevity and clarity.
      onSessionStarted(xrSession);
    });
  } else {
    // Button is a toggle button.
    xrSession.end().then(() => xrSession = null);
  }
}
```

### Requesting a session with required features

Require an unbounded experience in which the user is able to freely move around their physical environment:

```js
navigator.xr.requestSession('immersive-vr', { requiredFeatures: ['unbounded'] })
```

### Requesting a session with a DOM overlay

```js
navigator.xr.requestSession("immersive-ar", {
  optionalFeatures: ["dom-overlay"],
  domOverlay: {
    root: document.getElementById("xr-overlay")
  }
});
```

### Requesting a depth-sensing session

Here, the caller is able to handle both CPU- and GPU-optimized usage, as well as both "luminance-alpha" and "float32" formats. The order indicates preference for CPU and "luminance-alpha":

```js
navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["cpu-optimized", "gpu-optimized"],
    formatPreference: ["luminance-alpha", "float32"]
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
