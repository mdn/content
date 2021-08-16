---
title: XRSession.requestLightProbe()
slug: Web/API/XRSession/requestLightProbe
tags:
  - API
  - AR
  - Augmented Reality
  - Experimental
  - Method
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XR
  - XRSession
browser-compat: api.XRSession.requestLightProbe
---
{{APIRef("WebXR Device API")}}

The **`requestLightProbe()`** method of the
{{domxref("XRSession")}} interface returns a {{jsxref("Promise")}} that resolves to an {{domxref("XRLightProbe")}} object that can be used to estimate lighting information at a given point in the user's environment.

## Syntax

```js
requestLightProbe(options);
```

### Parameters

- `options`
  - : An optional object configuring the light probe. Properties:
    - `reflectionFormat`: Internal reflection format indicating how the texture data is represented. Either `srgba8` (default value) or `rgba16f`. See also {{domxref("XRSession.preferredReflectionFormat")}}.

### Exceptions

Rather than throwing true exceptions, `requestLightProbe()` rejects the
returned promise with a {{domxref("DOMException")}} whose name is found in the list
below:

- `NotSupportedError`
  - : If `lighting-estimation` is not an enabled feature in {{domxref("XRSystem.requestSession()")}}.
  - : If the `reflectionFormat` is not `srgb8` or the `preferredReflectionFormat`.
- `InvalidStateError`
  - : If the session has already ended.

## Examples

### Requesting a light probe with the system's preferred format

The default format is `srgb8`, however, some runtimes may use other (high dynamic range) formats. You can request the light probe with {{domxref("XRSession.preferredReflectionFormat")}} which reports the preferred internal format.

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

- {{domxref("XRSession.preferredReflectionFormat")}}
