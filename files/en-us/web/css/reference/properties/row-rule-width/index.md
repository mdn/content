---
title: "`row-rule-width` CSS property"
short-title: row-rule-width
slug: Web/CSS/Reference/Properties/row-rule-width
page-type: css-property
browser-compat: css.properties.row-rule-width
sidebar: cssref
---

The **`row-rule-width`** [CSS](/en-US/docs/Web/CSS) property defines the widths of the lines drawn between rows in multi-row grid, flex, and multi-col layouts.

{{InteractiveExample("CSS Demo: row-rule-width")}}

```css interactive-example-choice
row-rule-width: thin;
```

```css interactive-example-choice
row-rule-width: thin, thick;
```

```css interactive-example-choice
row-rule-width: repeat(2, thin, thick), 10px;
```

```css interactive-example-choice
row-rule-width: thick, repeat(auto, 1px, 2px), thick;
```

```css interactive-example-choice
row-rule-width: medium;
```

```html interactive-example
<section id="default-example">
  <ul id="example-element">
    <li>One fish</li>
    <li>Two fish</li>
    <li>Red fish</li>
    <li>Blue fish</li>
  </ul>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-flow: column;
  row-rule-style: solid;
  row-rule-color: magenta;
  gap: 5px;
  text-align: left;
}
```

## Syntax

```css
/* Keyword values */
row-rule-width: thin;
row-rule-width: medium;
row-rule-width: thick;
row-rule-width: thin, medium, thick;
row-rule-width: thick, repeat(5, thin), thick;
row-rule-width: thick, repeat(auto, thin, medium), thick;

/* Length values */
row-rule-width: 1px;
row-rule-width: 5px;
row-rule-width: 1px, 3px, 5px;
row-rule-width: 5px, repeat(auto, 1px), 10px, 15px;
row-rule-width: 5px, repeat(5, 1px, 3px), 5px;

/* Global values */
row-rule-width: inherit;
row-rule-width: initial;
row-rule-width: revert;
row-rule-width: revert-layer;
row-rule-width: unset;
```

### Values

The `row-rule-width` property accepts a comma-separated list of values, including:

- `<line-width>`
  - : A {{cssxref("&lt;line-width&gt;")}}: This can be one of the keywords `thin`, `medium`, or `thick`, or a positive {{cssxref("length")}} value, representing the width of the line. The default value is `medium`.

- `<repeat-line-width>`
  - : A {{cssxref("repeat()")}} function, with the first argument being an {{cssxref("&lt;integer&gt;")}} of `1` or more, and one or more {{cssxref("&lt;line-width&gt;")}} values as subsequent arguments. The integer defines the number of times the `<line-width>` values should be repeated.

- `<auto-repeat-line-width>`
  - : A {{cssxref("repeat()")}} function, with `auto` as the first argument and one or more `<line-width>` values as subsequent arguments. The provided `<line-width>` values are repeated as many times as needed to fill in values for any row-rules that are not explicitly specified by other components of the property value.

## Description

The `row-rule-width` property defines the widths of any row rule lines drawn in the gaps between rows in [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout), [flex](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers with more than one row.

The value is a comma-separated list of components, which can include `<line-width>`, `<repeated-line-width>`, and `<auto-repeat-line-width>` types.

The `row-rule-width`, along with the {{cssxref("row-rule-color")}} and {{cssxref("row-rule-style")}} properties, can be set using the {{cssxref("row-rule")}} shorthand. The `row-rule-width`, along with the {{cssxref("column-rule-width")}} property, can also be set using the {{cssxref("rule-width")}} shorthand.

If the property value consists of only one `<line-width>`, all the row rules will be that width. If we declare the following, all row rules will be `3px`:

```css
row-rule-width: `3px`;
```

When more than one `<line-width>` is declared, they will be applied to row-rules in the order specified. If there are more row-rules than `<line-width>` values, the list of line widths is repeated until every rule has a width. If we declare the following, for example, every odd rule will be `thin`, and every even rule will be `1em`.

```css
row-rule-width: thin, 1em;
```

### Repeated line widths

The `repeat()` function, with an integer of `1` or greater as the first argument, can be used to repeat a valid list of CSS {{cssxref("&lt;line-width&gt;")}} values passed as subsequent arguments the specified number of times. This allows the same widths to be repeated a set number of times without repeating the same values multiple times. The following declarations are equivalent:

```css
row-rule-width: 1rem, thick, thin, thick, thin;
row-rule-width: 1rem, repeat(2, thick, thin);
```

You can use any `<line-width>` values, including custom properties that resolve to a `<line-width>`. Using `repeat()` can make values easier to write, especially when using complex length calculations. It enables a recurring pattern to be written using a single function, regardless of the number of rows.

If we set `--base: 1vh` and `--secondary: 1vw`, the following will provide similar results to the previous declaration:

```css
row-rule-width:
  1rem,
  repeat(
    2,
    min(calc(var(--base) - 3px), 10px),
    abs(calc(var(--secondary) - 30px))
  ),
  thin;
```

This creates a list of six widths. If the number of widths in the `row-rule-width` value's width list exceeds the number of gaps between rows, the excess width values are ignored. If the container has three rows, the rule in the first gutter will be `1rem` wide, and the second is determined by the {{cssxref("min()")}} function.

If there are more gutters than widths, the list of widths is repeated. If the container has 7, 13, 19, or 25 rows, this sequence of widths will be repeated one, two, three, or four times, respectively, with the last rule being `thin`.

### Auto-repeating line widths

The `repeat()` function also accepts `auto` as the first argument instead of a positive integer. With `auto` as the first argument, the list of `<line-width>` values passed as subsequent arguments will be repeated as many times as needed to fill in values for any row-rules that are not explicitly specified by other components of the property value.

```css
row-rule-width: thin, repeat(auto, medium), thin;
```

In this case, it doesn't matter if the container has 3, 6, 11, 16, or 21 rows; the first and last rows will always be `thin`, and all other row rules will be `medium`. If there are only 2 or 3 rows, there will be no medium-sized row rules.

The `auto` keyword within the `repeat()` function creates an auto repeater that fills in values for row rules that would not otherwise receive values from other parts of the list, preventing the list from being cycled. At most, only one `repeat(auto, <width>)` can be present in a `row-rule-width` value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

In this example, we define a single width for the lines drawn between flex items.

#### HTML

We include a list of dynamic sports duos:

```html live-sample___basic live-sample___repeat live-sample___func live-sample___auto
<ul>
  <li>Simone Biles + Jonathan Owens</li>
  <li>Serena Williams + Venus Williams</li>
  <li>Aaron Judge + Giancarlo Stanton</li>
  <li>LeBron James + Dwyane Wade</li>
  <li>Xavi Hernandez + Andres Iniesta</li>
  <li>Kerri Walsh + Misty May Treanor</li>
</ul>
```

#### CSS

We define the list to be a flex container, creating rows by setting the {{cssxref("flex-direction")}} to `column` using the {{cssxref("flex-flow")}} shorthand. We include a {{cssxref("gap")}} of `5px` to provide enough room between the rows to fit our `3px` dashed red rule:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: column;
  gap: 5px;
  row-rule-style: dashed;
  row-rule-color: red;
  row-rule-width: 3px;
}
```

#### Result

{{EmbedLiveSample("Basic", "", "180")}}

### Repeating values

This example demonstrates how, when there are fewer values in the list of widths than row rules, the values are repeated.

Using the same HTML and CSS as in the previous example, we include three comma-separated widths as the `row-rule-width` value:

```css live-sample___repeat
ul {
  row-rule-width: 1px, 3px, 5px;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Using the `repeat()` function

This example demonstrates using the `repeat()` function within the `row-rule-width` property value and how this function can help reduce the verbosity of value declarations.

We use the same HTML and CSS as in the previous examples. To demonstrate how values can become verbose and the utility of the `repeat()` function, we declare two custom properties, which we use in `repeat()` function declarations. The `repeat()` function sets a list of two `<line-width>` values to repeat 3 times.

```css live-sample___func live-sample___auto
ul {
  --base: 0.5vw;
  --secondary: 1vw;
  row-rule-width:
    15px,
    repeat(
      3,
      min(calc(var(--base) + 3px), 10px),
      abs(calc(var(--secondary) - 2px))
    ),
    15px;
}
```

{{EmbedLiveSample("func", "", "180")}}

The flex container has six rows, so five gutters. The `repeat()` function repeats two width values three times, creating a list of eight width values. As there are fewer row gutters than total widths, the last three values in the list are discarded.

### Using `auto` within `repeat()`

This example demonstrates using `auto` instead of an integer within the `repeat()` function.

Using `repeat(auto, <line-width>)` we set all row rules to `1px`, except the first and last, which we set to `5px`.

```css live-sample___auto
ul {
  row-rule-width: 5px, repeat(auto, 1px), 5px;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule-width: thin, thick) {
    body::before {
      content: "Your browser doesn't support the row-rule-width property";
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

- {{cssxref("row-rule-color")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule")}} shorthand
- {{cssxref("rule-width")}} shorthand
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
