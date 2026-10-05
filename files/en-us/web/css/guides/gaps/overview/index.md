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

Gaps and their decorations have evolved. Originally, column gaps and their decorations were limited only to [CSS multi-column layout](/en-US/docs/Web/CSS/Guides/Multicol_layout). While we could define the width, color, and line style of column rules in multi-column containers, all rules had to match; the only option spanned the full block dimension, and it was limited to columns and multi-column layouts. The supported decorations between multi-column columns were also limited. The CSS gap properties enable drawing lines in the center of each gutter in multi-column, grid, and flexbox layouts.

Grid layout has always supported gaps between rows and columns, but it originally didn't support decorations in those gutters. Before rules expanded to all gap-aware layouts, painting lines in the gaps between rows and columns in grid and flexbox layouts required hacks such as background images, borders on all items, and even absolutely positioned overlays. Fortunately, CSS has evolved. CSS gap module properties let you define column and row gaps for all gap-aware layout containers and add visible separators, called _gap decorations_, painted in the middle of gaps in both horizontal and vertical gutters that don't affect the box model.

This example demonstrates the basic gap decoration features, with a gap between the grid rows and columns containing a lime and darkviolet rule, respectively.

```css live-sample___basic live-sample___overlap live-sample___breaking live-sample___ends live-sample___visibility
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 60px;
  padding: 1rem;

  gap: 1.5rem;
  column-rule: thick solid darkviolet;
  row-rule: thick solid lime;
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

{{EmbedLiveSample("Basic", "", "210")}}

While {{cssxref("margin")}} and {{cssxref("padding")}} specify visual spacing around individual boxes, the properties in the CSS gaps module enable specifying the spacing between adjacent boxes within a given layout context for layouts that have {{glossary("gutters")}} and gaps. You can show rules in every gap or in a subset of gaps, defining fully animatable rule widths, colors, and insets.

## Gap properties

The `gap` shorthand and its constituent properties let you specify the spacing between adjacent columns and rows within a given layout context for layouts with gutters and gaps.

- {{cssxref("column-gap")}}
  - : A {{cssxref("&lt;line-width&gt;")}} or {{cssxref("&lt;length-percentage&gt;")}}: This can be one of the keywords `thin`, `medium`, or `thick`, or a positive {{cssxref("length")}} or {{cssxref("percentage")}} value, defining the width of the gap between columns. The default is `0` in flexbox and grid, and `1em` in multi-column layout.
- {{cssxref("row-gap")}}
  - : The same vocabulary as `column-gap`, defining the width of the gap between rows.
- {{cssxref("gap")}}
  - : Taking one or two values, sets both the `row-gap` and `column-gap` values at once, in that order.

While these properties may seem intuitive at first, the default size and how [percentage values for gap values](/en-US/docs/Web/CSS/Guides/Gaps/Defining_gaps#percentages) are handled differ by layout type and whether the container has a fixed size. Learn more about [defining gaps](/en-US/docs/Web/CSS/Guides/Gaps/Defining_gaps).

## Rule color, style, and width

You can control the width, color, and style of rule lines by column or row, via the `rule` shorthand, which sets both directions to the same value(s), or via rule component properties that set a line feature for column rules, row rules, or both to the same value(s).

All the properties in this section accept a comma-separated list of values, allowing for varying gap decorations within a container. You can use the {{cssxref("repeat()")}} function within the list to define a set number of repetitions, or to automatically add as many repetitions as needed to provide a value for every line drawn.

### Column rule properties

Each `column-rule-*` property accepts a comma-separated list, optionally including `repeat()` values, of the following types:

- {{cssxref("column-rule")}}
  - : Shorthand defining the {{cssxref("line-width")}} {{cssxref("line-style")}} and {{cssxref("&lt;color&gt;")}} of the column decorations.
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
  - : A {{cssxref("&lt;color&gt;")}}: The color of the rules drawn in row gaps. The default is `currentcolor`.
- {{cssxref("row-rule-style")}}
  - : The same vocabulary as `column-rule-style`, defining the line styles of the rules drawn in the row gaps.
- {{cssxref("row-rule-width")}}
  - : The same vocabulary as `column-rule-width`, defining the width of the rules drawn in the row gaps.

### Shorthand properties

The `rule-*` properties take the same values as their `column-*` property components, applying the same list of values to both axes.

- {{cssxref("rule")}}
  - : The same vocabulary as `column-rule`. Sets both the `column-rule` and `row-rule` to the same value.
- {{cssxref("rule-color")}}
  - : The same vocabulary as `column-rule-color`. Sets both the `column-rule-color` and `row-rule-color` to the same value.
- {{cssxref("rule-style")}}
  - : The same vocabulary as `column-rule-style`. Sets both the `column-rule-style` and `row-rule-style` to the same value.
- {{cssxref("rule-width")}}
  - : The same vocabulary as `column-rule-width`. Sets both the `column-rule-width` and `row-rule-width` to the same value.

## Breaking at intersections

You can set the behavior for breaking decorations at every column-row intersection.

Expanding on the first example, we set the row rules to break when they intersect a column rule, but don't break the column rules at all.

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

{{EmbedLiveSample("Breaking", "", "210")}}

- {{cssxref("column-rule-break")}}
  - : The keywords `none`, `normal`, or `intersection`, defining whether the column rules break across row gaps or run continuously.

- {{cssxref("row-rule-break")}}
  - : The same vocabulary as `column-rule-break`, defining whether the row rules break across column gaps or run continuously.

- {{cssxref("rule-break")}}
  - : A `column-rule-break` value. Sets `column-rule-break` and `row-rule-break` to the same value.

### Overlapping

If row and column rules don't break, they overlap at junction intersections. We can control whether the row rules are painted on top of the column rules, or the other way around.

Expanding on the first example, we've set the column rules to be painted over the row rules when they intersect.

```css live-sample___overlap
.grid {
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

{{EmbedLiveSample("overlap", "", "210")}}

- {{cssxref("rule-overlap")}}
  - : The keyword `row-over-column` or `column-over-row`. Sets the paint order for overlapping gap decorations when column rules and row rules intersect.

Every rule has a beginning and an end, or start and end _cap_. When you have gap decorations in both columns and rows, column rules intersect row rules at interior _junctions_. We can control the intersections and segment end points, defining whether the lines are painted to the end of the container or inset, whether the row rules are painted on top of the column rules when they intersect, or if the column rules are on top of the row rules, or even if one direction should have a continuous line, with the other dimension breaking at every junction while being offset from that junction.

The properties in this section can offset the start and end points of rule segments relative to the segment endpoints that would normally determine where rules start and end. A `*-junction` segment endpoint is a segment endpoint at a gap junction where it would otherwise meet another gap decoration segment. A `*-cap` segment endpoint is a segment endpoint that is not a junction segment endpoint. This generally includes, but is not limited to, the container's inline and block edges. A cap endpoint may also occur when a segment is not painted, such as because of a `rule-visibility-items` declaration.

In this example, the vertical decorations are continuous but inset on the ends. The horizontal decorations break at the column gap edges and are inset from the container's edges.

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

- {{cssxref("column-rule-inset")}}
  - : Shorthand for {{cssxref("column-rule-inset-cap")}} and {{cssxref("column-rule-inset-junction")}}; one to four `<inset-value>` values offsetting the starts and ends of column rule segments. Sets the cap start and cap end offsets and junction start and junction end offsets, defining where decoration segments start and end. If you set the cap insets to different values from the junction insets, separate them with a slash (`/`).

- {{cssxref("column-rule-inset-cap")}}
  - : One or two `<inset-value>` values setting the `column-rule-inset-cap-start` and the `column-rule-inset-cap-end` values. If you specify only one value, both properties are set to that value. If two values are specified, `column-rule-inset-cap-start` is set to the first value and `column-rule-inset-cap-end` is set to the second value.

- {{cssxref("column-rule-inset-cap-end")}}
  - : An `<inset-value>`, which is a `<length-percentage>` or the keyword `overlap-join`, specifying the space between the end of the segment and the edge of the container or a gap junction where no other gap decoration segments exist. Positive values inset toward the start and negative values outset. Percentages are relative to the size of the row gap the segment end abuts, plus any additional spacing added due to {{cssxref("justify-content")}} or {{cssxref("align-content")}}. If the end of the segment is the edge of the container, percentage values resolve to `0`.

- {{cssxref("column-rule-inset-cap-start")}}
  - : The same vocabulary as `column-rule-inset-cap-end`, defining the space between the start of the segment and the start edge of the container or a gap junction where no other gap decoration segment exists.
- {{cssxref("column-rule-inset-end")}}
  - : An `<inset-value>`. Sets the `column-rule-inset-cap-end` and `column-rule-inset-junction-end` to the same value.

- {{cssxref("column-rule-inset-junction")}}
  - : One or two `<inset-value>` values setting the `column-rule-inset-junction-start` and the `column-rule-inset-junction-end` values. If you specify only one value, both properties are set to that value. If two values are specified, `column-rule-inset-junction-start` is set to the first value and `column-rule-inset-junction-end` is set to the second value.

- {{cssxref("column-rule-inset-junction-end")}}
  - : An `<inset-value>`, defining the offset from the edge of the gap at the end edge of the segment. Positive values grow the segment into the gap; negative values offset the end from the gap. Percentages are relative to the width of the column gap the segment end abuts, plus any additional spacing added due to {{cssxref("justify-content")}} or {{cssxref("align-content")}}.

- {{cssxref("column-rule-inset-junction-start")}}
  - : The same vocabulary as `column-rule-inset-junction-end`, defining the interior segment offset from the end edge of the row gap at the start edge of the column rule segment.

- {{cssxref("column-rule-inset-start")}}
  - : An `<inset-value>`. Sets the `column-rule-inset-cap-start` and `column-rule-inset-junction-start` to the same value.

### Row inset properties

- {{cssxref("row-rule-inset")}}
  - : One to four `<inset-value>` values. Shorthand for {{cssxref("row-rule-inset-cap")}} and {{cssxref("row-rule-inset-junction")}}, offsets the starts and ends of all row rule segments. If setting `row-rule-inset-cap` to a different value than `row-rule-inset-junction`, separate their values with a slash (`/`).

- {{cssxref("row-rule-inset-cap")}}
  - : One or two `<inset-value>` values setting the `row-rule-inset-cap-start` and the `row-rule-inset-cap-end` values. If you specify only one value, both properties are set to that value. If two values are specified, `row-rule-inset-cap-start` is set to the first value and `row-rule-inset-cap-end` is set to the second value.

- {{cssxref("row-rule-inset-cap-end")}}
  - : The same vocabulary as `column-rule-inset-cap-end`, defining the space between the end of the row segment and the edge of the container or the edge of a column gap where no other gap decoration segment exists. Percentages are relative to the size of the column gap at the end of the segment, plus any additional spacing added by {{cssxref("justify-content")}} or {{cssxref("align-content")}}. If the end of the segment is the edge of the container, percentages resolve to `0`.

- {{cssxref("row-rule-inset-cap-start")}}
  - : The same vocabulary as `column-rule-inset-cap-start`, defining the space between the start of the segment and the start edge of the container or the start of the segment and the end edge of the column gap at column gutters where no other gap decoration segment exists.

- {{cssxref("row-rule-inset-end")}}
  - : An `<inset-value>`. Sets both the `row-rule-inset-cap-end` and `row-rule-inset-junction-end` to the same value.

- {{cssxref("row-rule-inset-junction")}}
  - : One or two `<inset-value>` values setting the `row-rule-inset-junction-start` and the `row-rule-inset-junction-end` values. If you specify only one value, both properties are set to that value. If two values are specified, `row-rule-inset-junction-start` is set to the first value and `row-rule-inset-junction-end` is set to the second value.
- {{cssxref("row-rule-inset-junction-end")}}
  - : The same vocabulary as `column-rule-inset-junction-end`, defining the space between the end of the segment and the end edge of the container or the end of the segment and the start edge of the column gap at column gutters where no other gap decoration segment exists.

- {{cssxref("row-rule-inset-junction-start")}}
  - : The same vocabulary as `column-rule-inset-junction-start`, defining the offset from the start of the gap at the start edge of the row segment at interior junctions.

- {{cssxref("row-rule-inset-start")}}
  - : An `<inset-value>`. Sets both `row-rule-inset-cap-start` and `row-rule-inset-junction-start` to the same value.

### Shorthand inset properties

- {{cssxref("rule-inset")}}
  - : A `column-rule-inset` value. Sets `column-rule-inset` and `row-rule-inset` to the same value.

- {{cssxref("rule-inset-cap")}}
  - : A `column-rule-inset-cap` value. Sets `column-rule-inset-cap` and `row-rule-inset-cap` to the same value.

- {{cssxref("rule-inset-end")}}
  - : A `column-rule-inset-end` value. Sets `column-rule-inset-end` and `row-rule-inset-end` to the same value.

- {{cssxref("rule-inset-junction")}}
  - : A `column-rule-inset-junction` value. Sets `column-rule-inset-junction` and `row-rule-inset-junction` to the same value.

- {{cssxref("rule-inset-start")}}
  - : A `column-rule-inset-start` value. Sets `column-rule-inset-start` and `row-rule-inset-start` to the same value.

## Decoration visibility

We can also define whether a gap decoration segment is painted in portions of gaps adjacent to empty areas.

In this example, note how the segments around the sections without grid items have no rules painted.

```css live-sample___visibility
.grid {
  rule-visibility-items: between;
}
```

```css hidden live-sample___visibility
@supports not (rule-visibility-items: between) {
  body::before {
    content: "Your browser doesn't support the rule-visibility-items property.";
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
  - : The keyword `all`, `around`, `between`, or `normal`. Sets decorations to be painted in all column-gap segments if at least one column area adjacent to the gap has an item, or only if both column areas adjacent to the gap between the columns have an item.
- {{cssxref("row-rule-visibility-items")}}
  - : The same vocabulary as `column-rule-visibility-items`. Sets decorations to be painted in all row-gap segments, only in a gap segment if at least one row area adjacent to the gap segment has an item, or only if both row areas adjacent to the gap segment have an item.
- {{cssxref("rule-visibility-items")}}
  - : The same vocabulary as `column-rule-visibility-items`. Sets `column-rule-visibility-items` and `row-rule-visibility-items` to the same value.

## See also

- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
- [Aligning items in a flex container](/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box alignment in grid layout](/en-US/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
