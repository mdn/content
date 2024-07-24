---
title: max-content
slug: Web/CSS/max-content
page-type: css-keyword
browser-compat: css.properties.width.max-content
---

{{CSSRef}}

The `max-content` sizing keyword represents the maximum {{glossary("intrinsic size")}} of the content. For text content this means that the content will not wrap at all even if it causes overflows.

## Syntax

```css
/* Used as a length */
width: max-content;
inline-size: max-content;
height: max-content;
block-size: max-content;

/* used in grid tracks */
grid-template-columns: 200px 1fr max-content;
```

## Examples

### Using max-content for box sizing

#### HTML

```html
<div id="container">
  <div class="item">Item</div>
  <div class="item">
    Item with more text in it which will overflow the fixed width box.
  </div>
</div>
```

#### CSS

```css
#container {
  background-color: #8cffa0;
  padding: 10px;
  width: 200px;
}

.item {
  width: max-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### Result

{{EmbedLiveSample("Using_max-content_for_box_sizing", "100%", 200)}}

### Sizing grid columns with max-content

#### HTML

```html
<div id="container">
  <div>Item</div>
  <div>Item with more text in it.</div>
  <div>Flexible item</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: max-content max-content 1fr;
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

{{EmbedLiveSample("Sizing_grid_columns_with_max-content", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related sizing keywords: {{cssxref("min-content")}}, {{cssxref("fit-content")}}
- [CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) module
