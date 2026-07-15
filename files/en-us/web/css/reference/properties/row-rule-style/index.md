---
title: "`row-rule-style` CSS property"
short-title: row-rule-style
slug: Web/CSS/Reference/Properties/row-rule-style
page-type: css-property
browser-compat: css.properties.row-rule-style
sidebar: cssref
---

The **`row-rule-style`** [CSS](/en-US/docs/Web/CSS) property defines the line style of the lines drawn between rows in multi-row grid, flex, and multi-col layouts.

{{InteractiveExample("CSS Demo: row-rule-style")}}

```css interactive-example-choice
row-rule-style: solid;
```

```css interactive-example-choice
row-rule-style: inset, outset;
```

```css interactive-example-choice
row-rule-style: repeat(2, dashed, dotted), solid;
```

```css interactive-example-choice
row-rule-style: solid, repeat(auto, dashed, dotted), solid;
```

```css interactive-example-choice
row-rule-style: hidden;
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
  row-rule-width: thick;
  row-rule-color: magenta;
  gap: 7px;
  text-align: left;
}
```

## Syntax

```css
/* One value */
row-rule-style: none;
row-rule-style: hidden;
row-rule-style: dotted;

/* Multiple values */
row-rule-style: groove, dashed, solid;
row-rule-style: double, repeat(5, ridge), double;
row-rule-style: solid, repeat(auto, inset, outset), solid;

/* Global values */
row-rule-style: inherit;
row-rule-style: initial;
row-rule-style: revert;
row-rule-style: revert-layer;
row-rule-style: unset;
```

### Values

The `row-rule-style` property accepts a comma-separated list of values, including:

- `<line-style>`
  - : A {{cssxref("&lt;line-style&gt;")}}, either `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, or `outset;. The default value is`none`.

- `<repeat-line-style>`
  - : A {{cssxref("repeat()")}} function, with the first parameter being an {{cssxref("&lt;integer&gt;")}} of `1` or more, representing the number of the times the second parameter, a comma-separated list of {{cssxref("&lt;line-style&gt;")}} values, should be repeated.

- `<auto-repeat-line-style>`
  - : A {{cssxref("repeat()")}} function, with `auto` as the first argument and one or more `<line-style>` values as subsequent arguments. The provided `<line-style>` values are repeated as many times as needed to fill in values for any row-rules that are not explicitly specified by other components of the property value.

## Description

The `row-rule-style` property defines the line style of any row rule lines drawn in the gaps between rows in [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout), [flex](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers with more than one row.

The value is a comma-separated list of components, which can include `<line-style>`, `<repeated-line-style>`, and `<auto-repeat-line-style>` types.

The `row-rule-style`, along with the {{cssxref("row-rule-color")}} and {{cssxref("row-rule-width")}} properties, can be set using the {{cssxref("row-rule")}} shorthand. The `row-rule-style`, along with the {{cssxref("column-rule-style")}} property, can also be set using the {{cssxref("rule-style")}} shorthand.

If the property value consists of only one `<line-style>`, all the row rules will be that style. If we declare the following, all row rules will be `dashed`:

```css
row-rule-style: `dashed`;
```

When more than one `<line-style>` is declared, they will be applied to row-rules in the order specified. If there are more row-rules than `<line-style>` values, the list of line styles is repeated until every row rule has a style. If we declare the following, for example, every odd rule will be `dashed`, and every even rule will be `dotted`.

```css
row-rule-style: dashed, dotted;
```

### Repeated line styles

The `repeat()` function, with an integer of `1` or greater as the first argument, can be used to repeat a valid list of CSS {{cssxref("&lt;line-style&gt;")}} values passed as the second argument the specified number of times. This allows the same style to be repeated a set number of times without repeating the same value multiple times. You can use any of the `<line-style>` keywords, or custom properties that resolve to a valid `<line-style>`. Using `repeat()` can make values easier to write, enabling recurring patterns to be written using a single function, regardless of the number of rows. The following declarations are equivalent:

```css
row-rule-style: solid, outset, inset, outset, inset;
row-rule-style: solid, repeat(2, outset, inset);
```

This creates a list of five styles. If the number of styles in the `row-rule-style` value's style list exceeds the number of gaps between rows, the excess style values are ignored. If the container has three rows, the rule in the first gutter will be `solid` and the second `outset`.

If there are more gutters than styles, as there are no `repeat()` functions that include the keyword `auto`, the list of styles is repeated. If the container has 6, 11, 16 or 21 rows, this sequence of styles will be repeated one, two, three or four times, respectively, with the last rule being `inset`.

### Auto-repeating line styles

The `repeat()` function also accepts `auto` as the first argument instead of a positive integer. With `auto` as the first argument, the comma-separated list of `<line-style>` values passed as the second parameter will be repeated as many times as needed to fill in values for any row-rules that are not explicitly specified by other components of the property value, if any.

```css
row-rule-style: solid, repeat(auto, dotted), solid;
```

In this case, the first and last row rules will be `sold`, and all others will be `dotted`. It doesn't matter if the container has 3, 6, 11, 16 or 21 rows, the first and last rows will always be `thin`. All the other row rules will be `dotted`, which means if there are only 2 or 3 rows, there will be no dotted row rules.

The `auto` keyword within the `repeat()` function creates an auto repeater that fills in values for row rules that would not otherwise receive values from other parts of the list, preventing the list from being cycled. At most, only one `repeat(auto, <line-style>)` can be present in a `row-rule-style` value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

In this example, we define a single style for the lines drawn between flex items.

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
  row-rule-width: 3px;
  row-rule-color: red;

  row-rule-style: dashed;
}
```

#### Result

{{EmbedLiveSample("Basic", "", "180")}}

### Repeating values

This example demonstrates how, when there are fewer values in the list of styles than row rules, the values are repeated.

Using the same HTML and CSS as in the previous example, we include three comma-separated styles as the `row-rule-style` value:

```css live-sample___repeat
ul {
  row-rule-style: solid, dotted, dashed;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Using the `repeat()` function

This example demonstrates using the `repeat()` function within the `row-rule-style` property value. We use the same HTML and CSS as in the previous examples. We include a `repeat()` function, setting the list of two `<line-style>` values to be repeat 3 times.

```css live-sample___func live-sample___auto
ul {
  --base: 0.5vw;
  --secondary: 1vw;
  row-rule-style: solid, repeat(3, inset, outset), solid;
}
```

{{EmbedLiveSample("func", "", "180")}}

The flex container has six rows, so five gutters. The `repeat()` function repeats two style values three times, creating a list of eight style values. As there are fewer row gutters than total line-styles, the last three values in the list are discarded.

### Using `auto` within `repeat()`

This example demonstrates using `auto`, instead of an integer, within the `repeat()` function.

Using `repeat(auto, <line-style>)` we set all the row rules to be `dotted`, except the first and last, which we set to `solid`.

```css live-sample___auto
ul {
  row-rule-style: solid, repeat(auto, dotted), solid;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule-style: thin, thick) {
    body::before {
      content: "Your browser doesn't support the row-rule-style property";
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
- {{cssxref("row-rule-width")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule")}} shorthand
- {{cssxref("rule-style")}} shorthand
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
