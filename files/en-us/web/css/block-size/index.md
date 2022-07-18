---
title: block-size
slug: Web/CSS/block-size
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.block-size
---
{{CSSRef}}

The **`block-size`** [CSS](/en-US/docs/Web/CSS) property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the {{cssxref("width")}} or the {{cssxref("height")}} property, depending on the value of {{cssxref("writing-mode")}}.

If the writing mode is vertically oriented, the value of `block-size` relates to the width of the element; otherwise, it relates to the height of the element. A related property is {{cssxref("inline-size")}}, which defines the other dimension of the element.

{{EmbedInteractiveExample("pages/css/block-size.html")}}

## Syntax

```css
/* <length> values */
block-size: 300px;
block-size: 25em;

/* <percentage> values */
block-size: 75%;

/* Keyword values */
block-size: max-content;
block-size: min-content;
block-size: fit-content(20em);
block-size: auto;

/* Global values */
block-size: inherit;
block-size: initial;
block-size: revert;
block-size: revert-layer;
block-size: unset;
```

### Values

The `block-size` property takes the same values as the {{cssxref("width")}} and {{cssxref("height")}} properties.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Block size with vertical text

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 200px;
}
```

#### Result

{{EmbedLiveSample("Block_size_with_vertical_text")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{cssxref("width")}} and {{cssxref("height")}}
- {{cssxref("writing-mode")}}
