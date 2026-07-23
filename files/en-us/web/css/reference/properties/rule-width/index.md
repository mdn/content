---
title: "`rule-width` CSS property"
short-title: rule-width
slug: Web/CSS/Reference/Properties/rule-width
page-type: css-property
browser-compat: css.properties.rule-width
sidebar: cssref
---

The **`rule-width`** [CSS](/en-US/docs/Web/CSS) property defines the widths of any lines drawn in the gutters of multi-row grid, flex, and multi-col layouts, setting the widths of the column and row rules to the same value.

{{InteractiveExample("CSS Demo: rule-width")}}

```css interactive-example-choice
rule-width: thin;
```

```css interactive-example-choice
rule-width: thin, thick;
```

```css interactive-example-choice
rule-width: 1px, 10px;
```

```css interactive-example-choice
rule-width: repeat(2, thin, thick), 10px;
```

```css interactive-example-choice
rule-width: thick, repeat(auto, 1px, 2px), thick;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <i>A</i>
    <i>B</i>
    <i>C</i>
    <i>D</i>
    <i>E</i>
    <i>F</i>
    <i>G</i>
    <i>H</i>
    <i>I</i>
    <i>J</i>
    <i>K</i>
    <i>L</i>
    <i>M</i>
    <i>N</i>
    <i>O</i>
    <i>P</i>
    <i>Q</i>
    <i>R</i>
    <i>S</i>
    <i>T</i>
    <i>U</i>
    <i>V</i>
    <i>W</i>
    <i>X</i>
    <i>Y</i>
    <i>Z</i>
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  rule: solid magenta;
}
#example-element i {
  padding: 5px;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule-width")}}

## Syntax

```css
/* Keyword values */
rule-width: thin;
rule-width: medium;
rule-width: thick;
rule-width: thin, medium, thick;
rule-width: thick, repeat(5, thin), thick;
rule-width: thick, repeat(auto, thin, medium), thick;

/* Length values */
rule-width: 1px;
rule-width: 5px;
rule-width: 1px, 3px, 5px;
rule-width: 5px, repeat(auto, 1px), 10px, 15px;
rule-width: 5px, repeat(5, 1px, 3px), 5px;

/* Global values */
rule-width: inherit;
rule-width: initial;
rule-width: revert;
rule-width: revert-layer;
rule-width: unset;
```

### Values

The `rule-width` property accepts a comma-separated list of values, including:

- `<line-width>`
  - : A {{cssxref("&lt;line-width&gt;")}}: This can be one of the keywords `thin`, `medium`, or `thick`, or a positive {{cssxref("length")}} value, representing the width of the line. The default value is `medium`.

- `<repeat-line-width>`
  - : A {{cssxref("repeat()")}} function, with the first argument being an {{cssxref("&lt;integer&gt;")}} of `1` or more, and one or more {{cssxref("&lt;line-width&gt;")}} values as subsequent arguments. The integer defines the number of times the `<line-width>` values should be repeated.

- `<auto-repeat-line-width>`
  - : A {{cssxref("repeat()")}} function, with `auto` as the first argument and one or more `<line-width>` values as subsequent arguments. The provided `<line-width>` values are repeated as many times as needed to fill in values for any rules that are not explicitly specified by other components of the property value.

## Description

The `rule-width` shorthand property defines the widths of rule lines drawn in the gaps between columns and rows in [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout), [flex](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers with more than one row or column.

The value is a comma-separated list of components, which can include `<line-width>`, `<repeat-line-width>`, and `<auto-repeat-line-width>` types.

The `rule-width`, along with the {{cssxref("rule-color")}} and {{cssxref("rule-style")}} properties, can be set using the {{cssxref("rule")}} shorthand.

If the property value consists of only one `<line-width>`, all the row and column rules will be that width. If we declare the following, all rules will be `3px`:

```css
rule-width: 3px;
```

When more than one `<line-width>` is declared, they will be applied to rules in the order specified. If there are more rules than `<line-width>` values, the list of line widths is repeated until every rule has a width. If we declare the following, for example, every odd horizontal and vertical rule will be `thin`, and every even rule will be `1em`.

```css
rule-width: thin, 1em;
```

If there are more gutters than widths in either direction, the list of widths is repeated.

### Repeated line widths

The `repeat()` function, with an integer of `1` or greater as the first argument, can be used to repeat a valid list of CSS {{cssxref("&lt;line-width&gt;")}} values passed as subsequent arguments the specified number of times. This allows the same widths to be repeated a set number of times without repeating the values. The following declarations are equivalent:

```css
rule-width: 1rem, thick, thin, thick, thin, thick, thin;
rule-width: 1rem, repeat(3, thick, thin);
```

You can use any `<line-width>` values, including custom properties that resolve to a `<line-width>`. Using `repeat()` can make values easier to write, especially when using complex length calculations. It enables a recurring pattern to be written using a single function, regardless of the number of columns or rows.

### Auto-repeating line widths

The `repeat()` function also accepts `auto` as the first argument instead of a positive integer. With `auto` as the first argument, the list of `<line-width>` values passed as subsequent arguments will be repeated as many times as needed to fill in values for any rules that are not explicitly specified by other components of the property value.

```css
rule-width: thin, repeat(auto, medium), thin;
```

In this case, the first and last columns and row rules will always be `thin`, and all other rules will be `medium`. If there are only 2 or 3 columns and rows, there will be no medium-sized rules.

The `auto` keyword within the `repeat()` function creates an auto-repeater that fills in values for column and row rules that would not otherwise receive values from other parts of the list, preventing the list from being cycled. At most, only one `repeat(auto, <width>)` can be present in a `rule-width` value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

In this example, we define a single width for the lines drawn between the columns and rows of items in a grid container.

#### HTML

We create a list of 100 items. Most of the HTML is hidden for brevity.

```html
<ul>
  <li>*</li>
  <li>*</li>
  ...
  <li>*</li>
  <li>*</li>
</ul>
```

```html hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
<ul>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
</ul>
```

#### CSS

We define the unordered list to be a 10x10 container. We include a {{cssxref("gap")}} of `5px` to provide enough room between the items to fit our `3px` dashed red rule:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 5px;
  rule-style: dashed;
  rule-color: red;
  rule-width: 3px;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

#### Result

{{EmbedLiveSample("Basic", "", "420")}}

### Repeating values

This example demonstrates how, when there are fewer values in the list of widths than column or row rules, the values are repeated.

Using the same HTML and CSS as in the previous example, we include three comma-separated widths as the `rule-width`.

```css live-sample___repeat
ul {
  rule-width: thin, 6px, 12px;
}
```

{{EmbedLiveSample("Repeat", "", "420")}}

As the grid container has 10 rows and 10 columns, there are nine gutters in each direction, so the sequence of three `<line-width>` values is repeated three times.

### Using the `repeat()` function

This example demonstrates using the `repeat()` function within the `rule-width` property value and how this function can help reduce the verbosity of value declarations.

We use the same HTML and CSS as in the previous examples. To demonstrate how values can become verbose and the utility of the `repeat()` function, we declare two custom properties, which we use in `repeat()` function declarations. The `repeat()` function sets a list of two `<line-width>` values to repeat 3 times.

```css live-sample___func live-sample___auto
ul {
  --base: 0.5vw;
  --secondary: 1vw;
  rule-width:
    15px,
    repeat(
      4,
      min(calc(var(--base) + 3px), 10px),
      abs(calc(var(--secondary) - 2px))
    ),
    15px;
}
```

{{EmbedLiveSample("func", "", "420")}}

The `repeat()` function repeats two width values four times, creating a list of ten width values. As there are fewer column and row gutters than total widths, the last value in the list is discarded.

### Using `auto` within `repeat()`

This example demonstrates using `auto` instead of an integer within the `repeat()` function.

Using `repeat(auto, <line-width>)` we set all column and row rules to `1px`, except the first and last, which we set to `5px`.

```css live-sample___auto
ul {
  rule-width: 5px, repeat(auto, 1px), 5px;
}
```

{{EmbedLiveSample("auto", "", "420")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (rule-width: thin, thick) {
    body::before {
      content: "Your browser doesn't support the rule-width property";
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

- {{cssxref("rule-color")}}
- {{cssxref("rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule-width")}}
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
