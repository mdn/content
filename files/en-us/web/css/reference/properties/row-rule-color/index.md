---
title: "`row-rule-color` CSS property"
short-title: row-rule-color
slug: Web/CSS/Reference/Properties/row-rule-color
page-type: css-property
browser-compat: css.properties.row-rule-color
sidebar: cssref
---

The **`row-rule-color`** [CSS](/en-US/docs/Web/CSS) property defines the colors of the lines drawn between rows in multi-row grid, flex, and multi-col layouts.

{{InteractiveExample("CSS Demo: row-rule-color")}}

```css interactive-example-choice
row-rule-color: magenta;
```

```css interactive-example-choice
row-rule-color: magenta, goldenrod;
```

```css interactive-example-choice
row-rule-color: repeat(2, magenta), goldenrod;
```

```css interactive-example-choice
row-rule-color: goldenrod, repeat(auto, magenta), goldenrod;
```

```css interactive-example-choice
row-rule-color: currentColor;
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
  row-rule-width: 5px;
  gap: 5px;
  text-align: left;
}
```

## Syntax

```css
/* Single value */
row-rule-color: red;
row-rule-color: rgb(192 56 78);
row-rule-color: transparent;
row-rule-color: hsl(0 100% 50% / 60%);
row-rule-color: var(--primaryColor);

/* Multiple values */
row-rule-color: red, transparent;
row-rule-color: repeat(3, red), repeat(3, transparent);
row-rule-color: red, repeat(auto, transparent), red;

/* Global values */
row-rule-color: inherit;
row-rule-color: initial;
row-rule-color: revert;
row-rule-color: revert-layer;
row-rule-color: unset;
```

### Values

The `row-rule-color` property accepts a comma-separated list of values, including:

- `<line-color>`
  - : A {{cssxref("&lt;color&gt;")}} representing the color of the line.

- `<repeat-line-color>`
  - : A {{cssxref("repeat()")}} function, with the first parameter being an {{cssxref("&lt;integer&gt;")}} of `1` or more, representing the number of the times the second parameter, a comma-separated list of {{cssxref("&lt;color&gt;")}} values, should be repeated.

- `<auto-repeat-line-color>`
  - : A {{cssxref("repeat()")}} function, with `auto` as the first argument and one or more `<color>` values as subsequent arguments. The provided `<color>` values are repeated as many times as needed to fill in values for any row-rules that are not explicitly specified by other components of the property value.

## Description

The `row-rule-color` property defines the colors of any row rule lines drawn in the gaps between rows in [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout), [flex](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers with more than one row.

The value is a comma-separated list of components, which can include `<line-color>`, `<repeated-line-color>`, and `<auto-repeat-line-color>` types.

The `row-rule-color`, along with the {{cssxref("row-rule-width")}} and {{cssxref("row-rule-style")}} properties, can be set using the {{cssxref("row-rule")}} shorthand. The `row-rule-color`, along with the {{cssxref("column-rule-color")}} property, can also be set using the {{cssxref("rule-color")}} shorthand.

A `<line-color>` can be declared as any valid CSS {{cssxref("&lt;color&gt;")}} value. If the property value consists of only one `<color>`, all the row rules will be that color. If we declare the following, all row rules will be blue:

```css
row-rule-color: blue;
```

When more than one `<line-color>` is declared, they will be applied to row-rules in the order specified. If there are more row-rules than `<line-color>` values, the list of line colors is repeated until every row rule has a color. If we declare the following, for example, every odd rule will be blue, and every even rule will be yellow.

```css
row-rule-color: blue, yellow;
```

### Repeated line colors

The `repeat()` function, with an integer of `1` or greater as the first argument, can be used to repeat a valid list of CSS {{cssxref("&lt;color&gt;")}} values passed as the second argument the specified number of times. This allows the same color to be repeated a set number of times without repeating the same `<line-color>` multiple times. The following declarations are equivalent:

```css
row-rule-color: blue, yellow, red, yellow, red;
row-rule-color: blue, repeat(2, yellow, red);
```

You can use any valid color value from any color space, including CSS color functions, custom properties, etc. Using `repeat()` can make values easier to write, especially as your color values become more complex. It enables a recurring pattern to be written using a single function, regardless of the number of rows.

If we set `--base: yellow` and `--mixin: blue`, the following will provide similar results to the previous declaration:

```css
row-rule-color:
  color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
  repeat(
    2,
    color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin)),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin))
  );
```

This creates a list of five colors. If the number of colors in the `row-rule-color` value's color list exceeds the number of gaps between rows, the excess color values are ignored. If the container has three rows, the rule in the first gutter will be blue and the second yellow.

If there are more gutters than colors, as there are no `repeat()` functions that include the keyword `auto`, the list of colors is repeated. If the container has 6, 11, 16 or 21 rows, this sequence of colors will be repeated one, two, three or four times, respectively, with the last rule being red.

### Auto-repeating line colors

The `repeat()` function also accepts `auto` as the first argument instead of a positive integer. With `auto` as the first argument, the `<color>` values passed as the second will be repeated as many times as needed to fill in values for any row-rules that are not explicitly specified by other components of the property value, if any.

```css
row-rule-color: blue, repeat(auto, yellow), red;
```

In this case, the first row rule will be blue, the last will be red, and all others will be yellow. It doesn't matter if the container has 3, 6, 11, 16 or 21 rows, the first will always be blue and, as long as there are at least two row-rules, the last will always be red. All the other row rules will be yellow, which means if there are only 2 or 3 rows, there will be no yellow row rules.

The `auto` keyword within the `repeat()` function creates an auto repeater that fills in values for row rules that would not otherwise receive values from other parts of the list, preventing the list from being cycled. At most, only one `repeat(auto, <color>)` can be present in a `row-rule-color` value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

In this example, we define a single color for the lines drawn between flex items.

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

We define the list to be a flex container, creating rows by setting the {{cssxref("flex-direction")}} to `column` using the {{cssxref("flex-flow")}} shorthand. We include a {{cssxref("gap")}} of `5px` to provide enough room between the rows to fit our `3px` dashed rule:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: column;
  gap: 5px;
  row-rule-style: dashed;
  row-rule-width: 3px;
  row-rule-color: blue;
}
```

#### Result

{{EmbedLiveSample("Basic", "", "180")}}

### Repeating values

This example demonstrates how, when there are fewer values in the list of colors than row rules, the values are repeated.

Using the same HTML and CSS as in the previous example, we include three comma-separated colors as the `row-rule-color` value:

```css live-sample___repeat
ul {
  row-rule-color: blue, yellow, red;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Using the `repeat()` function

This example demonstrates using the `repeat()` function within the `row-rule-color` property value, and how this function can help make complex values not become unwieldy.

We use the same HTML and CSS as in the previous examples. To demonstrate how values can become complicated and the utility of the `repeat()` function, we declare two custom properties, which we use in three {{cssxref("color-mix()")}} color function declarations to create the same blue, red, and yellow colors as in the previous example. The second declaration is within a `repeat()` function, set to repeat 3 times.

```css live-sample___func live-sample___auto
ul {
  --base: yellow;
  --mixin: blue;
  row-rule-color:
    color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
    repeat(3, color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin))),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin));
}
```

{{EmbedLiveSample("func", "", "180")}}

The middle color is repeated three times. The flex container has six rows, so five gutters. The `repeat()` function repeats our second color three times, creating a color-list with five colors. As there are the same number of row gutters as total colors, the colors are not repeated.

### Using `auto` within `repeat()`

This example demonstrates using `auto`, instead of an integer, within the `repeat()` function.

Using `repeat(auto, <color>)` we set all the row rules to be almost transparent black (`#0001`), except the first and last, which we set to a solid `black`.

```css live-sample___auto
ul {
  row-rule-color: black, repeat(auto, #0003), black;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule-color: red, blue) {
    body::before {
      content: "Your browser doesn't support the row-rule-color property";
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

- {{cssxref("row-rule-width")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("row-rule")}} shorthand
- {{cssxref("rule-color")}} shorthand
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
