---
title: "`row-rule-inset-cap-start` CSS property"
short-title: row-rule-inset-cap-start
slug: Web/CSS/Reference/Properties/row-rule-inset-cap-start
page-type: css-property
status:
  - experimental
browser-compat: css.properties.row-rule-inset-cap-start
sidebar: cssref
---

{{SeeCompatTable}}

The **`row-rule-inset-cap-start`** [CSS](/en-US/docs/Web/CSS) property can be used to offset the start of row rule segment [cap endpoints](#understanding_cap_end) at the container's content start edge and cap endpoints where no rule segments intersect.

{{InteractiveExample("CSS Demo: rule")}}

<!-- negative example must come first -->

```css interactive-example-choice
row-rule-inset-cap-start: -20px;
```

```css interactive-example-choice
row-rule-inset-cap-start: 0;
```

```css interactive-example-choice
row-rule-inset-cap-start: 1em;
```

```css interactive-example-choice
row-rule-inset-cap-start: 100%;
```

```css interactive-example-choice
row-rule-inset-cap-start: overlap-join;
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

    <i id="r">R</i>
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
  rule-overlap: row-over-column;
  rule-visibility-items: between;
  border: 1px solid rebeccapurple;
  overflow: visible;
  margin: 1em;
}
#example-element i {
  padding: 8px;
  border: 1px dashed;
}
#r {
  grid-column: 5 / 6;
  grid-row: 3 / 4;
}
#z {
  grid-column: 5 / 6;
  grid-row: 4 / 5;
}
#bang {
  grid-column: 5 / 6;
  grid-row: 5 / 6;
}
```

## Syntax

```css
/* Keywords */
row-rule-inset-cap-start: overlap-join;

/* <length-percentage> values */
row-rule-inset-cap-start: 0;
row-rule-inset-cap-start: 1em;
row-rule-inset-cap-start: -5px;
row-rule-inset-cap-start: -25%;

/* Global values */
row-rule-inset-cap-start: inherit;
row-rule-inset-cap-start: initial;
row-rule-inset-cap-start: revert;
row-rule-inset-cap-start: revert-layer;
row-rule-inset-cap-start: unset;
```

### Values

This property is specified as a single value from the following list:

- `overlap-join`
  - : Resolves to `0`.
- {{cssxref("length-percentage")}}
  - : Specifies the size of the inset. Percentage values are relative to the cap endpoint, which is either the `column-gap` or `0`.

## Description

Row rules are painted within a row gap as one or more segments, with segments occurring between:

- Adjacent rows in CSS grid layouts.
- Adjacent flex items or flex lines in flex layouts, depending on the `flex-direction`.
- Adjacent rows in multi-col layouts, which may exist when {{cssxref("column-height")}} is set to a {{cssxref("&lt;length>")}}.

The `row-rule-inset-cap-start` property can be used to inset the start end of [cap segment endpoints](#understanding_cap_end). The default value is `0`, which is the same as `overlap-join`. Positive values reduce the size of the segment. Negative values extend it.

Length `row-rule-inset-cap-start` values inset both interior and start edge cap segment endpoints by the value specified. Negative length values create an outset, with container-edge cap segments extending beyond the container's start edge.

[Percentage value](#understanding_percentage_values) insets for interior cap segments are relative to the size of the {{cssxref("column-gap")}}. Otherwise, percentage values are relative to `0`, so are always `0px` when the cap segment abuts the start edge of the container.

The `row-rule-inset-cap-start` property is a constituent property of several [shorthand properties](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- To set the starts and ends of row cap segments, the `row-rule-inset-cap-start` property, along with the {{cssxref("row-rule-inset-cap-end")}} property, can be set using the {{cssxref("row-rule-inset-cap")}} shorthand.

- To set the ends of all row segment endpoints, the `row-rule-inset-cap-start` property, along with the {{cssxref("row-rule-inset-junction-end")}} property, can be set using the {{cssxref("row-rule-inset-end")}} shorthand.

- To set the same values for column and row cap start endpoints, the `row-rule-inset-cap-start` property, along with the {{cssxref("column-rule-inset-cap-start")}} property, can be set using the {{cssxref("rule-inset-cap-start")}} shorthand.

All of these shorthand properties, along with their `-end`, `-junction`, and `column-` equivalents, can be set using the {{cssxref("rule-inset")}} shorthand.

### Understanding cap start

A _cap segment endpoint_ is any segment endpoint that is not a junction segment endpoint. This includes endpoints at the container's content edges, as well as endpoints at a gap junction where no other rule segments are present.

The `row-rule-inset-cap-start` controls the inset of the start edge of row cap segment endpoints. In other words, depending on the text direction, the property can be used to shrink or extend the left or right edge of row rule segments occurring at interior gaps where no other row or column rule segments are present or at the start edge of the container.

Row cap segment endpoints are not affected by the value of the `row-rule-break` property, which only controls junction breaks. They are, however, affected by the {{cssxref("rule-visibility-items")}} properties, which define whether row- and column-rule segments are painted in gaps adjacent to empty areas. As row cap segment endpoints only exist at the edge of the container and at interior gaps where no other row or column rule segments are present, whether segments are painted (or would otherwise be painted if the `rule` were set to a visible value), impacts which row segments are cap start segments.

In the following demonstration, the left-most segments of the row rules abutting the container edge, start in a cap endpoint. With `row-rule-inset-cap-start: -32px` set and the start of all the cap segment being against the left edge of the container, the rows are all outset by `32px`. As row rules don't impact the box model, these protruding lines have no impact on the layout of the container or the rest of the content. Change the inset `<length>` value to better visualize which segments start in cap segment endpoints.

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
    <input
      type="range"
      min="-40"
      max="16"
      value="-32"
      id="inset"
      data-unit="px"
  /></label>
  <output id="o">-32px</output>
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
  margin: 0 20px;
  grid-template-columns: repeat(6, auto);
  list-style-type: none;
  gap: 20px;
  row-rule: 10px solid olive;
  column-rule: 10px solid palegoldenrod;
  rule-overlap: column-over-row;
  rule-visibility-items: normal;
  rule-break: intersection;
  row-rule-inset-cap-start: -32px;

  border: 1px solid;
  margin: auto 40px;
}
ul {
  place-items: center;
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
li:nth-of-type(n + 13) {
  grid-row: 4 / 5;
}
li:nth-of-type(12),
li:nth-of-type(16) {
  grid-column: 5/6;
}
li:nth-of-type(17) {
  grid-column: 6/7;
}
```

```css hidden live-sample___percents
ul {
  row-rule-inset-cap-start: 100%;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.rowRuleInsetCapStart = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___caps live-sample___percents
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value == "between") {
    ul.style.rowRuleStyle = "repeat(2, solid), double";
  } else {
    ul.style.rowRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("caps", "", "350")}}

Setting `16px` insets the start of all the row rules by `16px`. Setting `0px` align the start of the row rules with the start of the container. This is the default.

Select `between` as the `rule-visibility-items` value. This value paints rules in a gap segments only if the two adjacent areas are occupied by items. In addition to having a cap endpoint at the start edge of the container, like all the other row rules, the third row rule, denoted with a double line style, has an additional cap endpoint segment. There are no other segments at the starting endpoint of the rule segment between `12` and `16` doesn't intersect, so it too is a cap segment endpoint, and is affected by the `row-rule-inset-cap-start` property.

In this case, the `around` value of the `rule-visibility-items` property, which paints rules in a gap segment as long as one adjacent area is occupied by an item, did not create addition cap segment endpoints. The rule start of the segment between `12` and `16` intersects with the column rule segments in the column-gap to the left of those items, creating junction, not cap, segment endpoints. Junction endpoints can be inset using the {{cssxref("row-rule-inset-junction-start")}} property instead.

### Understanding percentage values

What length a percentage value is relative to depends on the location of the endpoint. Interior endpoint percentage values are relative to the gap width at the cap endpoint, so relative to the {{cssxref("column-gap")}} if abutting a rule gap, `0` otherwise.When the cap segment endpoint is at the container's start edge, it abuts an edge, not a gap, so the percentage is relative to `0`, and always computes to `0`.

This example isn't broken; all the cap segments start endpoints are at the container's edge, so all the insets are `0` by default.

{{EmbedLiveSample("percents", "", "350")}}

The slider only has an effect when the `rule-visibility-items` value is set to `between`, and then only on the single inner cap endpoint segment this value creates. The row rule with a `double` style has two cap start segments - the left most rule segment and the segment between `12` and `16`. For this segment only, the percentage offset is relative to the size of the {{cssxref("column-gap")}} width, which in this case is `20px`. Setting `100%` insets the start of the cap segment by `20px`. Setting `-200%` outset the segment by `40px`, with the rule segment being drawn through the `20px` gap, and `20px` protruding into the previous column.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates setting `row-rule-inset-cap-start` to inset the start edge of cap segments on flex containers.

#### HTML

```html
<h1>Insetting cap row rule endpoints</h1>
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

We use the {{cssxref("display")}} property to turn the `.flexbox` elements into flex containers. We balance the items into three flex lines using with {{cssxref("flex-wrap")}} and {{cssxref("flex-line-count")}}. We define a light blue {{cssxref("rule")}} to be painted in both column and row gaps, then overwrite the {{cssxref("row-rule-color")}}, setting darker `blue` vertical gap decorations. Finally, we set the `row-rule-inset-cap-start` to `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;

  row-rule-inset-cap-start: 16px;
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
  gap: 42px;
  rule: 1px solid black;
  width: 100vw;
  padding: 0 50px;
  box-sizing: border-box;
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
  containers[0].style.rowRuleInsetCapStart = val;
  containers[1].style.rowRuleInsetCapStart = val;
  output.innerText = val;
});
```

#### Result

{{EmbedLiveSample("Basic usage", "", "320")}}

Change the size of the inset.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("column-rule-inset-cap-start")}}
- {{cssxref("row-rule-inset-cap-end")}}
- {{cssxref("row-rule-inset-junction-start")}}
- {{cssxref("row-rule-inset-start")}} shorthand
- {{cssxref("row-rule-inset-cap")}} shorthand
- {{cssxref("row-rule-inset")}} shorthand
- {{cssxref("rule-inset-start")}} shorthand
- {{cssxref("rule-inset-cap")}}
- {{cssxref("rule-inset")}} shorthand
- {{cssxref("row-rule-break")}}
- {{cssxref("rule-break")}} shorthand
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
