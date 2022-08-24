---
title: XRSession.preferredReflectionFormat
slug: Web/API/XRSession/preferredReflectionFormat
page-type: web-api-instance-property
tags:
  - API
  - AR
  - Augmented Reality
  - Experimental
  - Property
  - Reference
  - VR
  - WebXR
  - WebXR Device API
browser-compat: api.XRSession.preferredReflectionFormat
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The _read-only_ **`preferredReflectionFormat`** property of the {{DOMxRef("XRSession")}} interface returns this session's preferred reflection format used for lighting estimation texture data.

## Value

A string representing the reflection format. Possible values:

| XRReflectionFormat | WebGL Format  | WebGL Internal Format  | WebGPU Format  | HDR  |
|---|---|---|---|---|
| "srgba8" | RGBA  | SRGB8_ALPHA8  | "rgba8unorm-srgb"  |  |
| "rgba16f" | RGBA  | RGBA16F  | "rgba16float"  | ✓ |

## Examples

### Requesting a light probe with the system's preferred format

You can request a light probe with {{domxref("XRSession.requestLightProbe()")}} and specify the system's preferred format by setting the `reflectionFormat` option equal to `XRSession.preferredReflectionFormat`.

```js
const lightProbe = await xrSession.requestLightProbe({
  reflectionFormat: xrSession.preferredReflectionFormat
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSession.requestLightProbe()")}}
