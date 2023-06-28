---
title: fit-content()
slug: Web/CSS/fit-content_function
page-type: css-function
browser-compat:
  - css.properties.grid-template-columns.fit-content
  - css.properties.width.fit-content_function
---

{{CSSRef}}

The **`fit-content()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) clamps a given size to an available size according to the formula `min(maximum size, max(minimum size, argument))`.

{{EmbedInteractiveExample("pages/css/function-fit-content.html")}}

The function can be used as a track size in [CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout) properties, where the maximum size is defined by `max-content` and the minimum size by `auto`, which is calculated similar to `auto` (i.e., [`minmax(auto, max-content)`](/en-US/docs/Web/CSS/minmax)), except that the track size is clamped at _argument_ if it is greater than the `auto` minimum.

See the {{cssxref("grid-template-columns")}} page for more information on the `max-content` and `auto` keywords.

The `fit-content()` function can also be used as laid out box size for {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}} and {{cssxref("max-height")}}, where the maximum and minimum sizes refer to the content size.

## Syntax

The `fit-content()` function accepts a `<length>` or a `<percentage>` as an argument.

```css
/* <length> values */
fit-content(200px)
fit-content(5cm)
fit-content(30vw)
fit-content(100ch)

/* <percentage> value */
fit-content(40%)
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : An absolute length.
- {{cssxref("&lt;percentage&gt;")}}

  - : A percentage relative to the available space in the given axis.

    In grid properties it is relative to the inline size of the grid container in column tracks and to the block size of the grid container for row tracks. Otherwise it is relative to the available inline size or block size of the laid out box depending on the writing mode.

## Examples

### Sizing grid columns with fit-content

#### HTML

```html
<div id="container">
  <div>Item as wide as the content.</div>
  <div>
    Item with more text in it. Because the contents of it are wider than the
    maximum width, it is clamped at 300 pixels.
  </div>
  <div>Flexible item</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: fit-content(300px) fit-content(300px) 1fr;
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

{{EmbedLiveSample("Sizing_grid_columns_with_fit-content", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related sizing keywords: {{cssxref("min-content")}}, {{cssxref("max-content")}}
- Related CSS Grid properties: {{cssxref("grid-template")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- Grid Layout Guide: _[Grid template areas - Grid definition shorthands](/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#grid_definition_shorthands)_
