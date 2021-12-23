---
title: XRCPUDepthInformation.getDepthInMeters()
slug: Web/API/XRCPUDepthInformation/getDepthInMeters
tags:
  - API
  - AR
  - Augmented Reality
  - Experimental
  - Method
  - Reference
  - VR
  - WebXR
  - WebXR Device API
browser-compat: api.XRCPUDepthInformation.getDepthInMeters
---
{{APIRef("WebXR Device API")}}

The **`getDepthInMeters()`** method of the {{DOMxRef("XRCPUDepthInformation")}} interface returns the depth in meters at (x, y) in normalized view coordinates (origin in the top left corner).

## Syntax

```js
getDepthInMeters(x, y)
```

### Parameters

- `x`
  - : X coordinate (origin at the left, grows to the right).
- `y`
  - : Y coordinate (origin at the top, grows downward).

### Exceptions

- A {{jsxref("RangeError")}} is thrown if `x` or `y` are greater than 1.0 or less than 0.0.

## Examples

```js
const distance = depthInfo.getDepthInMeters(x, y);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
