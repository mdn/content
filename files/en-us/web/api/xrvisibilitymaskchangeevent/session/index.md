---
title: "XRVisibilityMaskChangeEvent: session property"
short-title: session
slug: Web/API/XRVisibilityMaskChangeEvent/session
page-type: web-api-instance-property
browser-compat: api.XRVisibilityMaskChangeEvent.session
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The read-only **`session`** property of the {{domxref("XRVisibilityMaskChangeEvent")}} interface indicates the {{domxref("XRSession")}} to which the event belongs.

## Value

An {{domxref("XRSession")}} object indicating which WebXR session the event belongs to.

## Examples

This example indicates how you might check a custom `userRequestsSessionEnd` value when the `visibilitymaskchange` event fires to see whether the user has manually selected an option to end the XR session. If so, you can access the `XRSession` via the `session` property and end the session using {{domxref("XRSession.end()")}}.

If the user has not selected this option, you could run some kind of function to render the new view based on the other values available in the `XRVisibilityMaskChangeEvent` object.

```js
xrSession.addEventListener("visibilitymaskchange", (e) => {
  if (userRequestsSessionEnd) {
    e.session.end();
  } else {
    renderNewView(e.index, e.eye, e.indices, e.vertices);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
