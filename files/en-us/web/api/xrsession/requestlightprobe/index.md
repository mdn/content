---
title: "XRSession: requestLightProbe() method"
short-title: requestLightProbe()
slug: Web/API/XRSession/requestLightProbe
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRSession.requestLightProbe
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`requestLightProbe()`** method of the
{{domxref("XRSession")}} interface returns a {{jsxref("Promise")}} that resolves with an {{domxref("XRLightProbe")}} object that estimates lighting information at a given point in the user's environment.

## Syntax

```js-nolint
requestLightProbe()
requestLightProbe(options)
```

### Parameters

- `options` {{Optional_Inline}}
  - : An object containing configuration options, specifically:
    - `reflectionFormat`
      - : The internal reflection format indicating how the texture data is represented, either `srgba8` (default value) or `rgba16f`. See also {{domxref("XRSession.preferredReflectionFormat")}}.

### Return value

A {{jsxref("Promise")}} that resolves with an {{domxref("XRLightProbe")}} object.

### Exceptions

Rather than throwing true exceptions, `requestLightProbe()` rejects the
returned promise with a {{domxref("DOMException")}}, specifically, one of the following:

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if `lighting-estimation` is not an enabled feature in {{domxref("XRSystem.requestSession()")}} or if the `reflectionFormat` is not `srgb8` or the `preferredReflectionFormat`.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the session has already ended.

## Examples

### Requesting a light probe with the system's preferred format

The default format is `srgb8`, however, some rendering engines may use other (high dynamic range) formats. You can request the light probe with {{domxref("XRSession.preferredReflectionFormat")}} which reports the preferred internal format.

```js
const lightProbe = await xrSession.requestLightProbe({
  reflectionFormat: xrSession.preferredReflectionFormat,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSession.preferredReflectionFormat")}}
