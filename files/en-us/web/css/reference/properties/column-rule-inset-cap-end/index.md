---
title: "`column-rule-inset-cap-end` CSS property"
short-title: column-rule-inset-cap-end
slug: Web/CSS/Reference/Properties/column-rule-inset-cap-end
page-type: css-property
status:
  - experimental
browser-compat: css.properties.column-rule-inset-cap-end
sidebar: cssref
---

{{SeeCompatTable}}

The **`column-rule-inset-cap-end`** [CSS](/en-US/docs/Web/CSS) property can be used to offset the endpoint of column rule segments that is not a junction segment endpoint, including column segment endpoints at the container's content end edge and segments at gap intersections where no rule segments intersect.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
column-rule-inset-cap-end: 0;
```

```css interactive-example-choice
column-rule-inset-cap-end: 1em;
```

```css interactive-example-choice
column-rule-inset-cap-end: -20px;
```

```css interactive-example-choice
column-rule-inset-cap-end: 100%;
```

```css interactive-example-choice
column-rule-inset-cap-end: overlap-join;
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
column-rule-inset-cap-end: overlap-join;

/* <length-percentage> values */
column-rule-inset-cap-end: 0;
column-rule-inset-cap-end: 1em;
column-rule-inset-cap-end: -5px;
column-rule-inset-cap-end: -25%;

/* Global values */
column-rule-inset-cap-end: inherit;
column-rule-inset-cap-end: initial;
column-rule-inset-cap-end: revert;
column-rule-inset-cap-end: revert-layer;
column-rule-inset-cap-end: unset;
```

### Values

This property is specified as a single value from the following list:

- `overlap-join`
  - : Resolves to `0`.
- {{cssxref("length-percentage")}}
  - : Specifies the size of the inset. Percentage values are relative to the cap endpoint, which is either the `row-gap` or `0`.

## Description

The `column-rule-inset-cap-end` property can be used to inset the end edge of [cap segment endpoints](#understanding_cap_end). The default value is `0`, which is the same as `overlap-join`. Positive values reduce the size of the segment. Negative values extend it.

Column rules are painted within a column gap as one or more segments, with segments occurring between:

- Adjacent columns in CSS grid layouts.
- Flex items or flex lines in flex layouts, depending on the `flex-direction`.
- Columns in multi-col layouts.

Whether a column rule spans multiple rows or is broken into multiple segments is defined by the {{cssxref("column-rule-break")}} property, with interior breaks between column rule segments being the size of the {{cssxref("row-gap")}}.

Length `column-rule-inset-cap-end` values are inset by the value specified for both interior and end edge cap segments. Negative length values create an outset, with end edge cap segments extending beyond the container's end edge.

[Percentage values](#understanding_percentage_values) for interior cap segment endpoint insets are relative to the size of the {{cssxref("row-gap")}}. For end edge cap segments, percentage values are relative to `0`, so percentage values never cause cap segment endpoints at the container's end edge to extend beyond the container.

The `column-rule-inset-cap-end` property is a constituent property of several [shorthand properties](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- To set the start and ends of caps, the `column-rule-inset-cap-end` property, along with the {{cssxref("column-rule-inset-cap-start")}} property, can be set using the {{cssxref("column-rule-inset-cap")}} shorthand.

- To set the ends of all column segments, the `column-rule-inset-cap-end` property, along with the {{cssxref("column-rule-inset-junction-end")}} property, can be set using the {{cssxref("column-rule-inset-end")}} shorthand.

- To set the same values for row and column cap endpoints, the `column-rule-inset-cap-end` property, along with the {{cssxref("row-rule-inset-cap-end")}} property, can be set using the {{cssxref("rule-inset-cap-end")}} shorthand.

All of these shorthand properties, along with their `-start`, `-junction`, and `row-` equivalents, can be set using the {{cssxref("rule-inset")}} shorthand.

### Understanding cap end

A _cap segment endpoint_ is any segment endpoint that is not a junction segment endpoint. This includes endpoints at the container's content edges, as well as endpoints at a gap junction where no other rule or column segments are present. The `column-rule-inset-cap-end` controls the inset of the end edge of column cap segment endpoints. In other words, the property can be used to shrink or extend the bottom edge of column rule segments occurring at interior gaps where no other column or row rule segments are present or at the end edge of the container.

Column cap segment endpoints are not affected by the value of the `column-rule-break` property, which only controls junction breaks. They are, however, affected by the {{cssxref("rule-visibility-items")}} properties, which defines whether column- and row-rule segments are painted in gaps adjacent to empty areas. As column cap segment endpoints only exist at the end edge of the container and at interior gaps where no other column or row rule segments area present, whether segments are painted (or would otherwise be painted if the `rule` were set to a visible value), impacts which column segments are end cap segments.

In the following demonstration, the bottom segments of column rules with a solid line styles end in a cap endpoint. With `column-rule-inset-cap-end: 16px` set and all the cap segment endpoints being against the container edge, the columns are all inset by `16px`. Change the inset `<length>` value to better visualize which segments end in cap segment endpoints.

```html hidden live-sample___caps live-sample___percents
<ul id="ul">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
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
  column-rule-inset-cap-end: 16px;

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
}
```

```css hidden live-sample___percents
ul {
  column-rule-inset-cap-end: 100%;
  column-rule-style: inset;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.columnRuleInsetCapEnd = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___caps
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value == "between") {
    ul.style.columnRuleStyle = "repeat(2, solid), double";
  } else if (visibility.value == "around") {
    ul.style.columnRuleStyle = "repeat(3, solid), repeat(2, double)";
  } else {
    ul.style.columnRuleStyle = "solid";
  }
});
```

```js hidden live-sample___percents
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value == "between") {
    ul.style.columnRuleStyle = "repeat(2, inset), double, repeat(2, solid)";
  } else if (visibility.value == "around") {
    ul.style.columnRuleStyle = "repeat(3, inset), repeat(2, double)";
  } else {
    ul.style.columnRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("caps", "", "300")}}

Setting `16px` insets the end of all the column rules by 16px. If `0px` is set, the end of the column rules will align with the end of the container. This is the default. Setting `-32px` outsets the segments by `32px`, with the lines being drawn `32px` past the end edge of the container. As column rules don't impact the box model, these lines have no impact on the layout of the container or the rest of the content.

Select `around` as the `rule-visibility-items` value. This value paints rules in a gap segments if at least one of the two adjacent areas is occupied by an item. The double line-style column rules, which appear when the `rule-visibility-items` is set to `around` (and `between`) do not end in a cap endpoint. The last two columns rules end at interior gaps where row rule segments are present, so these column segments are not cap segment endpoints, and are therefore not affected by the `column-rule-inset-cap-end` property.

Select `between` as the `rule-visibility-items` value, which paints rules in a gap segments only if both adjacent areas are occupied by an item. The last row rule ends at the third column gap. The third column rule ends at an interior gaps where a row rule segment is present, so this column segment is not a cap segment endpoint and is not affected by the `column-rule-inset-cap-end` property, but the last two columns rules end at interior gaps where no other rule segments are present, so these column segments are cap segment endpoints, affected by the `column-rule-inset-cap-end` property.

### Understanding percentage values

What length a percentage value is relative to depends on the location of the enpoint. Interior endpoint percentage values are relative to the gap width at the cap endpoint, so relative to the {{cssxref("row-gap")}} if abutting a rule gap. If the cap segment endpoint is at the container's edge, the percentage is relative to `0`, so always computes to `0`. In this demonstration, these endpoints are denoted by the inset, dark and light line style.

{{EmbedLiveSample("percents", "", "300")}}

Select `around` as the `rule-visibility-items` value. The first three columns end at the container edge, so any percentage value will resolve to `0`. The last two columns rules end at interior gaps where row rule segments are present, so these column segments are not cap segment endpoints.

Select `between` as the `rule-visibility-items` value. The first two columns end at the container edge, so they have a `0` inset. The third column rule ends at an interior gaps where a row rule segment is present, so this column segment is not a cap segment endpoint. The last two columns rules end at interior gaps where no other rule segments are present, so the percentage offset is relative to the size of the {{cssxref("row-gap")}} width, which in this case is `20px`. Setting `100%` insets the end of the last two column rule segments by `20px`. Setting `-200%` will outset these segments by `40px`, with the lines being drawn through the `20px` gap, with `20px` protruding into the last row of items. Negative values that are larger than combined heights of the last row and row gap will cause the last two column rules to protrude below the container's end edge.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates setting `column-rule-inset-cap-end` to inset the end edge of cap segments on flex containers.

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

We use the {{cssxref("display")}} property to turn the `.flexbox` elements into flex containers. We balance the items into three flex lines using with {{cssxref("flex-wrap")}} and {{cssxref("flex-line-count")}}. We define a light blue {{cssxref("rule")}} to be painted in both row and column gaps, then overwrite the {{cssxref("column-rule-color")}}, setting darker `blue` vertical gap decorations. Finally, we set the `column-rule-inset-cap-end` to `100%`, meaning the cap endpoints will be inset by the row gap width (which was set to `20px` by the {{cssxref("gap")}} property).

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;

  column-rule-inset-cap-end: 100%;
}
```

We also set the {{cssxref("flex-direction")}} on the `.column` container, to change the main axis of the flex container, and make the items flow in columns rather than rows.

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
  containers[0].style.columnRuleInsetCapEnd = val;
  containers[1].style.columnRuleInsetCapEnd = val;
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

- {{cssxref("column-rule-inset")}} shorthand
- {{cssxref("rule-inset")}} shorthand
- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}} shorthand
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
