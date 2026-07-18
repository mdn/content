---
title: "`column-rule` CSS property"
short-title: column-rule
slug: Web/CSS/Reference/Properties/column-rule
page-type: css-shorthand-property
browser-compat: css.properties.column-rule
sidebar: cssref
---

The **`column-rule`** [shorthand](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property sets the width, style, and color of the lines drawn between columns in multi-column grid, flex, and multi-col layouts.

{{InteractiveExample("CSS Demo: column-rule")}}

```css interactive-example-choice
column-rule: solid;
```

```css interactive-example-choice
column-rule: groove 0.8em teal;
```

```css interactive-example-choice
column-rule:
  dotted thick teal,
  repeat(3, dashed pink 1px, outset olive 5px);
```

```css interactive-example-choice
column-rule:
  dotted thick teal,
  repeat(auto, dashed pink 1px, dashed pink 5px),
  dotted thick teal;
```

```css interactive-example-choice
column-rule:
  dashed medium olive,
  repeat(auto, dotted pink 1px),
  inset orange 5px;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Lady Catnip sitting in Lincoln's Inn Hall. Nice May weather. As much
    mud in the streets as if the waters had but newly retired from the face of
    the earth, and it would not be great to meet a Fred, two feet long or so,
    waddling like an iguana up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 7;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{Cssxref("column-rule-color")}}
- {{Cssxref("column-rule-style")}}
- {{Cssxref("column-rule-width")}}

## Syntax

```css
/* One value */
column-rule: dashed;
column-rule: inset 8px;
column-rule: solid teal;
column-rule: thick outset rgb(18 122 67);

/* Multiple values */
column-rule: groove, dashed, solid;
column-rule:
  dotted medium teal,
  dashed pink 0.5em,
  outset olive 1px;
column-rule:
  solid #0ff,
  repeat(3, dashed pink 1px, outset olive 5px);
column-rule:
  inset 3px yellow,
  repeat(auto, dashed pink 1px, groove olive 5px);

/* Global values */
column-rule: inherit;
column-rule: initial;
column-rule: revert;
column-rule: revert-layer;
column-rule: unset;
```

### Values

The `column-rule` property accepts a comma-separated list of values, including:

- `<gap-rule>`
  - : Specified as one, two, or three of the values listed below, in any order.
    - `<'line-width'>`
      - : A {{cssxref("&lt;line-width&gt;")}}: This can be one of the keywords `thin`, `medium`, or `thick`, or a positive {{cssxref("length")}} value, representing the width of the line. The default value is `medium`.
    - `<'line-style'>`
      - : A {{cssxref("&lt;line-style&gt;")}}, either `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, or `outset`. The default value is `none`. See {{cssxref("column-rule-style")}}
    - `<'color'>`
      - : A {{cssxref("&lt;color&gt;")}} value representing the color of the line. The default value is `currentcolor`. See {{cssxref("column-rule-color")}}

- `<gap-repeat-rule>`
  - : A {{cssxref("repeat()")}} function, with an {{cssxref("&lt;integer&gt;")}} of `1` or more as the first argument and one or more `<gap-rule>` values as subsequent arguments. The `<integer>` specifies how many times the list of `<gap-rule>` values should be repeated.

- `<gap-auto-repeat-rule>`
  - : A {{cssxref("repeat()")}} function, with `auto` as the first argument and one or more `<gap-rule>` values as subsequent arguments. The provided list of `<gap-rule>` values are repeated as many times as needed to fill in values for any column-rules that are not explicitly specified by other components of the property value.

## Description

The `column-rule` property defines the line style of any rule lines drawn in the gaps between columns in [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout), [flex](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers with more than one column.

The `column-rule` is shorthand for {{cssxref("column-rule-color")}}, {{cssxref("column-rule-style")}}, and {{cssxref("column-rule-width")}}. The `column-rule`, along with the {{cssxref("row-rule")}} shorthand property, can also be set using the {{cssxref("rule")}} shorthand.

The value is a comma-separated list of components, which can include `<gap-rule>`, `<repeat-gap-rule>`, and `<auto-repeat-gap-rule>` types. Each `<gap-rule>` defines the width, color, and style of the rule line.

If the property value consists of only one `<gap-rule>`, all the column rules will be that style. If we declare the following, all column rules will be `dashed maroon 3px`:

```css
column-rule: dashed maroon 3px;
```

When more than one `<gap-rule>` is declared, they will be applied to column-rules in the order specified. If there are more gutters between columns than `<gap-rule>` values, the list of lines is repeated until every column rule has a gap line. If we declare the following, for example, every odd rule will be `dashed maroon 3px`, and every even rule will be `dotted navy 5px`.

```css
column-rule:
  dashed maroon 3px,
  dotted navy 5px;
```

### Repeated line styles

The `repeat()` function, with an integer of `1` or greater as the first argument, can be used to repeat a valid list of CSS [`<gap-rule>`](#gap-rule) values passed as subsequent arguments the specified number of times. This allows the same `<gap-rule>` to be repeated a set number of times without repeating the same CSS multiple times. The following declarations are equivalent:

```css
column-rule:
  solid maroon 5px,
  outset navy 10px,
  inset olive 1px,
  outset navy 10px,
  inset olive 1px,
  outset navy 10px,
  inset olive 1px;
column-rule:
  solid maroon 5px,
  repeat(3, outset navy 10px, inset olive 1px);
```

This creates a list of seven rules. If the number of styles in the `column-rule` value's style list exceeds the number of gaps between columns, the excess style values are ignored. If the container on which this is applied has three columns, the rule in the first gutter will be `solid maroon 5px` and the second `outset navy 10px`.

If there are more gutters than styles, the list of styles is repeated. If the container has 8, 15, 22, or 29 columns, this sequence of styles will be repeated one, two, three, or four times, respectively, with the last rule being `inset olive 1px`.

### Auto-repeating line styles

The `repeat()` function also accepts `auto` as the first argument instead of a positive integer. With `auto` as the first argument, the [`<gap-rule>`](#gap-rule) values passed as subsequent arguments will be repeated as many times as needed to fill in values for any rules that are not explicitly specified by other components of the property value, if any.

```css
column-rule:
  solid maroon 5px,
  repeat(auto, dotted olive 1px, dashed navy 1px),
  solid maroon 5px;
```

In this case, the first and last column rules will be `solid maroon 5px`, and all others will alternate between `dotted olive 1px` and `dashed navy 1px`. It doesn't matter if the container has 3, 6, 11, 16, or 21 columns, the first and last gutters will always have a thick solid maroon line painted between them (unless {{cssxref("column-rule-visibility-items")}} leads to no line being drawn), while all the other column rules will be thin, dotted or dashed, and olive or navy, which means if there are only 2 or 3 columns, there will be no dotted or dashed lines.

The `auto` keyword within the `repeat()` function creates an auto-repeater that fills in values for column rules that would not otherwise receive values from other parts of the list, preventing the list from being cycled. At most, only one `repeat(auto, <gap-rule>)` can be present in a `column-rule` value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

In this example, we define a single rule for the lines drawn between flex items.

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

We define the list to be a flex container, creating columns by setting the {{cssxref("flex-direction")}} to `row` using the {{cssxref("flex-flow")}} shorthand. We include a {{cssxref("gap")}} of `12px` to provide enough room between the columns to fit our `10px groove maroon` rule:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: row;
  gap: 12px;
  list-style-type: none;

  column-rule: 10px groove maroon;
}
```

#### Result

{{EmbedLiveSample("Basic", "", "180")}}

### Repeating values

This example demonstrates how the values are repeated when there are fewer values in the list of styles than column rules. It also demonstrates the default values for the width, color, and style of `medium`, `currentcolor` and `none`, respectively.

Using the same HTML and CSS as in the previous example, we include four comma-separated `<gap-rule>` values as the `column-rule` value, omitting the width in the first `<gap-rule>`, the color in the second, and the style from the third, with the fourth including all three components:

```css live-sample___repeat
ul {
  column-rule:
    maroon dashed,
    1px dotted,
    5px teal,
    10px orange solid;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

The maroon line is `3px` wide. The dotted line is the same color as the text. There are no teal lines, as the `<line-style>` of the third `<gap-rule>` defaults to `none`, so no line is painted. There are more gutters than `<gap-rule>` values, so the list of values gets repeated.

### Using the `repeat()` function

This example demonstrates using the `repeat()` function within the `column-rule` property value. We use the same HTML and CSS as in the previous examples. We include a `repeat()` function, setting the list of two `<gap-rule>` values to repeat four times.

```css live-sample___func live-sample___auto
ul {
  column-rule:
    10px maroon dashed,
    repeat(4, dotted olive 3px, dashed teal 3px),
    10px maroon dashed;
}
```

{{EmbedLiveSample("func", "", "180")}}

The flex container has nine columns, so eight gutters. The `repeat()` function repeats two style values four times, creating a list of ten `<gap-rule>` values. As there are fewer column gutters than total `<gap-rule>` values, the last two values in the list are discarded.

### Using `auto` within `repeat()`

This example demonstrates using the `auto` argument instead of an integer in the `repeat()` function.

Using `repeat(auto, <gap-rule>)` we set all column rules to `1px dotted` and default to the current color, except the first and last, which we set to `10px groove maroon`.

```css live-sample___auto
ul {
  column-rule:
    10px groove maroon,
    repeat(auto, 3px dotted maroon),
    10px groove maroon;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (column-rule: thin, thick) {
    body::before {
      content: "Your browser doesn't support multiple values for the column-rule property";
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
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule")}} shorthand
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
