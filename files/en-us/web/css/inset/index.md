---
title: inset
slug: Web/CSS/inset
page-type: css-shorthand-property
browser-compat: css.properties.inset
---

{{CSSRef}}

The **`inset`** [CSS](/en-US/docs/Web/CSS) property is a shorthand that corresponds to the {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and/or {{cssxref("left")}} properties. It has the same multi-value syntax of the {{cssxref("margin")}} shorthand.

{{EmbedInteractiveExample("pages/css/inset.html")}}

While part of the _CSS Logical Properties_ specification, it does not define _logical_ offsets. It defines _physical_ offsets, regardless of the element's writing mode, directionality, and text orientation.

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{Cssxref("top")}}
- {{Cssxref("right")}}
- {{Cssxref("bottom")}}
- {{Cssxref("left")}}

## Syntax

```css
/* <length> values */
inset: 10px; /* value applied to all edges */
inset: 4px 8px; /* top/bottom left/right */
inset: 5px 15px 10px; /* top left/right bottom */
inset: 2.4em 3em 3em 3em; /* top right bottom left */

/* <percentage>s of the width (left/right) or height (top/bottom) of the containing block */
inset: 10% 5% 5% 5%;

/* Keyword value */
inset: auto;

/* Global values */
inset: inherit;
inset: initial;
inset: revert;
inset: revert-layer;
inset: unset;
```

### Values

The `inset` property takes the same values as the {{cssxref("left")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting offsets for an element

#### HTML

```html
<div>
  <span class="exampleText">Example text</span>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 150px;
  height: 120px;
  position: relative;
}

.exampleText {
  writing-mode: sideways-rl;
  position: absolute;
  inset: 20px 40px 30px 10px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_offsets_for_an_element", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The longhand box offset properties: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and {{cssxref("left")}}.
- The mapped logical shorthands: {{cssxref("inset-block")}} and {{cssxref("inset-inline")}}
- The {{cssxref("margin")}} shorthand multi-value syntax.
