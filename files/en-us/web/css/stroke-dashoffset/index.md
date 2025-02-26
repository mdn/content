---
title: stroke-dashoffset
slug: Web/CSS/stroke-dashoffset
page-type: css-property
browser-compat: css.properties.stroke-dashoffset
---

{{CSSRef}}

The **`stroke-dashoffset`** [CSS](/en-US/docs/Web/CSS) property defines an offset for the starting point of the rendering of an [SVG](/en-US/docs/Web/SVG) element's associated [dash array](/en-US/docs/Web/CSS/stroke-dasharray). If present, it overrides the element's {{SVGAttr("stroke-dashoffset")}} attribute.

This property applies to any SVG shape or text-content element (see {{SVGAttr("stroke-dashoffset")}} for a full list), but as an inherited property, it may be applied to elements such as {{SVGElement("g")}} and still have the intended effect on descendant elements' strokes.

## Syntax

```css
/* Keyword */
stroke-dashoffset: none;

/* Length and percentage values */
stroke-dashoffset: 2;
stroke-dashoffset: 2px;
stroke-dashoffset: 2%;

/* Global values */
stroke-dashoffset: inherit;
stroke-dashoffset: initial;
stroke-dashoffset: revert;
stroke-dashoffset: revert-layer;
stroke-dashoffset: unset;
```

### Values

- {{cssxref("&lt;number&gt;")}} {{non-standard_Inline}}

  - : A number of SVG units, the size of which defined by the current unit space. The value given, if other than `0`, moves the starting point from the start of the dash array to another point within it. Thus, positive values will appear to shift the dash-gap pattern _backwards_, and negative values will appear to shift the pattern _forwards_.

- {{cssxref("&lt;length&gt;")}}

  - : Pixel units are handled the same as SVG units (see `<number>`, above) and font-based lengths such as `em` are calculated with respect to the element's SVG value for the text size; the effects of other length units may depend on the browser. The shifting effect for any value is the same as for `<number>` values (see above).

- {{cssxref("&lt;percentage&gt;")}}

  - : Percentages refer to the normalized diagonal of the current SVG viewport, which is calculated as <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>, _not_ to the overall length of the stroke path. Negative values are invalid.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Dash offsetting

To show how dashes can be offset, we first set up five identical paths, all of which are given a dash array of a 20-unit dash followed by a 3-unit gap via the SVG attribute {{SVGAttr('stroke-dasharray')}}. (This could also have been done with the CSS property {{CSSxref('stroke-dasharray')}}.) The paths are then given individual dash offsets via CSS.

```html
<svg viewBox="0 0 100 50" width="500" height="250">
  <rect x="10" y="5" width="80" height="30" fill="#EEE" />
  <g stroke="dodgerblue" stroke-width="2" stroke-dasharray="20,3">
    <path d="M 10,10 h 80" />
    <path d="M 10,15 h 80" />
    <path d="M 10,20 h 80" />
    <path d="M 10,25 h 80" />
    <path d="M 10,30 h 80" />
  </g>
</svg>
```

```css
path:nth-of-type(1) {
  stroke-dashoffset: 0;
}
path:nth-of-type(2) {
  stroke-dashoffset: -5;
}
path:nth-of-type(3) {
  stroke-dashoffset: 5;
}
path:nth-of-type(4) {
  stroke-dashoffset: 5px;
}
path:nth-of-type(5) {
  stroke-dashoffset: 5%;
}
```

In order:

1. The first of the five paths is given a zero offset, which is the default behavior.
2. The second path is given an offset of `-5`, which shifts the start point of the array to five units before the zero-point. The visual effect is that the dash pattern is pushed forward five units; thus, we see, at the start of the path, the last two units of a dash and then a three-unit gap.
3. The third path has an offset of `5`, which means the starting point of the dashes is five units into the dash pattern. The visual effect is to push the dash pattern backward by five units; thus, we see, at the start of the path, the last fifteen units of a dash followed by a three-unit gap.
4. The fourth path has an offset of `5px`, which has the same effect as a value of `5` (see previous).
5. The fifth and last path has an offset of `5%`, which is very similar to the previous two examples, but is not quite the same. Percentages are calculated against the diagonal measure of the SVG viewport, and so can very depending on that viewport's size and aspect ratio.

{{EmbedLiveSample("Dash offsetting", "500", "250")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("stroke-dashoffset")}} attribute
- CSS {{CSSxref("stroke-dasharray")}} property
- CSS {{CSSxref("stroke")}} property
