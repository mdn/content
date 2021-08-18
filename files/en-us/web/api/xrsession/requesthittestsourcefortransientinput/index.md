---
title: XRSession.requestHitTestSourceForTransientInput()
slug: Web/API/XRSession/requestHitTestSourceForTransientInput
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
browser-compat: api.XRSession.requestHitTestSourceForTransientInput
---
{{APIRef("WebXR Device API")}}

The **`requestHitTestSourceForTransientInput()`** method of the
{{domxref("XRSession")}} interface returns a {{jsxref("Promise")}} that resolves with an {{domxref("XRTransientInputHitTestSource")}} object that can be used to obtain hit test results using the {{domxref("XRFrame.getHitTestResultsForTransientInput()")}} method.

## Syntax

```js
requestHitTestSourceForTransientInput(options);
```

### Parameters

- `options`
  - : An object containing configuration options, specifically:
    - `profile`: A string specifying the [input profile name](/en-US/docs/Web/API/XRInputSource) of the transient input source that will be used to compute hit test results.
    - `entityTypes`: {{optional_inline}} An {{jsxref("Array")}} specifying the types of entities that should be used for the purposes of hit test source creation. If no no entity type is specified, the array defaults to a single element with the `plane` type. Possible types:
      - `point`: Compute hit test results based on characteristic points detected.
      - `plane`: Compute hit test results based on real-world planes detected.
      - `mesh`: Compute hit test results based on meshes detected.
    - `offsetRay`: {{optional_inline}} The {{domxref("XRRay")}} object that will be used to perform hit test. If no `XRRay` object has been provided, a new `XRRay` object is constructed without any parameters.

### Return value

A {{jsxref("Promise")}} that resolves with an {{domxref("XRTransientInputHitTestSource")}} object.

### Exceptions

Rather than throwing true exceptions, `requestHitTestSourceForTransientInput()` rejects the
returned promise with a {{domxref("DOMException")}}, specifically, one of the following:

- `NotSupportedError`
  - : If `hit-test` is not an enabled feature in {{domxref("XRSystem.requestSession()")}}.
- `InvalidStateError`
  - : If the session has already ended.
- `NotAllowedError`
  - : If there is an unreasonable amount of requests (some user agents might limit usage due to privacy reasons).

## Examples

### Requesting a transient hit test source

To request a hit test source, make sure to start an {{domxref("XRSession")}} with the `hit-test` session feature enabled. Then you can configure the hit test source and store it for later use in the frame loop where you can use the {{domxref("XRFrame.getHitTestResultsForTransientInput()")}} method to obtain the hit test result.

```js

const xrSession = navigator.xr.requestSession("immersive-ar", {
   requiredFeatures: ["local", "hit-test"]
});

let transientHitTestSource = null;

xrSession.requestHitTestSourceForTransientInput({
  space : "generic-touchscreen",
  offsetRay : new XRRay()
}).then((touchScreenHitTestSource) => {
  transientHitTestSource = touchScreenHitTestSource;
});

// frame loop
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResultsForTransientInput(transientHitTestSource);

  // do things with the transient hit test results
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSession.requestHitTestSource()")}}
