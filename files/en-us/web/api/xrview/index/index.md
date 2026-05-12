---
title: "XRView: index property"
short-title: index
slug: Web/API/XRView/index
page-type: web-api-instance-property
browser-compat: api.XRView.index
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The **`index`** read-only property of the {{domxref("XRView")}} interface indicates the index of the current `XRView` in the {{domxref("XRViewerPose.views")}} array.

## Value

A number.

## Examples

### Basic usage

```js
console.log(xrView.index);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRViewerPose.views")}}
- {{domxref("XRFrame.getViewerPose()")}}
