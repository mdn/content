---
title: XRView.recommendedViewportScale
slug: Web/API/XRView/recommendedViewportScale
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - AR
  - VR
  - XR
  - WebXR
browser-compat: api.XRView.recommendedViewportScale
---
{{APIRef("WebXR Device API")}}

The read-only **`recommendedViewportScale`** property of the {{domxref("XRView")}} interface is the recommended viewport scale value that you can use for {{domxref("XRView.requestViewportScale()")}} if the user agent has such a recommendation; {{jsxref("null")}} otherwise.

## Value

A number greater than 0.0 and less than or equal to 1.0; or {{jsxref("null")}} if the user agent does not provide a recommended scale.

## Examples

### Dynamic viewport scaling

Dynamic viewport scaling allows applications to only use a subset of the available {{domxref("XRWebGLLayer.framebuffer", "framebuffer")}}. The feature may not be available on all systems since it depends on driver support, so you might want to ensure that {{domxref("XRView.requestViewportScale")}} exists before calling it.

```js
for (let view of pose.views) {
  if (view.requestViewportScale) {
    view.requestViewportScale(view.recommendedViewportScale);
  }
  let viewport = glLayer.getViewport(view);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRView.requestViewportScale()")}}
