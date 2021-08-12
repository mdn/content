---
title: XRReferenceSpace.onreset
slug: Web/API/XRReferenceSpace/onreset
tags:
  - API
  - AR
  - Event Handler
  - Property
  - Reality
  - Reference
  - Spatial
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRReferenceSpace
  - augmented
  - onreset
  - reset
  - tracking
browser-compat: api.XRReferenceSpace.onreset
---
{{APIRef("WebXR Device API")}}

The {{domxref("XRReferenceSpace")}}
interface's **`onreset`** event handler property can be set to a
function which is called when the `XRReferenceSpace` receives a
{{domxref("XRReferenceSpace.reset_event", "reset")}} event, signaling that the  XR
device has experienced a discontinuity large enough to require that the position and/or
orientation of the origin be significantly altered to compensate.

## Syntax

```js
xrReferenceSpace.onreset = eventHandler;

eventHandler = xrReferenceSpace.onreset;
```

### Value

An event handler function which will be called whenever the `reset` event is
received by the `XRReferenceSpace`.

## Usage notes

See the {{domxref("XRReferenceSpace.reset_event", "reset")}} event documentation for
further details.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
