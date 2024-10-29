---
title: grid-template-columns
slug: Web/CSS/grid-template-columns
page-type: css-property
browser-compat: css.properties.grid-template-columns
---

{{CSSRef}}

The **`grid-template-columns`** [CSS](/en-US/docs/Web/CSS) property defines the line names and track sizing functions of the {{glossary("grid column", "grid columns")}}.

{{EmbedInteractiveExample("pages/css/grid-template-columns.html")}}

## Syntax

```css
/* Keyword value */
grid-template-columns: none;

/* <track-list> values */
grid-template-columns: 100px 1fr;
grid-template-columns: [line-name] 100px;
grid-template-columns: [line-name1] 100px [line-name2 line-name3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);
grid-template-columns: subgrid;
grid-template-columns: masonry;

/* <auto-track-list> values */
grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
grid-template-columns:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-columns:
  [line-name1] 100px [line-name2]
  repeat(auto-fit, [line-name3 line-name4] 300px)
  100px;
grid-template-columns:
  [line-name1 line-name2] 100px
  repeat(auto-fit, [line-name1] 300px) [line-name3];

/* Global values */
grid-template-columns: inherit;
grid-template-columns: initial;
grid-template-columns: revert;
grid-template-columns: revert-layer;
grid-template-columns: unset;
```

### Values

- `none`
  - : Indicates that there is no explicit grid. Any columns will be implicitly generated and their size will be determined by the {{cssxref("grid-auto-columns")}} property.
- `[line-name]`
  - : A [`<custom-ident>`](/en-US/docs/Web/CSS/custom-ident) specifying a name for the line in that location. The ident may be any valid string other than the reserved words `span` and `auto`. Lines may have multiple names separated by a space inside the square brackets, for example `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : A non-negative length, giving the width of the column.
- {{cssxref("&lt;percentage&gt;")}}
  - : Is a non-negative {{cssxref("percentage", "&lt;percentage&gt;")}} value relative to the inline size of the grid container. If the size of the grid container depends on the size of its tracks, then the percentage must be treated as `auto`.
    The intrinsic size contributions of the track may be adjusted to the size of the grid container and increase the final size of the track by the minimum amount that would result in honoring the percentage.
- {{cssxref("&lt;flex&gt;")}}

  - : Is a non-negative dimension with the unit `fr` specifying the track's flex factor. Each `<flex>`-sized track takes a share of the remaining space in proportion to its flex factor.

    When appearing outside a `minmax()` notation, it implies an automatic minimum (i.e. `minmax(auto, <flex>)`).

- {{cssxref("max-content")}}
  - : Is a keyword representing the largest [maximal content contribution](https://www.w3.org/TR/css-sizing-3/#max-content) of the grid items occupying the grid track. For example, if the first element of the grid track contains the sentence _"Repetitio est mater studiorum"_ and the second element contains the sentence _"Dum spiro, spero"_, maximal content contribution will be defined by the size of the largest sentence among all of the grid elements - _"Repetitio est mater studiorum"_.
- {{cssxref("min-content")}}
  - : Is a keyword representing the largest [minimal content contribution](https://www.w3.org/TR/css-sizing-3/#min-content) of the grid items occupying the grid track. For example, if the first element of the grid track contains the sentence _"Repetitio est mater studiorum"_ and the second element contains the sentence _"Dum spiro, spero"_, minimal content contribution will be defined by the size of the largest word among all of the sentences in the grid elements - _"studiorum"_.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Is a functional notation that defines a size range greater than or equal to _min_ and less than or equal to _max_. If _max_ is smaller than _min_, then _max_ is ignored and the function is treated as _min_. As a maximum, a `<flex>` value sets the track's flex factor. It is invalid as a minimum.
- `auto`

  - : As a maximum represents the largest {{cssxref("max-content")}} size of the items in that track.

    As a minimum represents the largest minimum size of items in that track (specified by the {{cssxref("min-width")}}/{{cssxref("min-height")}} of the items). This is often, though not always, the {{cssxref("min-content")}} size.

    If used outside of {{cssxref("minmax", "minmax()")}} notation, `auto` represents the range between the minimum and maximum described above. This behaves similarly to `minmax(min-content,max-content)` in most cases.

    > **Note:** `auto` track sizes (and only `auto` track sizes) can be stretched by the {{cssxref("align-content")}} and {{cssxref("justify-content")}} properties. Therefore by default, an `auto` sized track will take up any remaining space in the grid container.

- `{{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}`
  - : Represents the formula `max(minimum, min(limit, max-content))`, where _minimum_ represents an `auto` minimum (which is often, but not always, equal to a {{cssxref("min-content")}} minimum), and _limit_ is the track sizing function passed as an argument to fit-content(). This is essentially calculated as the smaller of `minmax(auto, max-content)` and `minmax(auto, limit)`.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Represents a repeated fragment of the track list, allowing a large number of columns that exhibit a recurring pattern to be written in a more compact form.
- [`masonry`](/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : The masonry value indicates that this axis should be laid out according to the masonry algorithm.
- [`subgrid`](/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : The `subgrid` value indicates that the grid will adopt the spanned portion of its parent grid in that axis. Rather than being specified explicitly, the sizes of the grid rows/columns will be taken from the parent grid's definition.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Specifying grid column sizes

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
  width: 100%;
  grid-template-columns: 50px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

#### Result

{{EmbedLiveSample("Specifying_grid_column_sizes", "100%", "20px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- [Basic concepts of grid layout: grid tracks](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_tracks)
- Video: [Defining a grid](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid)
