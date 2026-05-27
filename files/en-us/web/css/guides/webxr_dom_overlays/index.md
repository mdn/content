---
title: WebXR DOM overlays
slug: Web/CSS/Guides/WebXR_DOM_overlays
page-type: css-module
spec-urls: https://immersive-web.github.io/dom-overlays
sidebar: cssref
---

The **WebXR DOM overlays** module, an immersive web specification, expands the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) with mechanisms for users to interact with the DOM overlay's content when the overlay is active, displaying the content of a single DOM element as a transparent-background 2D rectangle. The [WebXR Device API defines the features for virtual reality (VR) and augmented reality (AR) devices, including sensors and head-mounted displays, on the Web.

In an immersive AR or VR environment, content is generally rendered onto a canvas. To enable user interaction, WebXR environments display a DOM overlay rendered on top of a scene. This is used to draw the interactive content, such as stylable menus and dialogs, on top of the scene. The overlay is composited into the immersive view, while allowing regular, stylable content to appear and be interacted with.

The {{cssxref(":xr-overlay")}} pseudo-class matches the DOM overlay element when a web page is being viewed in an immersive AR or VR environment, allowing it to be styled appropriately for its underlying content. This overlay is a [backdrop root](/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter#backdrop_root), defining the border where any effects can happen].

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
