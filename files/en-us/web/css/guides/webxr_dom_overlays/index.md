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
  - {{domxref("Element/beforexrselect", "beforexrselect")}}

### Interfaces

- {{domxref("XRSession.domOverlayState")}}

## Guides

- [Fundamentals of WebXR](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals)
  - : Introduction to WebXR device API fundamentals.

## Related concepts

- [CSS pseudo-classes](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - {{CSSxRef(":modal")}}
  - {{CSSxRef(":fullscreen")}}
  - {{CSSxRef(":picture-in-picture")}}

## Specifications

{{Specifications}}

## See also

- [Stacking context](/en-US/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- {{domxref("XRWebGLLayer")}}
- [CSS Object Model (CSSOM)](/en-US/docs/Web/CSS/CSS_Object_Model) module
- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) API
- [CSSOM View API](/en-US/docs/Web/CSS/CSSOM_view_API)
