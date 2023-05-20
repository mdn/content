---
title: "XRViewport: x property"
short-title: x
slug: Web/API/XRViewport/x
page-type: web-api-instance-property
browser-compat: api.XRViewport.x
---

{{APIRef("WebXR Device API")}}

The read-only {{domxref("XRViewport")}} interface's
**`x`** property indicates the offset from the left edge of
the destination surface (typically a {{domxref("XRWebGLLayer")}} to the left edge of
the viewport within the surface into which WebXR content is to be rendered. The
viewport's {{domxref("XRViewport.y", "y")}} property identifies the `y`
component of the origin, and its is given by the {{domxref("XRViewPort.width",
  "width")}} and {{domxref("XRViewport.height", "height")}} properties.

## Value

The offset from the left edge of the rendering surface to the left edge of the
viewport, in pixels.

## Examples

See the main {{domxref("XRViewport")}} page for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
