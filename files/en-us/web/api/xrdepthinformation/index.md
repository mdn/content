---
title: XRDepthInformation
slug: Web/API/XRDepthInformation
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRDepthInformation
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

The **`XRDepthInformation`** interface contains information about the distance from the user's device to the real-world geometry in the user's environment.

This interface is the parent of:

- {{domxref("XRCPUDepthInformation")}}
  - : Depth information from the CPU (returned by {{domxref("XRFrame.getDepthInformation()")}}).
- {{domxref("XRWebGLDepthInformation")}}
  - : Depth information from WebGL (returned by {{domxref("XRWebGLBinding.getDepthInformation()")}}).

You will usually interact with these child interfaces. However, `XRDepthInformation` provides some useful properties that are inherited:

## Instance properties

- {{domxref("XRDepthInformation.height")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Contains the height of the depth buffer (number of rows).
- {{domxref("XRDepthInformation.normDepthBufferFromNormView")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An {{domxref("XRRigidTransform")}} that needs to be applied when indexing into the depth buffer. The transformation that the matrix represents changes the coordinate system from normalized view coordinates to normalized depth-buffer coordinates that can then be scaled by depth buffer's `width` and `height` to obtain the absolute depth-buffer coordinates.
- {{domxref("XRDepthInformation.rawValueToMeters")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Contains the scale factor by which the raw depth values must be multiplied in order to get the depths in meters.
- {{domxref("XRDepthInformation.width")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Contains the width of the depth buffer (number of columns).

## Instance methods

None.

## Examples

See {{domxref("XRCPUDepthInformation")}} and {{domxref("XRWebGLDepthInformation")}} for code examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRCPUDepthInformation")}}
- {{domxref("XRWebGLDepthInformation")}}
- {{domxref("XRFrame.getDepthInformation()")}}
