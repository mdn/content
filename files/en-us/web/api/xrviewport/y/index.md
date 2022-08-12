---
title: XRViewport.y
slug: Web/API/XRViewport/y
page-type: web-api-instance-property
tags:
  - API
  - AR
  - Horizontal
  - Position
  - Property
  - Read-only
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRViewport
  - augmented
  - origin
  - viewport
  - 'y'
browser-compat: api.XRViewport.y
---
{{APIRef("WebXR Device API")}}

The read-only {{domxref("XRViewport")}} interface's
**`y`** property indicates the offset from the bottom edge of
the destination surface (typically a {{domxref("XRWebGLLayer")}} to the bottom edge of
the viewport within the surface into which WebXR content is to be rendered. The
viewport's {{domxref("XRViewport.x", "x")}} property identifies the `x`
component of the origin, and its is given by the {{domxref("XRViewPort.width",
  "width")}} and {{domxref("XRViewport.height", "height")}} properties.

## Value

The offset from the bottom edge of the rendering surface to the bottom edge of the
viewport, in pixels.

> **Note:** Although other web APIs typically consider the `y`
> axis to begin at the top and grow larger progressing downward, WebGL reverses this,
> with `y` growing larger as it goes upward on the screen.

## Examples

See the main {{domxref("XRViewport")}} page for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
