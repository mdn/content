---
title: XRSession.onend
slug: Web/API/XRSession/onend
tags:
  - API
  - AR
  - Augmented Reality
  - Event Handler
  - Experimental
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XR
  - onend
browser-compat: api.XRSession.onend
---
{{APIRef("WebXR Device API")}}

The **`onend`** attribute of the
{{DOMxRef("XRSession")}} object is the event handler for the
{{DOMxRef("XRSession.end_event", "end")}} event, which is dispatched after the XR
session ends and all related hardware-specific routines are completed.

## Syntax

```js
XRSession.onend = function(event) { ... };
```

## Example

```js
XRSession.onend = function(event) {
  console.log("The XR session has ended")
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
