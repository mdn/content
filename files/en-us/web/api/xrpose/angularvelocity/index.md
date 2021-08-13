---
title: XRPose.angularVelocity
slug: Web/API/XRPose/angularVelocity
tags:
  - API
  - Property
  - Read-only
  - Reference
  - WebXR
  - XRPose
browser-compat: api.XRPose.angularVelocity
---
{{APIRef}}

The `angularVelocity` read-only property of the
{{DOMxRef("XRPose")}} interface is a {{DOMxRef("DOMPointReadOnly")}} describing
the angular velocity in radians per second relative to the base
{{DOMxRef("XRSpace")}}.

## Syntax

```js
let radiansPerSecond = xrPose.angularVelocity;
```

### Value

A {{DOMxRef("DOMPointReadOnly")}} describing the angular velocity in radians
per second relative to the base {{DOMxRef("XRSpace")}}. Returns {{jsxref("null")}}
if the user agent can’t populate this value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRPose.linearVelocity")}}
