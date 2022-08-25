---
title: XRHitTestResult.createAnchor()
slug: Web/API/XRHitTestResult/createAnchor
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - AR
  - VR
  - XR
  - WebXR
  - Experimental
browser-compat: api.XRHitTestResult.createAnchor
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`createAnchor()`** method of the {{domxref("XRHitTestResult")}} interface creates an {{domxref("XRAnchor")}} from a hit test result that is attached to a real world object.

## Syntax

```js
createAnchor()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} resolving with an {{domxref("XRAnchor")}} object.

## Examples

### Creating an anchor from a hit test result

The following example starts with an {{domxref("XRHitTestResult")}} retrieved by calling {{domxref("XRFrame.getHitTestResults()")}}. After calling `createAnchor()`, the Promise resolves with an {{domxref("XRAnchor")}} to attach a virtual object to that location.

```js
hitTestResult.createAnchor().then((anchor) => {
  // add anchored objects to the scene
}, (error) => {
  console.error(`Could not create anchor: ${error}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRAnchor")}}
- {{domxref("XRFrame.createAnchor()")}}
