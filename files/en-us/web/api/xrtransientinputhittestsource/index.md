---
title: XRTransientInputHitTestSource
slug: Web/API/XRTransientInputHitTestSource
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRTransientInputHitTestSource
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

The **`XRTransientInputHitTestSource`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) handles transient input hit test subscriptions. You can get an `XRTransientInputHitTestSource` object by calling the {{domxref("XRSession.requestHitTestSourceForTransientInput()")}}.

This object doesn't itself contain transient input hit test results, but it is used to compute hit tests for each {{domxref("XRFrame")}} by calling {{domxref("XRFrame.getHitTestResultsForTransientInput()")}}, which returns {{domxref("XRTransientInputHitTestResult")}} objects.

## Instance properties

None.

## Instance methods

- {{domxref("XRTransientInputHitTestSource.cancel()")}} {{Experimental_Inline}}
  - : Unsubscribes from the transient input hit test.

## Examples

### Getting an `XRTransientInputHitTestSource` object for a session

Use the {{domxref("XRSession.requestHitTestSourceForTransientInput()")}} method to get a transient input hit test source.

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

### Unsubscribe from a transient input hit test

To unsubscribe from a transient input hit test source, use the {{domxref("XRTransientInputHitTestSource.cancel()")}} method. Since the object will no longer be usable, you can clean up and set the `XRTransientInputHitTestSource` object to [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

```js
transientHitTestSource.cancel();
transientHitTestSource = null;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRTransientInputHitTestResult")}}
