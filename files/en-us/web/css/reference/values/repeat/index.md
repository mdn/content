---
title: "`repeat()` CSS function"
short-title: repeat()
slug: Web/CSS/Reference/Values/repeat
page-type: css-function
browser-compat:
  - css.properties.grid-template-columns.repeat
  - css.properties.row-rule.repeat
sidebar: cssref
---

The **`repeat()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) represents a repeated fragment of the [track list](/en-US/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) or [rule-line list](/en-US/docs/Web/CSS/Guides/Gaps). It allows repeated patterns of columns, rows, and their gap decorations, to be written in a compact form.

{{InteractiveExample("CSS Demo: repeat()")}}

```css interactive-example-choice
grid-template-columns: repeat(2, 60px);
rule-color: repeat(2, green, orange), yellow;
```

```css interactive-example-choice
grid-template-columns: 1fr repeat(2, 60px);
rule-color: repeat(2, green), repeat(2, yellow);
```

```css interactive-example-choice
grid-template-columns: repeat(2, 20px 1fr);
rule-color: repeat(auto, green), repeat(2, yellow);
```

```css interactive-example-choice
grid-template-columns: repeat(auto-fill, 40px);
rule-color: repeat(2, orange, yellow), repeat(auto, green);
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

This function can be used with the following features:

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
- {{cssxref("rule-width")}} shorthand
- {{cssxref("column-rule")}} shorthand
- {{cssxref("row-rule")}} shorthand
- {{cssxref("rule")}} shorthand

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

/* <name-repeat> values */
repeat(5, [footer])
repeat(auto-fill, [header])
repeat(2, [header footer])

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
```

### Values

The `repeat()` function takes two arguments: The first argument specifies [**repeat count**](#repeat-count-values), and the second specifies the [**repeated values list**](#repeated-values-list) (the list of values to be repeated).

#### Repeat count values

- {{cssxref("integer")}}
  - : A positive integer greater than or equal to `1` specifying the number of times the feature list in the second parameter will be repeated.

- `auto-fill`
  - : Specifies an auto repeater that repeats to fill a space. Resolves to the largest number of repetitions that does not cause overflow of a constrained (has a maximum size) content box. Otherwise, if the content box has a minimum size, the fewest number of repetitions that meets the minimum size. If there is neither a minimum or maximum size, resolves to `1`. When used with subgrid, the second parameter must be a list of line names.

- `auto-fit`
  - : Behaves as `auto-fill`, except that after placing grid items, any empty repeated tracks are collapsed.

- `auto`
  - : Specifies an auto repeater. Once the values from other components of the property value have been applied, the values from the second parameter are repeated as many times as needed, filling any missing values.

#### Repeated values list

A list from one of the following track list types. Whether the components of the list are comma- or space-separated, depends on which separator is expected for that property value list type.

- `<line-names>`
  - : To add line names to subgrids, each `<line-names>` is zero or more {{cssxref("&lt;custom-ident&gt;")}} values, space-separated and enclosed in square brackets, such as `[start header-start]`.

- `<track-size>`
  - : Each `<track-size>` is a positive {{cssxref("&lt;length-percentage&gt;")}}, a {{cssxref("minmax()")}} function with the first parameter being the keyword `min-content`, `max-content`, or `auto`, or a positive `<length-percentage>`, or a {{cssxref("fit-content()")}} function.

- `<fixed-size>`
  - : Each `<fixed-size>` is either a positive `<length-percentage>`, or a `minmax()` function whose first parameter is a positive `<length-percentage>` and whose second parameter is a non-negative dimension with the unit `fr` specifying the track's flex factor or the keyword `min-content`, `max-content`, or `auto`, or a `minmax()` function whose first parameter is a positive `<length-percentage>` or the keyword `min-content`, `max-content`, or `auto`, and whose second parameter is a positive `<length-percentage>`.

- `<value>`
  - : For defining gap rules, each `<value>` is a value that would be accepted by the property in which the `repeat()` appears, such as a {{cssxref("line-style")}}, {{cssxref("line-width")}}, {{cssxref("&lt;color&gt;")}}, or all three as a `<gap-rule>`.

## Description

The `repeat()` function represents a repeated fragment within a comma- or space-separated values list, that allows a recurring pattern to be written in a more compact form that can be repeated a specified number of times or can be auto-repeated.

The generic form of the `repeat()` syntax is, approximately,

```css
repeat( <repeat-count>, <values-list> )
```

The first argument, the **repeat count**, specifies the number of repetitions. It defines the number of times the list of values defined in the second parameter should be repeated. It is specified either as an integer value of `1` or more or as the keyword `auto-fill`, `auto-fit`, or `auto`.

The second argument is a comma- or space-separated list of values that are valid for the property in which the `repeat()` appears. It specifies the **repeated value type**, which is generally the _tracks_ or _rule feature(s)_ to be repeated.

- **tracks**:
  - : Specifies the set of tracks that will be repeated. Fundamentally this consists of one or more space-separated values, where each value represents the size of that track. Each size is specified using either a [`<track-size>`](#track-size) value or a [`<fixed-size>`](#fixed-size) value. You can also specify one or more [line names](/en-US/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) before or after each track, by providing [`<line-names>`](#line-names) values before and/or after the track size.
- **rule feature**:
  - : Specifies the rule feature that will be repeated. This is either a comma separated list of {{cssxref("&lt;color>")}}, {{cssxref("line-width")}}, or {{cssxref("line-style")}} values, or a comma-separated list of shorthand declarations setting the line's color, width, and style.

### Syntax forms

The syntax of the `repeat()` function has several forms:

- `<track-repeat>` = `repeat( <integer>, [ <line-names>? <track-size> ]+ <line-names>? )`
  - : The `<integer>` sets the repeat count.
  - : The `<track-size>` values set the track size. A `<track-size>` is either a {{cssxref("&lt;length-percentage&gt;")}}, a {{cssxref("&lt;flex&gt;")}} value (a positive `fr` unit value), or the keyword `min-content`, `max-content`, or `auto`, a {{cssxref("fit-content()")}} function with a `<length-percentage>` parameter, or a {{cssxref("minmax()")}} function. For `minmax()` track values, the `min` is either a `<length-percentage>`, or the `min-content`, `max-content`, or `auto` keyword while the `max` can be any of those, or a `<flex>` value.
  - : Each `<track-size>` is optionally preceded by `<line-names>`, which are zero or more space-separated {{cssxref("&lt;custom-ident&gt;")}} values enclosed in square brackets.
  - : An ending `<line-names>` is optional.

- `<auto-repeat>` = `repeat( auto-fill | auto-fit, [ <line-names>? <fixed-size> ]+ <line-names>? )`
  - : The `auto-fill` or `auto-fit` keyword sets the repeat count
  - : The `<fixed-size>` sets the track size. A `<fixed-size>` is either a `<length-percentage>` value, or a `minmax()` function with either the `min` or the `max` being a `<length-percentage>` and the other value also being a `<length-percentage>`, or set to the keyword `min-content`, `max-content`, or `auto`.
  - : Each `<fixed-size>` is optionally preceded by `<line-names>`.
  - : The ending `<line-names>` is optional.

- `<fixed-repeat>` = `repeat( <integer>, [ <line-names>? <fixed-size> ]+ <line-names>? )`
  - : Same as `<auto-repeat>`, except the `<integer>` sets the repeat count, so there is no auto-repeating.

- `<name-repeat>` = `repeat( [ <integer> | auto-fill ], <line-names>+)`
  - : The integer or `auto-fill` keyword sets the repeat count
  - : The `<line-names>` are one or more space-separated {{cssxref("&lt;custom-ident&gt;")}} values enclosed in square brackets.
  - : These line names (rather than track sizes) are relevant for [`subgrid`](/en-US/docs/Web/CSS/Guides/Grid_layout/Subgrid).

- `<repeat-value-type>` = `repeat( <integer> , <value># )`
  - : The `<integer>` sets the repeat count.
  - : The `<value>` is one or more comma-separated valid values for the property on which the `repeat()` function is applied.
  - : Multiple `repeat()` functions of the `<repeat-value-type>` may be used within a single value declaration.

- `<auto-repeat-value-type>` = `repeat( auto , <value># )`
  - : The `auto` keyword specifies an auto repeater. An auto repeater will be used to fill in values for gaps that would not otherwise receive values from other parts of the list.
  - : The `<value>` is one or more comma-separated valid values for the property on which the `repeat()` function is applied.
  - : At most one `repeat()` in a given list of values may be an auto repeater.

### Auto-fit versus auto-fill

When the first parameter of the `repeat()` function is a keyword, either `auto-fill`, `auto-fit`, or `auto`, rather than an integer, it creates an auto-repeater. An auto-repeating `repeat()` function repeats the values provided as the second parameter as many times as necessary.

With `auto-fill`, if the container has a definite or maximum size set in the relevant axis, the number of repetitions is the largest possible positive integer that does not cause the content to overflow its container. Treating each track as its maximal track sizing function (each independent value used to define `grid-template-rows` or `grid-template-columns`), if that is definite. Otherwise, if there is no definite or maximum size defined, the `repeat()` function is a minimum track sizing function. If any number of repetitions would overflow, the repetition is `1`. Otherwise, if the grid container has a definite minimal size in the relevant axis, the number of repetitions is the smallest possible positive integer that fulfills that minimum requirement. Otherwise, the specified track list repeats only once.

The `auto-fit` value behaves the same as `auto-fill`, except that after placing the grid items any empty repeated tracks are collapsed. An empty track is one with no in-flow grid items placed into or spanning across it. (This can result in all tracks being collapsed, if they're all empty.)

A collapsed track is treated as having a single fixed track sizing function of `0px`, and the gutters on either side of it collapse.

For the purpose of finding the number of auto-repeated tracks, the user agent floors the track size to a user agent specified value (e.g., `1px`), to avoid dividing by zero.

### Use exceptions and rules

There are some rules and restrictions when using `repeat()`:

A property value can contain multiple `repeat()` functions.

```css example-good
.wrapper {
  grid-template-columns:
    repeat(2, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

A property value can contain, at most, one auto-repeat `repeat()` function.

```css example-bad
.wrapper {
  row-rule:
    repeat(auto, yellow 3px solid, red 1px dashed),
    repeat(auto, green 5px dotted);
}
```

If a property declaration uses `<auto-repeat>`, it is only allowed to use `<fixed-repeat>` for any additional `repeat()` calls. Automatic repetitions (`auto-fill` or `auto-fit`) cannot be combined with fully intrinsic or flexible sizes. For example, this is invalid, because it combines the `<auto-repeat>` form with the `<track-repeat>` form:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

The `repeat()` notation cannot be nested within another `repeat()` function.

```css example-bad
.wrapper {
  grid-template-columns: repeat(
    2,
    minmax(min-content, max-content),
    repeat(3, 10px)
  );
  column-rule: repeat(
    auto,
    yellow 3px solid,
    repeat(5, green 5px dotted),
    red 1px dashed
  );
}
```

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
- [CSS grid layout](/en-US/docs/Web/CSS/Guides/Grid_layout) module
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
