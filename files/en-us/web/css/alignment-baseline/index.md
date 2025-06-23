---
title: alignment-baseline
slug: Web/CSS/alignment-baseline
page-type: css-property
browser-compat: css.properties.alignment-baseline
---

{{CSSRef}}

The **`alignment-baseline`** [CSS](/en-US/docs/Web/CSS) property specifies the specific [baseline](/en-US/docs/Glossary/Baseline/Typography) used to align the box's text and inline-level contents. **Baseline alignment** is the relationship among the baselines of multiple alignment subjects within an alignment context. When performing baseline alignment, the `alignment-baseline` property value specifies which baseline of the box is aligned to the corresponding baseline of its alignment context.

> [!NOTE]
> The `alignment-baseline` property only has an effect on inline-level boxes, flex items, grid items, table cells, and the {{SVGElement("text")}}, {{SVGElement("textPath")}}, and {{SVGElement("tspan")}} SVG elements. If present, it overrides the shape's {{SVGAttr("alignment-baseline")}} attribute.

In an inline formatting context, inline-level box fragments and glyphs share an alignment context established by their parent inline box fragment along its inline axis. In SVG text layout, these values instead specify the baseline that is aligned to the SVG current text position.

## Syntax

```css
/* Initial value */
alignment-baseline: baseline;

/* Keyword values */
alignment-baseline: alphabetic;
alignment-baseline: central;
alignment-baseline: ideographic;
alignment-baseline: mathematical;
alignment-baseline: middle;
alignment-baseline: text-bottom;
alignment-baseline: text-top;

/* Mapped values */
alignment-baseline: text-before-edge; /* text-top */
alignment-baseline: text-after-edge; /* text-bottom */

/* Deprecated values  */
alignment-baseline: auto;
alignment-baseline: before-edge;
alignment-baseline: after-edge;
alignment-baseline: hanging;

/* Global values */
alignment-baseline: inherit;
alignment-baseline: initial;
alignment-baseline: revert;
alignment-baseline: revert-layer;
alignment-baseline: unset;
```

### Values

- `baseline`

  - : Use the {{cssxref("dominant-baseline")}} value of the parent.

- `alphabetic`

  - : Used in writing Latin, Cyrillic, Greek, and many other scripts; matches the box's alphabetic baseline to that of its parent, corresponding to the bottom of most, but not all characters.

- `central`

  - : Matches the box's central baseline to the central baseline of its parent, corresponding to the ideographic central baseline, halfway between the ideographic-under and ideographic-over baselines.

- `ideographic`

  - : Matches the box's ideographic character face under-side baseline to that of its parent, with the derived baseline-table constructed using the ideographic baseline-table in the font.

- `mathematical`

  - : Matches the box's mathematical baseline to that of its parent, corresponding to the center baseline around which mathematical characters are designed.

- `middle`

  - : Aligns the vertical midpoint of the box with the baseline of the parent box plus half the x-height of the parent. Uses the x-middle baselines; except under [`text-orientation: upright;`](/en-US/docs/Web/CSS/text-orientation) (where the alphabetic and x-height baselines are essentially meaningless), in which case it uses the `central` baseline instead.

- `text-bottom`

  - : Matches the bottom of the box to the top of the parent's content area, using the line-under edge of an inline's content box.

- `text-top`
  - : Matches the top of the box to the top of the parent's content area; the line-over edge of an inline's content box.

> [!NOTE]
> In SVG2, the `auto`, `before-edge`, and `after-edge` were deprecated and `text-before-edge` is an alias for `text-top`, and `text-after-edge` is an alias for `text-bottom`. These keywords should not be used as part of the {{cssxref("vertical-align")}} shorthand property. Browsers support `auto` as a synonym for `baseline` and `hanging`, wherein the alignment-point of the object being aligned is aligned with the "hanging" baseline of the parent text content element, but neither is part of the specification.

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
  <text x="0" y="20" fill="red">baseline</text>
  <text x="0" y="60" fill="red">baseline</text>
  <text x="0" y="100" fill="red">baseline</text>
  <text x="0" y="140" fill="red">baseline</text>
</svg>
```

```css
text {
  font-size: 20px;
  alignment-baseline: baseline;
}
text:nth-of-type(1) {
  alignment-baseline: alphabetic;
}
text:nth-of-type(2) {
  alignment-baseline: central;
}
text:nth-of-type(3) {
  alignment-baseline: hanging;
}
text:nth-of-type(4) {
  alignment-baseline: ideographic;
}
text:nth-of-type(5) {
  alignment-baseline: mathematical;
}
text:nth-of-type(6) {
  alignment-baseline: middle;
}
text:nth-of-type(7) {
  alignment-baseline: text-bottom;
}
text:nth-of-type(8) {
  alignment-baseline: text-top;
}
```

{{EmbedLiveSample("Example", "750", "220")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("dominant-baseline")}}
- SVG {{SVGAttr("alignment-baseline")}} attribute
- [CSS inline layout](/en-US/docs/Web/CSS/CSS_inline_layout) module
- [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module
