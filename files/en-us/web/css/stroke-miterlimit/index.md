---
title: stroke-miterlimit
slug: Web/CSS/stroke-miterlimit
page-type: css-property
browser-compat: css.properties.stroke-miterlimit
---

{{CSSRef}}

The **`stroke-miterlimit`** [CSS](/en-US/docs/Web/CSS) property defines a limit on the ratio of the miter length to the {{CSSxref("stroke-width") }} when the shape to be used at the corners of an [SVG](/en-US/docs/Web/SVG) element's stroked path is a mitered join. If the limit defined by this property is exceeded, the join is converted from `miter` to `bevel`, thus making the corner appear truncated.

This property applies to any SVG corner-generating shape or text-content element (see {{SVGAttr("stroke-miterlimit")}} for a full list), but as an inherited property, it may be applied to elements such as {{SVGElement("g")}} and still have the intended effect on descendant elements' strokes. If present, it overrides the element's {{SVGAttr("stroke-miterlimit")}} attribute.

## Description

When two line segments meet at a sharp angle and `miter` joins have been specified for {{ CSSxref("stroke-linejoin") }}, or if they default to that value, it is possible for the miter to extend far beyond the thickness of the line stroking the path. The `stroke-miterlimit` ratio is used to define a limit, past which the join is converted from a miter to a bevel.

The ratio of miter length (the distance between the outer tip and the inner corner of the miter) to {{ CSSxref("stroke-width") }} is directly related to the angle (theta) between the segments in user space by the formula:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mstyle displaystyle="true"><mi>stroke-miterlimit</mi><mo>=</mo><mfrac><mrow><mi>miterLength</mi></mrow><mrow><mi>stroke-width</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mrow><mi>sin</mi><mrow><mo>(</mo><mfrac><mrow><mo>θ</mo></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle><annotation encoding="TeX">\text{stroke-miterlimit} = \frac{\text{miterLength}}{\text{stroke-width}} = \frac{1}{\sin\left(\frac{\theta}{2}\right)}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

For example, a miter limit of `1.414` converts miters to bevels for a theta value of less than 90 degrees, a limit of `4.0` converts them for a theta less than approximately 29 degrees, and a limit of `10.0` converts them for theta less than approximately 11.5 degrees.

## Syntax

```css
/* number values */
stroke-miterlimit: 1;
stroke-miterlimit: 3.1416;

/* Global values */
stroke-miterlimit: inherit;
stroke-miterlimit: initial;
stroke-miterlimit: revert;
stroke-miterlimit: revert-layer;
stroke-miterlimit: unset;
```

### Values

- {{cssxref("&lt;number&gt;")}}

  - : Any real positive number equal to or greater than `1`; values below that are invalid. The initial value is `4`.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Various miter limits

This example demonstrates the effect of different values for the `stroke-miterlimit` property.

#### HTML

We set up five multi-segment paths, all of which use a black stroke with a width of one, and no fill. Each path creates a series of mountain symbols, going from left (a shallow corner angle) to right (an extreme corner angle).

```html
<svg viewBox="0 0 39 36" xmlns="http://www.w3.org/2000/svg">
  <g stroke="black" stroke-width="1" fill="none">
    <path
      d="M1,5 l7   ,-3 l7   ,3
         m2,0 l3.5 ,-3 l3.5 ,3
         m2,0 l2   ,-3 l2   ,3
         m2,0 l0.75,-3 l0.75,3
         m2,0 l0.5 ,-3 l0.5 ,3" />
    <path
      d="M1,12 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,19 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,26 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,33 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
  </g>
</svg>
```

#### CSS

We apply increasingly large values of `stroke-miterlimit` to the paths, such that for the first path, only the first (leftmost) subpath is mitered; for the second path, the first two subpaths are mitered; and so on until for the fifth path, all five subpaths are mitered.

```css
path:nth-child(1) {
  stroke-miterlimit: 1.1;
}
path:nth-child(2) {
  stroke-miterlimit: 1.4;
}
path:nth-child(3) {
  stroke-miterlimit: 1.9;
}
path:nth-child(4) {
  stroke-miterlimit: 4.2;
}
path:nth-child(5) {
  stroke-miterlimit: 6.1;
}
```

{{EmbedLiveSample("Various miter limits", "400", "650")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("stroke")}}
- SVG {{SVGAttr("stroke-miterlimit")}} attribute
