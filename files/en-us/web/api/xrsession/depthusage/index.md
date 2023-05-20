---
title: "XRSession: depthUsage property"
short-title: depthUsage
slug: Web/API/XRSession/depthUsage
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRSession.depthUsage
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The _read-only_ **`depthUsage`** property of an `immersive-ar`
{{DOMxRef("XRSession")}} describes which depth-sensing usage is used.

## Value

This property can return the following values:

- `cpu-optimized`
  - : The depth data is intended to be used on the CPU; see the {{domxref("XRCPUDepthInformation")}} interface.
- `gpu-optimized`
  - : The depth data is intended to be used on the GPU; see the {{domxref("XRWebGLDepthInformation")}} interface.

## Examples

To request the desired usage method, you need to specify a `usagePreference` when requesting a session using {{domxref("XRSystem.requestSession()")}}. Here, the caller is able to handle both CPU- and GPU-optimized usage. The order indicates preference for CPU:

```js
navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["cpu-optimized", "gpu-optimized"],
    formatPreference: ["luminance-alpha", "float32"],
  },
});
```

To check which usage was selected by the user agent, you can call the `depthUsage` property:

```js
console.log(session.depthUsage); // either "cpu-optimized" or "gpu-optimized"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
