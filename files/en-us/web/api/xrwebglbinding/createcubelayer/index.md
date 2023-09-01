---
title: "XRWebGLBinding: createCubeLayer() method"
short-title: createCubeLayer()
slug: Web/API/XRWebGLBinding/createCubeLayer
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRWebGLBinding.createCubeLayer
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`createCubeLayer()`** method of the {{domxref("XRWebGLBinding")}} interface returns an {{domxref("XRCubeLayer")}} object, which is a layer that renders directly from a [cubemap](https://en.wikipedia.org/wiki/Cube_mapping), and projects it onto the inside faces of a cube.

## Syntax

```js-nolint
createCubeLayer(init)
```

### Parameters

- `init`
  - : An object to configure the {{domxref("XRCubeLayer")}}. It must have the `space`, `viewPixelHeight`, and `viewPixelWidth` properties. `init` has the following properties:
    - `colorFormat` {{optional_inline}}
      - : A {{domxref("WebGL_API/Types", "GLenum")}} defining the data type of the color texture data. Possible values:
        - `gl.RGB`
        - `gl.RGBA` (Default)
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
        - All of the [formats](/en-US/docs/Web/API/WEBGL_compressed_texture_astc#constants) the extension supports.
    - `depthFormat` {{optional_inline}}
      - : A {{domxref("WebGL_API/Types", "GLenum")}} defining the data type of the depth texture data or `0` indicating that the layer should not provide a depth texture. (In that case {{domxref("XRProjectionLayer.ignoreDepthValues")}} will be `true`.)
        Possible values for {{domxref("WebGLRenderingContext")}} contexts with the {{domxref("WEBGL_depth_texture")}} extension enabled, or for {{domxref("WebGL2RenderingContext")}} contexts (no extension required):
        - `gl.DEPTH_COMPONENT` (Default)
        - `gl.DEPTH_STENCIL`
          Additionally, for {{domxref("WebGL2RenderingContext")}} contexts:
        - `gl.DEPTH_COMPONENT24`
        - `gl.DEPTH24_STENCIL24`
    - `isStatic` {{optional_inline}}
      - : A boolean that, if true, indicates you can only draw to this layer when {{domxref("XRCompositionLayer.needsRedraw", "needsRedraw")}} is `true`. The default value is `false`.
    - `layout`
      - : A string indicating the layout of the layer. Possible values:
        - `default`: The layer accommodates all views of the session.
        - `mono`: A single {{domxref("XRSubImage")}} is allocated and presented to both eyes.
        - `stereo`: The user agent decides how it allocates the {{domxref("XRSubImage")}} (one or two) and the layout (top/bottom or left/right).
        - `stereo-left-right`: A single {{domxref("XRSubImage")}} is allocated. The left eye gets the left area of the texture, the right eye the right.
        - `stereo-top-bottom`: A single {{domxref("XRSubImage")}} is allocated. The left eye gets the top area of the texture, the right eye the bottom.
          The default value is `mono`.
    - `mipLevels` {{optional_inline}}
      - : A number specifying the desired number of mip levels. The default value is `1`.
    - `orientation` {{optional_inline}}
      - : A {{domxref("DOMPointReadOnly")}} specifying the orientation relative to the `space` property.
    - `space` **Required**
      - : An {{domxref("XRSpace")}} object defining the layer's spatial relationship with the user's physical environment.
    - `viewPixelHeight` **Required**
      - : A number specifying the pixel height of the layer view.
    - `viewPixelWidth` **Required**
      - : A number specifying the pixel width of the layer view.

### Return value

An {{domxref("XRCubeLayer")}} object.

## Examples

### Creating an XRCubeLayer

Configure the cube layer using the properties listed above in a call to `createCubeLayer()`. To present layers to the XR device, add them to the `layers` render state using {{domxref("XRSession.updateRenderState()")}}.

```js
function onXRSessionStarted(xrSession) {
  const glCanvas = document.createElement("canvas");
  const gl = glCanvas.getContext("webgl2", { xrCompatible: true });
  const xrGlBinding = new XRWebGLBinding(xrSession, gl);
  const cubeLayer = xrGlBinding.createCubeLayer({
    space: xrReferenceSpace,
    viewPixelHeight: 512,
    viewPixelWidth: 512,
  });
  xrSession.updateRenderState({
    layers: [cubeLayer],
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRCubeLayer")}}
- [WebGL constants](/en-US/docs/Web/API/WebGL_API/Constants)
