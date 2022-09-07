---
title: min-content
slug: Web/CSS/min-content
tags:
  - CSS
  - Keyword
  - Reference
  - min-content
  - sizing
browser-compat: css.properties.width.min-content
---

{{CSSRef}}

The `min-content` sizing keyword represents the intrinsic minimum width of the content. For text content this means that the content will take all soft-wrapping opportunities, becoming as small as the longest word.

## Syntax

```css
/* Used as a length */
width: min-content;
inline-size: min-content;
height: min-content;
block-size: min-content;

/* used in grid tracks */
grid-template-columns: 200px 1fr min-content;

/* Global values */
min-content: inherit;
min-content: initial;
min-content: revert;
min-content: revert-layer;
min-content: unset;
```

## Examples

### Using min-content for box sizing

#### HTML

```html
<div class="item">Item</div>
<div class="item">Item with more text in it.</div>
```

#### CSS

```css
.item {
  width: min-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### Result

{{EmbedLiveSample("Using_min-content_for_box_sizing", "100%", 200)}}

### Sizing grid columns with min-content

#### HTML

```html
<div id="container">
  <div>Item</div>
  <div>
    Item with more text in it.
  </div>
  <div>Flexible item</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: min-content min-content 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

#### Result

{{EmbedLiveSample("Sizing_grid_columns_with_min-content", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
