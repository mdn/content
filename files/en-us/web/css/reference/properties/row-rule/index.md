---
title: "`row-rule` CSS property"
short-title: row-rule
slug: Web/CSS/Reference/Properties/row-rule
page-type: css-property
browser-compat: css.properties.row-rule
sidebar: cssref
---

The **`row-rule`** [[shorthand](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property sets the width, style, and color of the line drawn between rows in multi-row grid, flex, and multi-col layouts.

{{InteractiveExample("CSS Demo: row-rule")}}

```css interactive-example-choice
row-rule: solid;
```

```css interactive-example-choice
row-rule: dotted medium blue;
```

```css interactive-example-choice
row-rule:
  dotted medium blue,
  repeat(3, dashed magenta 1px, outset green 5px);
```

```css interactive-example-choice
row-rule:
  dotted medium blue,
  repeat(auto, dashed magenta 1px, dashed magenta 5px),
  dotted medium blue;
```

```css interactive-example-choice
row-rule:
  dotted medium blue,
  repeat(auto, dashed magenta 1px),
  outset green 5px;
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
  gap: 7px;
  text-align: left;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("row-rule-color")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("row-rule-width")}}

## Syntax

```css
/* One value */
row-rule: dotted;
row-rule: solid 8px;
row-rule: solid blue;
row-rule: thick inset blue;

/* Multiple values */
row-rule: groove, dashed, solid;
row-rule:
  dotted medium blue,
  dashed magenta 1px,
  outset green 5px;
row-rule:
  solid #0ff,
  repeat(3, dashed magenta 1px, outset green 5px);
row-rule:
  inset 3px yellow,
  repeat(auto, dashed magenta 1px, groove green 5px);

/* Global values */
row-rule: inherit;
row-rule: initial;
row-rule: revert;
row-rule: revert-layer;
row-rule: unset;
```

### Values

The `row-rule` property accepts a comma-separated list of values, including:

- `<gap-rule>`
  - : Specified as one, two, or three of the values listed below, in any order.
    - `<'line-width'>`
    - : Is a {{cssxref("&lt;line-width&gt;")}}; a positive {{cssxref("&lt;length&gt;")}} or one of the three keywords, `thin`, `medium`, or `thick`. The default value is `medium. See {{cssxref("row-rule-width")}}.
  - `<'line-style'>`
    - : A {{cssxref("&lt;line-style&gt;")}}, either `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, or `outset`. The default value is `none`. {{cssxref("row-rule-style")}}
  - `<'color'>`
    - : A {{cssxref("&lt;color&gt;")}} value representing the color of the line. The default value is `currentcolor`. {{cssxref("row-rule-color")}}

- `<gap-repeat-rule>`
  - : A {{cssxref("repeat()")}} function, with an {{cssxref("&lt;integer&gt;")}} of `1` or more as the first argument and one or more `<gap-rule>` values as subsequent arguments. The `<integer>` specifies how many times the list of `<gap-rule>` values should be repeated.

- `<gap-auto-repeat-rule>`
  - : A {{cssxref("repeat()")}} function, with `auto` as the first argument and one or more `<gap-rule>` values as subsequent arguments. The provided list of `<gap-rule>` values are repeated as many times as needed to fill in values for any row-rules that are not explicitly specified by other components of the property value.

## Description

The `row-rule` property defines the line style of any rule lines drawn in the gaps between rows in [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout), [flex](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers with more than one row.

The `row-rule` is shorthand for {{cssxref("row-rule-color")}}, {{cssxref("row-rule-style")}}, and {{cssxref("row-rule-width")}}. The `row-rule`, along with the {{cssxref("column-rule")}} shorthand property, can also be set using the {{cssxref("rule")}} shorthand.

The value is a comma-separated list of components, which can include `<gap-rule>`, `<repeated-gap-rule>`, and `<auto-repeat-gap-rule>` types. Each `<gap-rule>` defines the width, color, and style of the rule line.

If the property value consists of only one `<gap-rule>`, all the row rules will be that style. If we declare the following, all row rules will be `dashed red 3px`:

```css
row-rule: `dashed red 3px`;
```

When more than one `<gap-rule>` is declared, they will be applied to row-rules in the order specified. If there are more gutters between rows than `<gap-rule>` values, the list of lines is repeated until every row rule has a gap line. If we declare the following, for example, every odd rule will be `dashed red 3px`, and every even rule will be `dotted blue 5px`.

```css
row-rule:
  dashed red 3px,
  dotted blue 5px;
```

### Repeated line styles

The `repeat()` function, with an integer of `1` or greater as the first argument, can be used to repeat a valid list of CSS `<gap-rule>` values passed as subsequent arguments the specified number of times. This allows the same `<gap-rule>` to be repeated a set number of times without repeating the same `<gap-rule>` multiple times. The following declarations are equivalent:

```css
row-rule:
  solid red 5px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px;
row-rule:
  solid red 5px,
  repeat(3, outset blue 10px, inset green 1px);
```

This creates a list of seven rules. If the number of styles in the `row-rule` value's style list exceeds the number of gaps between rows, the excess style values are ignored. If the container has three rows, the rule in the first gutter will be `solid red 5px` and the second `outset blue 10px`.

If there are more gutters than styles, as there are no `repeat()` functions that include the keyword `auto`, the list of styles is repeated. If the container has 8, 15, 22 or 29 rows, this sequence of styles will be repeated one, two, three or four times, respectively, with the last rule being `inset green 1px`.

### Auto-repeating line styles

The `repeat()` function also accepts `auto` as the first argument instead of a positive integer. With `auto` as the first argument, the `<gap-rule>` values passed as subsequent arguments will be repeated as many times as needed to fill in values for any rules that are not explicitly specified by other components of the property value, if any.

```css
row-rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

In this case, the first and last row rules will be `solid red 5px`, and all others will alternated between `dotted green 1px` and `dashed blue 1px`. It doesn't matter if the container has 3, 6, 11, 16 or 21 rows, the first and last gutters will always have a thick solid red line painted between them (unless {{cssxref("rule-visibility-items")}} leads to no line being drawn), while all the other row rules will be thin, dotted or dashed, and green or blue, which means if there are only 2 or 3 rows, there will be no dotted or dashed lines.

The `auto` keyword within the `repeat()` function creates an auto repeater that fills in values for row rules that would not otherwise receive values from other parts of the list, preventing the list from being cycled. At most, only one `repeat(auto, <gap-rule>)` can be present in a `row-rule` value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

In this example, we define a single rule for the lines drawn between flex items.

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

We define the list to be a flex container, creating rows by setting the {{cssxref("flex-direction")}} to `column` using the {{cssxref("flex-flow")}} shorthand. We include a {{cssxref("gap")}} of `5px` to provide enough room between the rows to fit our `3px dashed red` rule:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: column;
  gap: 5px;

  row-rule: 3px red dashed;
}
```

#### Result

{{EmbedLiveSample("Basic", "", "180")}}

### Repeating values

This example demonstrates how, when there are fewer values in the list of styles than row rules, the values are repeated. It also demonstrates the default values for the the width, color, and style of `medium`, `currentcolor` and `none`, respectively.

Using the same HTML and CSS as in the previous example, we include four comma-separated `<gap-rule>` values as the `row-rule` value, omitting the width in the first `<gap-rule>`, the color in the second, the style from the third, with the fourth including all three components:

```css live-sample___repeat
ul {
  row-rule:
    red dashed,
    1px dotted,
    5px blue,
    10px magenta solid;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

The red line is `3px` wide, the dotted line is the same color as the text, and there is no `5px`-wide blue line, as the style of the third `<gap-rule>` defaults to `none`, meaning no line is painted.

### Using the `repeat()` function

This example demonstrates using the `repeat()` function within the `row-rule` property value. We use the same HTML and CSS as in the previous examples. We include a `repeat()` function, setting the list of two `<gap-rule>` values to be repeat 3 times.

```css live-sample___func live-sample___auto
ul {
  --base: 0.5vw;
  --secondary: 1vw;
  row-rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

{{EmbedLiveSample("func", "", "180")}}

The flex container has six rows, so five gutters. The `repeat()` function repeats two style values three times, creating a list of eight style values. As there are fewer row gutters than total gap-rules, the last three values in the list are discarded.

### Using `auto` within `repeat()`

This example demonstrates using `auto`, instead of an integer, within the `repeat()` function.

Using `repeat(auto, <gap-rule>)` we set all the row rules to be `1px dotted` and default to the current color, except the first and last, which we set to `3px solid red`.

```css live-sample___auto
ul {
  row-rule:
    3px red solid,
    repeat(auto, 1px dotted),
    3px red solid;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule: thin, thick) {
    body::before {
      content: "Your browser doesn't support the row-rule property";
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
- {{cssxref("row-rule-style")}}
- {{cssxref("column-rule")}} shorthand
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
