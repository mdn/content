---
title: Overview of CSS gap decoration properties
short-title: Gap decorations
slug: Web/CSS/Guides/Gaps/Overview
page-type: guide
spec-urls: https://drafts.csswg.org/css-gaps/
sidebar: cssref
---

The [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module defines the properties that let you control the space between rows and columns in CSS [grid](/en-US/docs/Web/CSS/Guides/Grid_layout), [flexbox](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout) layouts. The module also defines properties for drawing line decorations, called _rules_, within those gaps.

This guide introduces gap decorations and the properties that control their appearance.

## Introducing gap decorations

The [CSS gap properties](/en-US/docs/Web/CSS/Guides/Gaps#properties) enable drawing lines in the center of each {{glossary("gutters", "gutter")}} in multi-column, grid, and flexbox layouts. While {{cssxref("margin")}} and {{cssxref("padding")}} specify visual spacing around individual boxes, the properties in the CSS gaps module let you specify spacing between adjacent boxes within a given layout. You can show rules in every gutter, or _gap_, or in a subset of gaps, defining fully animatable rule widths, colors, and insets.

Originally, column gaps and their decorations were limited to [CSS multi-column layout](/en-US/docs/Web/CSS/Guides/Multicol_layout). You could set the width, color, and style of column rules, but all rules shared the same appearance and spanned the full block dimension.

Grid layout has always supported gaps between rows and columns, but it originally didn't support decorations in those gaps. Before rules expanded to all gap-aware layouts, painting lines in the gaps between rows and columns in grid and flexbox layouts required hacks such as background images, borders on all items, and even absolutely positioned overlays.

CSS gap module properties let you define column and row gaps for all gap-aware layout containers and add visible separators, called _gap decorations_, painted in the middle of gaps in both horizontal and vertical gaps. These decorations don't affect the box model.

This example demonstrates the basic gap decoration features, with lime and darkviolet rules in the gaps between grid rows and columns, respectively.

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

## Properties for gap sizing

The {{cssxref("gap")}} shorthand and its constituent properties let you specify the spacing between adjacent columns and rows within a given layout context for layouts with gaps.

- {{cssxref("column-gap")}}: A {{cssxref("&lt;line-width&gt;")}} or {{cssxref("&lt;length-percentage&gt;")}}: This can be one of the keywords `thin`, `medium`, or `thick`, or a positive {{cssxref("length")}} or {{cssxref("percentage")}} value, defining the width of the gap between columns. The default is `0` in flexbox and grid, and `1em` in multi-column layout.
- {{cssxref("row-gap")}}: The same vocabulary as `column-gap`, defining the width of the gap between rows.
- {{cssxref("gap")}}: Taking one or two values, sets both the `row-gap` and `column-gap` values at once, in that order.

While these properties may seem intuitive at first, the default size and how [percentage values for gap values](/en-US/docs/Web/CSS/Guides/Gaps/Defining_gaps#specifying_gap_values_as_percentages) are handled differ by layout type and whether the container has a fixed size. See [defining CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps/Defining_gaps) to learn about defining gaps in grid, flexbox, and multi-column layouts, including how percentage values are resolved.

## Rule color, style, and width

Properties control the width, color, and style of rule lines, either by column or row. The `rule-*` shorthand properties set both directions to the same value(s).

All the properties in this section accept a comma-separated list of values, allowing for varying gap decorations within a container. You can use the {{cssxref("repeat()")}} function within the list to repeat values a specified number of times or as many times as needed to style all the rules.

Each `column-rule-*` property accepts a comma-separated list, optionally including `repeat()` values:

- {{cssxref("column-rule")}}: Shorthand defining the {{cssxref("line-width")}}, {{cssxref("line-style")}}, and {{cssxref("&lt;color&gt;")}} of the column decorations.
- {{cssxref("column-rule-color")}}: A {{cssxref("&lt;color&gt;")}}: The color of the rule drawn in column gaps. The default is `currentcolor`.
- {{cssxref("column-rule-style")}}: A {{cssxref("&lt;line-style&gt;")}}: The keyword `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`, `none`, or `hidden` defining the line style of the rule drawn in column gaps. The default is `none`.
- {{cssxref("column-rule-width")}}: A {{cssxref("&lt;line-width&gt;")}}: This can be one of the keywords `thin`, `medium`, or `thick`, or a positive {{cssxref("length")}} value, representing the width of the line. The default is `medium`.

The `row-rule-*` properties follow the same syntax as their `column-rule-*` counterparts, applying the list of values to the horizontal gap decorations:

- {{cssxref("row-rule")}}: Shorthand defining the `<line-width>`, `<line-style>`, and `<color>` of the row decoration line.
- {{cssxref("row-rule-color")}}: A {{cssxref("&lt;color&gt;")}}: The color of the rules drawn in row gaps. The default is `currentcolor`.
- {{cssxref("row-rule-style")}}: The same vocabulary as `column-rule-style`, defining the line styles of the rules drawn in the row gaps.
- {{cssxref("row-rule-width")}}: The same vocabulary as `column-rule-width`, defining the width of the rules drawn in the row gaps.

The `rule-*` shorthand properties take the same values as their `column-*` property components, applying the same list of values to both axes:

- {{cssxref("rule")}}: The same vocabulary as `column-rule`. Sets both the `column-rule` and `row-rule` to the same value.
- {{cssxref("rule-color")}}: The same vocabulary as `column-rule-color`. Sets both the `column-rule-color` and `row-rule-color` to the same value.
- {{cssxref("rule-style")}}: The same vocabulary as `column-rule-style`. Sets both the `column-rule-style` and `row-rule-style` to the same value.
- {{cssxref("rule-width")}}: The same vocabulary as `column-rule-width`. Sets both the `column-rule-width` and `row-rule-width` to the same value.

See [Defining CSS gap rules](/en-US/docs/Web/CSS/Guides/Gaps/Defining_rules) to learn more about defining CSS gap rules, including using the `repeat()` function, to define rule colors, widths, and styles.

## Splitting rules into segments

In grid and multi-column layouts, rules stretch across the container's entire block and inline dimensions by default. The `*-rule-break` properties enable splitting lines that span across multiple rows or columns into multiple segments. You can set the behavior for breaking rule lines at every intersection using the following properties:

- {{cssxref("column-rule-break")}}: The keywords `none`, `normal`, or `intersection` specify whether the column rules break across row gaps or run continuously.
- {{cssxref("row-rule-break")}}: The same vocabulary as `column-rule-break`, specifying whether the row rules break across column gaps or run continuously.
- {{cssxref("rule-break")}}: Sets `column-rule-break` and `row-rule-break` to the same value.

Expanding on the first example, we split the row rules into separate segments at column gaps while keeping the column rules continuous.

```css live-sample___breaking
.grid {
  column-rule-break: none;
  row-rule-break: intersection;
}
```

```css hidden live-sample___breaking
@supports not (rule-break: intersection) {
  body::before {
    content: "Your browser doesn't support the rule-break properties ";
  }
}
```

{{EmbedLiveSample("Breaking", "", "210")}}

By default, when the lines are set to break, internal segments end at the edge of the gap without crossing into it, while segments that abut the container's edge are drawn up to the edge of the container's [content box](/en-US/docs/Web/CSS/Reference/Values/box-edge#content-box).

## Controlling the length of rule segments

The `*-rule-inset-*` properties let you change rule-segment lengths by insetting or outsetting segment ends relative to where the segment would normally start or end.

By default, continuous rules are drawn from one end of the container to the other. The rules end at the container edge where no other rule segments are present; these rules have two _cap_ segment endpoints. The start is the _cap-start_ edge, and the end is the _cap-end_ edge.

When a rule breaks into segments, the edge type depends on whether it meets other rule segments at that edge. Column rules intersect row rules at interior _junctions_. When a rule segment starts or ends at an interior junction where other rule segments are present, those edges are _junction-start_ and _junction-end_ edges, respectively.

The `*-rule-inset-junction-*` properties define the endpoints at gap junctions where other segments are present. The `*-rule-inset-cap-*` properties define the segment offset for segment endpoints that are not junction endpoints, including endpoints at the container's inline and block edges and at intersections where the {{cssxref("rule-visibility-items")}} property has prevented additional segments from being painted.

In this example, the column rules are continuous but shortened on at both the top and bottom, with their cap edges inset `10px` using the {{cssxref("column-rule-inset-cap")}} shorthand property. The row rules are split into segments at the column gap edges using the `row-rule-break` property. We set `row-rule-inset-cap` to `-20px` to set the cap ends to outset. The junction ends are inset with the {{cssxref("row-rule-inset-junction")}} property set to `10px`. We could also have used the {{cssxref("row-rule-inset")}} shorthand set to `-20px / 10px`, which defines the cap and junction insets in that order.

```css live-sample___ends
.grid {
  row-rule-break: intersection;
  column-rule-inset-cap: 10px;
  row-rule-inset-cap: -20px;
  row-rule-inset-junction: 10px;
}
```

```css hidden live-sample___ends
.grid {
  row-rule-style: solid;
}

@supports not (row-rule-inset-cap: -20px) {
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

### Column rule inset properties

The `column-rule-inset-*` properties enable insetting column segment cap and junction edges, controlling the segment starts, ends, or or both.

#### Column rule inset cap properties

The `column-rule-inset-cap-*` properties specify the space between the segment and the container edge or gap junction where no other gap decoration segments exist. Positive values make the segment smaller, while negative values make the segments longer. The properties accept `<inset-value>` values, which are either `<length-percentage>` values defining the space between the top or bottom of the column segment and the bottom or top of the row gutter or the top or bottom edge of the container, or the `overlap-join` keyword, which resolves to `0` for cap edges. If the segment ends at the container's edge, percentage values resolve to `0`. Otherwise, percentages are relative to the row gap size, plus spacing added by the {{cssxref("align-content")}} property.

- {{cssxref("column-rule-inset-cap-end")}}: Defines the space between the end, or top, of the column rule segment and, depending on whether the segment starts at the top of the container or at an interior junction, either the start edge of the container or the bottom edge of the row gutter, respectively.

- {{cssxref("column-rule-inset-cap-start")}}: Defines the space between the start, or top, of the column rule segment and, depending on whether the segment starts at the top of the container or at an interior junction, either the start edge of the container or the bottom edge of the row gutter, respectively.

- {{cssxref("column-rule-inset-cap")}} shorthand: Specifies both the `column-rule-inset-cap-start` and `column-rule-inset-cap-end` as one or two `<inset-value>` values. If you specify only one value, both properties are set to that value. If you specify two values, the first sets `column-rule-inset-cap-start` and the second sets `column-rule-inset-cap-end`.

#### Column rule inset junction properties

The `column-rule-inset-junction-*` properties specify the space between the segment and the edge of the row gutter at junctions with other rule segments. Positive values make the segment smaller, while negative values and the `overlap-join` keyword value make the segments longer. Percentage values are relative to the row gap size, plus spacing added by the {{cssxref("align-content")}} property.

- {{cssxref("column-rule-inset-junction-end")}}: Defines the space between the end, or bottom, of the column rule segment and the top edge of the row gutter below the segment.

- {{cssxref("column-rule-inset-junction-start")}}: Defines the space between the start, or top, of the column rule segment and the bottom edge of the row gutter above the segment.

- {{cssxref("column-rule-inset-junction")}} shorthand: Specifies both the `column-rule-inset-junction-start` and `column-rule-inset-junction-end` properties as one or two values. If you specify only one value, both properties are set to that value. If you specify two values, the first sets `column-rule-inset-junction-start` and the second sets `column-rule-inset-junction-end`.

#### Column cap and junction shorthand properties

You can use the `column-rule-inset-*` properties to set cap and junction insets to the same value, while the `column-rule-inset` shorthand can be used to set the edges to a independent values:

- {{cssxref("column-rule-inset-end")}}: The single `<inset-value>` sets both the `column-rule-inset-cap-end` and `column-rule-inset-junction-end` to the same value, defining the bottom insets of all column segments.

- {{cssxref("column-rule-inset-start")}}: The single `<inset-value>` sets both the `column-rule-inset-cap-start` and `column-rule-inset-junction-start` to the same value, defining the top insets of all column segments.

- {{cssxref("column-rule-inset")}} shorthand: Specifies the `column-rule-inset-cap-start`, `column-rule-inset-cap-end`, `column-rule-inset-junction-start`, and `column-rule-inset-junction-end` properties as one to four `<inset-value>` values. If you set the cap insets to different values from the junction insets, separate them with a slash (`/`). This property offers more control than the `column-rule-inset-end` and `column-rule-inset-start` shorthands, letting you set cap and junction edges to different values.

### Row inset properties

The `row-rule-inset-*` properties let you inset row segment edges. Whether the left or right is the start edge depends on the writing mode: in left-to-right languages, like English, the start is the left edge, and the end is the right edge.

#### Row rule inset cap properties

As with the `column-rule-inset-cap-*` properties, the `row-rule-inset-cap-*` properties specify the space between the segment cap edge and the container or gap junction where no other segments exist. The `<length-percentage>` values define the space between the left or right of the segment and the right or left of the column gutter at interior junctions where no other gap decoration segment exists, or the left or right edge of the container. Percentages are relative to the size of the abutting column gap, plus any additional spacing added by {{cssxref("justify-content")}} property. If the end of the segment is the edge of the container, percentages resolve to `0`. The `overlay-join` value also resolves to `0`.

- {{cssxref("row-rule-inset-cap-end")}}: Defines the space between the end of the row segment and the edge of the container or the edge of a column gap where no other gap decoration segment exists; whether this is the left or the right edge of the segment depends on the writing mode.

- {{cssxref("row-rule-inset-cap-start")}}: The same as `row-rule-inset-cap-start`, but for the start edge instead of the end edge of the segment.

- {{cssxref("row-rule-inset-cap")}} shorthand: One or two `<inset-value>` values setting the `row-rule-inset-cap-start` and the `row-rule-inset-cap-end` values. If you specify only one value, both properties are set to that value. If two values are specified, `row-rule-inset-cap-start` is set to the first value and `row-rule-inset-cap-end` is set to the second value.

#### Row rule inset junction properties

The `row-rule-inset-junction-*` properties specify the space between the segment and the edge of the column gutter at junctions with other rule segments. Positive values make the segments smaller, while negative values and the `overlap-join` keyword value make the segments longer. Percentage values are relative to the column gap size, plus spacing added by the {{cssxref("justify-content")}} property.

- {{cssxref("row-rule-inset-junction-end")}}: Defines the space between the end of the segment and the start of the column gap. Whether the `end` is the left or the right side of the segment depends on the writing mode.

- {{cssxref("row-rule-inset-junction-start")}}: Defines the space between the start of the segment and the end of the column gap.

- {{cssxref("row-rule-inset-junction")}} shorthand: One or two `<inset-value>` values setting the `row-rule-inset-junction-start` and the `row-rule-inset-junction-end` values. If you specify only one value, both properties are set to that value. If two values are specified, the first specifies the `row-rule-inset-junction-start` and the second the `row-rule-inset-junction-end` value.

#### Row cap and junction shorthand properties

You can use the `row-rule-inset-*` properties to set cap and junction insets to the same value, while the `row-rule-inset` shorthand can be used to set row segment edges to a independent values:

- {{cssxref("row-rule-inset-end")}}: The single `<inset-value>` defines the end inset of all row segments, setting both the `row-rule-inset-cap-end` and `row-rule-inset-junction-end` to the same value.

- {{cssxref("row-rule-inset-start")}}: The single `<inset-value>` defines the start inset of all row segments, setting both the `row-rule-inset-cap-start` and `row-rule-inset-junction-start` to the same value.

- {{cssxref("row-rule-inset")}} shorthand: Specifies the `row-rule-inset-cap-start`, `row-rule-inset-cap-end`, `row-rule-inset-junction-start`, and `row-rule-inset-junction-end` properties as one to four `<inset-value>` values. If you set the cap insets to different values from the junction insets, separate them with a slash (`/`). This property offers more control than the `row-rule-inset-end` and `row-rule-inset-start` shorthands, letting you set row cap and junction start and end edges to different values.

### Column and row shorthands

When setting both column and row insets to the same values, you can use a `rule-inset-*` shorthand, including:

- {{cssxref("rule-inset-cap")}}: Sets `column-rule-inset-cap` and `row-rule-inset-cap` to the same value.

- {{cssxref("rule-inset-junction")}}: Sets `column-rule-inset-junction` and `row-rule-inset-junction` to the same value.

- {{cssxref("rule-inset-end")}}: Sets `column-rule-inset-end` and `row-rule-inset-end` to the same value.

- {{cssxref("rule-inset-start")}}: Sets `column-rule-inset-start` and `row-rule-inset-start` to the same value.

- {{cssxref("rule-inset")}}: Sets `column-rule-inset` and `row-rule-inset` to the same values. Specifies the `rule-inset-cap-start`, `rule-inset-cap-end`, `rule-inset-junction-start`, and `rule-inset-junction-end` properties as one to four `<inset-value>` values. If you set the cap insets to different values from the junction insets, separate them with a slash (`/`).

See [Defining rule insets](/en-US/docs/Web/CSS/Guides/Gaps/Rule_insets) to learn more about defining CSS gap rule insets, including breaking rules into segments, and understanding how to control insets at cap and junction edges.

## Controlling rule visibility

You can define whether rule segments are painted in portions of gaps adjacent to empty areas.

In this example, note how no rule segments are painted alongside the empty grid areas.

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

- {{cssxref("column-rule-visibility-items")}}: Specifies whether the segments of column rules that are set to break should to be painted in all column gaps, in a column gap section if at least one column area adjacent to the gap has an item, or only if both column areas adjacent to the gap have an item. Valid values include the `all`, `around`, `between`, and `normal` keywords.
- {{cssxref("row-rule-visibility-items")}}: The same as `column-rule-visibility-items`, but for row rule segments.
- {{cssxref("rule-visibility-items")}}: Sets the `column-rule-visibility-items` and `row-rule-visibility-items` properties to the same value.

## Controlling rule overlap

If row and column rules don't break, they overlap at junction intersections. Broken rules with junction edges set to `overlap-join` also overlap. And, depending on the size of the gap, the size of the rule, and the value of the inset, negative insets may also cause rule segment junction edges to overlap. We can control whether row rules are painted over column rules, or vice versa, with the {{cssxref("rule-overlap")}} property.

Expanding on the first example on this page, we've set the column rules to be painted over the row rules when they intersect.

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

- {{cssxref("rule-overlap")}}: Sets the paint order where row rules and column rules overlap as either the keyword `row-over-column` or `column-over-row`.

## See also

- [Defining CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [Defining CSS rules](/en-US/docs/Web/CSS/Guides/Gaps/Defining_rules)
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
- [Aligning items in a flex container](/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box alignment in grid layout](/en-US/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
