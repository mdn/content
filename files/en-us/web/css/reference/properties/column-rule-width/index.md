---
title: "`column-rule-width` CSS property"
short-title: column-rule-width
slug: Web/CSS/Reference/Properties/column-rule-width
page-type: css-property
browser-compat: css.properties.column-rule-width
sidebar: cssref
---

The **`column-rule-width`** [CSS](/en-US/docs/Web/CSS) property defines the widths of the lines drawn between columns in multi-column grid, flex, and multi-col layouts.

{{InteractiveExample("CSS Demo: column-rule-width")}}

```css interactive-example-choice
column-rule-width: thin;
```

```css interactive-example-choice
column-rule-width: 4px;
```

```css interactive-example-choice
column-rule-width: thin, medium, thick;
```

```css interactive-example-choice
column-rule-width: repeat(2, 1px, thick), 10px;
```

```css interactive-example-choice
column-rule-width: 10px, repeat(auto, 1px, 2px), 10px;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Noel term lately over, and the Lord George sitting in Lincoln's Inn
    Hall. Great May weather. As much mud in the streets as if the waters had but
    newly retired from the face of the earth, and it would not be weird to meet
    an platypus, two feet long or so, waddling like an lizard up Morgan Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 6;
  column-rule-style: solid;
  column-rule-color: teal;
  gap: 7px;
}
```

## Syntax

```css
/* Keyword values */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;
column-rule-width: thin, medium, thick;
column-rule-width: thick, repeat(5, thin), thick;
column-rule-width: thick, repeat(auto, thin, medium), thick;

/* Length values */
column-rule-width: 0.1em;
column-rule-width: 5px;
column-rule-width: 1px, 3px, 5px;
column-rule-width: 0.1rem, repeat(auto, 1px), 10px, 0.5rem;
column-rule-width: 5px, repeat(5, 1px, 3px), 5px;

/* Global values */
column-rule-width: inherit;
column-rule-width: initial;
column-rule-width: revert;
column-rule-width: revert-layer;
column-rule-width: unset;
```

### Values

The `column-rule-width` property accepts a comma-separated list of values, including:

- `<line-width>`
  - : Defines the width of the line, either as an explicit non-negative {{cssxref("&lt;length&gt;")}} or the keywords: `thin`, `medium`, or `thick`. The default is `medium`.
- `<repeat-line-width>`
  - : A {{cssxref("repeat()")}} function, with the first argument being an {{cssxref("&lt;integer&gt;")}} of `1` or more, and one or more {{cssxref("&lt;line-width&gt;")}} values as subsequent arguments. The integer defines the number of times the `<line-width>` values should be repeated.

- `<auto-repeat-line-width>`
  - : A {{cssxref("repeat()")}} function, with `auto` as the first argument and one or more `<line-width>` values as subsequent arguments. The provided `<line-width>` values are repeated as many times as needed to fill in values for any column-rules that are not explicitly specified by other components of the property value.

## Description

The `column-rule-width` property defines the widths of any column rule lines drawn in the gutters between adjacent columns in [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout), [flex](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers with more than one column.

> [!NOTE]
> The `column-rule-width` only defines the width of the lines painted in the gaps. These lines have no effect on the [box model](/en-US/docs/Web/CSS/Guides/Box_model/Introduction) or layout. The size of the gutter is defined by the {{cssxref("gap")}} property; with the default value being `1em` on multi-column containers and `0` in all other contexts. If the width of a rule is wider than the {{cssxref("gap")}}, the line will be painted behind the column content.

The value is a comma-separated list of components, which can include `<line-width>`, `<repeat-line-width>`, and `<auto-repeat-line-width>` types.

The `column-rule-width`, along with the {{cssxref("column-rule-color")}} and {{cssxref("column-rule-style")}} properties, can also be set using the {{cssxref("column-rule")}} shorthand, while {{cssxref("rule-width")}} is a shorthand that sets both the `column-rule-width` and the {{cssxref("row-rule-width")}} properties.

A `<line-width>` can be declared as any valid CSS {{cssxref("&lt;line-width&gt;")}} value: the keywords `thin`, `medium`, or `thick`, or a positive {{cssxref("length")}} value. Percentage values are invalid.

If the property value consists of only one `<line-width>`, all the column rules will be that width. If we declare the following, all column rules will be `2px`:

```css
column-rule-width: 2px;
```

When more than one `<line-width>` is declared, they will be applied to column-rules in the order specified. If there are more column-rules than `<line-width>` values, the list of line widths is repeated until every rule has a width. If we declare the following, for example, every odd rule will be `thick`, and every even rule will be `0.25rem`.

```css
column-rule-width: thick, 0.25rem;
```

### Repeated line widths

The `repeat()` function, with an integer of `1` or greater as the first argument, can be used to repeat a valid list of CSS {{cssxref("&lt;line-width&gt;")}} values passed as subsequent arguments the specified number of times. This allows the same width to be repeated a set number of times without repeating the same `<line-width>` multiple times. The following declarations are equivalent:

```css
column-rule-width: 1rem, thick, thin, thick, thin, thick, thin;
column-rule-width: 1rem, repeat(3, thick, thin);
```

You can use any `<line-width>` values, including custom properties that resolve to a `<line-width>`. Using `repeat()` can make values easier to write, especially when using complex length calculations. It enables a recurring pattern to be written using a single function, regardless of the number of columns. The following declarations are equivalent:

```css
column-rule-width:
  1rem, min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)), thin;
column-rule-width:
  1rem,
  repeat(
    5,
    min(calc(var(--base) - 3px), 10px),
    abs(calc(var(--secondary) - 30px))
  ),
  thin;
```

This creates a list of 12 widths. If the number of widths in the `column-rule-width` value's width list exceeds the number of gaps between columns, the excess width values are ignored. If the container has three columns, the rule in the first gutter will be `1rem` wide, and the second is determined by the {{cssxref("min()")}} function.

If there are more gutters than widths, the list of widths is repeated. If the container has 13 or 25 columns, this sequence of widths will be repeated one or two, respectively, with the last rule being `thin`. For any other number of columns, up to 25, the last rule will not be `thin`.

### Auto-repeating line widths

The `repeat()` function also accepts `auto` as the first argument instead of a positive integer. With `auto` as the first argument, the list of `<line-width>` values passed as subsequent arguments will be repeated as many times as needed to fill in values for any column-rules that are not explicitly specified by other components of the property value.

```css
column-rule-width: 10px, repeat(auto, thin), 10px;
```

In this case, the first column rule will be `10px`, the last will be `10px`, and all others will be `thin`. It doesn't matter if the container has 3, 6, 11, 16, or 21 columns, the first and last columns will always be `10px`. Which means, if there are only 2 or 3 columns, there will be no thin-sized column rules.

The `auto` keyword within the `repeat()` function creates an auto-repeater that fills in values for the row-rule line widths that would not otherwise receive values from other parts of the list, preventing the list from being cycled. A `column-rule-width` value can include, at most, one `repeat(auto, <line-width>)`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates using a single keyword value, setting all the column rules to the same size.

#### HTML

We include a paragraph of text:

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-width`
  property is used to change the width of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

We create a multi-column container with the {{cssxref("column-count")}} property. As the {{cssxref("column-rule-style")}} property defaults to `none`, we have to set it to a visible value for the column rules to be drawn. We then set the `column-rule-width` to `thick`, letting the {{cssxref("column-rule-color")}} default to `currentcolor`.

```css
p {
  column-count: 3;
  column-rule-style: solid;

  column-rule-width: thick;
}
```

#### Result

{{EmbedLiveSample("Basic usage")}}

In multi-column layouts, the {{cssxref("gap")}} property defaults to `1em`, which is wider than our `column-rule-width`, so the lines are not drawn over our content.

### Multiple values

This example demonstrates using multiple values for the `column-rule-width` property. It also demonstrates rules that overflow gaps are painted behind the content.

#### HTML

We include a list of authors:

```html live-sample___basic live-sample___repeat live-sample___func live-sample___auto
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

We define the list to be a flex container, creating columns by setting the {{cssxref("flex-direction")}} to `row` using the {{cssxref("flex-flow")}} shorthand. We include a `column-rule-width` with ten `<line-width>` values, each larger than the previous.

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: row;
  list-style-type: none;
  column-rule-style: solid;
  column-rule-color: teal;

  column-rule-width: 1px, 2px, 3px, 4px, 5px, 6px, 7px, 8px, 9px, 10px;
}
```

#### Result

{{EmbedLiveSample("Basic", "", "180")}}

As there are more values (10) than gutters (8), the `9px` and `10px` values are not used.

The {{cssxref("gap")}} defaults to `normal` which resolves to `0` in flexbox. The `column-rule-width` only defines the width of a painted line and does not impact the layout. The lines are drawn behind the content.

### Repeating values

This example demonstrates how, when there are fewer values in the list of widths than column rules, the values are repeated.

Using the same HTML and CSS as in the previous example, we include three comma-separated widths as the `column-rule-width` value:

```css live-sample___repeat
ul {
  column-rule-width: 1px, 5px, 10px;
}
```

#### Result

{{EmbedLiveSample("Repeat", "", "180")}}

### Using the `repeat()` function

This example demonstrates using the `repeat()` function within the `column-rule-width` property value and how this function can help reduce the verbosity of value declarations.

We use the same HTML and CSS as in the previous examples. To demonstrate how values can become verbose and the utility of the `repeat()` function, we declare two custom properties, which we use in `repeat()` function declarations. The `repeat()` function sets the list of two `<line-width>` values to repeat 3 times.

```css live-sample___func live-sample___auto
ul {
  --base: 0.5vw;
  --secondary: 1vw;
  column-rule-width:
    15px,
    repeat(
      4,
      min(calc(var(--secondary) + 3px), 10px),
      abs(calc(var(--base) - 2px))
    ),
    15px;
}
```

#### Result

{{EmbedLiveSample("func", "", "180")}}

The flex container has nine columns, so eight gutters. The `repeat()` function repeats two width values four times, creating a list of ten width values. As there are fewer column gutters than total widths, the last two values in the list are discarded.

### Using `auto` within `repeat()`

This example demonstrates using `auto` instead of an integer within the `repeat()` function.

Using `repeat(auto, <line-width>)` we set all column rules to `1px`, except the first and last, which we set to `5px`.

```css live-sample___auto
ul {
  column-rule-width: 5px, repeat(auto, 1px), 5px;
}
```

#### Result

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (column-rule-width: thin, thick) {
    body::before {
      content: "Your browser doesn't support the column-rule-width property";
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

- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule")}} shorthand
- {{cssxref("row-rule-width")}}
- {{cssxref("rule-width")}} shorthand
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
