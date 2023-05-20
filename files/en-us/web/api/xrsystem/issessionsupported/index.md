---
title: "XRSystem: isSessionSupported() method"
short-title: isSessionSupported()
slug: Web/API/XRSystem/isSessionSupported
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRSystem.isSessionSupported
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The {{domxref("XRSystem")}} method
**`isSessionSupported()`** returns a promise which resolves to
`true` if the specified WebXR session mode is supported by the user's WebXR
device. Otherwise, the promise resolves with `false`.

If no devices are available or the browser doesn't have permission
to use the XR device, the promise is rejected with an appropriate
{{domxref("DOMException")}}.

## Syntax

```js-nolint
isSessionSupported(mode)
```

### Parameters

- `mode`

  - : A {{jsxref("String")}} specifying the WebXR session mode for which support is to
    be checked. Possible modes to check for:

    - `immersive-ar` {{Experimental_Inline}}
    - `immersive-vr`
    - `inline`

### Return value

A {{jsxref("Promise")}} that resolves to `true` if the specified session
mode is supported; otherwise the promise resolves to `false`.

### Exceptions

Rather than throwing true exceptions, `isSessionSupported()` rejects the
returned promise, passing to the rejection handler a {{domxref("DOMException")}} whose
`name` is one of the following strings.

- `SecurityError`
  - : Use of this feature is blocked by an `xr-spatial-tracking` [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Examples

In this example, we see `isSessionSupported()` used to detect whether or not
the device supports VR mode by checking to see if an `immersive-vr` session
is supported. If it is, we set up a button to read "Enter XR", to call a method
`onButtonClicked()`, and enable the button.

If no session is already underway, we request the VR session and, if successful, set up
the session in a method called `onSessionStarted()`, not shown. If a session
_is_ already underway when the button is clicked, we call the
`xrSession` object's {{domxref("XRSession.end", "end()")}} method to shut
down the WebXR session.

```js
if (navigator.xr) {
  navigator.xr.isSessionSupported("immersive-vr").then((isSupported) => {
    if (isSupported) {
      userButton.addEventListener("click", onButtonClicked);
      userButton.textContent = "Enter XR";
      userButton.disabled = false;
    }
  });
}

function onButtonClicked() {
  if (!xrSession) {
    navigator.xr.requestSession("immersive-vr").then((session) => {
      xrSession = session;
      // onSessionStarted() not shown for reasons of brevity and clarity.
      onSessionStarted(xrSession);
    });
  } else {
    // Button is a toggle button.
    xrSession.end();
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
