---
title: "XRSession: requestHitTestSourceForTransientInput() method"
short-title: requestHitTestSourceForTransientInput()
slug: Web/API/XRSession/requestHitTestSourceForTransientInput
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRSession.requestHitTestSourceForTransientInput
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`requestHitTestSourceForTransientInput()`** method of the
{{domxref("XRSession")}} interface returns a {{jsxref("Promise")}} that resolves with an {{domxref("XRTransientInputHitTestSource")}} object that can be passed to {{domxref("XRFrame.getHitTestResultsForTransientInput()")}}.

## Syntax

```js-nolint
requestHitTestSourceForTransientInput(options)
```

### Parameters

- `options`
  - : An object containing configuration options, specifically:
    - `profile`
      - : A string specifying the [input profile name](/en-US/docs/Web/API/XRInputSource) of the transient input source that will be used to compute hit test results.
    - `entityTypes` {{Optional_Inline}}
      - : An {{jsxref("Array")}} specifying the types of entities to be used for hit test source creation. If no entity type is specified, the array defaults to a single element with the `plane` type. Possible types:
        - `point`: Compute hit test results based on characteristic points detected.
        - `plane`: Compute hit test results based on real-world planes detected.
        - `mesh`: Compute hit test results based on meshes detected.
    - `offsetRay` {{Optional_Inline}}
      - : The {{domxref("XRRay")}} object that will be used to perform hit test. If no `XRRay` object has been provided, a new `XRRay` object is constructed without any parameters.

### Return value

A {{jsxref("Promise")}} that resolves with an {{domxref("XRTransientInputHitTestSource")}} object.

### Exceptions

Rather than throwing true exceptions, `requestHitTestSourceForTransientInput()` rejects the
returned promise with a {{domxref("DOMException")}}, specifically, one of the following:

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if `hit-test` is not an enabled feature in {{domxref("XRSystem.requestSession()")}}.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the session has already ended.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if there is an unreasonable amount of requests. Some user agents might limit usage for privacy reasons.

## Examples

### Requesting a transient hit test source

To request a hit test source, start an {{domxref("XRSession")}} with the `hit-test` session feature enabled. Next, configure the hit test source and store it for later use in the frame loop and call {{domxref("XRFrame.getHitTestResultsForTransientInput()")}} to obtain the result.

```js
const xrSession = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["local", "hit-test"],
});

let transientHitTestSource = null;

xrSession
  .requestHitTestSourceForTransientInput({
    profile: "generic-touchscreen",
    offsetRay: new XRRay(),
  })
  .then((touchScreenHitTestSource) => {
    transientHitTestSource = touchScreenHitTestSource;
  });

// frame loop
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResultsForTransientInput(
    transientHitTestSource,
  );

  // do things with the transient hit test results
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSession.requestHitTestSource()")}}
