---
title: WebXR DOM overlays
slug: Web/CSS/Guides/WebXR_DOM_overlays
page-type: css-module
spec-urls: https://immersive-web.github.io/dom-overlays
sidebar: cssref
---

The **WebXR DOM overlays** module, an immersive web specifications. expands the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) with mechanisms for users to interact with the DOM overlay's content when the overlay is active.

The {{cssxref(":xr-overlay")}} pseudo-class matches the DOM overlay element when a web page is being viewed in an immersive AR or VR environment.

## Reference

### Pseudo-classes

- {{cssxref(":xr-overlay")}}

### Events

- {{domxref("Element")}} events
  - {{domxref("Element/beforexrselect_event", "beforexrselect")}}

### Interfaces

- {{domxref("XRSession")}}
  - {{domxref("XRSession.domOverlayState", "domOverlayState")}} property

## Guides

- [Fundamentals of WebXR](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals)
  - : Introduction to WebXR device API fundamentals.

## Related concepts

- [CSS pseudo-classes](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - {{CSSxRef(":modal")}}
  - {{CSSxRef(":fullscreen")}}
  - {{CSSxRef(":picture-in-picture")}}

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
  - {{domxref("XRWebGLLayer")}} interface

## Specifications

{{Specifications}}

## See also

- [Stacking context](/en-US/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [CSSOM view module](/en-US/docs/Web/CSS/CSSOM_view)
- [CSSOM View API](/en-US/docs/Web/API/CSSOM_view_API)
