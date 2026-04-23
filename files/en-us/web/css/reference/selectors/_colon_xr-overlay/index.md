---
title: "`:xr-overlay` CSS pseudo-class"
short-title: :xr-overlay
slug: Web/CSS/Reference/Selectors/:xr-overlay
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.xr-overlay
sidebar: cssref
---

{{SeeCompatTable}}

The **`:xr-overlay`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) matches the DOM overlay element when a web page is being viewed in an immersive AR or VR environment.

## Syntax

```css
:xr-overlay {
  /* ... */
}
```

## Description

The `:xr-overlay` pseudo-class matches the overlay element for the duration of an immersive session using a DOM overlay.

The overlay element is a backdrop root. Any {{cssxref("backdrop-filter")}} effects on the DOM overlay element or its descendants do not modify the AR camera image (if applicable) or the rendered content drawn to the immersive session's {{domxref("XRWebGLLayer")}}.

The overlay element itself is a [stacking context](/en-US/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) due to its fixed {{cssxref("position")}}. The stacking contexts for ancestors of the overlay element, if any, do not paint to the immersive session's display.

> [!NOTE]
> On a multi-display system, the stacking contexts for ancestors or sibling trees of the overlay element may be displayed on separate displays.

## Examples

### Basic usage

In this example, we define the overlay to be semi-transparent black, enabling content behind the overlay to be partially visible. To ensure enough contrast between content and its background, we set the {{cssxref("color")}} to `white`.

```css
:xr-overlay {
  background-color: rgba(0 0 0 / 0.5);
  color: white;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":modal")}}
- {{CSSxRef(":fullscreen")}}
- {{CSSxRef(":picture-in-picture")}}
- [CSS pseudo-classes](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [WebXR device API fundamentals](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals)
- {{domxref("XRSession.domOverlayState")}}
