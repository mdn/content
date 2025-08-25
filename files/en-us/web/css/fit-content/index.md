---
title: fit-content
slug: Web/CSS/fit-content
page-type: css-keyword
browser-compat: css.properties.width.fit-content
sidebar: cssref
---

The `fit-content` sizing keyword represents an element size that adapts to its content while staying within the limits of its container.
The keyword ensures that the element is never smaller than its minimum intrinsic size ({{cssxref("min-content")}}) or larger than its maximum intrinsic size ({{cssxref("max-content")}}).

> [!NOTE]
> This keyword is different from the {{cssxref("fit-content_function", "fit-content()")}} function. The function is used for grid track sizing (for example in {{cssxref("grid-template-columns")}} and {{cssxref("grid-auto-rows")}}) and for laid-out box sizing for properties such as {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, and {{cssxref("max-height")}}.

## Syntax

```css
/* Used in sizing properties */
width: fit-content;
height: fit-content;
inline-size: fit-content;
block-size: fit-content;
```

## Description

This keyword is used with sizing properties such as {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("min-width")}}, and {{cssxref("max-width")}}. When used on these properties, the calculated size refers to the element's [content box](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box).

When `fit-content` is set, the element grows or shrinks to fit its content, but stops expanding after the relevant dimension reaches the size limit of its container.

The `fit-content` size is calculated using the following formula:

```plain
min(max-content, max(min-content, stretch))
```

where, [`stretch`](/en-US/docs/Web/CSS/width#stretch) matches the element's [margin box](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) to the width of its [containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). The keyword is essentially equivalent to `fit-content(stretch)`.

You can enable animations to and from `fit-content` using the {{cssxref("interpolate-size")}} property and the {{cssxref("calc-size()")}} function.

## Examples

### Sizing boxes with fit-content

#### HTML

```html
<div class="container">
  <div class="item">Item</div>
  <div class="item">Item with more text in it.</div>
  <div class="item">
    Item with more text in it, hopefully we have added enough text so the text
    will start to wrap.
  </div>
</div>
```

#### CSS

```css
.container {
  border: 2px solid #cccccc;
  padding: 10px;
  width: 20em;
}

.item {
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
- [CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) module
