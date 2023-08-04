---
title: "XRWebGLBinding: createQuadLayer() method"
short-title: createQuadLayer()
slug: Web/API/XRWebGLBinding/createQuadLayer
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRWebGLBinding.createQuadLayer
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`createQuadLayer()`** method of the {{domxref("XRWebGLBinding")}} interface returns an {{domxref("XRQuadLayer")}} object which is a layer that takes up a flat rectangular space in the virtual environment.

## Syntax

```js-nolint
createQuadLayer(options)
```

### Parameters

- `options`
  - : An object to configure the {{domxref("XRQuadLayer")}}. It must have the `space`, `viewPixelHeight`, and `viewPixelWidth` properties. `init` has the following properties:
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
          Additionally, for contexts with the {{domxref("WEBGL_compressed_texture_etc")}} extension enabled:
        - `ext.COMPRESSED_RGB8_ETC2`
        - `ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_RGBA8_ETC2_EAC`
        - `ext.COMPRESSED_SRGB8_ETC2`
        - `ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
          Additionally, for contexts with the {{domxref("WEBGL_compressed_texture_astc")}} extension enabled:
        - All of the formats the extension supports.
          The default value is `gl.RGBA`.
    - `depthFormat` {{optional_inline}}
      - : A {{domxref("WebGL_API/Types", "GLenum")}} defining the data type of the depth texture data or `0` indicating that the layer should not provide a depth texture (in that case {{domxref("XRProjectionLayer.ignoreDepthValues")}} will be `true`).
        Possible values within {{domxref("WebGLRenderingContext")}} contexts with the {{domxref("WEBGL_depth_texture")}} extension enabled, or within {{domxref("WebGL2RenderingContext")}} contexts (no extension required):
        - `gl.DEPTH_COMPONENT`
        - `gl.DEPTH_STENCIL`
          Additionally, for {{domxref("WebGL2RenderingContext")}} contexts:
        - `gl.DEPTH_COMPONENT24`
        - `gl.DEPTH24_STENCIL24`
          The default value is `gl.DEPTH_COMPONENT`.
    - `height` {{optional_inline}}
      - : A number specifying the height of the layer in meters. The default value is `1.0`.
    - `isStatic` {{optional_inline}}
      - : A boolean that, if true, indicates you can only draw to this layer when {{domxref("XRCompositionLayer.needsRedraw", "needsRedraw")}} is `true`. The default value is `false`.
    - `layout` {{optional_inline}}
      - : A string indicating the layout of the layer. Possible values:
        - `default`
          - : The layer accommodates all views of the session.
        - `mono`
          - : A single {{domxref("XRSubImage")}} is allocated and presented to both eyes.
        - `stereo`
          - : The user agent decides how it allocates the {{domxref("XRSubImage")}} (one or two) and the layout (top/bottom or left/right).
        - `stereo-left-right`
          - : A single {{domxref("XRSubImage")}} is allocated. Left eye gets the left area of the texture, right eye the right.
        - `stereo-top-bottom`
          - : A single {{domxref("XRSubImage")}} is allocated. Left eye gets the top area of the texture, right eye the bottom.
            The default value is `mono`.
    - `mipLevels` {{optional_inline}}
      - : A number specifying desired number of mip levels. The default value is `1`.
    - `space` **Required**
      - : An {{domxref("XRSpace")}} object defining the layer's spatial relationship with the user's physical environment.
    - `textureType` {{optional_inline}}
      - : A string defining the type of texture the layer will have. Possible values:
        - `texture`
          - : The textures of {{domxref("XRWebGLSubImage")}} will be of type `gl.TEXTURE_2D`.
        - `texture-array`
          - : the textures of {{domxref("XRWebGLSubImage")}} will be of type `gl.TEXTURE_2D_ARRAY` (WebGL 2 contexts only).
            The default value is `texture`.
    - `transform` {{optional_inline}}
      - : An {{domxref("XRRigidTransform")}} object defining the offset and orientation relative to `space`.
    - `viewPixelHeight` **Required**
      - : A number specifying the pixel height of the layer view.
    - `viewPixelWidth` **Required**
      - : A number specifying the pixel width of the layer view.
    - `width` {{optional_inline}}
      - : A number specifying the width of the layer in meters. The default value is `1.0`.

### Return value

An {{domxref("XRQuadLayer")}} object.

## Examples

### Creating an `XRQuadLayer`

Configure the quad layer using the properties listed above in a call to `createQuadLayer()`. To present layers to the XR device, add them to the `layers` render state using {{domxref("XRSession.updateRenderState()")}}.

```js
function onXRSessionStarted(xrSession) {
  const glCanvas = document.createElement("canvas");
  const gl = glCanvas.getContext("webgl2", { xrCompatible: true });
  const xrGlBinding = new XRWebGLBinding(xrSession, gl);
  const quadLayer = xrGlBinding.createQuadLayer({
    space: xrReferenceSpace,
    viewPixelHeight: 512,
    viewPixelWidth: 512,
    transform: new XRRigidTransform({ z: -2 }),
  });
  xrSession.updateRenderState({
    layers: [quadLayer],
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRQuadLayer")}}
- [WebGL constants](/en-US/docs/Web/API/WebGL_API/Constants)
