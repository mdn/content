---
title: repeat()
slug: Web/CSS/repeat
page-type: css-function
browser-compat: css.properties.grid-template-columns.repeat
---

{{CSSRef}}

The **`repeat()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) represents a repeated fragment of the [track list](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout), allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form.

{{EmbedInteractiveExample("pages/css/function-repeat.html")}}

This function can be used in the CSS grid properties {{cssxref("grid-template-columns")}} and {{cssxref("grid-template-rows")}}.

## Syntax

```css
/* <track-repeat> values */
repeat(4, 1fr)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] 1fr [col-end])
repeat(4, [col-start] min-content [col-end])
repeat(4, [col-start] max-content [col-end])
repeat(4, [col-start] auto [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] auto [col-end])
repeat(4, [col-start] min-content [col-middle] max-content [col-end])

/* <auto-repeat> values */
repeat(auto-fill, 250px)
repeat(auto-fit, 250px)
repeat(auto-fill, [col-start] 250px [col-end])
repeat(auto-fit, [col-start] 250px [col-end])
repeat(auto-fill, [col-start] minmax(100px, 1fr) [col-end])
repeat(auto-fill, 10px [col-start] 30% [col-middle] 400px [col-end])

/* <fixed-repeat> values */
repeat(4, 250px)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] 400px [col-end])
```

The `repeat()` function takes two arguments:

- **repeat count**: the first argument specifies the number of times that the track list should be repeated. It is specified with an integer value of 1 or more, or with the keyword values [`auto-fill`](#auto-fill) or [`auto-fit`](#auto-fit). These keyword values repeat the set of tracks as many times as is needed to fill the grid container.
- **tracks**: the second argument specifies the set of tracks that will be repeated. Fundamentally this consists of one or more values, where each value represents the size of that track. Each size is specified using either a [`<track-size>`](#track-size) value or a [`<fixed-size>`](#fixed-size) value. You can also specify one or more [line names](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) before or after each track, by providing [`<line-names>`](#line-names) values before and/or after the track size.

If you use [`auto-fill`](#auto-fill) or [`auto-fit`](#auto-fit) to set the repeat count, you may only specify track sizes using the [`<fixed-size>`](#fixed-size) type, not the [`<track-size>`](#track-size) type. This give us three main syntax forms for `repeat()`:

- `<track-repeat>`, which uses:
  - an integer to set the repeat count
  - [`<track-size>`](#track-size) values to set track sizes.
- `<auto-repeat>`, which uses
  - [`auto-fill`](#auto-fill) or [`auto-fit`](#auto-fit) to set the repeat count
  - [`<fixed-size>`](#fixed-size) to set track sizes.
- `<fixed-repeat>`, which uses:
  - an integer to set the repeat count
  - [`<fixed-size>`](#fixed-size) values to set track sizes.

Then if a property declaration uses `<auto-repeat>`, it is only allowed to use `<fixed-repeat>` for any additional `repeat()` calls. For example, this is invalid, because it combines the `<auto-repeat>` form with the `<track-repeat>` form:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

There is a fourth form, `<name-repeat>`, which is used to add line names to subgrids. It only used with the [`subgrid`](/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid) keyword and only specifies line names, not track sizes.

### Values

- `<fixed-size>`
  - : One of the following forms:
    - a {{cssxref("&lt;length-percentage&gt;")}} value
    - a {{cssxref("minmax", "minmax()")}} function with:
      - `min` given as a {{cssxref("&lt;length-percentage&gt;")}} value
      - `max` given as one of a {{cssxref("&lt;length-percentage&gt;")}} value, a {{cssxref("&lt;flex&gt;")}} value, or one of the following keywords: [`min-content`](#min-content), [`max-content`](#max-content), or [`auto`](#auto)
    - a {{cssxref("minmax", "minmax()")}} function with:
      - `min` given as a {{cssxref("&lt;length-percentage&gt;")}} value or one of the following keywords: [`min-content`](#min-content), [`max-content`](#max-content), or [`auto`](#auto)
      - `max` given as a {{cssxref("&lt;length-percentage&gt;")}} value.
- {{cssxref("&lt;flex&gt;")}}
  - : A non-negative dimension with the unit `fr` specifying the track's flex factor. Each `<flex>`-sized track takes a share of the remaining space in proportion to its flex factor.
- {{cssxref("&lt;length&gt;")}}
  - : A positive integer length.
- `<line-names>`
  - : Zero or more {{cssxref("&lt;custom-ident&gt;")}} values, space-separated and enclosed in square brackets, like this: `[first header-start]`.
- {{cssxref("&lt;percentage&gt;")}}
  - : A non-negative percentage relative to the inline size of the grid container in column grid tracks, and the block size of the grid container in row grid tracks. If the size of the grid container depends on the size of its tracks, then the `<percentage>` must be treated as `auto`. The user-agent may adjust the intrinsic size contributions of the track to the size of the grid container and increase the final size of the track by the minimum amount that would result in honoring the percentage.
- `<track-size>`
  - : One of the following forms:
    - a {{cssxref("&lt;length-percentage&gt;")}} value, a {{cssxref("&lt;flex&gt;")}} value, or one of the following keywords: [`min-content`](#min-content), [`max-content`](#max-content), or [`auto`](#auto)
    - a {{cssxref("minmax", "minmax()")}} function with:
      - `min` given as a {{cssxref("&lt;length-percentage&gt;")}} value, or one of the following keywords: [`min-content`](#min-content), [`max-content`](#max-content), or [`auto`](#auto)
      - `max` given as a {{cssxref("&lt;length-percentage&gt;")}} value, a {{cssxref("&lt;flex&gt;")}} value, or one of the following keywords: [`min-content`](#min-content), [`max-content`](#max-content), or [`auto`](#auto)
    - a {{cssxref("fit-content_function", "fit-content()")}} function, passed a {{cssxref("&lt;length-percentage&gt;")}} value.
- `auto`
  - : As a maximum, identical to `max-content`. As a minimum it represents the largest minimum size (as specified by {{cssxref("min-width")}}/{{cssxref("min-height")}}) of the grid items occupying the grid track.
- `auto-fill`
  - : If the grid container has a definite or maximal size in the relevant axis, then the number of repetitions is the largest possible positive integer that does not cause the grid to overflow its grid container. Treating each track as its maximal track sizing function (each independent value used to define `grid-template-rows` or `grid-template-columns`), if that is definite. Otherwise, as its minimum track sizing function, and taking grid-gap into account. If any number of repetitions would overflow, then the repetition is `1`. Otherwise, if the grid container has a definite minimal size in the relevant axis, the number of repetitions is the smallest possible positive integer that fulfills that minimum requirement. Otherwise, the specified track list repeats only once.
- `auto-fit`

  - : Behaves the same as `auto-fill`, except that after placing the grid items any empty repeated tracks are collapsed. An empty track is one with no in-flow grid items placed into or spanning across it. (This can result in all tracks being collapsed, if they're all empty.)

    A collapsed track is treated as having a single fixed track sizing function of `0px`, and the gutters on either side of it collapse.

    For the purpose of finding the number of auto-repeated tracks, the user agent floors the track size to a user agent specified value (e.g., `1px`), to avoid division by zero.

- `max-content`
  - : Represents the largest max-content contribution of the grid items occupying the grid track.
- `min-content`
  - : Represents the largest min-content contribution of the grid items occupying the grid track.

## Formal syntax

{{CSSSyntaxRaw(`<track-repeat> <auto-repeat> <fixed-repeat> <name-repeat>`)}}

## Examples

### Specifying grid columns using repeat()

#### HTML

```html
<div id="container">
  <div>This item is 50 pixels wide.</div>
  <div>Item with flexible width.</div>
  <div>This item is 50 pixels wide.</div>
  <div>Item with flexible width.</div>
  <div>Inflexible item of 100 pixels width.</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: repeat(2, 50px 1fr) 100px;
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

{{EmbedLiveSample("Specifying_grid_columns_using_repeat", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("grid-template")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- [Line-based placement with CSS grid](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid template areas: grid definition shorthands](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
