---
title: XRSessionEvent.session
slug: Web/API/XRSessionEvent/session
page-type: web-api-instance-property
tags:
  - API
  - AR
  - Mixed
  - Property
  - Reality
  - Reference
  - Session
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRSession
  - XRSessionEvent
  - augmented
  - events
  - sessions
browser-compat: api.XRSessionEvent.session
---
{{APIRef("WebXR Device API")}}

The read-only {{domxref("XRSessionEvent")}} interface's
**`session`** property indicates which
{{domxref("XRSession")}} the event is about.

## Value

An {{domxref("XRSession")}} object indicating which WebXR session the event refers to.

## Examples

In this example, the `session` property is used to obtain the session object
to manage when an event is received.

```js
xrSession.addEventListener("visibilitychange", (e) => {
  switch(e.session.visibilityState) {
    case "hidden":
      myEnableRendering(true);
      break;
    case "visible":
    case "visible-blurred":
      myEnableRendering(false);
      break;
  }
});
```

This calls a function that reacts to the session's visibility state change.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
