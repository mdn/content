---
title: fit-content
slug: Web/CSS/fit-content
page-type: css-keyword
browser-compat: css.properties.width.fit-content
sidebar: cssref
---

The `fit-content` sizing keyword represents an element size that adapts to its content while staying within the limits of its container.
The keyword ensures that the element is never smaller than its minimum intrinsic size ({{cssxref("min-content")}}) or larger than its maximum intrinsic size ({{cssxref("max-content")}}).

The {{cssxref("interpolate-size")}} property and {{cssxref("calc-size()")}} function can be used to enable animations to and from `fit-content`.

> [!NOTE]
> In addition to the `fit-content` keyword, the CSS Box Sizing specification also defines the {{cssxref("fit-content_function", "fit-content()")}} function, which takes a length or percentage as an argument and behaves slightly differently.

## Syntax

```css
/* Used as a length value */
width: fit-content;
height: fit-content;
inline-size: fit-content;
block-size: fit-content;

/* Used in grid tracks */
grid-template-columns: 200px 1fr fit-content;
```

## Description

An element with `fit-content` grows or shrinks to fit its content, but stops expanding after it reaches the size limit of its container.

The `fit-content` size is calculated using the following formula, where `<available-space>` is either the size of the element's parent container or the size of the grid track in [grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout):

```plain
min(max-content, max(min-content, <available-space>))
```

When applied to sizing properties such as {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}}, and {{cssxref("max-height")}}, the calculated size refers to the content box of the element.

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
