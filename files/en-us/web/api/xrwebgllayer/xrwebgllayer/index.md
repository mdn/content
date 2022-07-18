---
title: XRWebGLLayer()
slug: Web/API/XRWebGLLayer/XRWebGLLayer
page-type: web-api-constructor
tags:
  - API
  - AR
  - Constructor
  - Context
  - Create
  - Initialize
  - Layer
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRWebGLLayer
  - augmented
  - new
browser-compat: api.XRWebGLLayer.XRWebGLLayer
---
{{APIRef("WebXR Device API")}}

The [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) **`XRWebGLLayer()`** constructor creates and
returns a new {{domxref("XRWebGLLayer")}} object, providing the linkage between the
WebXR device and the WebGL graphics layer used to render the 3D scene.

## Syntax

```js
new XRWebGLLayer(session, context)
new XRWebGLLayer(session, context, layerInit)
```

### Parameters

- `session`
  - : An {{domxref("XRSession")}} object specifying the WebXR session which will be
    rendered using the WebGL context.
- `context`
  - : A {{domxref("WebGLRenderingContext")}} or {{domxref("WebGL2RenderingContext")}}
    identifying the WebGL drawing context to use for rendering the scene for the specified
    WebXR session.
- `layerInit` {{optional_inline}}

  - : An object providing configuration options for the new `XRWebGLLayer`. The available options
    are:

    - `alpha`
      - : The frame buffer's color buffer will be established with an alpha channel if the `alpha` Boolean property is `true`. Otherwise, the color buffer will not have an alpha channel. The default value is `true`.
    - `antialias`
      - : A Boolean value which is `true` if anti-aliasing is to be used when rendering in the context; otherwise `false`. The browser selects the anti-aliasing method to use; there is no support for requesting a specific mode yet.  The default value is `true`.
    - `depth`
      - : A Boolean value which, if `true`, requests that the new layer have a depth buffer; otherwise, no depth layer is allocated. The default is `true`.
    - `framebufferScaleFactor`
      - : A floating-point value which is used to scale the image during compositing, with a value of 1.0 represents the default pixel size for the frame buffer. The static {{domxref("XRWebGLLayer")}} function {{domxref("XRWebGLLayer.getNativeFramebufferScaleFactor()")}} returns the scale that would result in a 1:1 pixel ratio, thereby ensuring that the rendering is occurring at the device's native resolution. The default is 1.0.
    - `ignoreDepthValues`
      - : A Boolean value which indicates whether or not to ignore the contents of the depth buffer while compositing the scene. The default is `false`.
    - `stencil`
      - : A Boolean value which, if `true`, requests that the new layer include a stencil buffer. Otherwise, no stencil buffer is allocated. The default is `false`.

### Return value

A newly-created {{domxref("XRWebGLLayer")}} which links the specified
{{domxref("XRSession")}} to the WebGL context given by `context`, which will
be used as the renderer for the session. Any options specified in `layerInit`
are used to tailor the rendering system's configuration.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the new `XRWebGLLayer` could not be created due to one of a number of
    possible state errors:
    - The {{domxref("XRSession")}} specified by `session` has already been
      stopped.
    - The specified WebGL context, `context`, [has been lost](/en-US/docs/Web/API/WebGLRenderingContext/isContextLost#usage_notes) for any reason, such as a GPU switch or reset.
    - The specified `session` is immersive but the `context` is
      not WebXR compatible.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if the resources (including memory buffers) needed for the layer to operate could not
    be allocated.

## Examples

In this example, a new {{domxref("XRWebGLLayer")}} is created for a WebXR session,
`xrSession`.

```js
xrSession.updateRenderState({
  baseLayer: new XRWebGLLayer(xrSession, gl, {
     alpha: false,
     antialias: false,
     depth: false,
     framebufferScaleFactor: 0.5,
     ignoreDepthValues: true,
     stencil: false
  })
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- [Getting started with WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
- [Handling lost context in WebGL](https://www.khronos.org/webgl/wiki/HandlingContextLost): Khronos WebGL wiki
