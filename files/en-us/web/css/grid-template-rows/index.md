---
title: grid-template-rows
slug: Web/CSS/grid-template-rows
tags:
  - CSS
  - CSS Grid
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.grid-template-rows
---
{{CSSRef}}

The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the {{glossary("grid rows", "grid rows")}}.

{{EmbedInteractiveExample("pages/css/grid-template-rows.html")}}

## Syntax

```css
/* Keyword value */
grid-template-rows: none;

/* <track-list> values */
grid-template-rows: 100px 1fr;
grid-template-rows: [linename] 100px;
grid-template-rows: [linename1] 100px [linename2 linename3];
grid-template-rows: minmax(100px, 1fr);
grid-template-rows: fit-content(40%);
grid-template-rows: repeat(3, 200px);
grid-template-rows: subgrid;
grid-template-rows: masonry;

/* <auto-track-list> values */
grid-template-rows: 200px repeat(auto-fill, 100px) 300px;
grid-template-rows: minmax(100px, max-content)
                       repeat(auto-fill, 200px) 20%;
grid-template-rows: [linename1] 100px [linename2]
                       repeat(auto-fit, [linename3 linename4] 300px)
                       100px;
grid-template-rows: [linename1 linename2] 100px
                       repeat(auto-fit, [linename1] 300px) [linename3];

/* Global values */
grid-template-rows: inherit;
grid-template-rows: initial;
grid-template-rows: revert;
grid-template-rows: revert-layer;
grid-template-rows: unset;
```

This property may be specified as:

- either the keyword value `none`
- or a `<track-list>` value
- or an `<auto-track-list>` value.

### Values

- `none`
  - : Is a keyword meaning that there is no explicit grid. Any rows will be implicitly generated and their size will be determined by the {{cssxref("grid-auto-rows")}} property.
- `[linename]`
  - : A [`<custom-ident>`](/en-US/docs/Web/CSS/custom-ident) specifying a name for the line in that location. The ident may be any valid string other than the reserved words `span` and `auto`. Lines may have multiple names separated by a space inside the square brackets, for example `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Is a non-negative length.
- {{cssxref("&lt;percentage&gt;")}}
  - : Is a non-negative {{cssxref("percentage", "&lt;percentage&gt;")}} value, relative to the block size of the grid container. If the size of the grid container depends on the size of its tracks, then the percentage must be treated as `auto`.
    The intrinsic size contributions of the track may be adjusted to the size of the grid container, and increase the final size of the track by the minimum amount that would result in honoring the percentage.
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : Is a non-negative dimension with the unit `fr` specifying the track's flex factor. Each `<flex>`-sized track takes a share of the remaining space in proportion to its flex factor. When appearing outside a `minmax()` notation, it implies an automatic minimum (i.e. `minmax(auto, <flex>)`).
- {{cssxref("max-content")}}
  - : Is a keyword representing the largest maximal content contribution of the grid items occupying the grid track.
- {{cssxref("min-content")}}
  - : Is a keyword representing the largest minimal content contribution of the grid items occupying the grid track.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Is a functional notation that defines a size range, greater than or equal to _min_, and less than or equal to _max_. If _max_ is smaller than _min_, then _max_ is ignored and the function is treated as _min_. As a maximum, a `<flex>` value sets the track's flex factor. It is invalid as a minimum.
- `auto`

  - : As a maximum represents the largest {{cssxref("max-content")}} size of the items in that track.

    As a minimum represents the largest minimum size of items in that track (specified by the {{cssxref("min-width")}}/{{cssxref("min-height")}} of the items). This is often, though not always, the {{cssxref("min-content")}} size.

    If used outside of {{cssxref("minmax", "minmax()")}} notation, `auto` represents the range between the minimum and maximum described above. This behaves similarly to `minmax(min-content,max-content)` in most cases.

    > **Note:** `auto` track sizes (and only `auto` track sizes) can be stretched by the {{cssxref("align-content")}} and {{cssxref("justify-content")}} properties. Therefore by default, an `auto` sized track will take up any remaining space in the grid container.

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Represents the formula `min(max-content, max(auto, argument))`, which is calculated similar to `auto` (i.e. `minmax(auto, max-content)`), except that the track size is clamped at _argument_ if it is greater than the `auto` minimum.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Represents a repeated fragment of the track list, allowing a large number of rows that exhibit a recurring pattern to be written in a more compact form.
- [`masonry`](/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout) {{Experimental_Inline}}
  - : The masonry value indicates that this axis should be laid out according to the masonry algorithm.
- [`subgrid`](/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
  - : The `subgrid` value indicates that the grid will adopt the spanned portion of its parent grid in that axis. Rather than being specified explicitly, the sizes of the grid rows/columns will be taken from the parent grid's definition.

> **Warning:** The `masonry` value is from Level 3 of the Grid specification and currently only has an experimental implementation behind a flag in Firefox.
>
> The `subgrid` value is from Level 2 of the Grid specification and currently only has implementation in Firefox 71 and onwards.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Specifying grid row sizes

#### HTML

```html
<div id="grid">
  <div id="areaA">A</div>
  <div id="areaB">B</div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-rows: 30px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

#### Result

{{EmbedLiveSample("Specifying_grid_row_sizes", "40px", "100px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-template")}}
- Grid Layout Guide: _[Basic concepts of grid layout - Grid Tracks](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#grid_tracks)_
- Video tutorial: _[Defining a Grid](https://gridbyexample.com/video/series-define-a-grid/)_
- [Subgrid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
