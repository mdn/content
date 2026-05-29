---
title: WebXR DOM overlays
slug: Web/CSS/Guides/WebXR_DOM_overlays
page-type: css-module
spec-urls: https://immersive-web.github.io/dom-overlays
sidebar: cssref
---

The **WebXR DOM overlays** module, an immersive web specification, expands the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) to allow HTML content — such as text and controls — to be displayed during an immersive virtual reality (VR) or augmented reality (AR) session.

In a typical WebXR session, content is rendered to a WebGL canvas superimposed on the real-world camera feed (in AR) or displayed as the full immersive view (in VR), with the device tracking the user's position and orientation.
The DOM overlay renders a single DOM element and its descendants as a transparent-background 2D rectangle on top of this view, enabling interactive, stylable elements such as menus and dialogs to appear within the immersive experience.

The {{cssxref(":xr-overlay")}} pseudo-class matches the DOM overlay element when a web page is being viewed in an immersive AR or VR environment, allowing it to be styled appropriately for its underlying content.

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
