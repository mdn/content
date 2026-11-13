---
title: Defining rule insets
short-title: Defining rule insets
slug: Web/CSS/Guides/Gaps/Rule_insets
page-type: guide
sidebar: cssref
---

When creating [grid](/en-US/docs/Web/CSS/Guides/Grid_layout), [flexbox](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout) layouts using [CSS gap properties](/en-US/docs/Web/CSS/Guides/Gaps#properties), you can define and control gaps between columns and rows and the line decorations, or rules, within those gaps. The ends of the rules can be inset or outset. Rules that cross gutters can also be broken into segments at each gutter intersection. These segments can also be inset or outset. This guide explains how to break rules into segments and inset the edges of those segments.

## Overview

By default, there are no gaps between grid rows, grid columns, flex rows, or flex items, while there is a `1em` wide gap between columns in multi-column layouts. With the {{cssxref("gap")}} shorthand and its constituent properties, you can control the spacing between adjacent columns and rows (and flex items) within a given layout context. See [defining CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps/Defining_gaps) to learn about defining gaps in grid, flexbox, and multi-column layouts.

By default, nothing visible is added between rows and columns. The {{cssxref("rule")}} shorthand and its constituent properties define the color, width, and style of the rules drawn in those gaps. The rule must have a visible style to be rendered. See [Defining CSS gap rules](/en-US/docs/Web/CSS/Guides/Gaps/Defining_rules) to learn more about defining CSS gap rules to define rule colors, widths, and styles.

By default, in grid and multi-column layouts, row and column rules span the full width of the row or the full height of the column, respectively. In flexbox, the rules between flex lines span the entire container. By default, these rules start and end at the container's [content box](/en-US/docs/Web/CSS/Reference/Values/box-edge#content-box) edge. CSS gap module `*-rule-inset-cap-*` properties enable insetting or outsetting the start and end of these unbroken rules.

Rules between flex items in multi-line flex containers don't span the entire container. Rather, the rule segments between flex items span the cross-dimension of the flex line. You can also break rules that span the entire container into segments by setting rules to break line decoration rules where row and column gaps intersect. These rule segments can also be inset or outset at one or both edges. The CSS gap module `*-rule-inset-junction-*` properties enable insetting or outsetting the start and ends of these rule segments at interior junctions where a segment meets or intersects another segment, while the `*-rule-inset-cap-*` properties are used to inset the edges that abut the container's edge, and also at intersections where no other rule segments meet or intersect the segment.

## Splitting rules into segments

In grid and multi-column layouts, rules stretch across the container's entire block and inline dimensions by default. The `*-rule-break` properties enable splitting lines that span across multiple rows or columns into multiple segments. You can set the behavior for breaking rule lines at every intersection using the following properties:

- {{cssxref("column-rule-break")}}: The keywords `none`, `normal`, or `intersection` specify whether the column rules break across row gaps or run continuously.
- {{cssxref("row-rule-break")}}: The same vocabulary as `column-rule-break`, specifying whether the row rules break across column gaps or run continuously.
- {{cssxref("rule-break")}}: Sets `column-rule-break` and `row-rule-break` to the same value.

In this demonstration, you can split the row or column rules (or both) into separate segments at column and row gaps, or keep the rules continuous.

```css hidden live-sample___overlap live-sample___breaking
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

```css hidden live-sample___overlap live-sample___breaking
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
```

```html hidden live-sample___overlap live-sample___breaking
<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
```

```html hidden live-sample___breaking
<fieldset>
  <legend>Change the rule-break values</legend>
  <label for="crb">column-rule-break</label>
  <select id="crb">
    <option selected>none</option>
    <option>normal</option>
    <option>intersection</option>
  </select>
  <label for="rrb">row-rule-break</label>
  <select id="rrb">
    <option>none</option>
    <option>normal</option>
    <option selected>intersection</option>
  </select>
</fieldset>
```

```css live-sample___breaking
.grid {
  column-rule-break: none;
  row-rule-break: intersection;
}
```

```css hidden live-sample___breaking
body:has(#crb option:nth-of-type(2):checked) .grid {
  column-rule-break: normal;
}
body:has(#crb option:nth-of-type(3):checked) .grid {
  column-rule-break: intersection;
}
body:has(#rrb option:nth-of-type(1):checked) .grid {
  row-rule-break: none;
}
body:has(#rrb option:nth-of-type(2):checked) .grid {
  row-rule-break: normal;
}
fieldset {
  margin: calc(1em - 1px);
}
label,
option {
  font-family: monospace;
}
```

```css hidden live-sample___breaking
@supports not (rule-break: intersection) {
  body::before {
    content: "Your browser doesn't support the rule-break properties ";
  }
}
```

{{EmbedLiveSample("Breaking", "", "280")}}

Try changing the `column-rule-break` and `row-rule-break` properties. The default `normal` keyword behaves as `none` in grid and flex containers, but as `intersection` in multi-column layouts. In a grid container, `normal` and `none` look the same. Setting `intersection` breaks the lines into segments.

These ends of each rule or rule segment can be inset or outset. The rest of this guide describes the different end edges and how to control them.

## Rule segments edges

When a segment abuts a gap, by default the segment ends at the edge of that gap without crossing into it. Segments that abut the container's edge are drawn up to the edge of the container's [content box](/en-US/docs/Web/CSS/Reference/Values/box-edge#content-box). You can inset or outset the edges of every rule segment.

### Junction and cap edges

There are two different segment edge types: **junction** and **cap**. When a rule breaks into segments, the edge type depends on whether it meets other rule segments at that edge. Rules intersect at interior _junctions_.

Segment endpoints at gap junctions where other segments are present are _junction_ endpoints.

```html hidden live-sample___cap live-sample___junction live-sample___start live-sample___end live-sample___length live-sample___percent
<div id="container">
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

  <i id="x">X</i>
  <i id="y">Y</i>
  <i id="z">Z</i>
  <i id="bang">!</i>
</div>
```

```css hidden live-sample___cap live-sample___junction live-sample___start live-sample___end live-sample___length live-sample___percent
#container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  rule: solid thick magenta;
  column-rule-color: rebeccapurple;
  gap: 1em;
  rule-break: intersection;
  rule-overlap: column-over-row;
  rule-visibility-items: between;
  border: 1px solid rebeccapurple;
  overflow: visible;
  margin: 1em;
}
#container i {
  padding: 8px;
  border: 1px dashed;
}
#x {
  grid-column: 3 / 4;
  grid-row: 4 / 5;
}
#y {
  grid-column: 4 / 5;
  grid-row: 4 / 5;
}
#z {
  grid-column: 5 / 6;
  grid-row: 4 / 5;
}
#bang {
  grid-column: 6 / 7;
  grid-row: 4 / 5;
}

@supports not (rule-inset: 10px) {
  body::before {
    content: "Your browser doesn't support the rule-inset properties ";
  }
}
```

```html hidden live-sample___junction
<p>
  <label
    >Change the <code>rule-inset-junction</code> value:
    <input type="range" min="-20" max="20" id="v" data-unit="px"
  /></label>
  <output></output>
</p>
```

```html hidden live-sample___cap
<p>
  <label
    >Change the <code>rule-inset-cap</code> value:
    <input type="range" min="-20" max="20" id="v" data-unit="px"
  /></label>
  <output></output>
</p>
```

```html hidden live-sample___start
<p>
  <label
    >Change the <code>rule-inset-start</code> value:
    <input type="range" min="-20" max="20" id="v" data-unit="px"
  /></label>
  <output></output>
</p>
```

```html hidden live-sample___end
<p>
  <label
    >Change the <code>rule-inset-end</code> value:
    <input type="range" min="-20" max="20" id="v" data-unit="px"
  /></label>
  <output></output>
</p>
```

```html hidden live-sample___length
<p>
  <label
    >Change the <code>rule-inset</code> value:
    <input type="range" min="-20" max="20" id="v" data-unit="px"
  /></label>
  <output></output>
</p>
```

```html hidden live-sample___percent
<p>
  <label
    >Change the <code>rule-inset</code> value:
    <input type="range" min="-50" max="50" step="5" id="v" data-unit="%"
  /></label>
  <output></output>
</p>
```

```js hidden live-sample___cap live-sample___junction live-sample___start live-sample___end live-sample___length live-sample___percent
const inset = document.getElementById("v");
const container = document.getElementById("container");
const o = document.querySelector("output");

function magic() {
  const val = `${inset.value}${inset.dataset["unit"]}`;
  o.innerText = val;
  return val;
}
```

```js hidden live-sample___junction
inset.addEventListener("input", () => {
  container.style.ruleInsetJunction = magic();
});
```

```js hidden live-sample___cap
inset.addEventListener("input", () => {
  container.style.ruleInsetCap = magic();
});
```

```js hidden live-sample___start
inset.addEventListener("input", () => {
  container.style.ruleInsetStart = magic();
});
```

```js hidden live-sample___end
inset.addEventListener("input", () => {
  container.style.ruleInsetEnd = magic();
});
```

```js hidden live-sample___length live-sample___percent
inset.addEventListener("input", () => {
  container.style.ruleInset = magic();
});
```

Change the value of the {{cssxref("rule-inset-junction")}} shorthand property to visualize the segment junction edges:

{{EmbedLiveSample("junction", "", "280")}}

Segment endpoints that are not junction endpoints, including endpoints at the container's inline and block edges and at intersections where the {{cssxref("rule-visibility-items")}} property has prevented additional segments from being painted, are _cap_ endpoints. If a rule spans the entire width or height of the container and isn't broken, both edges are _cap_ edges.

An edge located at the container's edge is always a _cap_ edge. All edges at interior gap junctions are _junction_ edges unless no other segments are present at that junction, which only occurs if rules are set not to be drawn [using the `rule-visibility-items`](#controlling-rule-visibility) shorthand or component properties.

Change the value of the {{cssxref("rule-inset-cap")}} shorthand property to visualize the segment cap edges:

{{EmbedLiveSample("cap", "", "280")}}

### Start and end edges

Each rule or rule segment has two edges: a **start** and an **end**.

For column rules and column rule segments, the _start_ of the segment is the top edge, and the _end_ is the bottom. For continuous column rules, a _cap-start_ edge is at the top of the container, and a _cap-end_ edge is at the bottom. When a column rule segment's top or bottom edge is at an interior junction where other rule segments are present, those edges are _junction-start_ and _junction-end_ edges, respectively. If no other rule is present at the interior junction, it is a _cap-start_ or _cap-end_ edge, not a junction edge.

For row rules and row rule segments, whether the _start_ edge is the left or right edge depends on the writing mode. In left-to-right languages, like English, the _start_ is the left edge and the _end_ is the right edge. In right-to-left languages, like Arabic and Hebrew, the _start_ is the right edge, and the _end_ is the left edge. When a row rule segment starts or ends at an interior junction with other rule segments, those edges are _cap-start_ and _cap-end_ edges, respectively. Column rule segment edges at interior junctions with no other rule segments are either _cap-start_ or _cap-end_ edges.

Change the value of the {{cssxref("rule-inset-start")}} shorthand property to visualize the segment start edges:

{{EmbedLiveSample("start", "", "280")}}

Change the value of the {{cssxref("rule-inset-end")}} shorthand property to visualize the segment end edges:

{{EmbedLiveSample("end", "", "280")}}

You'll never find a _junction_ edge abutting the container's start or end edge, as those are always _cap_ edges.

## Insetting segment edges

By default, continuous rules are drawn from one end of the container to the other, and rule segments are drawn from gap edge to gap edge or container edge. There are individual `*-rule-inset-*` CSS properties, such as `row-rule-inset-cap-end`, to control the insetting of both the `-start` and `-end` edges of both `-cap` and `-junction` edges for both `column-` and `row-` rules (as well as several shorthands for combinations of these eight separate properties).

### The `rule-inset` longhand properties

The longhand properties are written as `[ column | row ]-rule-inset-[ cap | junction ]-[start | end ]`.

The `column-rule-inset-*` properties, including {{cssxref("column-rule-inset-cap-end")}}, {{cssxref("column-rule-inset-cap-start")}}, {{cssxref("column-rule-inset-junction-end")}}, and {{cssxref("column-rule-inset-junction-start")}}, enable insetting column segment cap or junction edges, with each longhand property controlling either the segments' starts or ends.

Similarly, the `row-rule-inset-*` properties, including {{cssxref("row-rule-inset-cap-end")}}, {{cssxref("row-rule-inset-cap-start")}}, {{cssxref("row-rule-inset-junction-end")}}, and {{cssxref("row-rule-inset-junction-start")}}, enable insetting row segment cap or junction edges, controlling the segment starts or ends.

Each longhand property takes one `<inset-value>` as its value, either a {{cssxref("length-percentage")}} or the `overlap-join` keyword. Length values behave the same for cap and junction edges, while percentage values and the overlap-join keyword will inset junction edges but resolve to `0` for cap edges.

### Length inset values

Length values inset segments by the specified value. Positive `<length>` values reduce the segment length by the specified value. Negative values create an outset, extending junction segments into the gap adjacent to the segment edge and extending cap segments at the container edge to a point outside of the element's content box.

{{EmbedLiveSample("length", "", "280")}}

### Percentage inset values

The effect of percentage values depends on whether the segment edge abuts the container edge or a gap. At the container's edge, percentage values are relative to 0, so percentage values never cause cap segment endpoints to extend outside the container content box.

For interior segment endpoints, percentages are relative to the gap at that edge, so relative to the size of the {{cssxref("row-gap")}} for interior column segment endpoints, and relative to the size of the {{cssxref("column-gap")}} for interior row segment endpoints.

Setting `column-rule-inset-end: -50%` offsets the bottom of the junction segment halfway through the row gap below the segment, no matter how wide the row gap is.

{{EmbedLiveSample("percent", "", "280")}}

### The `overlap-join` keyword

If row and column rules don't break, they overlap at junction intersections. Broken rules with junction edges set to `overlap-join` also overlap if a perpendicular segment is present to meet the segment edge at the interior junction.

The `overlap-join` keyword value offsets the end of interior segments, so they align with the far edge of the rule that is perpendicular to the rule segment. The value resolves to half the gap size (extending it to the middle of the gap) plus half the rule width.

For example, when `column-rule-inset-start` is set to the `overlap-join` keyword value, the top edges of the junction end segments extend up into the row gap to meet, or "join", the top edge of the row rule painted in that gap.

When applied to a cap end, the `overlap-join` keyword value resolves to `0`. This is expected at the container's edge. It is useful for interior cap segments, as there is no perpendicular rule at the interior junction for the segment to overlap.

```html hidden live-sample___overlap
<p>
  <label
    ><input type="checkbox" id="v" /> Set the
    <code>rule-inset-start</code> value to <code>overlap-join</code></label
  >
</p>
```

```css hidden live-sample___overlap
.grid {
  column-rule-break: intersection;
  rule-width: 10px;
  rule-overlap: column-over-row;
}
:has(#v:checked) .grid {
  rule-inset-start: overlap-join;
}
p {
  margin-left: 1em;
}
```

In this demonstration, we've set the `rule-inset-start` shorthand property to `overlap-join`.

{{EmbedLiveSample("overlap", "", "240")}}

## Shorthand properties

In addition to the eight longhand properties, there are 15 shorthand properties.

### Start and end shorthands: defining a value for both cap and junction edges

There are shorthand properties that accept a single `<inset-value>`, setting both the cap and junction insets of either the starts or ends of column or row segments to the same value:

- {{cssxref("column-rule-inset-end")}}: Sets both the `column-rule-inset-cap-end` and `column-rule-inset-junction-end` to the same value, defining the bottom insets of all column segments.

- {{cssxref("column-rule-inset-start")}}: Sets both the `column-rule-inset-cap-start` and `column-rule-inset-junction-start` to the same value, defining the top insets of all column segments.

- {{cssxref("row-rule-inset-end")}}: Sets the end inset of all row segments, setting both the `row-rule-inset-cap-end` and `row-rule-inset-junction-end` to the same value.

- {{cssxref("row-rule-inset-start")}}: Insets the starts of all row segments, setting both the `row-rule-inset-cap-start` and `row-rule-inset-junction-start` to the same value.

### Cap and junction shorthands: defining both the starts and ends

When setting both the start and end edges of a segment type, you can use the following shorthands to set the start and end to the same or different values as one or two `<inset-value>` values:

- {{cssxref("column-rule-inset-cap")}} shorthand: Specifies both the `column-rule-inset-cap-start` and `column-rule-inset-cap-end` properties. If you specify only one value, both properties are set to that value. If you specify two values, the first sets `column-rule-inset-cap-start` and the second sets `column-rule-inset-cap-end`.

- {{cssxref("column-rule-inset-junction")}} shorthand: Specifies both the `column-rule-inset-junction-start` and `column-rule-inset-junction-end` properties. If you specify only one value, both properties are set to that value. If you specify two values, the first sets `column-rule-inset-junction-start` and the second sets `column-rule-inset-junction-end`.

- {{cssxref("row-rule-inset-cap")}} shorthand: Specifies both the `row-rule-inset-cap-start` and `row-rule-inset-cap-end` values. If you specify only one value, both properties are set to that value. If you specify two values, `row-rule-inset-cap-start` is set to the first value and `row-rule-inset-cap-end` is set to the second value.

- {{cssxref("row-rule-inset-junction")}} shorthand: Specifies both the `row-rule-inset-junction-start` and `row-rule-inset-junction-end` values. If you specify only one value, both properties are set to that value. If you specify two values, the first specifies `row-rule-inset-junction-start` and the second specifies `row-rule-inset-junction-end`.

### Column and row shorthands

When setting both the column and row versions of a segment edge type, you can use the following shorthands to set the start and end to the same or different values as one or two `<inset-value>` values:

- {{cssxref("rule-inset-cap")}}: Sets `column-rule-inset-cap` and `row-rule-inset-cap` to the same value.

- {{cssxref("rule-inset-junction")}}: Sets `column-rule-inset-junction` and `row-rule-inset-junction` to the same value.

- {{cssxref("rule-inset-end")}}: Sets `column-rule-inset-end` and `row-rule-inset-end` to the same value.

- {{cssxref("rule-inset-start")}}: Sets `column-rule-inset-start` and `row-rule-inset-start` to the same value.

### The `rule-inset` shorthands

There are three shorthand properties that define all edges for column segments, row segments, or both. These properties offer more control than the end, start, cap, or junction shorthands, letting you set the four edges to different values.

The {{cssxref("row-rule-inset")}} shorthand property specifies the `row-rule-inset-cap-start`, `row-rule-inset-cap-end`, `row-rule-inset-junction-start`, and `row-rule-inset-junction-end` properties as one to four `<inset-value>` values. If you set the cap insets to different values from the junction insets, separate them with a slash (`/`).

The {{cssxref("column-rule-inset")}} shorthand specifies the `column-rule-inset-cap-start`, `column-rule-inset-cap-end`, `column-rule-inset-junction-start`, and `column-rule-inset-junction-end` properties as one to four `<inset-value>` values. If you set the cap insets to different values from the junction insets, separate them with a slash (`/`).

The final inset property is {{cssxref("rule-inset")}}, which sets the `column-rule-inset` and `row-rule-inset` to the same values. Specifies the `rule-inset-cap-start`, `rule-inset-cap-end`, `rule-inset-junction-start`, and `rule-inset-junction-end` properties as one to four `<inset-value>` values. If you set the cap insets to different values from the junction insets, separate them with a slash (`/`).

Considering there are 23 values, it is surprising that there is no shorthand to set eight different values.

## See also

- [Defining CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [Defining CSS rules](/en-US/docs/Web/CSS/Guides/Gaps/Defining_rules)
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
