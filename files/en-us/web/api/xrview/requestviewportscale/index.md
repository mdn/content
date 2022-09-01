---
title: XRView.requestViewportScale()
slug: Web/API/XRView/requestViewportScale
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
browser-compat: api.XRView.requestViewportScale
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`requestViewportScale()`** method of the {{domxref("XRView")}} interface requests that the user agent sets the requested viewport scale for this viewport to the given value. This is used for dynamic viewport scaling which allows rendering to a subset of the WebXR viewport using a scale factor that can be changed every animation frame.

## Syntax

```js
requestViewportScale(scale)
```

### Parameters

- `scale`
  - : A number greater than 0.0 and less than or equal to 1.0 representing the scale factor.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Dynamic viewport scaling

Dynamic viewport scaling allows applications to only use a subset of the available {{domxref("XRWebGLLayer.framebuffer", "framebuffer")}}. The feature may not be available on all systems since it depends on driver support, so you might want to ensure that `requestViewportScale()` exists before calling it.

The `scale` parameter can be a number greater than 0.0 and less than or equal to 1.0.

Alternatively, you can use the {{domxref("XRView.recommendedViewportScale")}} property which contains the user agent's recommended value based on internal heuristics. If the user agent doesn't provide a recommended viewport scale, its value is `null` and the call to `requestViewportScale()` is ignored.

## Examples

The following example shows how to request and apply a new viewport scale. The call to {{domxref("XRWebGLLayer.getViewport()")}} applies the change and returns the updated viewport.

```js
for (const view of pose.views) {
  if (view.requestViewportScale) {
    view.requestViewportScale(0.8);
    // or use view.requestViewportScale(view.recommendedViewportScale);
  }
  const viewport = glLayer.getViewport(view);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRView.recommendedViewportScale")}}
