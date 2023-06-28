---
title: "XRHitTestResult: getPose() method"
short-title: getPose()
slug: Web/API/XRHitTestResult/getPose
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRHitTestResult.getPose
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`getPose()`** method of the {{domxref("XRHitTestResult")}} interface returns the {{domxref("XRPose")}} of the hit test result relative to the given base space.

## Syntax

```js-nolint
getPose(baseSpace)
```

### Parameters

- `baseSpace`
  - : An {{domxref("XRSpace")}} to use as the base or origin for computing the relative position and orientation of hit test results.

### Return value

Returns an {{domxref("XRPose")}} object.

## Examples

### Getting the hit test result's pose

The following example uses `getPose()` to query a single hit test result's pose.

```js
let hitTestResults = xrFrame.getHitTestResults(hitTestSource);

if (hitTestResults.length > 0) {
  let pose = hitTestResults[0].getPose(referenceSpace);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRFrame.getPose()")}}
