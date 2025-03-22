---
title: "XRWebGLLayer: getViewport() method"
short-title: getViewport()
slug: Web/API/XRWebGLLayer/getViewport
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRWebGLLayer.getViewport
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The {{domxref("XRWebGLLayer")}} interface's
**`getViewport()`** method returns the
{{domxref("XRViewport")}} that should be used to render the specified
{{domxref("XRView")}} into the WebGL layer. For WebXR devices which use a
single framebuffer for both the left and right eyes, the returned viewport represents
the region of the framebuffer into which the scene should be rendered for the eye
represented by the view.

## Syntax

```js-nolint
getViewport(view)
```

### Parameters

- `view`
  - : An {{domxref("XRView")}} object indicating the view for which the viewport is to be
    returned.

### Return value

A {{domxref("XRViewport")}} object representing the viewport which will restrict
drawing to the portion of the layer corresponding to the specified `view`.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if either the specified `view` is not in an active {{domxref("XRFrame")}} or
    that `XRFrame` and the {{domxref("XRWebGLLayer")}} are not part of the same
    [WebXR session](/en-US/docs/Web/API/XRSession).

## Examples

This example demonstrates in part what the callback for the
{{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} function might
look like, using `getViewport()` to get the viewport so that drawing can be
constrained to the area set aside for the eye whose viewpoint is currently being
rendered.

This works because the set of views returned by an {{domxref("XRViewerPose")}} each
represent one eye's perspective on the scene. Since the framebuffer is split in half,
one half for each eye, setting the WebGL viewport to match the WebXR layer's viewport
will ensure that when rendering the scene for the current eye's pose, it is rendered
into the correct half of the framebuffer.

```js
function drawFrame(time, frame) {
  const session = frame.session;

  const pose = frame.getViewerPose(mainReferenceSpace);

  if (pose) {
    const glLayer = session.renderState.baseLayer;
    gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);

    gl.clearColor(0, 0, 0, 1.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT, gl.DEPTH_COLOR_BIT);

    for (const view of pose.views) {
      const viewport = glLayer.getViewport(view);
      gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

      /* Render the scene now */
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
