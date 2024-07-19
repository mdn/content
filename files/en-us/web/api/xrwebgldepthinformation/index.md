---
title: XRWebGLDepthInformation
slug: Web/API/XRWebGLDepthInformation
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRWebGLDepthInformation
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

The **`XRWebGLDepthInformation`** interface contains depth information from the GPU/WebGL (returned by {{domxref("XRWebGLBinding.getDepthInformation()")}}).

{{InheritanceDiagram}}

This interface inherits properties from its parent, {{domxref("XRDepthInformation")}}.

## Instance properties

- {{domxref("XRDepthInformation.height")}} {{ReadOnlyInline}}
  - : Contains the height of the depth buffer (number of rows).
- {{domxref("XRDepthInformation.normDepthBufferFromNormView")}} {{ReadOnlyInline}}
  - : An {{domxref("XRRigidTransform")}} that needs to be applied when indexing into the depth buffer. The transformation that the matrix represents changes the coordinate system from normalized view coordinates to normalized depth buffer coordinates that can then be scaled by depth buffer's `width` and `height` to obtain the absolute depth buffer coordinates.
- {{domxref("XRDepthInformation.rawValueToMeters")}} {{ReadOnlyInline}}
  - : Contains the scale factor by which the raw depth values must be multiplied in order to get the depths in meters.
- {{domxref("XRWebGLDepthInformation.texture")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("WebGLTexture")}} containing depth buffer information as an opaque texture.
- {{domxref("XRDepthInformation.width")}} {{ReadOnlyInline}}
  - : Contains the width of the depth buffer (number of columns).

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRDepthInformation")}}
- {{domxref("XRCPUDepthInformation")}}
- {{domxref("XRWebGLBinding.getDepthInformation()")}}
