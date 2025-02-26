---
title: "XRWebGLDepthInformation: texture property"
short-title: texture
slug: Web/API/XRWebGLDepthInformation/texture
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRWebGLDepthInformation.texture
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The _read-only_ **`texture`** property of the {{DOMxRef("XRWebGLDepthInformation")}} interface is a {{domxref("WebGLTexture")}} containing depth buffer information as an opaque texture.

## Value

A {{domxref("WebGLTexture")}}.

## Examples

Use {{domxref("XRWebGLBinding.getDepthInformation()")}} to obtain GPU depth information. The returned `XRWebGLDepthInformation` object will contain the `texture` buffer which can then be bound to a texture and depth buffer information can be made available to a WebGL fragment shader.

```js
const depthInfo = glBinding.getDepthInformation(view);
const uvTransform = depthInfo.normDepthBufferFromNormView.matrix;

const u_DepthTextureLocation = gl.getUniformLocation(program, "u_DepthTexture");
const u_UVTransformLocation = gl.getUniformLocation(program, "u_UVTransform");
const u_RawValueToMeters = gl.getUniformLocation(program, "u_RawValueToMeters");

gl.bindTexture(gl.TEXTURE_2D, depthInfo.texture);
gl.activeTexture(gl.TEXTURE0);
gl.uniform1i(u_DepthTextureLocation, 0);

// UV transform to correctly index into the depth map
gl.uniformMatrix4fv(u_UVTransformLocation, false, uvTransform);

// scaling factor to convert from the raw number to meters
gl.uniform1f(u_RawValueToMeters, depthInfo.rawValueToMeters);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRWebGLBinding.getDepthInformation()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
