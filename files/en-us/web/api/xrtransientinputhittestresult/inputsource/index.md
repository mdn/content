---
title: XRTransientInputHitTestResult.inputSource
slug: Web/API/XRTransientInputHitTestResult/inputSource
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
browser-compat: api.XRTransientInputHitTestResult.inputSource
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The _read-only_ **`inputSource`** property of the {{DOMxRef("XRTransientInputHitTestResult")}} interface represents an {{domxref("XRInputSource")}} object that was used to compute the {{domxref("XRTransientInputHitTestResult.results", "results")}} array.

## Value

An {{domxref("XRInputSource")}} object.

## Examples

### Filtering input sources

The `inputSource` property allows you to filter hit test results by input source.

```js
// frame loop
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResultsForTransientInput(transientHitTestSource);

  hitTestResults.forEach((resultsPerInputSource) => {
    if (resultsPerInputSource.inputSource === myPreferredInputSource) {
      // act on hit test results from the preferred input source
    }
  });
 }
 ```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRInputSource")}}
