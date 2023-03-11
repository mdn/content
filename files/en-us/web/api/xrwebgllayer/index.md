---
title: XRWebGLLayer
slug: Web/API/XRWebGLLayer
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRWebGLLayer
---

{{SecureContext_Header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`XRWebGLLayer`** interface of the WebXR Device API provides a linkage between the WebXR device (or simulated XR device, in the case of an inline session) and a WebGL context used to render the scene for display on the device. In particular, it provides access to the WebGL framebuffer and viewport to ease access to the context.

Although `XRWebGLLayer` is currently the only type of framebuffer layer supported by [WebGL](/en-US/docs/Web/API/WebGL_API), it's entirely possible that future updates to the WebXR specification may allow for other layer types and corresponding image sources.

{{InheritanceDiagram}}

## Constructor

- {{domxref("XRWebGLLayer.XRWebGLLayer", "new XRWebGLLayer()")}} {{Experimental_Inline}}
  - : Creates and returns a new `XRWebGLLayer` object for use by the specified {{domxref("XRSession")}}, using a particular {{domxref("WebGLRenderingContext")}} or {{domxref("WebGL2RenderingContext")}} as the destination context.

## Instance properties

- {{domxref('XRWebGLLayer.antialias', "antialias")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A Boolean value indicating whether or not the WebGL context's framebuffer supports anti-aliasing. The specific type of anti-aliasing is determined by the {{Glossary("user agent")}}.
- {{domxref('XRWebGLLayer.fixedFoveation', "fixedFoveation")}} {{Experimental_Inline}}
  - : A number indicating the amount of foveation used by the XR compositor. Fixed Foveated Rendering (FFR) renders the edges of the eye textures at a lower resolution than the center and reduces the GPU load.
- {{domxref('XRWebGLLayer.framebuffer', "framebuffer")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref('WebGLFramebuffer')}} suitable for passing into the {{domxref("WebGLRenderingContext.bindFrameBuffer", "bindFrameBuffer()")}} method.
- {{domxref('XRWebGLLayer.framebufferWidth', "framebufferWidth")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the width of the `XRWebGLLayer`'s framebuffer.
- {{domxref('XRWebGLLayer.framebufferHeight', "framebufferHeight")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the height of the layer's framebuffer.
- {{domxref('XRWebGLLayer.ignoreDepthValues', "ignoreDepthValues")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A Boolean which Indicates whether or not the [WebXR compositor](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) should make use of the contents of the layer's depth buffer while compositing the scene.

## Static methods

- {{domxref('XRWebGLLayer.getNativeFramebufferScaleFactor()', "getNativeFramebufferScaleFactor()")}} {{Experimental_Inline}}
  - : Returns the scaling factor that can be used to scale the resolution of the recommended WebGL framebuffer resolution to the rendering device's native resolution.

## Instance methods

- {{domxref('XRWebGLLayer.getViewport()', "getViewport()")}} {{Experimental_Inline}}
  - : Returns a new {{domxref('XRViewport')}} instance representing the position, width, and height to which the [WebGL context's viewport](/en-US/docs/Web/API/WebGLRenderingContext/viewport) must be set to contain drawing to the area of the framebuffer designated for the specified view's contents. In this way, for example, the rendering of the left eye's point of view and of the right eye's point of view are each placed into the correct parts of the framebuffer.

## Examples

### Binding the layer to a WebGL context

This snippet, taken from [Drawing a frame](/en-US/docs/Web/API/WebXR_Device_API/Movement_and_motion#drawing_a_frame) in our "Movement and motion" WebXR example, shows how the `XRWebGLLayer` is obtained from the {{domxref("XRSession")}} object's rendering state and is then bound as the current rendering WebGL framebuffer by calling the WebGL {{domxref("WebGLRenderingContext.bindFrameBuffer", "bindFrameBuffer()")}} function.

```js
let glLayer = xrSession.renderState.baseLayer;
gl.bindFrameBuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
```

### Rendering every view in a frame

Each time the GPU is ready to render the scene to the XR device, the XR runtime calls the function you specified when you called the {{domxref("XRSession")}} method {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} to ask to render the frame.

That function receives as input an {{domxref("XRFrame")}} which encapsulates the data needed to render the frame. This information includes the pose (an {{domxref("XRViewerPose")}} object) that describes the position and facing direction of the viewer within the scene as well as a list of {{domxref("XRView")}} objects, each representing one perspective on the scene. In current WebXR implementations, there will never be more than two entries in this list: one describing the position and viewing angle of the left eye and another doing the same for the right.

```js
let pose = xrFrame.getViewerPose(xrReferenceSpace);

if (pose) {
  const glLayer = xrSession.renderState.baseLayer;
  gl.bindFrameBuffer(gl.FRAMEBUFFER, glLayer.Framebffer);

  for (const view of pose.views) {
    const viewport = glLayer.getViewport(view);
    gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

    /* Render the view */
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- [Getting started with WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
- {{domxref('WebGLRenderingContext')}} and {{domxref("WebGL2RenderingContext")}}
- [Drawing a frame](/en-US/docs/Web/API/WebXR_Device_API/Movement_and_motion#drawing_a_frame) in our "Movement and motion" WebXR example
