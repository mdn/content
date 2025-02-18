---
title: color-interpolation-filters
slug: Web/CSS/color-interpolation-filters
page-type: css-property
browser-compat: css.properties.color-interpolation-filters
---

{{CSSRef}}

The **`color-interpolation-filters`** [CSS](/en-US/docs/Web/CSS) property specifies the color space for imaging operations performed via SVG filter effects. If explicitly declared, the value of the CSS property overrides any value given in the element's {{SVGAttr("color-interpolation-filters")}} attribute.

> [!NOTE]
> The {{SVGAttr("color-interpolation-filters")}} property is only relevant to SVG filter operations. It has _no_ effect on filter primitives like {{SVGElement("feOffset")}}, {{SVGElement("feImage")}}, {{SVGElement("feTile")}}, and {{SVGElement("feFlood")}}, but instead applies to the various filter effect elements (e.g., {{SVGElement('feBlend')}}); see the SVG {{SVGAttr('color-interpolation-filters')}} page for a full list.

> [!NOTE]
> It is important to remember that the SVG {{SVGAttr('color-interpolation')}} attribute has an initial value of `sRGB`, while `color-interpolation-filters` has an initial value of `linearRGB`. This means, in the default case, filter effect interpolations occur in a different color space than all other color interpolations.

## Syntax

```css
color-interpolation-filters: auto;
color-interpolation-filters: linearRGB;
color-interpolation-filters: sRGB;

/* Global values */
color-interpolation-filters: inherit;
color-interpolation-filters: initial;
color-interpolation-filters: revert;
color-interpolation-filters: revert-layer;
color-interpolation-filters: unset;
```

### Values

- `linearRGB`
  - : Indicates that color interpolation should occur in the linearized RGB color space as described in [the sRGB specification](https://webstore.iec.ch/en/publication/6169). This is the default property value.
- `sRGB`
  - : Indicates that color interpolation should occur in the gamma-encoded sRGB color space.
- `auto`
  - : Indicates that the user agent can choose either the `sRGB` or `linearRGB` spaces for color interpolation. This option indicates that the author doesn't require that color interpolation occur in a particular color space.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("color-interpolation")}}
- SVG {{SVGAttr("color-interpolation-filters")}} attribute
- [sRGB specification](https://webstore.iec.ch/en/publication/6169)
