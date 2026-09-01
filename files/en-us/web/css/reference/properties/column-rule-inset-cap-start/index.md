---
title: "`column-rule-inset-cap-start` CSS property"
short-title: column-rule-inset-cap-start
slug: Web/CSS/Reference/Properties/column-rule-inset-cap-start
page-type: css-property
status:
  - experimental
browser-compat: css.properties.column-rule-inset-cap-start
sidebar: cssref
---

{{SeeCompatTable}}

The **`column-rule-inset-cap-start`** [CSS](/en-US/docs/Web/CSS) property can be used to offset the start of column rule segment [cap endpoints](#understanding_cap_end) at the container's content start edge and cap endpoints where no rule segments intersect.

{{InteractiveExample("CSS Demo: rule")}}

<!-- negative example must come first -->

```css interactive-example-choice
column-rule-inset-cap-start: -20px;
```

```css interactive-example-choice
column-rule-inset-cap-start: 0;
```

```css interactive-example-choice
column-rule-inset-cap-start: 1em;
```

```css interactive-example-choice
column-rule-inset-cap-start: 100%;
```

```css interactive-example-choice
column-rule-inset-cap-start: overlap-join;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
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

    <i id="y">Y</i>
    <i id="z">Z</i>
    <i id="bang">!</i>
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  rule: solid thick magenta;
  gap: 1em;
  rule-overlap: column-over-row;
  rule-visibility-items: between;
  border: 1px solid rebeccapurple;
  overflow: visible;
  margin: 1em;
}
#example-element i {
  padding: 8px;
  border: 1px dashed;
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
```

## Syntax

```css
/* Keywords */
column-rule-inset-cap-start: overlap-join;

/* <length-percentage> values */
column-rule-inset-cap-start: 0;
column-rule-inset-cap-start: 1em;
column-rule-inset-cap-start: -5px;
column-rule-inset-cap-start: -25%;

/* Global values */
column-rule-inset-cap-start: inherit;
column-rule-inset-cap-start: initial;
column-rule-inset-cap-start: revert;
column-rule-inset-cap-start: revert-layer;
column-rule-inset-cap-start: unset;
```

### Values

This property is specified as a single value from the following list:

- `overlap-join`
  - : Resolves to `0`.
- {{cssxref("length-percentage")}}
  - : Specifies the size of the inset. Percentage values are relative to the cap endpoint, which is either the `row-gap` or `0`.

## Description

Column rules are painted within a column gap as one or more segments, with segments occurring between:

- Adjacent columns in CSS grid layouts.
- Flex items or flex lines in flex layouts, depending on the `flex-direction`.
- Columns in multi-col layouts.

The `column-rule-inset-cap-start` property can be used to inset the start edge of [cap segment endpoints](#understanding_cap_end). The default value is `0`, which is the same as `overlap-join`. Positive values reduce the size of the segment. Negative values extend it.

Length `column-rule-inset-cap-start` values are inset by the value specified for both interior and start edge cap segment endpoints. Negative length values create an outset, with start edge cap segments extending beyond the container's start edge.

[Percentage values](#understanding_percentage_values) for interior cap segment endpoint insets are relative to the size of the {{cssxref("row-gap")}}. For start edge cap segments, percentage values are relative to `0`, so percentage values never cause cap segment endpoints at the container's start edge to extend above the container.

The `column-rule-inset-cap-start` property is a constituent property of several [shorthand properties](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- To set the starts and ends of cap segment endpoints, the `column-rule-inset-cap-start` property, along with the {{cssxref("column-rule-inset-cap-end")}} property, can be set using the {{cssxref("column-rule-inset-cap")}} shorthand.

- To set the ends of all column segment endpoints, the `column-rule-inset-cap-start` property, along with the {{cssxref("column-rule-inset-junction-end")}} property, can be set using the {{cssxref("column-rule-inset-end")}} shorthand.

- To set the same values for row and column cap start endpoints, the `column-rule-inset-cap-start` property, along with the {{cssxref("row-rule-inset-cap-start")}} property, can be set using the {{cssxref("rule-inset-cap-start")}} shorthand.

All of these shorthand properties, along with their `-end`, `-junction`, and `row-` equivalents, can be set using the {{cssxref("rule-inset")}} shorthand.

### Understanding cap start

A _cap segment endpoint_ is any segment endpoint that is not a junction segment endpoint. This includes endpoints at the container's content edges, as well as endpoints at a gap junction where no other rule segments are present.

The `column-rule-inset-cap-start` controls the inset of the start edge of column cap segment endpoints. In other words, the property can be used to shrink or extend the top edge of column rule segments occurring at interior gaps where no other column or row rule segments are present or at the start edge of the container.

Column cap segment endpoints are not affected by the value of the `column-rule-break` property, which only controls junction breaks. They are, however, affected by the {{cssxref("rule-visibility-items")}} properties, which defines whether column- and row-rule segments are painted in gaps adjacent to empty areas. As column cap segment endpoints only exist at the edge of the container and at interior gaps where no other column or row rule segments are present, whether segments are painted (or would otherwise be painted if the `rule` were set to a visible value), impacts which column segments are cap start segments.

In the following demonstration, the top segments of the column rules with a solid line style start in a cap endpoint. With `column-rule-inset-cap-start: 16px` set and the start of all the cap segment being against the top edge of the container, the columns are all inset by `16px`. Change the inset `<length>` value to better visualize which segments start in cap segment endpoints.

```html hidden live-sample___caps live-sample___percents
<ul id="ul">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
</ul>

<p>
  <label
    ><code>rule-visibility-items</code> value <code>
    <select id="visibility">
      <option>all</option>
      <option>between</option>
      <option>around</option>
      <option selected>normal</option>
  </select>
  </label>
</p>
```

```html hidden live-sample___caps
<p>
  <label
    >Change the size of the inset.
    <input type="range" min="-40" max="16" value="16" id="inset" data-unit="px"
  /></label>
  <output id="o">16px</output>
</p>
```

```html hidden live-sample___percents
<p>
  <label
    >Change the size of the inset.
    <input
      type="range"
      min="-200"
      max="100"
      value="100"
      id="inset"
      data-unit="%"
  /></label>
  <output id="o">100%</output>
</p>
```

```css hidden live-sample___caps live-sample___percents
ul {
  display: grid;
  grid-template-columns: repeat(6, auto);
  list-style-type: none;
  gap: 20px;
  column-rule: 10px solid olive;
  row-rule: 10px solid palegoldenrod;
  rule-overlap: column-over-row;
  rule-visibility-items: normal;
  rule-break: intersection;
  column-rule-inset-cap-start: 16px;

  border: 1px solid;
}
ul {
  place-items: center;
  width: 95vw;
  padding: 0;
}
li {
  text-align: center;
  font-family: sans-serif;
  background-color: #ededed;
  padding: 1em;
  width: 100%;
  box-sizing: border-box;
}
li:nth-of-type(n + 9) {
  grid-row: 3 / 4;
}
li:nth-of-type(n + 12) {
  grid-row: 4 / 5;
}
li:nth-of-type(10) {
  grid-column: 5/6;
}
li:nth-of-type(11) {
  grid-column: 6/7;
}
```

```css hidden live-sample___percents
ul {
  column-rule-inset-cap-start: 100%;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.columnRuleInsetCapStart = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___caps live-sample___percents
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value == "between") {
    ul.style.columnRuleStyle = "solid, repeat(2, double)";
  } else {
    ul.style.columnRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("caps", "", "400")}}

Setting `16px` insets the start of all the column rules by `16px`. If `0px` is set, the start of the column rules will align with the start of the container. This is the default. Setting `-32px` outsets the segments by `32px`, with the lines being drawn `32px` past the start edge of the container. As column rules don't impact the box model, these lines have no impact on the layout of the container or the rest of the content.

Select `between` as the `rule-visibility-items` value. This value paints rules in a gap segments only if the two adjacent areas are occupied by items. Change the value of the inset while observing there three column rules with a double line style. In addition to having a cap endpoint at the start edge of the container, like all the other column rules, these rules have an additional cap endpoint. They each have column rule segments that start at interior gaps where row rule segments are present, so these column segments are also cap segment endpoints, and are affected by the `column-rule-inset-cap-start` property.

When selecting `around` as the `rule-visibility-items` value, which paints rules in a gap segment as long as one adjacent area is occupied by an item. In each case, there a row rule segment at the top end of the endpoint segments of the interior gaps. The start of these segments are junction, not cap, segment endpoints and are not affected by the `column-rule-inset-cap-start` property. The inset of these column segments that start at an interior gap junction can be controlled by the {{cssxref("column-rule-inset-junction-start")}} property.

### Understanding percentage values

What length a percentage value is relative to depends on the location of the endpoint. Interior endpoint percentage values are relative to the gap width at the cap endpoint, so relative to the {{cssxref("row-gap")}} if abutting a rule gap, `0` otherwise, as when the cap segment endpoint is at the container's start edge, it abuts an edge, not a gap, so the percentage is relative to `0`, and always computes to `0`.

This example isn't broken; all the cap segments start at the container's edge, so all the insets are `0` by default.

{{EmbedLiveSample("percents", "", "400")}}

If you select `around` as the `rule-visibility-items` value, again, none of the segments will be inset. Percentage inset values for the column segments that start at container edge all resolve to `0`. The start edge of column segments that start at interior gaps don't and have a segment drawn above start at intersections where row rule segments are present; they don't start with a cap segment endpoint, so their insets are defined by the `column-rule-inset-junction-start` property instead.

Select `between` as the `rule-visibility-items` value. The column rules that have two cap start segments have their line-style set to `double`. As before, each has a column rule segment that starts at interior gaps where no other rule segments are present. For these, the percentage offset is relative to the size of the {{cssxref("row-gap")}} width, which in this case is `20px`. Setting `100%` insets the start of the cap segments by `20px`. Setting `-200%` will outset these segments by `40px`, with the lines being drawn through the `20px` gap, with `20px` protruding into the row above the items. If the negative value was larger than the combined heights of the first row and the row gap, the rule would protrude above the container's start edge.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates setting `column-rule-inset-cap-start` to inset the start edge of cap segments on flex containers.

#### HTML

```html
<h1>Insetting cap column rule endpoints</h1>
<article>
  <section>
    <h2>flex-direction: row</h2>
    <div class="flexbox">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
  <section>
    <h2>flex-direction: column</h2>
    <div class="flexbox column">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
</article>
```

```html hidden
<p>
  <label
    >Change the size of the inset.
    <input type="range" min="-40" max="16" value="16" id="inset"
  /></label>
  <output id="o">16px</output>
</p>
```

#### CSS

We use the {{cssxref("display")}} property to turn the `.flexbox` elements into flex containers. We balance the items into three flex lines using with {{cssxref("flex-wrap")}} and {{cssxref("flex-line-count")}}. We define a light blue {{cssxref("rule")}} to be painted in both row and column gaps, then overwrite the {{cssxref("column-rule-color")}}, setting darker `blue` vertical gap decorations. Finally, we set the `column-rule-inset-cap-start` to `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;

  column-rule-inset-cap-start: 16px;
}
```

We then set the {{cssxref("flex-direction")}} on the `.column` container to make its items flow in columns rather than rows.

```css
.column {
  flex-direction: column;
}
```

The rest of the CSS is hidden for brevity.

```css hidden
body {
  font-family: sans-serif;
  text-align: center;
}
h1 {
  font-size: 1.25em;
}
h2 {
  font-size: 1em;
}
article {
  display: flex;
  gap: 5vw;
  rule: 1px solid black;
  width: 100vw;
}
section {
  flex-basis: 45vw;
}
.flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  height: 30px;
}
output {
  display: inline-block;
  width: 2em;
}
p {
  margin-top: 2.5em;
}
```

```js hidden live-sample___basic
const inset = document.getElementById("inset");
const containers = document.querySelectorAll(".flexbox");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  const val = `${inset.value}px`;
  containers[0].style.columnRuleInsetCapStart = val;
  containers[1].style.columnRuleInsetCapStart = val;
  output.innerText = val;
});
```

#### Result

{{EmbedLiveSample("Basic usage", "", "300")}}

Change the size of the inset.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("row-rule-inset-cap-start")}}
- {{cssxref("column-rule-inset-cap-end")}}
- {{cssxref("column-rule-inset-junction-start")}}
- {{cssxref("column-rule-inset-start")}} shorthand
- {{cssxref("column-rule-inset-cap")}} shorthand
- {{cssxref("column-rule-inset")}} shorthand
- {{cssxref("rule-inset-start")}} shorthand
- {{cssxref("rule-inset-cap")}}
- {{cssxref("rule-inset")}} shorthand
- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}} shorthand
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} shorthand

- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
