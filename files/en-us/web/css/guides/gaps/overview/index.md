---
title: Overview of CSS gap decoration properties
short-title: Gap decorations
slug: Web/CSS/Guides/Gaps/Overview
page-type: guide
spec-urls: https://drafts.csswg.org/css-gaps/
sidebar: cssref
---

The [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module defines the properties that let you set spacing and draw line decorations within gaps in CSS [grid](/en-US/docs/Web/CSS/Guides/Grid_layout), [flexbox](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout) layouts.

This guide provides an overview of the features introduced in the specification, linking to reference pages and other guides providing more information and examples for the features discussed.

## Overview

Gaps and their decorations have evolved. Originally, column gaps and their decorations were limited only [CSS multi-column layout](/en-US/docs/Web/CSS/Guides/Multicol_layout). While we could define the width, color, and line-style of column rules in multi-col containers, all the rules had to be the same, the only option spanned the full block-dimension, and it was limited: only columns, and only on multi-col layout. And the decorations that were supported between mutli-col columns were limited. The {{cssxref("column-rule")}} property, which enables drawing a line in the center each gutter, was originally limited to multi-column layout, and originally not a shorthand.

Grid layout has always supported gaps between rows and columns, but originally did not support decorations in those gutters. Before rules were expanded to all gap-aware layouts, painting lines in the gaps between rows and columns in grid and flexbox required hacks, such as backgrounds images, adding borders on all items, and even absolutely positioned overlays. Fortunately CSS has evolved. CSS gap module properties support defining column and row gaps for all gap-aware layout containers, and defining visible separators, called _gap decorations_, painted in the middle of gaps in both horizontal and vertical gutters, that don't impact the box model.

This example demonstrates the basic gap decoration features, with a gap between the grid rows and columns containing a dashed lime and solid darkviolet rule, respectively.

```css live-sample___basic live-sample___overlap live-sample___breaking live-sample___ends live-sample___visibility
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 60px;
  padding: 1rem;

  gap: 1.5rem;
  column-rule: thick solid darkviolet;
  row-rule: thick dashed lime;
}
```

```css hidden live-sample___basic live-sample___overlap live-sample___breaking live-sample___ends live-sample___visibility
.grid {
  outline: 2px solid;
  margin: 1rem;
  font-family: monospace;
  font-size: 1.5em;
  background: #efefef;
}
.grid > div {
  outline: 1px solid;
  align-items: center;
  justify-content: center;
  display: flex;
  background: #e0e0e0;
}

@supports not (row-rule: solid thin darkviolet) {
  body::before {
    content: "Your browser doesn't support the row-rule property ";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

```html hidden live-sample___basic live-sample___overlap live-sample___breaking
<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
```

{{EmbedLiveSample("Basic", "", "200")}}

While {{cssxref("margin")}} and {{cssxref("padding")}} specify visual spacing around individual boxes, the properties in this module enable specifying the spacing between adjacent boxes within a given layout context for layouts that have {{glossary("gutters")}} and gaps, when the spacing is different between sibling boxes as opposed to between the first box, last box, and the container's edge. You can show rules in every gap or in a subset of gaps, defining fully animatable rule widths, colors, and insets.

## Gap properties

The properties in the CSS gaps module enable specifying the spacing between adjacent columns and rows within a given layout context for layouts that have gutters and gaps.

- {{cssxref("column-gap")}}
  - : A {{cssxref("&lt;line-width&gt;")}} or {{cssxref("&lt;length-percentage&gt;")}}: This can be one of the keywords `thin`, `medium`, or `thick`, or a positive {{cssxref("length")}} or {{cssxref("percentage")}} value, defining the width of the gap between columns. The default is `0` in flexbox and grid, and `1em` in multi-col layout.
- {{cssxref("row-gap")}}
  - : The same vocabulary as `column-gap`, defining the width of the gap between rows.
- {{cssxref("gap")}}
  - : Taking one or two values, sets both the `row-gap` and `column-gap` values at once, in that order.

While these properties may seem intuitive at first, the default size and how [percentage values for gap values](/en-US/docs/Web/CSS/Guides/Gaps/Defining_gaps#percentages) are handled differ depending on the layout type and whether the container has a fixed size. Learn more about [defining gaps](/en-US/docs/Web/CSS/Guides/Gaps/Defining_gaps).

## Rule color, style, and width

We can control the width, color and style or rule lines either by column or row, via the `rule` shorthand that sets both at once, or via rule component properties that set a line feature for both column rules and row rules.

All the properties in this section accept a comma-separated list of values, allowing for varying gap decorations within a container. You can use the `repeat()` function within the list to define a set number of repetitions, or to automatically add as many repetitions as needed to provide a value for every line drawn.

### Column rule properties

Each `column-rule-*` property accepts a comma-separated list, optionally including `repeat()` values, of the following types:

- {{cssxref("column-rule")}}
  - : Shorthand defining the `<line-width>` `<line-style>` and `<color>` of the column decoration line
- {{cssxref("column-rule-color")}}
  - : A {{cssxref("&lt;color&gt;")}}: The color of the rule drawn in column gaps. The default is `currentcolor`.
- {{cssxref("column-rule-style")}}
  - : A {{cssxref("&lt;line-style&gt;")}}: The keyword `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`, `none`, or `hidden` defining the line style of the rule drawn in column gaps. The default is `none`.
- {{cssxref("column-rule-width")}}
  - : A {{cssxref("&lt;line-width&gt;")}}: This can be one of the keywords `thin`, `medium`, or `thick`, or a positive {{cssxref("length")}} value, representing the width of the line. The default is `medium`.

### Row rule properties

The `row-rule-*` properties follow the same syntax as their `column-*` property counterparts, applying the list of values to the horizontal gap decorations.

- {{cssxref("row-rule")}}
  - : Shorthand defining the `<line-width>` `<line-style>` and `<color>` of the row decoration line
- {{cssxref("row-rule-color")}}
  - : A {{cssxref("&lt;color&gt;")}}: The color of the rule drawn in row gaps. The default is `currentcolor`.
- {{cssxref("row-rule-style")}}
  - : The same vocabulary as `column-rule-style`, defining the line style of the rule drawn in row gaps.
- {{cssxref("row-rule-width")}}
  - : The same vocabulary as `column-rule-width`, defining the width of the rule drawn in row gaps.

### Shorthand properties

The `rule-*` properties take the same values as their `column-*` property components, applying the same list of values to both axes.

- {{cssxref("rule")}}
  - : The same vocabulary as `column-rule`. Sets both the `column-rule` and `row-rule` to the same value.
- {{cssxref("rule-color")}}
  - : The same vocabulary as `column-rule-color`. Sets `column-rule-color` and `row-rule-color` to the same value.
- {{cssxref("rule-style")}}
  - : The same vocabulary as `column-rule-style`. Sets `column-rule-style` and `row-rule-style` to the same value.
- {{cssxref("rule-width")}}
  - : The same vocabulary as `column-rule-width`. Sets `column-rule-width` and `row-rule-width` to the same value.

## Breaking at intersections

There are properties to set the behavior for breaking decorations within a given gap into segments at every column and row gap, when a column rule meets or intersects with a row rule.

This example is the same as the first example, but we set the row rules to break when they intersect a column rule, and the column rules to not break at all.

```css live-sample___breaking
.grid {
  column-rule-break: none;
  row-rule-break: intersection;
}
```

```css hidden live-sample___breaking
@supports not (row-rule: solid thin darkviolet) {
  body::before {
    content: "Your browser doesn't support the row-rule property ";
  }
}
```

{{EmbedLiveSample("Breaking", "", "200")}}

- {{cssxref("column-rule-break")}}
  - : The keywords `none`, `normal`, or `intersection`, defining whether the rule breaks across column gaps or runs continuous.

- {{cssxref("row-rule-break")}}
  - : The same vocabulary as `column-rule-break`, defining whether the rule breaks across row gaps or runs continuous.

- {{cssxref("rule-break")}}
  - : A `column-rule-break` value. Sets `column-rule-break` and `row-rule-break` to the same value.

### Overlapping

If our rules and columns don't break, they'll overlap. We can control whether the row rules are painted on top of the column rules, or the other way around.

This example is almost the same as the first example on this page, but we've made the `row-rule-style` solid and set the column rules to be painted over the row rules when they intersect.

```css live-sample___overlap
.grid {
  row-rule-style: solid;
  rule-overlap: column-over-row;
}
```

```css hidden live-sample___overlap
@supports not (rule-overlap: row-over-column) {
  body::before {
    content: "Your browser doesn't support the rule-overlap property ";
  }
}
```

{{EmbedLiveSample("overlap", "", "200")}}

- {{cssxref("rule-overlap")}}
  - : The keyword `row-over-column` or `column-over-row`. Sets the paint order for overlapping gap decorations, when a column rule and row rule intersect.

Every rule has a beginning and an end, or start and end _cap_. When you have gap decorations in both columns and rows, every rule will intersect another rule at a _junction_. We can control these end points and intersections, defining whether the lines are painted to the end of the container or inset, whether the row rules are painted on top of the column rules when they intersect, or if the column rules on top of the row rule, or even if one direction should have a continuous line, with the other dimension being offset from the junction.

The properties in this section can be used to offset the start and end points of gap decorations relative to the segment endpoints which would normally determine where decorations start and end. A `*-junction` segment endpoint is a segment endpoint at a gap junction where it would otherwise meet another gap decoration segment. A `*-cap` segment endpoint is a segment endpoint that is not a junction segment endpoint. This is generally, but not limited to, the container's inline and block edges. A cap endpoint may also occur when a segment is not painted, such as because of a `rule-visibility-*` declaration.

In this example, the vertical decorations are continuous but inset on the ends. The horizontal decorations break at the gap edge, and are inset from the outer edges of the container.

```css live-sample___ends
.grid {
  row-rule-break: intersection;
  row-rule-inset: 30px / 0;
  column-rule-inset: 10px;
}
```

```css hidden live-sample___ends
.grid {
  row-rule-style: solid;
}

@supports not (rule-break: intersection) {
  body::before {
    content: "Your browser doesn't support all the gap decoration properties.";
  }
}
```

```html hidden live-sample___ends
<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>
```

{{EmbedLiveSample("ends", "", "320")}}

### Column inset properties

- {{cssxref("column-rule-inset-cap-end")}}
  - : An `<inset-value>`, which is a `<length-percentage>` or the keyword `overlap-join`, defining space between the end of the segment and the edge of the container or a gap junction where no other gap decoration segment exists. Positive values offset in the start direction, and negative values offset in the end direction. Percentages are relative to the width of the column gap the end of the segment abuts, plus any additional spacing added due to {{cssxref("justify-content")}} or {{cssxref("align-content")}}. If the end of the segment is the edge of the container, a percentage value will resolve to `0`.

- {{cssxref("column-rule-inset-cap-start")}}
  - : The same vocabulary as `column-rule-inset-cap-end`, defining the space between the start of the segment and the start edge of the container or a gap junction where no other gap decoration segment exists.

- {{cssxref("column-rule-inset-junction-end")}}
  - : An `<inset-value>`, defining the offset from the edge of the gap at the end edge of the segment. Positive values grow the segment into the gap, negative value offset the end from the gap. Percentages are relative to the width of the column gap the end of the segment abuts, plus any additional spacing added due to {{cssxref("justify-content")}} or {{cssxref("align-content")}}.

- {{cssxref("column-rule-inset-junction-start")}}
  - : The same vocabulary as `column-rule-inset-junction-end`, defining the offset from the start of the gap at the start edge of the gap decoration segment.

- {{cssxref("column-rule-inset-cap")}}
  - : One or two `<inset-value>` values setting the `column-rule-inset-cap-start` and the `column-rule-inset-cap-end` values. If only one value is specified, both properties are set to that value. If two values are specified, `column-rule-inset-cap-start` is set to the first value and `column-rule-inset-cap-end` is set to the second value.

- {{cssxref("column-rule-inset-junction")}}
  - : One or two `<inset-value>` values setting the `column-rule-inset-junction-start` and the `column-rule-inset-junction-end` values. If only one value is specified, both properties are set to that value. If two values are specified, `column-rule-inset-junction-start` is set to the first value and `column-rule-inset-junction-end` is set to the second value.

- {{cssxref("column-rule-inset-end")}}
  - : An `<inset-value>`. Sets both the `column-rule-inset-cap-end` and `column-rule-inset-junction-end` to the same value.

- {{cssxref("column-rule-inset-start")}}
  - : An `<inset-value>`. Sets both `column-rule-inset-cap-start` and `column-rule-inset-junction-start` to the same value.

- {{cssxref("column-rule-inset")}}
  - : One to four `<inset-value>` values. Shorthand for {{cssxref("column-rule-inset-cap")}} and {{cssxref("column-rule-inset-junction")}} offsetting the start and end points of column rule segments. Sets the four offsets of cap start and cap end and junction start and junction end defining where decoration segments start and end, inset from the edges of the column gap. If setting inset cap to a different value than inset junction, separate their values with a slash (`/`).

### Row inset properties

- {{cssxref("row-rule-inset-cap-end")}}
  - : The same vocabulary as `column-rule-inset-cap-end`, defining space between the end of the segment and the edge of the container or a gap junction where no other gap decoration segment exists. Percentages are relative to the width of the row gap the end of the segment, plus any additional spacing added due to {{cssxref("justify-content")}} or {{cssxref("align-content")}}. If the end of the segment is the edge of the container, percentages resolve to `0`.

- {{cssxref("row-rule-inset-cap-start")}}
  - : The same vocabulary as `column-rule-inset-cap-start`, defining the space between the start of the segment and the start edge of the container or a gap junction where no other gap decoration segment exists.

- {{cssxref("row-rule-inset-junction-end")}}
  - : The same vocabulary as `column-rule-inset-junction-end`. Percentages are relative to the width of the row gap the end of the segment abuts, plus spacing added due to {{cssxref("justify-content")}} or {{cssxref("align-content")}}.

- {{cssxref("row-rule-inset-junction-start")}}
  - : The same vocabulary as `column-rule-inset-junction-start`, defining the offset from the start of the gap at the start edge of the gap decoration segment.

- {{cssxref("row-rule-inset-cap")}}
  - : One or two `<inset-value>` values setting the `row-rule-inset-cap-start` and the `row-rule-inset-cap-end` values. If only one value is specified, both properties are set to that value. If two values are specified, `row-rule-inset-cap-start` is set to the first value and `row-rule-inset-cap-end` is set to the second value.

- {{cssxref("row-rule-inset-junction")}}
  - : One or two `<inset-value>` values setting the `row-rule-inset-junction-start` and the `row-rule-inset-junction-end` values. If only one value is specified, both properties are set to that value. If two values are specified, `row-rule-inset-junction-start` is set to the first value and `row-rule-inset-junction-end` is set to the second value.

- {{cssxref("row-rule-inset-end")}}
  - : An `<inset-value>`. Sets both the `row-rule-inset-cap-end` and `row-rule-inset-junction-end` to the same value.

- {{cssxref("row-rule-inset-start")}}
  - : An `<inset-value>`. Sets both `row-rule-inset-cap-start` and `row-rule-inset-junction-start` to the same value.

- {{cssxref("row-rule-inset")}}
  - : One to four `<inset-value>` values. Shorthand for {{cssxref("row-rule-inset-cap")}} and {{cssxref("row-rule-inset-junction")}} offsetting the start and end points of row rule segments. Sets the four offsets of cap start and cap end and junction start and junction end defining where decoration segments start and end, inset from the edges of the row gap. If setting inset cap to a different value than inset junction, separate their values with a slash (`/`).

### Shorthand inset properties

- {{cssxref("rule-inset")}}
  - : A `column-rule-inset` value. Sets `column-rule-inset` and `row-rule-inset` to the same value.

- {{cssxref("rule-inset-cap")}}
  - : A `column-rule-inset-cap` value. Sets c`olumn-rule-inset-cap` and `row-rule-inset-cap` to the same value.

- {{cssxref("rule-inset-end")}}
  - : A `column-rule-inset-end` value. Sets `column-rule-inset-end` and `row-rule-inset-end` to the same value.

- {{cssxref("rule-inset-junction")}}
  - : A `column-rule-inset-junction` value. Sets `column-rule-inset-junction` and `row-rule-inset-junction` to the same value.

- {{cssxref("rule-inset-start")}}
  - : A `column-rule-inset-start` value. Sets `column-rule-inset-start` and `row-rule-inset-start` to the same value.

## Decoration visibility

We can also define whether You can control whether a gap decoration segment is painted in portions of gaps adjacent to empty areas.

In this example, note how the segments around the sections without grid items have no rules painted.

```css live-sample___visibility
.grid {
  rule-visibility-items: between;
}
```

```css hidden live-sample___visibility
@supports not (rule-visibility-items: between) {
  body::before {
    content: "Your browser doesn't support all the rule-visibility-items property.";
  }
}
```

```html hidden live-sample___visibility
<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
</div>
```

{{EmbedLiveSample("visibility", "", "340")}}

- {{cssxref("column-rule-visibility-items")}}
  - : The keyword `all`, `around`, `between`, or `normal`. Sets decorations to be painted in all column gap segments, only if at least one column area adjacent to the gap has an item, or only if both column areas adjacent to the gap between the columns have an item.
- {{cssxref("row-rule-visibility-items")}}
  - : The same vocabulary as `column-rule-visibility-items`. Sets decorations to be painted in all row gap segments, only in a gap segment if at least one row area adjacent to the row gap segment has an item, or only if both row areas adjacent to the row gap segment have an item.
- {{cssxref("rule-visibility-items")}}
  - : The same vocabulary as `column-rule-visibility-items`. Sets `column-rule-visibility-items` and `row-rule-visibility-items` to the same value.

## See also

- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
- [Aligning items in a flex container](/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box alignment in grid layout](/en-US/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
