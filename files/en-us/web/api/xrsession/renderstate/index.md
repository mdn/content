---
title: XRSession.renderState
slug: Web/API/XRSession/renderState
tags:
  - API
  - AR
  - Augmented Reality
  - Experimental
  - Property
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XRSession
  - renderState
browser-compat: api.XRSession.renderState
---
{{APIRef("WebXR Device API")}}

The
*read-only* **`renderState`** property of an
{{DOMxRef("XRSession")}} object indicates the returns a {{DOMxRef("XRRenderState")}}
object describing how the user's environment which should be rendered. The
information provided covers the minimum and maximum distance at which to render objects,
the vertical field of view to use when rendering the in the `inline` session
mode, and the {{domxref("XRWebGLLayer")}} to render into for inline composition.

While this property is read only, you can call the {{domxref("XRSession")}} method
{{domxref("XRSession.updateRenderState", "updateRenderState()")}} to make changes.

## Value

An {{DOMxRef("XRRenderState")}} object describing how to render the scene.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
