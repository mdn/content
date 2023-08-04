---
title: "XRWebGLBinding: createProjectionLayer() method"
short-title: createProjectionLayer()
slug: Web/API/XRWebGLBinding/createProjectionLayer
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRWebGLBinding.createProjectionLayer
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`createProjectionLayer()`** method of the {{domxref("XRWebGLBinding")}} interface returns an {{domxref("XRProjectionLayer")}} object which is a layer that fills the entire view of the observer and is refreshed close to the device's native frame rate.

## Syntax

```js-nolint
createProjectionLayer(options)
```

### Parameters

- `options`
  - : An object to configure the {{domxref("XRProjectionLayer")}}.
    - `textureType` {{optional_inline}}
      - : An string defining the type of texture the layer will have. Possible values:
        - `texture`
          - : The textures of {{domxref("XRWebGLSubImage")}} will be of type `gl.TEXTURE_2D`.
        - `texture-array`
          - : The textures of {{domxref("XRWebGLSubImage")}} will be of type `gl.TEXTURE_2D_ARRAY` (WebGL 2 contexts only).
            The default value is `texture`.
    - `colorFormat` {{optional_inline}}
      - : A {{domxref("WebGL_API/Types", "GLenum")}} defining the data type of the color texture data. Possible values:
        - `gl.RGB`
        - `gl.RGBA`
          Additionally, for contexts with the {{domxref("EXT_sRGB")}} extension enabled:
        - `ext.SRGB_EXT`
        - `ext.SRGB_ALPHA_EXT`
          Additionally, for {{domxref("WebGL2RenderingContext")}} contexts:
        - `gl.RGBA8`
        - `gl.RGB8`
        - `gl.SRGB8`
        - `gl.RGB8_ALPHA8`
          The default value is `gl.RGBA`.
    - `depthFormat` {{optional_inline}}
      - : A {{domxref("WebGL_API/Types", "GLenum")}} defining the data type of the depth texture data or `0` indicating that the layer should not provide a depth texture. (In that case {{domxref("XRProjectionLayer.ignoreDepthValues")}} will be `true`.)
        Possible values within {{domxref("WebGLRenderingContext")}} contexts with the {{domxref("WEBGL_depth_texture")}} extension enabled, or within {{domxref("WebGL2RenderingContext")}} contexts (no extension required):
        - `gl.DEPTH_COMPONENT`
        - `gl.DEPTH_STENCIL`
          Additionally, for {{domxref("WebGL2RenderingContext")}} contexts:
        - `gl.DEPTH_COMPONENT24`
        - `gl.DEPTH24_STENCIL24`
          The default value is `gl.DEPTH_COMPONENT`.
    - `scaleFactor` {{optional_inline}}
      - : A floating-point value which is used to scale the layer during compositing. A value of `1.0` represents the default pixel size for the frame buffer. (See also {{domxref("XRWebGLLayer.getNativeFramebufferScaleFactor()")}}.) Unlike other layers, the `XRProjectionLayer` can't be created with an explicit pixel width and height, because the size is inferred by the hardware. (Projection layers fill the observer's entire view.)

### Return value

An {{domxref("XRProjectionLayer")}} object.

## Examples

### Creating an `XRProjectionLayer` in a WebGL 2 context

The `textureType` option allows allocating a texture array instead, in which every {{domxref("XRView")}} will be rendered into a separate level of the array. This allows for some rendering optimizations, such as the use of the {{domxref("OVR_multiview2")}} extension available in WebGL 2 contexts.

```js
function onXRSessionStarted(xrSession) {
  const glCanvas = document.createElement("canvas");
  const gl = glCanvas.getContext("webgl2", { xrCompatible: true });
  const xrGlBinding = new XRWebGLBinding(xrSession, gl);
  const projectionLayer = xrGlBinding.createProjectionLayer({
    textureType: "texture-array",
  });
  xrSession.updateRenderState({
    layers: [projectionLayer],
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRProjectionLayer")}}
- [WebGL constants](/en-US/docs/Web/API/WebGL_API/Constants)
