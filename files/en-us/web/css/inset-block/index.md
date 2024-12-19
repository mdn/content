---
title: inset-block
slug: Web/CSS/inset-block
page-type: css-shorthand-property
browser-compat: css.properties.inset-block
---

{{CSSRef}}

The **`inset-block`** [CSS](/en-US/docs/Web/CSS) property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("top")}} and {{cssxref("bottom")}}, or {{cssxref("right")}} and {{cssxref("left")}} properties depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

This {{glossary("inset properties", "inset property")}} has no effect on non-positioned elements.

{{EmbedInteractiveExample("pages/css/inset-block.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block-start")}}

## Syntax

```css
/* <length> values */
inset-block: 3px 10px;
inset-block: 2.4em 3em;
inset-block: 10px; /* value applied to start and end */
inset-block: auto anchor(start);
inset-block: 10em anchor-size(--myAnchor height, 10%);

/* <percentage>s of the width or height of the containing block */
inset-block: 10% 5%;

/* Keyword value */
inset-block: auto;

/* Global values */
inset-block: inherit;
inset-block: initial;
inset-block: revert;
inset-block: revert-layer;
inset-block: unset;
```

### Values

The `inset-block` property takes the same values as the {{cssxref("left")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting block start and end offsets

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
  inset-block: 20px 50px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_block_start_and_end_offsets", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and {{cssxref("left")}}
- The mapped physical shortcut: {{cssxref("inset")}}
- The mapped inline shortcut: {{cssxref("inset-inline")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
