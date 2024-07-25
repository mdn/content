---
title: "XRPose: linearVelocity property"
short-title: linearVelocity
slug: Web/API/XRPose/linearVelocity
page-type: web-api-instance-property
browser-compat: api.XRPose.linearVelocity
---

{{APIRef}}{{SecureContext_Header}}

The `linearVelocity` read-only property of the
{{DOMxRef("XRPose")}} interface is a {{DOMxRef("DOMPointReadOnly")}} describing
the linear velocity in meters per second relative to the base
{{DOMxRef("XRSpace")}}.

## Value

A {{DOMxRef("DOMPointReadOnly")}} describing the linear velocity in meters
per second relative to the base {{DOMxRef("XRSpace")}}. Returns [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)
if the user agent can't populate this value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRPose.angularVelocity")}}
