---
title: dominant-baseline
slug: Web/CSS/dominant-baseline
page-type: css-property
browser-compat: css.properties.dominant-baseline
---

{{CSSRef}}

The **`dominant-baseline`** [CSS](/en-US/docs/Web/CSS) property specifies the specific baseline used to align the box's text and inline-level contents. It also indicates the default alignment baseline of any boxes participating in baseline alignment in the box's alignment context. If present, it overrides the shape's {{SVGAttr("dominant-baseline")}} attribute.

Baselines are selected from the font baseline table. If there is no baseline table in the nominal font, or if the baseline table lacks an entry for the desired baseline, then the browser may use heuristics to determine the position of the desired baseline.

`dominant-baseline` is used to determine or re-determine a scaled-baseline-table. A scaled-baseline-table is a compound value with three components:

1. a baseline-identifier for the dominant-baseline,
2. a baseline-table, and
3. a baseline-table font-size.

Some values of `dominant-baseline` re-determine all three values. Others only re-establish the baseline-table font-size. When the initial value, `auto`, would give an undesired result, this property can be used to explicitly set the desired scaled-baseline-table.

> [!NOTE]
> The `dominant-baseline` property only has an effect on the {{SVGElement("text")}}, {{SVGElement("textPath")}}, {{SVGElement("tref")}}, and {{SVGElement("tspan")}} SVG elements.

## Syntax

```css
/* Initial value */
dominant-baseline: auto;

/* Length and percentage values */
dominant-baseline: auto;
dominant-baseline: text-bottom;
dominant-baseline: alphabetic;
dominant-baseline: ideographic;
dominant-baseline: middle;
dominant-baseline: central;
dominant-baseline: mathematical;
dominant-baseline: hanging;
dominant-baseline: text-top;

/* Global values */
dominant-baseline: inherit;
dominant-baseline: initial;
dominant-baseline: revert;
dominant-baseline: revert-layer;
dominant-baseline: unset;
```

### Values

- `auto`

  - : If this property is applied to a {{SVGElement("text")}} element, then the computed value depends on the value of the {{SVGAttr("writing-mode")}} attribute.

    If the {{SVGAttr("writing-mode")}} is horizontal, then the value of the dominant-baseline component is `alphabetic`. Otherwise, if the {{SVGAttr("writing-mode")}} is vertical, then the value of the dominant-baseline component is `central`.

    If this property is applied to a {{SVGElement("tspan")}}, {{SVGElement("tref")}}, or {{SVGElement("textPath")}} element, then the dominant-baseline and the baseline-table components remain the same as those of the parent text content element.

    If the computed {{SVGAttr("baseline-shift")}} value actually shifts the baseline, then the baseline-table font-size component is set to the value of the {{SVGAttr("font-size")}} attribute on the element on which the `dominant-baseline` attribute occurs, otherwise the baseline-table font-size remains the same as that of the element.

    If there is no parent text content element, the scaled-baseline-table value is constructed as for {{SVGElement("text")}} elements.

- `alphabetic`
  - : The baseline-identifier for the dominant-baseline is set to be `alphabetic`, the derived baseline-table is constructed using the `alphabetic` baseline-table in the font, and the baseline-table font-size is changed to the value of the {{SVGAttr('font-size')}} SVG attribute of {{cssxref('font-size')}} CSS property on this element.
- `central`
  - : The baseline-identifier for the dominant-baseline is set to be `central`. The derived baseline-table is constructed from the defined baselines in a baseline-table in the font. That font baseline-table is chosen using the following priority order of baseline-table names: `ideographic`, `alphabetic`, `hanging`, `mathematical`. The baseline-table font-size is changed to the value of the {{SVGAttr('font-size')}} SVG attribute of {{cssxref('font-size')}} CSS property on this element.
- `hanging`
  - : The baseline-identifier for the dominant-baseline is set to be `hanging`, the derived baseline-table is constructed using the `hanging` baseline-table in the font, and the baseline-table font-size is changed to the value of the {{SVGAttr('font-size')}} SVG attribute of {{cssxref('font-size')}} CSS property on this element.
- `ideographic`
  - : The baseline-identifier for the dominant-baseline is set to be `ideographic`, the derived baseline-table is constructed using the `ideographic` baseline-table in the font, and the baseline-table font-size is changed to the value of the {{SVGAttr('font-size')}} SVG attribute of {{cssxref('font-size')}} CSS property on this element.
- `mathematical`
  - : The baseline-identifier for the dominant-baseline is set to be `mathematical`, the derived baseline-table is constructed using the `mathematical` baseline-table in the font, and the baseline-table font-size is changed to the value of the {{SVGAttr('font-size')}} SVG attribute of {{cssxref('font-size')}} CSS property on this element.
- `middle`
  - : The baseline-identifier for the dominant-baseline is set to be `middle`. The derived baseline-table is constructed from the defined baselines in a baseline-table in the font. That font baseline-table is chosen using the following priority order of baseline-table names: `ideographic`, `alphabetic`, `hanging`, `mathematical`. The baseline-table font-size is changed to the value of the {{SVGAttr('font-size')}} SVG attribute of {{cssxref('font-size')}} CSS property on this element.
- `text-bottom`
  - : The line-under edge is used as the baseline, which is usually the bottom edge of the font's em box.
- `text-top`
  - : The line-over edge is used as the baseline, which is usually the top edge of the font's em box.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Example

```html
<svg viewBox="0 0 450 160" width="700" height="200">
  <text x="50" y="20">alphabetic</text>
  <text x="50" y="60">central</text>
  <text x="50" y="100">hanging</text>
  <text x="50" y="140">ideographic</text>
  <text x="250" y="20">mathematical</text>
  <text x="250" y="60">middle</text>
  <text x="250" y="100">text-bottom</text>
  <text x="250" y="140">text-top</text>
  <path
    d="M   0,20 l 400,0
       m -400,40 l 400,0
       m -400,40 l 400,0
       m -400,40 l 400,0"
    stroke="grey" />
</svg>
```

```css
text {
  font-size: 20px;
}
text:nth-of-type(1) {
  dominant-baseline: alphabetic;
}
text:nth-of-type(2) {
  dominant-baseline: central;
}
text:nth-of-type(3) {
  dominant-baseline: hanging;
}
text:nth-of-type(4) {
  dominant-baseline: ideographic;
}
text:nth-of-type(5) {
  dominant-baseline: mathematical;
}
text:nth-of-type(6) {
  dominant-baseline: middle;
}
text:nth-of-type(7) {
  dominant-baseline: text-bottom;
}
text:nth-of-type(8) {
  dominant-baseline: text-top;
}
```

{{EmbedLiveSample("Example", "750", "220")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr('dominant-baseline')}} SVG attribute
- {{cssxref('text-anchor')}} CSS property
