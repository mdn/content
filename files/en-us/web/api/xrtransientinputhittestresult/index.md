---
title: XRTransientInputHitTestResult
slug: Web/API/XRTransientInputHitTestResult
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - WebXR
  - XR
  - AR
  - VR
  - Experimental
browser-compat: api.XRTransientInputHitTestResult
---
{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

The **`XRTransientInputHitTestResult`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) contains an array of results of a hit test for transient input, grouped by input source.

You can get an array of `XRHitTestResult` objects for a frame by calling {{domxref("XRFrame.getHitTestResultsForTransientInput()")}}.

## Properties

- {{domxref("XRTransientInputHitTestResult.inputSource")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Represents the {{domxref("XRInputSource")}} that was used to compute the `results` array.
- {{domxref("XRTransientInputHitTestResult.results")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Represents an array of {{domxref("XRHitTestResult")}} objects containing the hit test results for the input source, ordered by the distance along the ray used to perform the hit test, with the closest result at position 0.

## Methods

None.

## Examples

### Accessing transient input hit test results

Two arrays are used to access transient input hit test results. First, you get an array of `XRTransientInputHitTestResult` objects by calling {{domxref("XRFrame.getHitTestResultsForTransientInput()")}}. Second, to get to the actual {{domxref("XRHitTestResult")}} objects for an input source, you dereference the `results` property on one of the `XRTransientInputHitTestResult` objects.

```js
// frame loop
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResultsForTransientInput(transientHitTestSource);

  hitTestResults.forEach((resultsPerInputSource) => {
    resultsPerInputSource.results.forEach((hitTest) => {
      // do something with the hit test
      hitTest.getPose(referenceSpace);
    });
  });
 }
 ```

### Filtering input sources

The {{domxref("XRTransientInputHitTestResult.inputSource", "inputSource")}} property allows you to filter hit test results by input source.

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

- {{domxref("XRHitTestResult")}}
- {{domxref("XRInputSource")}}
