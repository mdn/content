---
title: text-anchor
slug: Web/CSS/text-anchor
page-type: css-property
browser-compat: css.properties.text-anchor
---

{{CSSRef}}

The **`text-anchor`** [CSS](/en-US/docs/Web/CSS) property aligns a box containing a string of text where the wrapping area is determined from the {{cssxref("inline-size")}} property, and the text is then placed relative to the anchor point of the element, which is defined using the {{SVGAttr('x')}} and {{SVGAttr('y')}} (or {{SVGAttr('dx')}} and {{SVGAttr('dy')}}) attributes. If present, the value of the CSS property overrides any value of the element's {{SVGAttr("text-anchor")}} attribute.

Each individual text fragment within an element is aligned independently; thus, a multi-line {{SVGElement("text")}} element will have each line of text aligned as per the value of `text-anchor`. `text-anchor` values only have an effect on the {{SVGElement("text")}}, {{SVGElement("textPath")}}, {{SVGElement("tref")}}, and {{SVGElement("tspan")}} SVG elements. `text-anchor` does not apply to automatically wrapped text; for that, see {{cssxref('text-align')}}.

## Syntax

```css
text-anchor: start;
text-anchor: middle;
text-anchor: end;

/* Global values */
text-anchor: inherit;
text-anchor: initial;
text-anchor: revert;
text-anchor: revert-layer;
text-anchor: unset;
```

### Values

- `start`

  - : Aligns the text such that the inline start of the text string is aligned with the anchor point. This alignment is relative to the writing direction of the text; thus, for example, in right-to-left top-to-bottom writing, the text will be placed to the left of the anchor point. If the text's inline direction is vertical, as with many Asian languages, the top edge of the text is aligned with the anchor point.

- `middle`

  - : Aligns the text such that the center (middle) of the text string's inline box is aligned with the anchor point.

- `end`

  - : Aligns the text such that the inline end of the text string is aligned with the anchor point. This alignment is relative to the writing direction of the text; thus, for example, in right-to-left top-to-bottom writing, the text will be placed to the right of the anchor point. If the text's inline direction is vertical, as with many Asian languages, the bottom edge of the text is aligned with the anchor point.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Example

Three `<text>` elements are given the same `x` position, but different values for `text-anchor`. A dashed red line is included to mark the x-axis position of all three anchor points.

```html
<svg
  viewBox="0 0 200 150"
  height="150"
  width="200"
  xmlns="http://www.w3.org/2000/svg">
  <line
    x1="100"
    y1="0"
    x2="100"
    y2="150"
    stroke="red"
    stroke-dasharray="10,5" />
  <text x="100" y="40">Anchored</text>
  <text x="100" y="80">Anchored</text>
  <text x="100" y="120">Anchored</text>
</svg>
```

```css hidden
text {
  font-size: 24px;
}
```

```css
text:nth-of-type(1) {
  text-anchor: start;
}
text:nth-of-type(2) {
  text-anchor: middle;
}
text:nth-of-type(3) {
  text-anchor: end;
}
```

{{EmbedLiveSample("Example", 200, 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref('dominant-baseline')}}
- SVG {{SVGElement("text")}} element
- SVG {{SVGAttr("text-anchor")}} attribute
