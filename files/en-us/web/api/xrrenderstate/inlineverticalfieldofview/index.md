---
title: XRRenderState.inlineVerticalFieldOfView
slug: Web/API/XRRenderState/inlineVerticalFieldOfView
page-type: web-api-instance-property
tags:
  - API
  - Field of View
  - Vertical Field of View
  - WebXR
  - WebXR Device API
  - Property
  - Experimental
browser-compat: api.XRRenderState.inlineVerticalFieldOfView
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The read-only **`inlineVerticalFieldOfView`**
property of the {{DOMxRef("XRRenderState")}} interface returns the default vertical
field of view for `"inline"` sessions and `null` for all immersive
sessions.

## Value

A {{JSxRef("Number")}} for `"inline"` sessions, which represents the default
field of view, and `null` for immersive sessions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("XRSystem.requestSession", "navigator.xr.requestSession()")}}
- {{DOMxRef("XRSystem.isSessionSupported", "navigator.xr.isSessionSupported()")}}
