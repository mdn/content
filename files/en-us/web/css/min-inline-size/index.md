---
title: min-inline-size
slug: Web/CSS/min-inline-size
page-type: css-property
browser-compat: css.properties.min-inline-size
---

{{CSSRef}}

The **`min-inline-size`** [CSS](/en-US/docs/Web/CSS) property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the {{cssxref("min-width")}} or the {{cssxref("min-height")}} property, depending on the value of {{cssxref("writing-mode")}}.

{{EmbedInteractiveExample("pages/css/min-inline-size.html")}}

## Syntax

```css
/* <length> values */
min-inline-size: 100px;
min-inline-size: 5em;

/* <percentage> values */
min-inline-size: 10%;

/* Keyword values */
min-inline-size: max-content;
min-inline-size: min-content;
min-inline-size: fit-content(20em);

/* Global values */
min-inline-size: inherit;
min-inline-size: initial;
min-inline-size: revert;
min-inline-size: revert-layer;
min-inline-size: unset;
```

If the writing mode is vertically oriented, the value of `min-inline-size` relates to the minimum height of the element; otherwise, it relates to the minimum width of the element. A related property is {{cssxref("min-block-size")}}, which defines the other dimension of the element.

### Values

The `min-inline-size` property takes the same values as the {{cssxref("min-width")}} and {{cssxref("min-height")}} properties.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting minimum inline size for vertical text

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 5%;
  min-inline-size: 200px;
}
```

#### Result

{{EmbedLiveSample("Setting_minimum_inline_size_for_vertical_text")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{cssxref("min-width")}} and {{cssxref("min-height")}}
- {{cssxref("writing-mode")}}
