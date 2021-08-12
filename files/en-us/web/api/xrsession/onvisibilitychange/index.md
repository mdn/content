---
title: XRSession.onvisibilitychange
slug: Web/API/XRSession/onvisibilitychange
tags:
  - API
  - AR
  - Augmented Reality
  - Event Handler
  - Reference
  - VR
  - Virtual Reality
  - WebXR Device API
  - XRSession
  - onvisibilitychange
browser-compat: api.XRSession.onvisibilitychange
---
{{APIRef("WebXR Device API")}}

The **`onvisibilitychange`**
attribute of the {{DOMxRef("XRSession")}} object is the event handler for the
{{DOMxRef("XRSession.visibilitychange_event", "visibilitychange")}} event, which is
dispatched when the visibility state of the XR session changes. The visibility state
of the session is accessible via {{DOMxRef("XRSession.visibilityState")}}.

> **Note:** The visibility state of XR session affects the frame loop so
> callbacks registered via {{DOMxRef("XRSession.requestAnimationFrame()")}} might not be
> called. Consult {{DOMxRef("XRSession.visibilityState")}} article for details.

## Syntax

```js
XRSession.onvisibilitychange = function(event) { ... }
```

## Example

```js
XRSession.onvisibilitychange = function(event) {
  console.log("The visibility the XR session changed.")
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("XRSession.visibilityState")}}
- {{DOMxRef("XRSession.requestAnimationFrame()")}}
