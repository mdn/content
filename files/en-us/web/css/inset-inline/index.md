---
title: inset-inline
slug: Web/CSS/inset-inline
page-type: css-shorthand-property
browser-compat: css.properties.inset-inline
---

{{CSSRef}}

The **`inset-inline`** [CSS](/en-US/docs/Web/CSS) property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("top")}} and {{cssxref("bottom")}}, or {{cssxref("right")}} and {{cssxref("left")}} properties depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/inset-inline.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline-start")}}

## Syntax

```css
/* <length> values */
inset-inline: 3px 10px;
inset-inline: 2.4em 3em;
inset-inline: 10px; /* value applied to start and end */

/* <percentage>s of the width or height of the containing block */
inset-inline: 10% 5%;

/* Keyword value */
inset-inline: auto;

/* anchor() function values */
inset-inline: auto anchor(self-start);
inset-inline: anchor(--my-anchor 50%) auto;

/* Global values */
inset-inline: inherit;
inset-inline: initial;
inset-inline: revert;
inset-inline: revert-layer;
inset-inline: unset;
```

### Values

The `inset-inline` property takes the same values as the {{cssxref("left")}} property.

Note that the {{cssxref("anchor()")}} function behaves equivalently, but somewhat differently. In the case of `inset-inline`, its values are relative to the position of the associated **anchor element**'s logical inline start and/or end edges, rather than its left and/or right edges. Note also that setting the same value for both constituent properties (for example, `inset-inline: anchor(start)`) may produce strange or expected results, as the values will both be relative to a single line on an anchor element (e.g. one of its sides) rather than two separate sides of the viewport or a containing block.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inline start and end offsets

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  position: relative;
  inset-inline: 20px 50px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_inline_start_and_end_offsets", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and {{cssxref("left")}}
- The mapped physical shortcut: {{cssxref("inset")}}
- The mapped block shortcut: {{cssxref("inset-block")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
- [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
