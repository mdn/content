---
title: CSS filter effects
slug: Web/CSS/Filter_Effects
page-type: css-module
spec-urls:
  - https://drafts.fxtf.org/filter-effects-2/
  - https://drafts.fxtf.org/filter-effects-1/
---

{{CSSRef}}

The properties in the **CSS filter effects** module let you define a way of processing an element's rendering before the element is displayed in the document. Examples of such effects include blurring and changing the intensity of the color of an element.

### Filter effects in action

Play with the various sliders to apply filter effects to the image below:

{{EmbedGHLiveSample("css-examples/modules/filters.html", '100%', 420)}}

To see the code for this filter effects sample, [view the source on Github](https://github.com/mdn/css-examples/blob/main/modules/filters.html).

### Properties

- {{cssxref("backdrop-filter")}}
- {{cssxref("filter")}}

### Functions

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}

## Related concepts

- {{CSSxRef("&lt;image&gt;")}} data type
- {{cssxref("&lt;filter-function&gt;")}} data type

- {{cssxref("background-image")}} CSS property
- {{cssxref("background-blend-mode")}} CSS property
- {{cssxref("mix-blend-mode")}} CSS property

- {{glossary("interpolation")}} glossary term

- [`color-interpolation-filters`](/en-US/docs/Web/SVG/Attribute/color-interpolation-filters) SVG property

## Specifications

{{Specifications}}

## See also

- Properties in the CSS [compositing and blending](/en-US/docs/Web/CSS/Compositing_and_Blending) module enable blending an element's background layers together and blending an element with its container.
- The SVG {{SVGElement("filter")}} element and the SVG filter primitives, including {{SVGElement("feSpotLight")}}, {{SVGElement("feBlend")}}, {{SVGElement("feColorMatrix")}}, {{SVGElement("feComponentTransfer")}}, {{SVGElement("feComposite")}}, {{SVGElement("feConvolveMatrix")}}, {{SVGElement("feDiffuseLighting")}}, {{SVGElement("feDisplacementMap")}}, {{SVGElement("feDropShadow")}}, {{SVGElement("feFlood")}}, {{SVGElement("feGaussianBlur")}}, {{SVGElement("feImage")}}, {{SVGElement("feMerge")}}, {{SVGElement("feMorphology")}}, {{SVGElement("feOffset")}}, {{SVGElement("feSpecularLighting")}}, {{SVGElement("feTile")}}, and {{SVGElement("feTurbulence")}}.
