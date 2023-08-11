---
title: "XRWebGLBinding: getSubImage() method"
short-title: getSubImage()
slug: Web/API/XRWebGLBinding/getSubImage
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRWebGLBinding.getSubImage
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`getSubImage()`** method of the {{domxref("XRWebGLBinding")}} interface returns a {{domxref("XRWebGLSubImage")}} object representing the WebGL texture to render.

## Syntax

```js-nolint
getSubImage(layer, frame)
getSubImage(layer, frame, eye)
```

### Parameters

- `layer`
  - : The {{domxref("XRCompositionLayer")}} to use for rendering (can be all types of `XRCompositionLayer` objects except {{domxref("XRProjectionLayer")}}, see {{domxref("XRWebGLBinding.getViewSubImage()")}} for rendering projection layers).
- `frame`
  - : The {{domxref("XRFrame")}} frame to use for rendering.
- `eye` {{optional_inline}}
  - : An optional {{domxref("XRView.eye")}} indicating which view's eye to use for rendering. Possible values:
    - `left`
      - : The {{domxref("XRView")}} represents the point-of-view of the viewer's left eye.
    - `right`
      - : The view represents the viewer's right eye.
    - `none`
      - : The view describes a monoscopic view, or the view otherwise doesn't represent a particular eye's point-of-view.
        Defaults to `none`.

### Return value

A {{domxref("XRWebGLSubImage")}} object.

### Exceptions

A {{jsxref("TypeError")}} is thrown,

- if `layer` is not in the [session's `layer` array](/en-US/docs/Web/API/XRSession/updateRenderState#setting_the_layers_array).
- if `layer` is a {{domxref("XRProjectionLayer")}}.
- if the layer's [`layout`](/en-US/docs/Web/API/XRCompositionLayer/layout) property is `default`.
- if the layer's [`layout`](/en-US/docs/Web/API/XRCompositionLayer/layout) property is `stereo` and `eye` is `none`.

## Examples

### Rendering an `XRQuadLayer`

The following example renders an {{domxref("XRQuadLayer")}}.

```js
const xrGlBinding = new XRWebGLBinding(xrSession, gl);
const quadLayer = xrGlBinding.createQuadLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
});

// Position 2 meters away from the origin with a width and height of 1.5 meters
quadLayer.transform = new XRRigidTransform({ z: -2 });
quadLayer.width = 1.5;
quadLayer.height = 1.5;

const framebuffer = gl.createFramebuffer();
xrSession.updateRenderState({ layers: [quadLayer] });
xrSession.requestAnimationFrame(onXRFrame);

function onXRFrame(time, xrFrame) {
  xrSession.requestAnimationFrame(onXRFrame);

  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  let subImage = xrGlBinding.getSubImage(quadLayer, xrFrame);
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    subImage.colorTexture,
    0,
  );
  let viewport = subImage.viewport;
  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  // Render content for the quad layer
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRWebGLSubImage")}}
