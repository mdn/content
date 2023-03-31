---
title: padding-inline-start
slug: Web/CSS/padding-inline-start
page-type: css-property
browser-compat: css.properties.padding-inline-start
---

{{CSSRef}}

The **`padding-inline-start`** [CSS](/en-US/docs/Web/CSS) property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

{{EmbedInteractiveExample("pages/css/padding-inline-start.html")}}

## Syntax

```css
/* <length> values */
padding-inline-start: 10px; /* An absolute length */
padding-inline-start: 1em; /* A length relative to the text size */

/* <percentage> value */
padding-inline-start: 5%; /* A padding relative to the block container's width */

/* Global values */
padding-inline-start: inherit;
padding-inline-start: initial;
padding-inline-start: revert;
padding-inline-start: revert-layer;
padding-inline-start: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : The size of the padding as a fixed value. Must be nonnegative.
- {{cssxref("&lt;percentage&gt;")}}
  - : The size of the padding as a percentage, relative to the inline size (_width_ in a horizontal language, defined by {{cssxref("writing-mode")}}) of the [containing block](/en-US/docs/Web/CSS/Containing_block). Must be nonnegative.

## Description

The `padding-inline-start` property is defined in the specification as taking the same values as the {{cssxref("padding-top")}} property. However, the physical property it maps to depends on the values set for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}. Therefore, it could map to {{cssxref("padding-bottom")}}, {{cssxref("padding-right")}}, or {{cssxref("padding-left")}}.

It relates to {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, and {{cssxref("padding-inline-end")}}, which define the other paddings of the element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inline start padding for vertical text

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
  padding-inline-start: 20px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_inline_start_padding_for_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/en-US/docs/Web/CSS/CSS_Logical_Properties)
- The mapped physical properties: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, and {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
