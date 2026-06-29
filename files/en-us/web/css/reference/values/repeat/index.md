---
title: "`repeat()` CSS function"
short-title: repeat()
slug: Web/CSS/Reference/Values/repeat
page-type: css-function
browser-compat: css.properties.grid-template-columns.repeat
sidebar: cssref
---

The **`repeat()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) represents a repeated fragment of the [track list](/en-US/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) or [rule-line list], allowing a large number of columns and rows, and their gap decorations, that exhibit a recurring pattern to be written in a more compact form.

{{InteractiveExample("CSS Demo: repeat()")}}

```css interactive-example-choice
grid-template-columns: repeat(2, 60px);
rule-color: repeat(2, green), yellow;
```

```css interactive-example-choice
grid-template-columns: 1fr repeat(2, 60px);
rule-color: repeat(2, green), repeat(2, yellow);
```

```css interactive-example-choice
grid-template-columns: repeat(2, 20px 1fr);
rule-color: repeat(auto, green), yellow;
```

```css interactive-example-choice
grid-template-columns: repeat(auto-fill, 40px);
rule-color: yellow, repeat(auto, green);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-auto-rows: 40px;
  grid-gap: 10px;
  width: 220px;
  rule: solid 4px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

This function can be used the following features:

CSS grid properties:

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}

CSS gap properties:

- {{cssxref("column-rule-color")}}
- {{cssxref("row-rule-color")}}
- {{cssxref("rule-color")}} shorthand
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("rule-style")}} shorthand
- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule-width")}}
- {{cssxref("rule-width ")}} shorthand
- {{cssxref("column-rule")}} shorthand
- {{cssxref("row-rule")}} shorthand
- {{cssxref("rule")}} shorthand

## Syntax

```css
/* <repeat-line> */
repeat(4, dashed)
repeat(2, solid, dotted, inset)
repeat(3, medium)
repeat(4, red)
repeat(3, green medium outset)

/* <auto-repeat-line> */
repeat(auto, dotted)
repeat(auto, 10px)
repeat(auto, currentcolor)
repeat(auto, red, blue, green)
repeat(auto, var(--lineColor) var(--lineSize) solid)

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

### Values

The `repeat()` function takes two arguments: The first argument specifies **repeat count**m, and the second specifies either the tracks or rule feature to be repeated.

#### Repeat count values

- {{cssxref("integer")}}
  - : An positive integer greater than or equal to `1` specifying the number of times the second parameter feature list will be repeated.

- `auto-fill`
  - : Valid with grid properties only, specifies an auto repeater that repeats to fill a space. Resolves to the largest number of repetitions that does not cause overflow of a constrained (has a maximum size) content box. Otherwise, if the content box has a minimum size, the fewest number of repetitions that meets the minimum size. If there is neither a minimum or maximum size, resolves to `1`. When used with subgrid, the second parameter must be a list of line names.

- `auto-fit`
  - : Behaves as `auto-fill`, except that after placing grid items, any empty repeated tracks are collapsed.

- `auto`
  - : Valid with gap properties only, specifies an auto repeater used to fill in values for gaps that would not otherwise receive values from other parts of the list.

#### Tracks and rule features

- `<fixed-size>`
  - : One of the following forms:
    - a {{cssxref("&lt;length-percentage&gt;")}} value
    - a {{cssxref("minmax()")}} function with:
      - `min` given as a {{cssxref("&lt;length-percentage&gt;")}} value
      - `max` given as one of a {{cssxref("&lt;length-percentage&gt;")}} value, a {{cssxref("&lt;flex&gt;")}} value, or one of the following keywords: [`min-content`](#min-content), [`max-content`](#max-content), or [`auto`](#auto)
    - a {{cssxref("minmax()")}} function with:
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
    - a {{cssxref("minmax()")}} function with:
      - `min` given as a {{cssxref("&lt;length-percentage&gt;")}} value, or one of the following keywords: [`min-content`](#min-content), [`max-content`](#max-content), or [`auto`](#auto)
      - `max` given as a {{cssxref("&lt;length-percentage&gt;")}} value, a {{cssxref("&lt;flex&gt;")}} value, or one of the following keywords: [`min-content`](#min-content), [`max-content`](#max-content), or [`auto`](#auto)
    - a {{cssxref("fit-content()")}} function, passed a {{cssxref("&lt;length-percentage&gt;")}} value.
- `auto`
  - : As a maximum, identical to `max-content`. As a minimum it represents the largest minimum size (as specified by {{cssxref("min-width")}}/{{cssxref("min-height")}}) of the grid items occupying the grid track.
- `auto-fill`
  - : If the grid container has a definite or maximal size in the relevant axis, then the number of repetitions is the largest possible positive integer that does not cause the grid to overflow its grid container. Treating each track as its maximal track sizing function (each independent value used to define `grid-template-rows` or `grid-template-columns`), if that is definite. Otherwise, as its minimum track sizing function, and taking grid-gap into account. If any number of repetitions would overflow, then the repetition is `1`. Otherwise, if the grid container has a definite minimal size in the relevant axis, the number of repetitions is the smallest possible positive integer that fulfills that minimum requirement. Otherwise, the specified track list repeats only once.
- `auto-fit`
  - : Behaves the same as `auto-fill`, except that after placing the grid items any empty repeated tracks are collapsed. An empty track is one with no in-flow grid items placed into or spanning across it. (This can result in all tracks being collapsed, if they're all empty.)

    A collapsed track is treated as having a single fixed track sizing function of `0px`, and the gutters on either side of it collapse.

    For the purpose of finding the number of auto-repeated tracks, the user agent floors the track size to a user agent specified value (e.g., `1px`), to avoid division by zero.

- {{cssxref("max-content")}}
  - : Represents the largest max-content contribution of the grid items occupying the grid track.
- {{cssxref("min-content")}}
  - : Represents the largest min-content contribution of the grid items occupying the grid track.

## Description

The `repeat()` function represents a repeated fragment within a track or rule-line list, allowing a recurring pattern to be written in a more compact form. The function is valid within CSS grid and gap properties that accept a list of values. The pattern can be repeated a specified number of times or can be auto-repeated.

The first argument specifies **repeat count**: the number of times that the track list or rule feature value should be repeated. It is specified with an integer value of `1` or more, with the keyword values [`auto-fill`](#auto-fill) or [`auto-fit`](#auto-fit) for track lists, or the `auto` for rule-line features. These keyword values either repeat the set of tracks as many times as is needed to fill the grid container or repeat the line feature (width, color, or line-style) as many times as needed to style all the column or row rules.

The second argument specifies either the tracks or rule feature(s) to be repeated.

- **tracks**:
  - : Specifies the set of tracks that will be repeated. Fundamentally this consists of one or more values, where each value represents the size of that track. Each size is specified using either a [`<track-size>`](#track-size) value or a [`<fixed-size>`](#fixed-size) value. You can also specify one or more [line names](/en-US/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) before or after each track, by providing [`<line-names>`](#line-names) values before and/or after the track size.
- **rule feature**:
  - : Specifies the rule feature that will be repeated. This is either a comma separated list of {cssxref("&lt;color>")}}, [`<line-width>`](/en-US/docs/Web/CSS/Reference/Properties/border-width#line-width), or {{cssxref("line-style")}} values, or a comma-separated list of gap rules.

- `<track-repeat>`, which uses:
  - an integer to set the repeat count
  - [`<track-size>`](#track-size) values to set track sizes.
- `<auto-repeat>`, which uses
  - [`auto-fill`](#auto-fill) or [`auto-fit`](#auto-fit) to set the repeat count
  - [`<fixed-size>`](#fixed-size) to set track sizes.
- `<fixed-repeat>`, which uses:
  - an integer to set the repeat count
  - [`<fixed-size>`](#fixed-size) values to set track sizes.
- `<name-repeat>`, which uses: ([`subgrid`](/en-US/docs/Web/CSS/Guides/Grid_layout/Subgrid) only)
  - an integer or [`auto-fill`](#auto-fill) to set the repeat count
  - line names (not track sizes).
- `<repeat-rule>`, which uses:
  - an integer to set the repeat count
  - [`<track-size>`](#track-size) values to set track sizes.
- `<auto-repeat-rule>`, which uses:

Then if a property declaration uses `<auto-repeat>`, it is only allowed to use `<fixed-repeat>` for any additional `repeat()` calls. For example, this is invalid, because it combines the `<auto-repeat>` form with the `<track-repeat>` form:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

There is a fourth form, `<name-repeat>`, which is used to add line names to subgrids. It only used with the [`subgrid`](/en-US/docs/Web/CSS/Guides/Grid_layout/Subgrid) keyword and only specifies line names, not track sizes.

## Formal syntax

{{CSSSyntaxRaw(`<repeat-line> <track-repeat> <auto-repeat> <fixed-repeat> <name-repeat> <auto-repeat-line>`)}}

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
- [Line-based placement with CSS grid](/en-US/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Grid template areas: grid definition shorthands](/en-US/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#grid_definition_shorthands)
