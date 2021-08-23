---
title: XRHitTestResult.createAnchor()
slug: Web/API/XRHitTestResult/createAnchor
tags:
  - API
  - Method
  - Reference
  - AR
  - VR
  - XR
  - WebXR
browser-compat: api.XRHitTestResult.createAnchor
---
{{APIRef("WebXR Device API")}}

The **`createAnchor()`** method of the {{domxref("XRHitTestResult")}} interface creates an {{domxref("XRAnchor")}} from a hit test result that is attached to a real world object.

## Syntax

```js
createAnchor()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} resolving to an {{domxref("XRAnchor")}} object.

## Examples

### Creating an anchor from a hit test result

Once you found intersections on real-world surfaces by using hit testing, you can create an {{domxref("XRAnchor")}} to attach a virtual object to that location.

```js
hitTestResult.createAnchor().then((anchor) => {
  // add anchored objects to the scene
}, (error) => {
  console.error("Could not create anchor: " + error);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRAnchor")}}
- {{domxref("XRFrame.createAnchor()")}}
