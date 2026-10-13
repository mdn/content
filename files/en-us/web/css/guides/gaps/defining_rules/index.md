---
title: Defining CSS row and columns rules
short-title: Defining rules
slug: Web/CSS/Guides/Gaps/Defining_rules
page-type: guide
sidebar: cssref
---

When creating [grid](/en-US/docs/Web/CSS/Guides/Grid_layout), [flexbox](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout), you can add decorative lines, or _rules_, in the center of the gutters between rows and columns. You can show rules in every gap or a subset of gaps, and fully animate rule widths, colors, and insets. This guide explains how to specify the width, color, and style of these rule lines.

## Overview

The [CSS gap properties](/en-US/docs/Web/CSS/Guides/Gaps#properties) module defines several properties that enable specifying the width, color, or line-style of column and row rules drawn in the gutters between adjacent columns in [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout), [flex](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers with more than one column or row.

These properties define the appearance of lines painted behind content in a container's gutters, or gaps. These lines have no effect on the [box model](/en-US/docs/Web/CSS/Guides/Box_model/Introduction) or layout. The size of the gutter is defined by the {{cssxref("gap")}} property; with the default value being `1em` on multi-column containers and `0` in all other contexts.

If a rule is wider than the {{cssxref("gap")}}, the lines are painted behind the content, so the content is not obscured. If this risks happening, though, ensure the [color contrast](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) of the content and both the background and the rule are sufficient to ensure legibility.

To learn more about specifying the spacing between adjacent boxes within a given layout context for layouts that have {{glossary("gutters")}} and gaps, see [Defining CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps/Defining_gaps).

All the rule color, line-width, and line-style properties accept a comma-separated list of values, allowing for varying gap decorations within a container.

```css
rule-color: blue;
rule-width: 10px, 20px;
rule-style: solid, dashed, solid, dotted;
```

You can use the {{cssxref("repeat()")}} function within the list to define a set number of repetitions, or to automatically add as many repetitions as needed to provide a value for every line drawn.

```css
rule-color: blue, repeat(3, green, red);
rule-width: 50px, repeat(10, 10px, 20px), 10px;
rule-style: solid, repeat(auto, dashed, dotted), solid;
```

The rule color, line-width, and line-style shorthand properties set the same values for both column and row rules.

## The `repeat()` function

Before introducing the column and row rule properties, it is important to understand the {{cssxref("repeat()")}} function.

The `repeat()` function can be used to repeat a valid list of CSS values. The first argument specifies how many times to repeat the list of values passed as subsequent arguments. This lets color, line-width, or line-style values to be repeated as many times as needed without listing them individually.

The following declarations are equivalent, with both creating a list of eight colors:

```css
rule-color: blue, yellow, red, yellow, red, yellow, red, green;
rule-color: blue, repeat(3, yellow, red), green;
```

If the number of values exceeds the number of gaps, the excess values are ignored. For example, in a 3x3 grid container, the first row and column rules will be blue and the second yellow. The other color values in the list are unused.

If there are more values than gaps, the list is cycled. In a 10x10 grid container, there are nine gaps in each direction. In this case, the last rules are blue; the first eight row and column rules are each assigned the associated color, then the list cycles, so the ninth row and column rules get the first value in the list.

The `repeat()` function accepts as it's first parameter either an {{cssxref("integer")}} of `1` or greater or the keyword `auto`. If the number is invalid (`0`, negative, missing, or a non-integer number), the entire declaration is invalid and ignored. The `auto` keyword within the `repeat()` function creates an _auto-repeater_ that fills in values that would otherwise not receive values from other parts of the list, preventing the list from cycling. A property value can include, at most, one `repeat(auto, <value-list>)` auto-repeater.

By setting the following, in a grid that is 3x3 or larger, the `blue` and `green` rules will each occur exactly once in each direction:

```css
rule-color: blue, repeat(auto, yellow, red), green;
```

In this case, `yellow` and `red` are repeated as many times as needed to fill in values for any rules that are not explicitly specified by other components of the property value. The first rule will always be blue. If there is more than one rule, the last will always be green. All other rules will cycle between `yellow` and `red`.

```css hidden live-sample___autorepeat
div {
  rule-color: blue, repeat(auto, yellow, red), green;
  grid-template-columns: repeat(12, 1fr);
}
```

{{EmbedLiveSample("autorepeat", "", "190")}}

## Line properties

Every visible rule has a color, width, and style. Each of these can be defined as a single value or as a list of values.

### Color properties

The {{cssxref("column-rule-color")}} specifies the color of the line drawn between columns, the {{cssxref("row-rule-color")}} defines the color of the rules drawn in the row gaps, while the {{cssxref("rule-color")}} sets both the `column-rule-color` and `row-rule-color` to the same value. These properties are all specified as a comma-separated list of values, including:

- {{cssxref("&lt;color&gt;")}}
  - : The color of the line as any valid `<color>` value. The default is `currentcolor`.

- `<repeat-line-color>`
  - : A {{cssxref("repeat()")}} function, with an {{cssxref("&lt;integer&gt;")}} of `1` or more as the first argument and one or more `<color>` values as subsequent arguments.

- `<auto-repeat-line-color>`
  - : A {{cssxref("repeat()")}} function, with `auto` as the first argument and one or more `<color>` values as subsequent arguments.

By using `auto` in the `repeat()` function as the value of the `rule-color` property, we can set the first and last rules to dark and all middle rules to light.

```css live-sample___color
div {
  rule-color: black, repeat(auto, lightgray), black;
}
```

{{EmbedLiveSample("color", "", "300")}}

If you change the number of columns from `6` to `4` or `8`, the first and last rules in each direction will still be `black` and all the other rules `lightgray`.

The gray horizontal lines are drawn over the black vertical lines. This is because, by default, the row rules are drawn on top of the column rules. This can be changed with the {{cssxref("rule-overlap")}} property by setting the value to `column-over-row` instead of the default `row-over-column`.

### Width properties

The {{cssxref("column-rule-width")}} specifies the width of the line drawn between columns, the {{cssxref("row-rule-width")}} defines the width of the rules drawn in the row gaps, while the {{cssxref("rule-width")}} sets both the `column-rule-width` and `row-rule-width` to the same values. These properties are all specified as a comma-separated list of values, including:

- {{cssxref("&lt;line-width&gt;")}}
  - : Defines the width of the line, either as an explicit non-negative {{cssxref("&lt;length&gt;")}} or the keywords: `thin`, `medium`, or `thick`. The default is `medium`, which generally resolves to `3px`. Custom properties that resolve to a `<line-width>` are also valid.
- `<repeat-line-width>`
  - : A `repeat()` function, with an {{cssxref("&lt;integer&gt;")}} of `1` or more as the first argument and one or more `<line-width>` values as subsequent arguments.
- `<auto-repeat-line-width>`
  - : A `repeat()` function, with `auto` as the first argument and one or more `<line-width>` values as subsequent arguments.

Unlike the {{cssxref("gap")}} properties, `rule-width` properties don't affect layout.
These properties only define rule width. Rules appear in the middle of the gap, have no effect on the size of the gap, and have no impact on the box model. Rules that are wider than the gap are drawn behind the content.

In this example, the {{cssxref("gap")}} is specified as `20px`. We define varying rule sizes using the `rule-width` property:

```css live-sample___width
div {
  rule-width: 10px, repeat(auto, 20px, 30px), 40px;
}
```

{{EmbedLiveSample("width", "", "300")}}

The black rules are centered in the gap. This is most noticeable in the first row and column gaps, where the `10px` line is drawn in the middle of the `20px` gap. Rules are drawn behind the content. This is most noticeable when `rule-width` is larger than the `gap`, and the lines show through the semi-opaque grid items.

The grid items all have black text and a semi-transparent, almost white background. Including a {{cssxref("background-color")}} on your content helps ensure that overflowing rules don't create accessibility issues. For your content to be accessible, there must be [sufficient contrast](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) between a background, be it the background color or the rule cole, and the text or other [important visual information](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)

### Line-style properties

The {{cssxref("column-rule-style")}} specifies the style of the line drawn between columns, the {{cssxref("row-rule-style")}} defines the style of the rules drawn in the row gaps, while the {{cssxref("rule-style")}} sets both the `column-rule-style` and `row-rule-style` to the same value.

These properties are all specified as a comma-separated list of values, including:

- {{cssxref("&lt;line-style&gt;")}}
  - : The keyword `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`, `none`, or `hidden` defining the line style of the drawn rule. The default is `none`.
- `<repeat-line-style>`
  - : A `repeat()` function, with an {{cssxref("&lt;integer&gt;")}} of `1` or more as the first argument and one or more `<line-style>` values as subsequent arguments.
- `<auto-repeat-line-style>`
  - : A `repeat()` function, with `auto` as the first argument and one or more `<line-style>` values as subsequent arguments.

As with {{cssxref("border")}}, the default value is `none`, so a rule must have a `<line-style>` declared with a value other than `hidden` or `none` for it to be painted.

In this example, we assign a list with seven values to the `column-rule-style` property, as the eight-column grid has seven column gaps. The `row-rule-style` declaration has only three values for four row rules, so the values cycle.

```css live-sample___style
div {
  column-rule-style: solid, dotted, dashed, double, groove, ridge, inset;
  row-rule-style: outset, none, hidden;
}
```

{{EmbedLiveSample("style", "", "300")}}

Only the `outset` rules are drawn in the row gutters as when the `<line-style>` is set to `none` or `hidden`, no line is painted.

### Shorthand properties

The {{cssxref("row-rule")}}, {{cssxref("column-rule")}}, and {{cssxref("rule")}} shorthands can be used to declare the colors, line-widths, and line-styles for one or multiple lines in a single declaration.

These shorthand properties are all specified as a comma-separated list of values, from the following list:

- `<gap-rule>`
  - : Specified as one, two, or three of the values, consisting of a {{cssxref("&lt;line-width&gt;")}}, {{cssxref("&lt;line-style&gt;")}}, and {{cssxref("&lt;color&gt;")}}, in any order. Just like with the {{cssxref("border")}} shorthand values, the `<line-style>` must be included for a line to be painted, as it otherwise defaults to `none`. The default `<line-width>` is `medium` and the default `<color>` is `current-color`.

- `<gap-repeat-rule>`
  - : A `repeat()` function, with an {{cssxref("&lt;integer&gt;")}} of `1` or more as the first argument and one or more `<gap-rule>` values as subsequent arguments.

- `<gap-auto-repeat-rule>`
  - : A `repeat()` function, with `auto` as the first argument and one or more `<gap-rule>` values as subsequent arguments.

The shorthand property declarations are similar to the constituent property values, but each value in the comma-separated list of values is a space-separated list of up to three component values. The `repeat()` function works the same way as with constituent properties, but again, each value is a space-separated list of components.

```css live-sample___shorthand
div {
  rule:
    10px solid blue,
    repeat(auto, 20px dashed teal, 5px double orange),
    15px inset rebeccapurple;
}
```

{{EmbedLiveSample("shorthand", "", "300")}}

The `rule` shorthand sets both the `column-rule` and `row-rule` to the same value.

```html hidden live-sample___autorepeat live-sample___color live-sample___width live-sample___style live-sample___shorthand
<section>
  <div>
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
    <i id="bang">!</i>
  </div>
</section>
```

```css hidden live-sample___autorepeat live-sample___color live-sample___width live-sample___style live-sample___shorthand
@layer hidden {
  div {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    rule: solid 10px;
    border: 1px solid;
    overflow: visible;
    margin: 1em;
    background-color: white;
  }
  i {
    padding: 8px;
    border: 1px dashed;
    color: black;
    background-color: #ddfc;
  }
}
@supports not (row-rule-style: solid) {
  body::before {
    content: "Your browser doesn't support these features.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

## See also

- [Overview of CSS gap decoration properties](/en-US/docs/Web/CSS/Guides/Gaps/Overview)
- [Defining CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
- [CSS borders and box decorations](/en-US/docs/Web/CSS/Guides/Borders_and_box_decorations) module
