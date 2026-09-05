---
title: "`row-rule-inset-cap-end` CSS property"
short-title: row-rule-inset-cap-end
slug: Web/CSS/Reference/Properties/row-rule-inset-cap-end
page-type: css-property
status:
  - experimental
browser-compat: css.properties.row-rule-inset-cap-end
sidebar: cssref
---

{{SeeCompatTable}}

The **`row-rule-inset-cap-end`** [CSS](/en-US/docs/Web/CSS) property can be used to offset the end of row rule segment [cap endpoints](#understanding_cap_end) at the container's content end edge and cap endpoints where no rule segments intersect.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
row-rule-inset-cap-end: -20px;
```

```css interactive-example-choice
row-rule-inset-cap-end: 1.25em;
```

```css interactive-example-choice
row-rule-inset-cap-end: 0;
```

```css interactive-example-choice
row-rule-inset-cap-end: 100%;
```

```css interactive-example-choice
row-rule-inset-cap-end: overlap-join;
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
    <i>R</i>

    <i id="u">U</i>
    <i id="x">X</i>
    <i id="y">Y</i>
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
#u {
  grid-row: 3 / 4;
  grid-column: 7 / 8;
}
#y {
  grid-row: 4 / 5;
  grid-column: 4 / 5;
}
#x {
  grid-column: 3 / 4;
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
row-rule-inset-cap-end: overlap-join;

/* <length-percentage> values */
row-rule-inset-cap-end: 0;
row-rule-inset-cap-end: 1rem;
row-rule-inset-cap-end: -15px;
row-rule-inset-cap-end: -50%;

/* Global values */
row-rule-inset-cap-end: inherit;
row-rule-inset-cap-end: initial;
row-rule-inset-cap-end: revert;
row-rule-inset-cap-end: revert-layer;
row-rule-inset-cap-end: unset;
```

### Values

This property is specified as a single value from the following list:

- `overlap-join`
  - : Resolves to `0`.
- {{cssxref("length-percentage")}}
  - : Specifies the size of the inset. Percentage values are relative to the cap endpoint, which is either the `column-gap` width or `0`.

## Description

The `row-rule-inset-cap-end` property can be used to inset the end edge of [cap segment endpoints](#understanding_cap_end). The default value is `0`, which is the same as `overlap-join`. Positive values reduce the size of the segment. Negative values extend it.

Row rules are painted within a row gap as one or more segments, with segments occurring between:

- Adjacent rows in CSS grid layouts.
- Adjacent flex items or flex lines in flex layouts, depending on the `flex-direction`.
- Adjacent rows in multi-col layouts if the {{cssxref("column-height")}} is set to a {{cssxref("&lt;length>")}}.

Whether a row rule spans multiple columns or is broken into multiple segments is defined by the {{cssxref("row-rule-break")}} property, with interior breaks between row rule segments being the size of the {{cssxref("column-gap")}}.

Length `row-rule-inset-cap-end` values are inset by the value specified for both interior and end edge cap segments. Negative length values create an outset, with end edge cap segments extending beyond the container's end edge.

[Percentage values](#understanding_percentage_values) for interior cap segment endpoint insets are relative to the size of the {{cssxref("column-gap")}}. For end edge cap segments, percentage values are relative to `0`, so percentage values never cause cap segment endpoints at the container's end edge to extend beyond the container.

The `row-rule-inset-cap-end` property is a constituent property of several [shorthand properties](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- To inset the start and ends of row rule caps, the `row-rule-inset-cap-end` property, along with the {{cssxref("row-rule-inset-cap-start")}} property, can be set using the {{cssxref("row-rule-inset-cap")}} shorthand.

- To inset the ends of all row segments, the `row-rule-inset-cap-end` property, along with the {{cssxref("row-rule-inset-junction-end")}} property, can be set using the {{cssxref("row-rule-inset-end")}} shorthand.

- To inset the same values for column and row cap endpoints, the `row-rule-inset-cap-end` property, along with the {{cssxref("column-rule-inset-cap-end")}} property, can be set using the {{cssxref("rule-inset-cap-end")}} shorthand.

All of these shorthand properties, along with their `-start`, `-junction`, and `column-` equivalents, can be set using the {{cssxref("rule-inset")}} shorthand.

### Understanding cap end

A _cap segment endpoint_ is any segment endpoint that is not a junction segment endpoint. This includes endpoints at the container's content edges, as well as endpoints at a gap junction where no other column or row segments are present.

The `row-rule-inset-cap-end` controls the inset of the end edge of row cap segment endpoints. Depending on writing mode, the property can be used to shrink or extend the right or left edge of row rule segments occurring at interior gaps where no other row or column rule segments are present or at the end edge of the container.

Row cap segment endpoints are not affected by the value of the `row-rule-break` property, which only controls junction breaks. They are, however, affected by the {{cssxref("rule-visibility-items")}} properties, which defines whether row- and column-rule segments are painted in gaps adjacent to empty areas. As row cap segment endpoints only exist at the end edge of the container and at interior gaps where no other row or column rule segments area present, whether segments are painted (or would otherwise be painted if the `rule` were set to a visible value), impacts which row segments are end cap segments.

In the following demonstration, the right segments of row rules with a solid line styles end in a cap endpoint. With `row-rule-inset-cap-end: 16px` set and all the cap segment endpoints being against the container edge, the rows are all inset by `16px`. Change the inset `<length>` value to better visualize which segments end in cap segment endpoints.

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
  <li class="a">18</li>
  <li class="b">22</li>
  <li class="c">24</li>
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
  grid-template-columns: repeat(6, auto);
  list-style-type: none;
  gap: 20px;
  row-rule: 10px solid olive;
  column-rule: 10px solid palegoldenrod;
  rule-overlap: row-over-column;
  rule-visibility-items: normal;
  rule-break: intersection;
  row-rule-inset-cap-end: -32px;

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
.a {
  grid-column: 5 / 6;
  grid-row: 3 / 4;
}
.b {
  grid-column: 3 / 4;
  grid-row: 4 / 5;
}
.c {
  grid-column: 5 / 6;
  grid-row: 4 / 5;
}
```

```css hidden live-sample___percents
ul {
  row-rule-inset-cap-end: 100%;
  row-rule-style: inset;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  output.innerText =
    ul.style.rowRuleInsetCapEnd = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___caps
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value == "between") {
    ul.style.rowRuleStyle = "repeat(2, solid), double";
  } else if (visibility.value == "around") {
    ul.style.rowRuleStyle = "repeat(3, solid), repeat(2, double)";
  } else {
    ul.style.rowRuleStyle = "solid";
  }
});
```

```js hidden live-sample___percents
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value == "between") {
    ul.style.rowRuleStyle = "repeat(2, inset), double, repeat(2, solid)";
  } else if (visibility.value == "around") {
    ul.style.rowRuleStyle = "repeat(3, inset), repeat(2, double)";
  } else {
    ul.style.rowRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("caps", "", "400")}}

Setting `-32px` outsets the end of all the row rules by 32px, with the lines being drawn `32px` past the end edge of the container. As row rules don't impact the box model, these lines have no impact on the layout of the container or the rest of the content. Setting `16px` insets the segments by `16px`. If `0px` is set, the end of the row rules will align with the end of the container. This is the default.

The double line-style row rules, which appear when the `rule-visibility-items` is set to `between` end in a cap endpoint. The `between` value only paints rules in a gap segments between two adjacent areas occupied by an item. Because the row rule segments above items 22 and 24 end at intersections with no other row or column rule segments are present, these are cap endpoints, and therefore affected by the `row-rule-inset-cap-end` property.

The rule segments abutting the right edge of the container (only the segment between 6 and 12 in this case) are always row-rule cap ends, so are always inset by the value of the `row-rule-inset-cap-end` property.

### Understanding percentage values

What length a percentage value is relative to depends on the location of the endpoint. Interior endpoint percentage values are relative to the gap width at the cap endpoint, so relative to the {{cssxref("column-gap")}} if abutting a gap. In this demonstration, these endpoints are denoted by the inset, dark and light line style. If the cap segment endpoint is at the container's edge, the percentage is relative to `0`, so always computes to `0` (which is only the `between` value has an effect).

{{EmbedLiveSample("percents", "", "400")}}

Select `around` as the `rule-visibility-items` value. The first two rows end at the container edge, so they row-rule cap end (the segment between 6 and 12) has `0` inset. The row-rule segments that don't have a segment to the right end at interior gaps where column rule segments are present, so these row segments are not cap segment endpoints and are not affected by the property.

Select `between` as the `rule-visibility-items` value. There are now three row-rule cap segments: the row rule between the first two grid rows ends at the container edge and the two row rule segments drawn between grid items in the third and fourth rows. The first row-rule cap segment ends at the container's edge, so its percent inset value is relative to `0`. The end of the two other segments occur at interior gaps where no other rule segments are present, so the percentage offset is relative to the size of the {{cssxref("column-gap")}} width, which in this case is `20px`. Setting `100%` insets the end of these two segments by `20px`. Setting `-200%` will outset these segments by `40px`, with the lines being drawn through the `20px` gap, with `20px` protruding into the the next column.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates setting `row-rule-inset-cap-end` to inset the end edge of cap segments on flex containers.

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

We use the {{cssxref("display")}} property to turn the `.flexbox` elements into flex containers. We balance the items into three flex lines using with {{cssxref("flex-wrap")}} and {{cssxref("flex-line-count")}}. We define a light blue {{cssxref("rule")}} to be painted in both column and row gaps, then overwrite the {{cssxref("row-rule-color")}}, setting darker `blue` vertical gap decorations. Finally, we set the `row-rule-inset-cap-end` to `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;

  row-rule-inset-cap-end: 16px;
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
  containers[0].style.rowRuleInsetCapEnd = val;
  containers[1].style.rowRuleInsetCapEnd = val;
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

- {{cssxref("row-rule-inset")}} shorthand
- {{cssxref("rule-inset")}} shorthand
- {{cssxref("row-rule-break")}}
- {{cssxref("rule-break")}} shorthand
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
