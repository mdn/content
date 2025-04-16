---
title: CSS masking
slug: Web/CSS/CSS_masking
page-type: css-module
spec-urls: https://drafts.fxtf.org/css-masking/
---

{{CSSRef}}

The **CSS masking** module defines masking and clipping; two different graphical operations that can be used to partially or fully hide portions of visual elements.

In CSS, **clipping** is done by defining a closed vector path, shape or polygon as a **clipping path**. Everything inside the clipping path region remains visible while everything outside is hidden, or "clipped out". The {{cssxref("clip-path")}} property can be used to specify a {{cssxref("&lt;basic-shape&gt;")}} as a clipping path or reference an SVG {{SVGElement("clipPath")}} element to be used as clipping path.

With **masking**, properties can be used to apply a mask to an element or its border. The effect being that a graphical object is painted onto the background or border through a mask, thus completely or partially masking out parts of the element or its border depending on the opacity or luminance of the mask.

The image used as the mask is defined by the {{cssxref("mask-image")}} or {{cssxref("mask-border-source")}} properties, which can reference an SVG {{SVGElement("mask")}} element. This mask can be sized and positioned similar to a [background and border images](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders).

Clipping and masking in CSS behaves as it does with SVG: First the element is styled under absence of filter effects, masking, clipping and opacity. Then any effects are applied to the element in the following order: [filter effects](/en-US/docs/Web/CSS/CSS_filter_effects), clipping, masking and opacity.

While masking provides more control and options, clipping can perform better with basic shapes being easier to interpolate.

## Reference

### Properties

- {{cssxref("clip")}}
- {{cssxref("clip-path")}}
- {{cssxref("clip-rule")}}
- {{cssxref("mask")}} shorthand
- {{cssxref("mask-clip")}}
- {{cssxref("mask-composite")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-mode")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-type")}}
- {{cssxref("mask-border")}} shorthand
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-slice")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}

### Data types

- [`<geometry-box>`](/en-US/docs/Web/CSS/clip-path#geometry-box)

### Functions

- {{cssxref("basic-shape/rect","rect()")}} function

### Interfaces

- {{domxref("SVGClipPathElement")}}
- {{domxref("SVGMaskElement")}}
    - {{domxref("SVGMaskElement.maskContentUnits")}}

## Related concepts

- [`<coord-box>`](/en-US/docs/Web/CSS/box-edge#values)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("&lt;url&gt;")}}

- [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) module

    - {{cssxref("background")}} shorthand
    - {{cssxref("background-origin")}}
    - {{cssxref("background-position")}}
    - {{cssxref("background-repeat")}}
    - {{cssxref("background-size")}}
    - {{cssxref("border-image")}} shorthand
    - {{cssxref("border-image-repeat")}}
    - {{cssxref("border-image-slice")}}
    - {{cssxref("border-image-source")}}
    - {{cssxref("border-image-width")}}
    - [`<repeat-style>`](/en-US/docs/Web/CSS/background-repeat#values) data type

- [CSS shapes](/en-US/docs/Web/CSS/CSS_shapes) module

    - {{cssxref("&lt;basic-shape&gt;")}} data type
    - {{cssxref("basic-shape/polygon","polygon()")}} function
    - [`<shape-box>`](/en-US/docs/Web/CSS/shape-outside#shape-box) data type

## Specifications

{{Specifications}}

## See also

- {{cssxref("background-clip")}}
- [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects) module
- [SVG tutorial: clipping and masking](/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking)
- {{domxref("CanvasRenderingContext2D.clip()")}}
- {{domxref("WebGLRenderingContext.colorMask()")}}
- [PWA icon masking](/en-US/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking)
