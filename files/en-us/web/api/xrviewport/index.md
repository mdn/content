---
title: XRViewport
slug: Web/API/XRViewport
page-type: web-api-interface
tags:
  - API
  - AR
  - Graphics
  - Interface
  - Reality
  - Reference
  - VR
  - Virtual
  - WebGL
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRViewport
  - augmented
  - render
  - viewport
browser-compat: api.XRViewport
---
{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The WebXR Device API's **`XRViewport`** interface provides properties used to describe the size and position of the current viewport within the {{domxref("XRWebGLLayer")}} being used to render the 3D scene.

## Properties

- {{domxref("XRViewport.height", "height")}} {{ReadOnlyInline}}
  - : The height, in pixels, of the viewport.
- {{domxref("XRViewport.width", "width")}} {{ReadOnlyInline}}
  - : The width, in pixels, of the viewport.
- {{domxref("XRViewport.x", "x")}} {{ReadOnlyInline}}
  - : The offset from the origin of the destination graphics surface (typically a {{domxref("XRWebGLLayer")}}) to the left edge of the viewport, in pixels.
- {{domxref("XRViewport.y", "y")}} {{ReadOnlyInline}}
  - : The offset from the origin of the viewport to the bottom edge of the viewport; WebGL's coordinate system places (0, 0) at the bottom left corner of the surface.

## Usage notes

Currently, the only type of surface available is the {{domxref("XRWebGLLayer")}}. The precise orientation of the coordinate system may vary with other surface types, but in WebGL, the origin (0, 0) is located at the bottom-left corner of the surface. Thus the values specified in an `XRViewport` define a rectangle whose bottom-left corner is at (`x`, `y`) and which extends `width` pixels toward the left and `height` pixels upward.

These values may be passed directly into the {{domxref("WebGLRenderingContext.viewport()")}} method:

```js
const xrViewport = xrWebGLLayer.getViewport(xrView);
gl.viewport(xrViewport.x, xrViewport.y, xrViewport.width, xrViewport.height);
```

## Example

This example sets up an animation frame callback using {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}. After initial setup, it iterates over each of the views within the viewer's pose, configuring the viewport as dictated by the {{domxref("XRWebGLLayer")}}.

```js
xrSession.requestAnimationFrame((time, xrFrame) => {
  const viewerPose = xrFrame.getViewerPose(xrReferenceSpace);

  gl.bindFramebuffer(xrWebGLLayer.framebuffer);

  for (const xrView of viewerPose.views) {
    const xrViewport = xrWebGLLayer.getViewport(xrView);
    gl.viewport(xrViewport.x, xrViewport.y, xrViewport.width, xrViewport.height);

   // Now we can use WebGL to draw into a viewport matching
   // the viewer's needs
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
