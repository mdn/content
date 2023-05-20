---
title: inset-block-end
slug: Web/CSS/inset-block-end
page-type: css-property
browser-compat: css.properties.inset-block-end
---

{{CSSRef}}

The **`inset-block-end`** [CSS](/en-US/docs/Web/CSS) property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, or {{cssxref("left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/inset-block-end.html")}}

## Syntax

```css
/* <length> values */
inset-block-end: 3px;
inset-block-end: 2.4em;

/* <percentage>s of the width or height of the containing block */
inset-block-end: 10%;

/* Keyword value */
inset-block-end: auto;

/* Global values */
inset-block-end: inherit;
inset-block-end: initial;
inset-block-end: revert;
inset-block-end: revert-layer;
inset-block-end: unset;
```

### Values

The `inset-block-end` property takes the same values as the {{cssxref("left")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting block end offset

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
  writing-mode: vertical-rl;
  position: relative;
  inset-block-end: 20px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_block_end_offset", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The properties which defines other insets: {{cssxref("inset-block-start")}}, {{cssxref("inset-inline-start")}}, and {{cssxref("inset-inline-end")}}
- The mapped physical properties: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
