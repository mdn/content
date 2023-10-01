---
title: "XRTransientInputHitTestResult: results property"
short-title: results
slug: Web/API/XRTransientInputHitTestResult/results
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRTransientInputHitTestResult.results
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The _read-only_ **`results`** property of the {{DOMxRef("XRTransientInputHitTestResult")}} interface represents an array of {{domxref("XRHitTestResult")}} objects containing the hit test results for the input source, ordered by the distance along the ray used to perform the hit test, with the closest result at position 0.

## Value

An array of {{domxref("XRHitTestResult")}} objects.

## Examples

### Accessing transient input hit test results

Two arrays are used to access transient input hit test results. First, you get an array of `XRTransientInputHitTestResult` objects by calling {{domxref("XRFrame.getHitTestResultsForTransientInput()")}}. Second, to get to the actual {{domxref("XRHitTestResult")}} objects for an input source, you dereference the `results` property on one of the `XRTransientInputHitTestResult` objects.

```js
// frame loop
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResultsForTransientInput(
    transientHitTestSource,
  );

  hitTestResults.forEach((resultsPerInputSource) => {
    resultsPerInputSource.results.forEach((hitTest) => {
      // do something with the hit test
      hitTest.getPose(referenceSpace);
    });
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRHitTestResult")}}
