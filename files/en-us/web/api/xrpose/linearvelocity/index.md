---
title: XRPose.linearVelocity
slug: Web/API/XRPose/linearVelocity
tags:
  - API
  - Property
  - Read-only
  - Reference
  - WebXR
  - XRPose
browser-compat: api.XRPose.linearVelocity
---
{{APIRef}}

The `linearVelocity` read-only property of the
{{DOMxRef("XRPose")}} interface is a {{DOMxRef("DOMPointReadOnly")}} describing
the linear velocity in meters per second relative to the base
{{DOMxRef("XRSpace")}}.

## Syntax

```js
let metersPerSecond = xrPose.linearVelocity;
```

### Value

A {{DOMxRef("DOMPointReadOnly")}} describing the linear velocity in meters
per second relative to the base {{DOMxRef("XRSpace")}}. Returns {{jsxref("null")}}
if the user agent can’t populate this value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRPose.linearVelocity")}}
