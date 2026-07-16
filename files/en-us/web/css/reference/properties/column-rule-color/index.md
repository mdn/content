---
title: "`column-rule-color` CSS property"
short-title: column-rule-color
slug: Web/CSS/Reference/Properties/column-rule-color
page-type: css-property
browser-compat: css.properties.column-rule-color
sidebar: cssref
---

The **`column-rule-color`** [CSS](/en-US/docs/Web/CSS) property defines the colors of the lines drawn between columns in multi-column grid, flex, and multi-col layouts.

{{InteractiveExample("CSS Demo: column-rule-color")}}

```css interactive-example-choice
column-rule-color: purple;
```

```css interactive-example-choice
column-rule-color: rgb(48 125 222), rgb(222 48 125);
```

```css interactive-example-choice
column-rule-color: rgb(48 125 222), repeat(3, rgb(222 48 125));
```

```css interactive-example-choice
column-rule-color: purple, repeat(auto, orange, yellow);
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 7;
  column-rule: solid thick;
  gap: 7px;
}
```

## Syntax

```css
/* Single <color> value */
column-rule-color: purple;
column-rule-color: rgb(192 56 78);
column-rule-color: transparent;
column-rule-color: hsl(0 100% 50% / 60%);

/* Multiple values */
column-rule-color: purple, magenta;
column-rule-color: repeat(3, purple), repeat(3, transparent);
column-rule-color: repeat(3, purple), repeat(3, yellow, blue);
column-rule-color: purple, repeat(auto, transparent), purple;
column-rule-color: purple, repeat(auto, blue, yellow), purple;
column-rule-color:
  repeat(3, purple), repeat(auto, transparent), repeat(3, purple);

/* Global values */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: revert;
column-rule-color: revert-layer;
column-rule-color: unset;
```

### Values

The `column-rule-color` property accepts a comma-separated list of values, including:

- `<line-color>`
  - : A {{cssxref("&lt;color&gt;")}} representing the color of the line.

- `<repeat-line-color>`
  - : A {{cssxref("repeat()")}} function, with an {{cssxref("&lt;integer&gt;")}} of `1` or more as the first argument and one or more `<color>` values as subsequent arguments. The `<integer>` specifies how many times the `<color>` values should be repeated.

- `<auto-repeat-line-color>`
  - : A {{cssxref("repeat()")}} function, with `auto` as the first argument and one or more `<color>` values as subsequent arguments. The provided `<color>` values are repeated as many times as needed to fill in values for any column-rules that are not explicitly specified by other components of the property value.

## Description

The `column-rule-color` property defines the colors of any lines drawn in the gaps between columns in [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout), [flex](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers with more than one column.

The value is a comma-separated list of components, which can include `<line-color>`, `<repeated-line-color>`, and `<auto-repeat-line-color>` types.

The `column-rule-color`, along with the {{cssxref("column-rule-width")}} and {{cssxref("column-rule-style")}} properties, can be set using the {{cssxref("column-rule")}} shorthand. The `column-rule-color`, along with the {{cssxref("row-rule-color")}} property, can also be set using the {{cssxref("rule-color")}} shorthand.

A `<line-color>` can be declared as any valid CSS {{cssxref("&lt;color&gt;")}} value. If the property value consists of only one `<color>`, all the rule lines will be that color. If we declare the following, the lines in the gutters between columns will all be blue:

```css
column-rule-color: blue;
```

When more than one `<line-color>` is declared, they will be applied to lines painted in the column gutters in the order specified. If there are more rules than `<line-color>` values, the list of colors is repeated until every column-rule has a color. If we declare the following, for example, every odd rule will be red, and every even rule will be yellow.

```css
column-rule-color: red, yellow;
```

### Repeated line colors

The `repeat()` function, with an integer of `1` or greater as the first argument, can be used to repeat a valid list of CSS {{cssxref("&lt;color&gt;")}} values passed as subsequent arguments the specified number of times. This allows the same color to be repeated a set number of times without repeating the same `<line-color>` multiple times. The following declarations are equivalent:

```css
column-rule-color: blue, yellow, red, yellow, red;
column-rule-color: blue, repeat(2, yellow, red);
```

This creates a list of five colors. If the number of colors in the `column-rule-color` value's color list exceeds the number of gaps between columns, the excess color values are ignored. If the container has three columns, the rule in the first gutter will be blue and the second yellow.

### Auto-repeating line colors

The `repeat()` function also accepts `auto` as the first argument instead of a positive integer. With `auto` as the first argument, the `<color>` values passed in subsequent arguments will be repeated as many times as needed to fill in values for any column-rules that are not explicitly specified by other components of the property value, if any.

```css
column-rule-color: blue, repeat(auto, yellow), red;
```

In this case, the first column-rule will be blue, the last will be red, and all others will be yellow. It doesn't matter if the container has; the first will always be blue and, as long as there are at least two column-rules, the last will always be red. All the other rules will be yellow, which means if there are only 2 or 3 columns, there will be no yellow lines.

The `auto` keyword within the `repeat()` function creates an auto-repeater that fills in values for the column-rule line colors that would not otherwise receive values from other parts of the list, preventing the list from being cycled. A `column-rule-color` value can include, at most, one `repeat(auto, <color>)`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

In this example, we define a single color for the lines drawn between columns in a multi-column layout.

#### HTML

We include a paragraph of text.

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-color`
  property is used to change the color of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

We define the {{htmlelement("p")}} element as a multi-column container. We include a {{cssxref("gap")}} of `7px` to provide padding for the `3px` dashed rule drawn between the columns:

```css
p {
  column-count: 5;
  gap: 7px;
  column-rule-style: dashed;
  column-rule-width: 3px;

  column-rule-color: blue;
}
```

#### Result

{{EmbedLiveSample("Basic_example")}}

### Multiple color values

This example demonstrates declaring more than one color, and how the values are repeated when there are fewer values in the list of colors than gutters between columns.

Using the same HTML and CSS as in the previous example, we include three comma-separated colors as the `column-rule-color` value:

```html hidden
<p>
  This is a bunch of text split into three columns. The `column-rule-color`
  property is used to change the color of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

```css hidden
p {
  column-count: 5;
  gap: 7px;
  column-rule-style: dashed;
  column-rule-width: 3px;
}

@layer no-support {
  @supports not (column-rule-color: red, blue) {
    body::before {
      content: "Your browser doesn't support multiple values for the column-rule-color property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```css
p {
  column-rule-color: blue, yellow, red;
}
```

#### Result

{{EmbedLiveSample("Multiple color values", "", "180")}}

There are four gutters but only three colors, so the list gets repeated, with the first and fourth lines both being blue.

### Using the `repeat()` function

This example demonstrates using the `repeat()` function within the `column-rule-color` property value and how this function can help prevent complex values from becoming unwieldy.

#### HTML

We include a list of authors:

```html live-sample___repeat live-sample___auto
<ul>
  <li>Kimberlé Crenshaw</li>
  <li>Angela Y. Davis</li>
  <li>Bernardine Evaristo</li>
  <li>Audre Lorde</li>
  <li>Cathy Park Hong</li>
  <li>Zoya Patel</li>
  <li>Juno Mac</li>
  <li>Molly Smith</li>
  <li>Tara Westover</li>
</ul>
```

#### CSS

We start by defining the list as a grid container, creating columns with the {{cssxref("grid-template-columns")}} property. We include a {{cssxref("gap")}} of `7px` to provide enough room between the columns to fit our `3px` dashed rule, and remove the bullets with {{cssxref("list-style-type")}} set to `none`.

Then, to demonstrate how values can become complicated and the utility of the `repeat()` function, we declare two custom properties, which we use in three {{cssxref("color-mix()")}} color function declarations to create blue, red, and yellow colors. The yellow `color-mix()` color is within a `repeat()` function, set to repeat 3 times.

We also added a border around each grid item so you can see how the line is rule in the middle of the gutter between the columns.

```css live-sample___repeat live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 7px;
  list-style-type: none;
  column-rule-style: dashed;
  column-rule-width: 3px;

  --base: yellow;
  --mixin: blue;
  column-rule-color:
    color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
    repeat(3, color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin))),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin));
}
li {
  border: 1px solid #ddd;
}
```

#### Result

{{EmbedLiveSample("repeat", "", "180")}}

The grid has nine cells across, so eight gutters. The `repeat()` function repeats our two mixed color three times, creating a color list with seven colors. Since there are as more column gutters than list colors, the last color in the list is not used.

### Using `auto` within `repeat()`o m

This example demonstrates using `auto`, instead of an integer, within the `repeat()` function.

We use the same HTML and CSS as in the previous examples, but override the `column-rule-color` value. Here, we use `repeat(auto, <color>)` to set all the lines to be almost transparent black (`#0003`), except the first and last, which we set to a solid `black`.

```css live-sample___auto
ul {
  column-rule-color: black, repeat(auto, #0003), black;
}
```

#### Result

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___repeat live-sample___auto
@layer no-support {
  @supports not (column-rule-color: repeat(3, red)) {
    body::before {
      content: "Your browser doesn't support `repeat()` functions within a column-rule-color property value";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{cssxref("&lt;color&gt;")}} data type
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule-color")}}
- {{cssxref("column-rule")}} shorthand
- {{cssxref("rule-color")}} shorthand
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
