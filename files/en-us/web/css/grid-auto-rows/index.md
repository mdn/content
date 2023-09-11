---
title: grid-auto-rows
slug: Web/CSS/grid-auto-rows
page-type: css-property
browser-compat: css.properties.grid-auto-rows
---

{{CSSRef}}

The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row {{glossary("grid tracks", "track")}} or pattern of tracks.

{{EmbedInteractiveExample("pages/css/grid-auto-rows.html")}}

If a grid item is positioned into a row that is not explicitly sized by {{cssxref("grid-template-rows")}}, implicit {{glossary("grid", "grid")}} tracks are created to hold it. This can happen either by explicitly positioning into a row that is out of range, or by the auto-placement algorithm creating additional rows.

## Syntax

```css
/* Keyword values */
grid-auto-rows: min-content;
grid-auto-rows: max-content;
grid-auto-rows: auto;

/* <length> values */
grid-auto-rows: 100px;
grid-auto-rows: 20cm;
grid-auto-rows: 50vmax;

/* <percentage> values */
grid-auto-rows: 10%;
grid-auto-rows: 33.3%;

/* <flex> values */
grid-auto-rows: 0.5fr;
grid-auto-rows: 3fr;

/* minmax() values */
grid-auto-rows: minmax(100px, auto);
grid-auto-rows: minmax(max-content, 2fr);
grid-auto-rows: minmax(20%, 80vmax);

/* fit-content() values */
grid-auto-rows: fit-content(400px);
grid-auto-rows: fit-content(5cm);
grid-auto-rows: fit-content(20%);

/* multiple track-size values */
grid-auto-rows: min-content max-content auto;
grid-auto-rows: 100px 150px 390px;
grid-auto-rows: 10% 33.3%;
grid-auto-rows: 0.5fr 3fr 1fr;
grid-auto-rows: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax);
grid-auto-rows: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* Global values */
grid-auto-rows: inherit;
grid-auto-rows: initial;
grid-auto-rows: revert;
grid-auto-rows: revert-layer;
grid-auto-rows: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : Is a non-negative length.
- {{cssxref("&lt;percentage&gt;")}}
  - : Is a non-negative {{cssxref("percentage", "&lt;percentage&gt;")}} value relative to the block size of the grid container. If the block size of the grid container is indefinite, the percentage value is treated like `auto`.
- {{cssxref("&lt;flex&gt;")}}

  - : Is a non-negative dimension with the unit `fr` specifying the track's flex factor. Each `<flex>`-sized track takes a share of the remaining space in proportion to its flex factor.

    When appearing outside a `minmax()` notation, it implies an automatic minimum (i.e. `minmax(auto, <flex>)`).

- {{cssxref("max-content")}}
  - : Is a keyword representing the largest maximal content contribution of the grid items occupying the grid track.
- {{cssxref("min-content")}}
  - : Is a keyword representing the largest minimal content contribution of the grid items occupying the grid track.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Is a functional notation that defines a size range greater than or equal to _min_ and less than or equal to _max_. If _max_ is smaller than _min_, then _max_ is ignored and the function is treated as _min_. As a maximum, a `<flex>` value sets the track's flex factor. As a minimum, it is treated as zero (or minimal content, if the grid container is sized under a minimal content constraint).
- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Represents the formula `min(max-content, max(auto, argument))`, which is calculated similar to `auto` (i.e. `minmax(auto, max-content)`), except that the track size is clamped at _argument_ if it is greater than the `auto` minimum.
- `auto`

  - : As a maximum represents the largest {{cssxref("max-content")}} size of the items in that track.

    As a minimum represents the largest minimum size of items in that track (specified by the {{cssxref("min-width")}}/{{cssxref("min-height")}} of the items). This is often, though not always, the {{cssxref("min-content")}} size.

    If used outside of {{cssxref("minmax", "minmax()")}} notation, `auto` represents the range between the minimum and maximum described above. This behaves similarly to `minmax(min-content,max-content)` in most cases.

    > **Note:** `auto` track sizes (and only `auto` track sizes) can be stretched by the {{cssxref("align-content")}} and {{cssxref("justify-content")}} properties. Therefore by default, an `auto` sized track will take up any remaining space in the grid container.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting grid row size

#### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

#### CSS

```css
#grid {
  width: 200px;
  display: grid;
  grid-template-areas: "a a";
  gap: 10px;
  grid-auto-rows: 100px;
}

#grid > div {
  background-color: lime;
}
```

#### Result

{{EmbedLiveSample("Setting_grid_row_size", "210px", "210px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-flow")}}, {{cssxref("grid")}}
- Grid Layout Guide: _[Auto-placement in grid layout - sizing rows in the implicit grid](/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout#sizing_rows_in_the_implicit_grid)_
- Video tutorial: _[Introducing Grid auto-placement and order](https://gridbyexample.com/video/series-auto-placement-order/)_
