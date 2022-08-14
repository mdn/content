---
title: fit-content
slug: Web/CSS/fit-content
tags:
  - CSS
  - Keyword
  - Reference
  - Web
  - fit-content
browser-compat: css.properties.width.fit-content
---
{{CSSRef}}

The **`fit-content`** behaves as `fit-content(stretch)`. In practice this means that the box will use the available space, but never more than {{cssxref("max-content")}}.

When used as laid out box size for {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}} and {{cssxref("max-height")}} the maximum and minimum sizes refer to the content size.

> **Note:** The CSS Sizing specification also defines the {{cssxref("fit-content_function", "fit-content()")}} function. This page details the keyword.

## Syntax

```css
width: fit-content;
block-size: fit-content;
```

## Examples

### Using fit-content for box sizing

#### HTML

```html
<div class="container">
  <div class="item">Item</div>
  <div class="item">Item with more text in it.</div>
  <div class="item">Item with more text in it, hopefully we have added enough text so the text will start to wrap.</div>
</div>
```

#### CSS

```css
.container {
  border: 2px solid #ccc;
  padding: 10px;
  width: 20em;
}

.item {
  width: -moz-fit-content;
  width: fit-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### Result

{{EmbedLiveSample("Using_fit-content_for_box_sizing", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related sizing keywords: {{cssxref("min-content")}}, {{cssxref("max-content")}}
