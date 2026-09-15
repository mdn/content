---
title: "`row-rule-inset-cap` CSS property"
short-title: row-rule-inset-cap
slug: Web/CSS/Reference/Properties/row-rule-inset-cap
page-type: css-property
status:
  - experimental
browser-compat: css.properties.row-rule-inset-cap
sidebar: cssref
---

{{SeeCompatTable}}

The **`row-rule-inset-cap`** [shorthand](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property can be used to offset the row rule segment [cap endpoints](#understanding_cap_end) at the container's content left and right edges, and endpoints where the segments don't intersect other column or row segments.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
row-rule-inset-cap: -20px;
```

```css interactive-example-choice
row-rule-inset-cap: 0;
```

```css interactive-example-choice
row-rule-inset-cap: 1em;
```

```css interactive-example-choice
row-rule-inset-cap: 100%;
```

```css interactive-example-choice
row-rule-inset-cap: overlap-join;
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
  rule: solid thick rebeccapurple;
  row-rule-color: magenta;
  gap: 0.5em;
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

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("row-rule-inset-cap-end")}}
- {{cssxref("row-rule-inset-cap-start")}}

## Syntax

```css
/* Keywords */
row-rule-inset-cap: overlap-join;

/* <length-percentage> values */
row-rule-inset-cap: 0;
row-rule-inset-cap: 1em;
row-rule-inset-cap: -5px;
row-rule-inset-cap: -25%;

/* Two values */
row-rule-inset-cap: overlap-join 1em;
row-rule-inset-cap: -5px -25%;

/* Global values */
row-rule-inset-cap: inherit;
row-rule-inset-cap: initial;
row-rule-inset-cap: revert;
row-rule-inset-cap: revert-layer;
row-rule-inset-cap: unset;
```

### Values

This property is specified as a one or two values from the following list:

- `overlap-join`
  - : Resolves to `0`.
- {{cssxref("length-percentage")}}
  - : Specifies the size of the inset. [Percentage values](#understanding_percentage_values) are relative to the crossing gap width, which is the width of the `column-gap` for segment endpoints at gap junctions and `0` for endpoints at the container's edge.

## Description

The `row-rule-inset-cap` shorthand property can be used to set the {{cssxref("row-rule-inset-cap-end")}} and {{cssxref("row-rule-inset-cap-start")}} properties, insetting or outsetting both the left and right edges of [cap segment endpoints](#understanding_cap_end) in a single declaration.

If one value is specified, both properties are set to that value. If two values are specified, `-start` is set to the first value and `-end` is set to the second. The default value is `0`, which in the case of cap endpoints, is the same as `overlap-join`. Positive values reduce, or inset, the segment size, while negative values increase, or outset, it.

Row rules are painted within a row gap as one or more segments, with segments occurring between:

- Adjacent rows in CSS grid layouts.
- Adjacent flex items or flex lines in flex layouts, depending on the `flex-direction`.
- Adjacent rows in multi-col layouts, which may exist when {{cssxref("column-height")}} is set to a {{cssxref("&lt;length>")}}.

Whether a row rule spans multiple columns or is broken into multiple segments is defined by the {{cssxref("row-rule-break")}} property, with interior breaks between row rule segments generally being the size of the {{cssxref("column-gap")}}.

Length `row-rule-inset-cap` values inset segments by the specified value; with negative length values creating an outset, making the segment wider, and causing end edge cap segments to extend beyond the container's edge.

[Percentage values](#understanding_percentage_values) are relative to the size of the {{cssxref("column-gap")}} for interior segments. Setting `-50%` will extend the segment to the middle of the gap, while `-100%` will extend the segment across the entire gap. For cap segments at the containers edge, percentage values are relative to `0`, so percentage values never cause cap segment endpoints at the container's edge to extend beyond the container.

The `row-rule-inset-cap` property is a constituent property of a few [shorthand properties](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- To set the ends of all row segments, the `row-rule-inset-cap` property, along with the {{cssxref("row-rule-inset-junction")}} property, can be set using the {{cssxref("row-rule-inset")}} shorthand.

- To set the same values for all row and column cap endpoints, the `row-rule-inset-cap` property, along with the {{cssxref("column-rule-inset-cap")}} property, can be set using the {{cssxref("rule-inset-cap")}} shorthand.

All of these shorthand properties, along with their `-junction` and `column-` equivalents, can be set using the {{cssxref("rule-inset")}} shorthand.

### Understanding cap end

A _cap segment endpoint_ is any segment endpoint that is not a junction segment endpoint. This includes endpoints at the container's content edges, as well as endpoints at a gap junction where no other column or row segments are present.

The `row-rule-inset-cap` property can reduce or extend the left, right, or both ends of row segments at the left and right edges of the container and the row segment end at any interior junction where no other segments are present.

Cap segments are impacted by the {{cssxref("rule-visibility-items")}} properties, which define whether row- and column-rule segments are painted in gaps adjacent to empty areas (or would otherwise be painted if the `rule` were set to a visible value). Changing the value from `auto` to `between` and `around` values can lead to additional interior cap segments.

In the following demonstration, the row segments painted in the row gaps in the first and last columns end in cap endpoints at the container's left and right edges. With `row-rule-inset-cap: 16px` set, these row segment cap endpoints are inset by `16px`. Change the inset `<length>` value to better visualize which segments start or end in cap segment endpoints.

```html live-sample___caps live-sample___percent
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
  row-rule-inset-cap: -32px;

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
  row-rule-inset-cap: 100%;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.rowRuleInsetCap = `${inset.value}${inset.dataset["unit"]}`;
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

{{EmbedLiveSample("caps", "", "380")}}

Setting `16px` insets the left and right ends of all the row rules by `16px`. Setting `0px` aligns the ends of the row rules with the left and right edges of the container. This is the default.

Select `between` as the `rule-visibility-items` value. This value paints rules in a gap segments only if the two adjacent areas are occupied by items. Again, we have row rule cap endpoints at the left and right edges of the container. The third row rule, denoted with a double line style, has two additional cap endpoints segment: the right side of the segment between items `11` and `15` and the left side of segment between items `12` and `16` do not meet any other rule segments, so these are also cap segment endpoints, and are affected by the `row-rule-inset-cap-start` property.

In this case, the `around` value of the `rule-visibility-items` property, which paints rules in a gap segment as long as one adjacent area is occupied by an item, did not create addition cap segment endpoints. All the interior segment endpoints end in junctions where there are column segments, thus creating junction, not cap, segment endpoints. Junction endpoints can be inset using the {{cssxref("row-rule-inset-junction")}} shorthand property.

### Understanding percentage values

What a percentage value is relative to depends on the endpoint's location. Interior endpoint percentage values are relative to the size of the gap the cap endpoint touches, so generally relative to the {{cssxref("column-gap")}}, plus any additional spacing added due to {{cssxref("justify-content")}} settings. Percentages at container-edge endpoints are relative to `0`. For example, `row-rule-inset-cap: 50%` resolves to half the gap junction size at an interior cap (half the size of the `column-gap` value), and `0` at the container edges.

This example is not broken. When `rule-visibility-items` is set to `normal`, every row cap endpoint abuts the left or right edge of the container, so any percentage value set will be relative to `0`.

{{EmbedLiveSample("percents", "", "380")}}

Select `around` as the `rule-visibility-items` value. The first three rows start and the first and last row end at the container edge. Any percentage values for these row cap segment endpoints will resolve to `0`. All the other segments end at interior gaps where column rule segments are present, so these row segments are not cap segment endpoints.

Select `between` as the `rule-visibility-items` value. As in the previous demonstration, this value creates two interior cap segment endpoints: the right side of the segment between items `11` and `15` and the left side of segment between items `12` and `16` again do not meet any other rule segments. For these two cap endpoints, the percentage offset is relative to the size of the {{cssxref("column-gap")}} width, which in this case is `20px`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates setting `row-rule-inset-cap` to inset the row rule cap segment endpoints on flex containers.

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

We use the {{cssxref("display")}} property to turn the `.flexbox` elements into flex containers. We balance the items into three flex lines using {{cssxref("flex-wrap")}} and {{cssxref("flex-line-count")}}. We define a `lightblue` {{cssxref("rule")}} to paint both column and row gaps, then overwrite the {{cssxref("row-rule-color")}}, setting darker `blue` row gap decorations. Finally, we set the `row-rule-inset-cap` to `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;

  row-rule-inset-cap: 16px;
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
  containers[0].style.rowRuleInsetCap = val;
  containers[1].style.rowRuleInsetCap = val;
  output.innerText = val;
});
```

#### Result

{{EmbedLiveSample("Basic usage", "", "330")}}

Change the size of the inset. Note how only the row-segment grow and shrink at their cap ends, either their left side, their right side, or both directions, on the ends that don't intersect other column or row segments.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("row-rule-inset-cap-end")}}
- {{cssxref("row-rule-inset-cap-start")}}
- {{cssxref("row-rule-inset")}} shorthand
- {{cssxref("column-rule-inset-cap")}} shorthand
- {{cssxref("rule-inset")}} shorthand
- {{cssxref("row-rule-break")}}
- {{cssxref("rule-break")}} shorthand
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
