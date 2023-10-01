---
title: "XRWebGLLayer: ignoreDepthValues property"
short-title: ignoreDepthValues
slug: Web/API/XRWebGLLayer/ignoreDepthValues
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRWebGLLayer.ignoreDepthValues
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The read-only {{domxref("XRWebGLLayer")}} property
**`ignoreDepthValues`** is a Boolean value which is
`true` if the session has been configured to ignore the values in the depth
buffer while rendering the scene. If the depth buffer is being used to determine the
position of vertices, this property is `false`.

The value of `ignoreDepthValues` can only be set when the
{{domxref("XRWebGLLayer")}} is instantiated, by setting the corresponding value in the [constructor's](/en-US/docs/Web/API/XRWebGLLayer/XRWebGLLayer) `options` parameter.

## Value

A Boolean value which is `true` if the WebGL context's depth buffer is being
used while computing the locations of points in the 3D world. Otherwise, if this is
`true`, the depth buffer's values are being used to assist in placing objects
in the scene. Since the [XR compositor](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) uses the depth buffer by default, this value is `false`
unless explicitly set otherwise when creating the {{domxref("XRWebGLLayer")}} using its
constructor, {{domxref("XRWebGLLayer.XRWebGLLayer", "XRWebGLLayer()")}}.

## Usage notes

When the `ignoreDepthValues` property is `false`, the XR
compositor uses the values found in the depth buffer, which should be accurate for the
scene, in order to potentially improve the quality or the output as well as the comfort
level for the viewer.

The depth buffer is {{domxref("XRWebGLLayer.framebufferWidth", "framebufferWidth")}}
entries wide and {{domxref("XRWebGLLayer.framebufferHeight", "framebuffer")}} entries
tall. Each entry in the buffer specifies the depth at which the corresponding pixel is
located, and has a value between 0.0 and 1.0.

A depth buffer pixel value of 0.0 corresponds to the depth given by the session's
{{domxref("XRRenderState.depthNear", "depthNear")}} and a value of 1.0 corresponds to
the depth given by {{domxref("XRRenderState.depthFar", "depthFar")}}.

The depth, in tandem with the coordinates of each point being rendered, makes it
possible to more accurately represent the scene in the 3D space.

## Examples

If the Web application which is using WeXR is rendering its content without using a
depth buffer—or if the depth buffer's contents are invalid—you should disable the use of
the depth buffer for WebXR rendering by setting `ignoreDepthValues` to true
when creating the {{domxref("XRWebGLLayer")}}. This is demonstrated in the snippet of
code below:

```js
const glLayerOptions = {
  ignoreDepthValues: true,
};

let glLayer = new XRWebGLLayer(xrSession, gl, glLayerOptions);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- WebGL depth buffer related methods: {{domxref("WebGLRenderingContext.depthFunc",
    "depthFunc()")}}, {{domxref("WebGLRenderingContext.clearDepth", "clearDepth()")}}
