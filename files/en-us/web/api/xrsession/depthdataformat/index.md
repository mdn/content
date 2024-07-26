---
title: "XRSession: depthDataFormat property"
short-title: depthDataFormat
slug: Web/API/XRSession/depthDataFormat
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRSession.depthDataFormat
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The _read-only_ **`depthDataFormat`** property of an `immersive-ar`
{{DOMxRef("XRSession")}} describes which depth sensing data format is used.

## Value

This property can return the following values:

- `luminance-alpha`
  - : 2-byte unsigned integer data buffers (`LUMINANCE_ALPHA` `GLEnum`).
    CPU usage: interpret {{domxref("XRCPUDepthInformation.data")}} as {{jsxref("Uint8Array")}}.
    GPU usage: inspect Luminance and Alpha channels to reassemble single value.
- `float32`
  - : 4-byte floating point data buffers (`R32F` `GLEnum`).
    CPU usage: interpret {{domxref("XRCPUDepthInformation.data")}} as {{jsxref("Float32Array")}}.
    GPU usage: inspect Red channel and use the value.

## Examples

To request the desired data format, you need to specify a `dataFormatPreference` when requesting a session using {{domxref("XRSystem.requestSession()")}}. Here, the caller is able to handle both "luminance-alpha" and "float32" formats. The order indicates preference for "luminance-alpha":

```js
navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["cpu-optimized", "gpu-optimized"],
    formatPreference: ["luminance-alpha", "float32"],
  },
});
```

To check which data format was selected by the user agent, you can call the `depthDataFormat` property:

```js
console.log(session.depthDataFormat); // either "luminance-alpha" or "float32"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
