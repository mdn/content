---
title: "XRSession: enabledFeatures property"
short-title: enabledFeatures
slug: Web/API/XRSession/enabledFeatures
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRSession.enabledFeatures
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The {{domxref("XRSession")}} interface's _read-only_ **`enabledFeatures`** property returns an array of features enabled (granted) for an `XRSession`. This contains all `requiredFeatures` and a subset of `optionalFeatures` that have been requested with {{domxref("XRSystem.requestSession()")}}.

## Value

An {{jsxref("Array")}} of strings.

## Examples

### Detecting available WebXR session features

The {{domxref("XRSystem.requestSession()")}} method allows you to request XR [session features](/en-US/docs/Web/API/XRSystem/requestSession#session_features). The features can be requested either as `requiredFeatures` (the `XRSession` must support the feature), or as `optionalFeatures` (the `XRSession` may support the feature). The `enabledFeatures` property identifies which features are actually available in the session.

```js
navigator.xr
  .requestSession("immersive-ar", {
    requiredFeatures: ["local", "hit-test"],
    optionalFeatures: ["anchors"],
  })
  .then((xrSession) => {
    // Log enabledFeatures
    console.log(xrSession.enabledFeatures);

    // Check if anchors can be used
    if (xrSession.enabledFeatures.includes("anchors")) {
      // Go ahead and set up anchors
    }
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSystem.requestSession()")}}
- [Session features](/en-US/docs/Web/API/XRSystem/requestSession#session_features)
