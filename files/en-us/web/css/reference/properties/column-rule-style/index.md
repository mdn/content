---
title: "`column-rule-style` CSS property"
short-title: column-rule-style
slug: Web/CSS/Reference/Properties/column-rule-style
page-type: css-property
browser-compat: css.properties.column-rule-style
sidebar: cssref
---

The **`column-rule-style`** [CSS](/en-US/docs/Web/CSS) property defines the line style of the lines drawn between columns in multi-column grid, flex, and multi-col layouts.

{{InteractiveExample("CSS Demo: column-rule-style")}}

```css interactive-example-choice
column-rule-style: dotted;
```

```css interactive-example-choice
column-rule-style: dashed, dotted;
```

```css interactive-example-choice
column-rule-style: repeat(2, inset, outset), double;
```

```css interactive-example-choice
column-rule-style: double, repeat(auto, dashed, solid), double;
```

```css interactive-example-choice
column-rule-style: hidden;
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
  column-rule-width: thick;
  column-rule-color: teal;
  gap: 7px;
}
```

## Syntax

```css
/* One value */
column-rule-style: none;
column-rule-style: hidden;
column-rule-style: dotted;
column-rule-style: dashed;
column-rule-style: solid;
column-rule-style: double;
column-rule-style: groove;
column-rule-style: ridge;
column-rule-style: inset;
column-rule-style: outset;

/* Multiple values */
column-rule-style: groove, double, dashed;
column-rule-style: solid, repeat(5, ridge), solid;
column-rule-style: dotted, repeat(auto, inset, outset), dotted;

/* Global values */
column-rule-style: inherit;
column-rule-style: initial;
column-rule-style: revert;
column-rule-style: revert-layer;
column-rule-style: unset;
```

### Values

The `column-rule-style` property accepts a comma-separated list of values, including:

- `<line-style>`
  - : A {{cssxref("&lt;line-style&gt;")}}, either `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, or `outset`. The default value is`none`.

- `<repeat-line-style>`
  - : A {{cssxref("repeat()")}} function, with the first argument being an {{cssxref("&lt;integer&gt;")}} of `1` or more, and one or more {{cssxref("&lt;line-width&gt;")}} values as subsequent arguments. The integer defines the number of times the `<line-width>` values should be repeated.

- `<auto-repeat-line-style>`
  - : A {{cssxref("repeat()")}} function, with `auto` as the first argument and one or more `<line-style>` values as subsequent arguments. The provided `<line-style>` values are repeated as many times as needed to fill in values for any column-rules that are not explicitly specified by other components of the property value.

## Description

The `column-rule-style` property defines the line style of any column rule lines drawn in the gaps between columns in [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout), [flex](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers with more than one column.

The value is a comma-separated list of components, which can include `<line-style>`, `<repeat-line-style>`, and `<auto-repeat-line-style>` types.

The `column-rule-style`, along with the {{cssxref("column-rule-color")}} and {{cssxref("column-rule-width")}} properties, can be set using the {{cssxref("column-rule")}} shorthand. The `column-rule-style`, along with the {{cssxref("row-rule-style")}} property, can also be set using the {{cssxref("rule-style")}} shorthand.

If the property value has only one `<line-style>`, all the column rules will be that style. If we declare the following, all column rules will be `double`:

```css
column-rule-style: double;
```

When more than one `<line-style>` is declared, they will be applied to column-rules in the order specified. If there are more column-rules than `<line-style>` values, the list of line styles is repeated until every column rule has a style. If we declare the following, for example, every odd rule will be `double`, and every even rule will be `groove`.

```css
column-rule-style: double, groove;
```

### Repeated line styles

The `repeat()` function, with an integer of `1` or greater as the first argument, can be used to repeat a valid list of CSS {{cssxref("&lt;line-style&gt;")}} values passed as the second argument the specified number of times. This allows the same style to be repeated a set number of times without repeating the same value. You can use any of the `<line-style>` keywords or custom properties that resolve to a valid `<line-style>`. Using `repeat()` can make values easier to write, enabling recurring patterns to be written using a single function, regardless of the number of columns. The following declarations are equivalent:

```css
column-rule-style: solid, outset, inset, outset, inset;
column-rule-style: solid, repeat(2, outset, inset);
```

This creates a list of five styles. If the number of styles in the `column-rule-style` value's style list exceeds the number of gaps between columns, the excess style values are ignored. If the container has three columns, the rule in the first gutter will be `solid` and the second `outset`.

If there are more gutters than styles, as there are no `repeat()` functions that include the keyword `auto`, the list of styles is repeated. If the container has 6, 11, 16 or 21 columns, this sequence of styles will be repeated one, two, three, or four times, respectively, with the last rule being `inset`.

### Auto-repeating line styles

The `repeat()` function also accepts `auto` as the first argument instead of a positive integer. With `auto` as the first argument, the comma-separated list of `<line-style>` values passed as the second parameter will be repeated as many times as needed to fill in values for any column-rules that are not explicitly specified by other components of the property value, if any.

```css
column-rule-style: solid, repeat(auto, dotted), solid;
```

In this case, the first and last column rules will be `solid`, and all others will be `dotted`. It doesn't matter if the container has 3, 6, 11, 16, or 21 columns, the first and last columns will always be `thin`. All the other column rules will be `dotted`, which means if there are only 2 or 3 columns, there will be no dotted column rules.

The `auto` keyword within the `repeat()` function creates an auto repeater that fills in values for column rules that would not otherwise receive values from other parts of the list, preventing the list from being cycled. Only one `repeat(auto, <line-style>)` is allowed within a `column-rule-style` value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

#### HTML

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-style`
  property is used to change the style of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: dashed;
}
```

#### Result

{{ EmbedLiveSample('basic usage') }}

### Multiple values

#### HTML

We include a list of authors:

```html live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
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

We define the list to be a flex container, creating columns by setting the {{cssxref("flex-direction")}} to `row` using the {{cssxref("flex-flow")}} shorthand. We include a {{cssxref("gap")}} of `5px` to provide enough room between the columns to fit our `3px` double teal rule:

```css live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: row;
  gap: 5px;
  column-rule-width: 3px;
  column-rule-color: teal;

  column-rule-style:
    dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden;
}
```

#### Result

{{EmbedLiveSample("Multiple", "", "180")}}

As there are more values (10) than gutters (8), the `none` and `hidden` values are not used.

### Repeating values

This example demonstrates how, when there are fewer values in the list of styles than column rules, the values are repeated.

Using the same HTML and CSS as in the previous example, we include three comma-separated styles as the `column-rule-style` value:

```css live-sample___repeat
ul {
  column-rule-style: solid, groove, double;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### Using the `repeat()` function

This example demonstrates using the `repeat()` function within the `column-rule-style` property value. We use the same HTML and CSS as in the previous examples. We include a `repeat()` function, setting the list of two `<line-style>` values to be repeated 3 times.

```css live-sample___func live-sample___auto
ul {
  column-rule-style: solid, repeat(3, inset, outset), solid;
}
```

{{EmbedLiveSample("func", "", "180")}}

The flex container has six columns, so five gutters. The `repeat()` function repeats two style values three times, creating a list of eight style values, so the last three values in the list are discarded.

### Using `auto` within `repeat()`

This example demonstrates using `auto` instead of an integer within the `repeat()` function.

Using `repeat(auto, <line-style>)` we set all column rules to `groove`, except the first and last, which we set to `solid`.

```css live-sample___auto
ul {
  column-rule-style: solid, repeat(auto, groove), solid;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (column-rule-style: solid, groove) {
    body::before {
      content: "Your browser doesn't support multiple values for the column-rule-style property";
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
- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("column-rule")}} shorthand
- {{cssxref("rule-style")}} shorthand
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
