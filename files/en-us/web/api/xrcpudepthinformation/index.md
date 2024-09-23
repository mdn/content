---
title: XRCPUDepthInformation
slug: Web/API/XRCPUDepthInformation
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRCPUDepthInformation
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

The **`XRCPUDepthInformation`** interface contains depth information from the CPU (returned by {{domxref("XRFrame.getDepthInformation()")}}).

{{InheritanceDiagram}}

This interface inherits properties from its parent, {{domxref("XRDepthInformation")}}.

## Instance properties

- {{domxref("XRCPUDepthInformation.data")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An {{jsxref("ArrayBuffer")}} containing depth-buffer information in raw format.
- {{domxref("XRDepthInformation.height")}} {{ReadOnlyInline}}
  - : Contains the height of the depth buffer (number of rows).
- {{domxref("XRDepthInformation.normDepthBufferFromNormView")}} {{ReadOnlyInline}}
  - : An {{domxref("XRRigidTransform")}} that needs to be applied when indexing into the depth buffer. The transformation that the matrix represents changes the coordinate system from normalized view coordinates to normalized depth-buffer coordinates that can then be scaled by depth buffer's `width` and `height` to obtain the absolute depth-buffer coordinates.
- {{domxref("XRDepthInformation.rawValueToMeters")}} {{ReadOnlyInline}}
  - : Contains the scale factor by which the raw depth values must be multiplied in order to get the depths in meters.
- {{domxref("XRDepthInformation.width")}} {{ReadOnlyInline}}
  - : Contains the width of the depth buffer (number of columns).

## Instance methods

- {{domxref("XRCPUDepthInformation.getDepthInMeters()")}} {{Experimental_Inline}}
  - : Returns the depth in meters at (x, y) in normalized view coordinates.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRDepthInformation")}}
- {{domxref("XRWebGLDepthInformation")}}
- {{domxref("XRFrame.getDepthInformation()")}}
