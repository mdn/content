---
title: min-block-size
slug: Web/CSS/min-block-size
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Reference
  - min-block-size
  - recipe:css-property
browser-compat: css.properties.min-block-size
---
{{CSSRef}}

The **`min-block-size`** [CSS](/en-US/docs/Web/CSS) property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the {{cssxref("min-width")}} or the {{cssxref("min-height")}} property, depending on the value of {{cssxref("writing-mode")}}.

If the writing mode is vertically oriented, the value of `min-block-size` relates to the minimum width of the element; otherwise, it relates to the minimum height of the element. A related property is {{cssxref("min-inline-size")}}, which defines the other dimension of the element.

{{EmbedInteractiveExample("pages/css/min-block-size.html")}}

## Syntax

```css
/* <length> values */
min-block-size: 100px;
min-block-size: 5em;

/* <percentage> values */
min-block-size: 10%;

/* Keyword values */
min-block-size: max-content;
min-block-size: min-content;
min-block-size: fit-content(20em);

/* Global values */
min-block-size: inherit;
min-block-size: initial;
min-block-size: revert;
min-block-size: revert-layer;
min-block-size: unset;
```

### Values

The `min-block-size` property takes the same values as the {{cssxref("min-width")}} and {{cssxref("min-height")}} properties.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting minimum block size for vertical text

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  min-block-size: 200px;
}
```

#### Result

{{EmbedLiveSample("Setting_minimum_block_size_for_vertical_text")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{cssxref("min-width")}} and {{cssxref("min-height")}}
- {{cssxref("writing-mode")}}
