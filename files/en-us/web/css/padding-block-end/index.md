---
title: padding-block-end
slug: Web/CSS/padding-block-end
page-type: css-property
browser-compat: css.properties.padding-block-end
---

{{CSSRef}}

The **`padding-block-end`** [CSS](/en-US/docs/Web/CSS) property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

{{EmbedInteractiveExample("pages/css/padding-block-end.html")}}

## Syntax

```css
/* <length> values */
padding-block-end: 10px; /* An absolute length */
padding-block-end: 1em; /* A length relative to the text size */

/* <percentage> value */
padding-block-end: 5%; /* A padding relative to the block container's width */

/* Global values */
padding-block-end: inherit;
padding-block-end: initial;
padding-block-end: revert;
padding-block-end: revert-layer;
padding-block-end: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : The size of the padding as a fixed value. Must be nonnegative.
- {{cssxref("&lt;percentage&gt;")}}
  - : The size of the padding as a percentage, relative to the inline size (_width_ in a horizontal language, defined by {{cssxref("writing-mode")}}) of the [containing block](/en-US/docs/Web/CSS/Containing_block). Must be nonnegative.

## Description

The `padding-block-end` property is defined in the specification as taking the same values as the {{cssxref("padding-top")}} property. However, the physical property it maps to depends on the values set for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}. Therefore, it could map to {{cssxref("padding-bottom")}}, {{cssxref("padding-right")}}, or {{cssxref("padding-left")}}.

It relates to {{cssxref("padding-block-start")}}, {{cssxref("padding-inline-start")}}, and {{cssxref("padding-inline-end")}}, which define the other paddings of the element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting block end padding for vertical text

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
  padding-block-end: 20px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_block_end_padding_for_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/en-US/docs/Web/CSS/CSS_Logical_Properties)
- The mapped physical properties: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, and {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
