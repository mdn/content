---
title: minmax()
slug: Web/CSS/minmax
tags:
  - CSS
  - CSS Function
  - CSS Grid
  - Function
  - Layout
  - Reference
  - Web
browser-compat: css.properties.grid-template-columns.minmax
---
{{CSSRef}}

The **`minmax()`** [CSS function](/en-US/docs/Web/CSS/CSS_Functions) defines a size range greater than or equal to _min_ and less than or equal to _max_. It is used with [CSS Grids](/en-US/docs/Web/CSS/CSS_Grid_Layout).

{{EmbedInteractiveExample("pages/css/function-minmax.html")}}

## Syntax

```css
/* <inflexible-breadth>, <track-breadth> values */
minmax(200px, 1fr)
minmax(400px, 50%)
minmax(30%, 300px)
minmax(100px, max-content)
minmax(min-content, 400px)
minmax(max-content, auto)
minmax(auto, 300px)
minmax(min-content, auto)

/* <fixed-breadth>, <track-breadth> values */
minmax(200px, 1fr)
minmax(30%, 300px)
minmax(400px, 50%)
minmax(50%, min-content)
minmax(300px, max-content)
minmax(200px, auto)

/* <inflexible-breadth>, <fixed-breadth> values */
minmax(400px, 50%)
minmax(30%, 300px)
minmax(min-content, 200px)
minmax(max-content, 200px)
minmax(auto, 300px)
```

A function taking two parameters, _min_ and _max_.

Each parameter can be a `<length>`, a `<percentage>`, a `<flex>` value, or one of the keyword values `max-content`, `min-content`, or `auto`.

If _max_ < _min_, then _max_ is ignored and `minmax(min,max)` is treated as _min_. As a maximum, a {{cssxref("flex_value","&lt;flex&gt;")}} value sets the flex factor of a grid track; it is invalid as a minimum.

### Values

- {{cssxref("&lt;length&gt;")}}
  - : A non-negative length.
- {{cssxref("&lt;percentage&gt;")}}
  - : A non-negative percentage relative to the inline size of the grid container in column grid tracks, and the block size of the grid container in row grid tracks. If the size of the grid container depends on the size of its tracks, then the `<percentage>` must be treated as `auto`. The {{glossary("user agent")}} may adjust the intrinsic size contributions of the track to the size of the grid container and increase the final size of the track by the minimum amount that would result in honoring the percentage.
- {{cssxref("&lt;flex&gt;")}}
  - : A non-negative dimension with the unit `fr` specifying the track's flex factor. Each `<flex>`-sized track takes a share of the remaining space in proportion to its flex factor.
- `max-content`
  - : Represents the largest max-content contribution of the grid items occupying the grid track.
- `min-content`
  - : Represents the largest min-content contribution of the grid items occupying the grid track.
- `auto`
  - : As a maximum, identical to `max-content`. As a minimum it represents the largest minimum size (as specified by {{cssxref("min-width")}}/{{cssxref("min-height")}}) of the grid items occupying the grid track.

### Formal syntax

{{csssyntax}}

### CSS properties

`minmax()` function can be used within:

- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-rows")}}

## Examples

### CSS

```css
#container {
  display: grid;
  grid-template-columns: minmax(min-content, 300px) minmax(200px, 1fr) 150px;
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

### HTML

```html
<div id="container">
  <div>
    Item as wide as the content, but at most 300 pixels.
  </div>
  <div>
    Item with flexible width but a minimum of 200 pixels.
  </div>
  <div>
    Inflexible item of 150 pixels width.
  </div>
</div>
```

### Result

{{EmbedLiveSample("Examples", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Grid Layout Guide: _[Basic concepts of grid layout - track sizing with minmax()](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#track_sizing_and_minmax)_
- [CSS grids, logical values and writing modes](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)
- Video tutorial: _[Introducing minmax()](https://gridbyexample.com/video/series-minmax/)_
