---
title: "`column-rule-inset-junction-end` CSS property"
short-title: column-rule-inset-junction-end
slug: Web/CSS/Reference/Properties/column-rule-inset-junction-end
page-type: css-property
status:
  - experimental
browser-compat: css.properties.column-rule-inset-junction-end
sidebar: cssref
---

{{SeeCompatTable}}

The **`column-rule-inset-junction-end`** [CSS](/en-US/docs/Web/CSS) property can be used to offset the bottom endpoints of column rule segments that are [junction endpoints](#understanding_junction_end); that is, endpoints at gap junctions where rule segments intersect.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
column-rule-inset-junction-end: 0;
```

```css interactive-example-choice
column-rule-inset-junction-end: 0.5em;
```

```css interactive-example-choice
column-rule-inset-junction-end: 10px;
```

```css interactive-example-choice
column-rule-inset-junction-end: -100%;
```

```css interactive-example-choice
column-rule-inset-junction-end: overlap-join;
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
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  rule: solid thick lightpink;
  column-rule-color: magenta;
  column-rule-break: intersection;
  gap: 1.5em;
  rule-overlap: column-over-row;
  border: 1px solid rebeccapurple;
  margin: auto;
  rule-visibility-items: around;
}
#example-element i {
  background-color: #efefef;
  padding: 1em;
}
```

## Syntax

```css
/* Keywords */
column-rule-inset-junction-end: overlap-join;

/* <length-percentage> values */
column-rule-inset-junction-end: 0;
column-rule-inset-junction-end: 1em;
column-rule-inset-junction-end: -5px;
column-rule-inset-junction-end: -25%;

/* Global values */
column-rule-inset-junction-end: inherit;
column-rule-inset-junction-end: initial;
column-rule-inset-junction-end: revert;
column-rule-inset-junction-end: revert-layer;
column-rule-inset-junction-end: unset;
```

### Values

This property is specified as a single value from the following list:

- `overlap-join`
  - : Specifies the junction segment should extend across the row-rule, resolving to half the {{cssxref("row-gap")}} value plus half the used {{cssxref("row-rule-width")}} value.
- {{cssxref("length-percentage")}}
  - : Specifies the size of the inset. Percentage values are relative to the junction endpoint, which is the `row-gap` value.

## Description

The `column-rule-inset-junction-end` property can be used to inset or outset [junction segment endpoints](#understanding_junction_end) occurring at the bottom of column rule segments. The default value is `0`. Positive values reduce the segment size, while negative values and [the `overlap-join` keyword](#the_overlap-join_value) increase it.

Column rules are painted within a column gap as one or more segments, with segments occurring between:

- Adjacent columns in CSS grid layouts.
- Adjacent flex items or flex lines in flex layouts, depending on the `flex-direction`.
- Adjacent columns in multi-col layouts.

Whether a column rule spans multiple rows or is broken into multiple segments is defined by the {{cssxref("column-rule-break")}} property; interior breaks between column rule segments are the size of the {{cssxref("row-gap")}}. A junction end occurs at the bottom of every column segment where the segment's bottom ends at a gap junction with other column or rule segments present.

The `column-rule-inset-junction-end` property is a constituent property of several [shorthand properties](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- To inset top and bottom column segment junction endpoints, the `column-rule-inset-junction-end` property, along with the {{cssxref("column-rule-inset-junction-start")}} property, can be set using the {{cssxref("column-rule-inset-junction")}} shorthand.

- To inset all bottom column segment endpoints, the `column-rule-inset-junction-end` property, along with the {{cssxref("column-rule-inset-cap-end")}} property, can be set using the {{cssxref("column-rule-inset-end")}} shorthand.

- To inset bottom column segment junction endpoints and right row segment junction endpoints, the `column-rule-inset-junction-end` property, along with the {{cssxref("row-rule-inset-junction-end")}} property, can be set using the {{cssxref("rule-inset-junction-end")}} shorthand.

All of these shorthand properties, along with their `-start`, `-cap`, and `row-` equivalents, can be set using the {{cssxref("rule-inset")}} shorthand.

### Understanding junction endpoints

A _junction segment endpoint_ is any segment endpoint at an interior gap that ends at a gap intersection where other rule or column segments are present. The `column-rule-inset-junction-end` property controls the inset of the bottom edge of column junction segments, allowing the segments to be shrunk or extended.

Length `column-rule-inset-junction-end` values inset segments by the specified value. Negative length values create an outset, extending the bottom end of the junction segment. Percentage values are relative to the size of the {{cssxref("row-gap")}}. Setting `-50%` outsets the bottom of the junction segment half way through the row gap below the segment, no matter how wide the row gap is.

In the following demonstration, the column rule segments in the top two rows end in junction endpoints. With `column-rule-inset-junction-end: 16px` set, the bottom, or end, of these segments are inset by `16px`. Change the inset `<length>` value to better visualize which segments end in junction segment endpoints.

```html hidden live-sample___junctions live-sample___percents
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
  <li>15</li>
  <li>16</li>
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

```html hidden live-sample___junctions
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
      min="-450"
      max="100"
      value="100"
      id="inset"
      data-unit="%"
  /></label>
  <output id="o">100%</output>
</p>
```

```css hidden live-sample___junctions live-sample___percents
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
  column-rule-inset-junction-end: 16px;

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
```

```css hidden live-sample___percents
ul {
  column-rule-inset-junction-end: 100%;
  column-rule-style: inset;
}
```

```js hidden live-sample___junctions live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.columnRuleInsetJunctionEnd = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___junctions
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value == "between") {
    ul.style.columnRuleStyle = "repeat(3, solid), repeat(2, double)";
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

{{EmbedLiveSample("junctions", "", "300")}}

If you set `0px` as the value, the end of the column rules will align with the end of the row, abutting the row gap. This is the default. Note how only the bottom ends of the segments in the middle of the grid change when the property value changes. The segments in the bottom row do not change: these are _cap endpoints_, and are not affected by the `column-rule-inset-junction-end` property.

Select `around` as the `rule-visibility-items` value. This value paints rules in a gap segment if a segment occupies at least one of the two adjacent areas. The double line-style column rule segments that appear when the `rule-visibility-items` property is set to `around` end at an interior intersection where one or more row-rule segments are present; these column segments are junction segment endpoints.

Select `between` as the `rule-visibility-items` value, which paints rules in gap segments only if a segment occupies both adjacent areas. The double line-style column rule segments now end at an interior intersection where no other rule segments are present: these column segments are _cap segment endpoints_ and therefore aren't affected by the `column-rule-inset-junction-end` property.

### The `overlap-join` value

The `overlap-join` value outsets the bottom end of interior segments so they align with the bottom of the intersected row-rule. The value resolves to half the {{cssxref("row-gap")}} size (which would extend it to the middle of the gap) plus half the row rule width.

When `column-rule-inset-junction-end` is set to the `overlap-join` keyword value, the bottom ends of the junction end segments extend down into the row gap to meet, or "join", the bottom edge of the row rule painted in that gap.

In the following live example, `column-rule-inset-junction-end` is set to `overlap-join`:

```html hidden
<p>
  <label
    >Change the <code>row-gap</code>.
    <input type="range" min="10" max="40" value="30" id="gap" data-unit="px"
  /></label>
  <output id="og">30px</output>
</p>
<p>
  <label
    >Change the <code>row-rule-width</code>.
    <input type="range" min="0" max="40" value="16" id="rrw" data-unit="px"
  /></label>
  <output id="ow">16px</output>
</p>

<ul>
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
</ul>
```

```css hidden
ul {
  display: grid;
  grid-template-columns: repeat(4, auto);
  list-style-type: none;
  gap: 30px;
  column-rule: 16px solid olive;
  row-rule: 10px solid palegoldenrod;
  rule-overlap: column-over-row;
  rule-visibility-items: around;
  column-rule-break: intersection;
  column-rule-inset-junction-end: overlap-join;
  border: 1px solid;
}
ul {
  place-items: center;
  width: 70vw;
  margin: auto;
  padding: 0;
}
li {
  text-align: center;
  font-family: sans-serif;
  background-color: #ededed;
  padding: 2em;
  width: 100%;
  box-sizing: border-box;
}
```

```js hidden
const ul = document.querySelector("ul");
const gapSize = document.getElementById("gap");
const og = document.getElementById("og");
const ruleWidth = document.getElementById("rrw");
const ow = document.getElementById("ow");

gapSize.addEventListener("input", () => {
  og.innerText = ul.style.rowGap = `${gapSize.value}px`;
});

ruleWidth.addEventListener("input", () => {
  ow.innerText = ul.style.rowRuleWidth = `${ruleWidth.value}px`;
});
```

{{EmbedLiveSample("the overlap-join value", "", "430")}}

Change the size of the {{cssxref("row-rule-width")}} and the {{cssxref("row-gap")}}. Notice how, no matter the size of the gap or row rule, the bottom end of the column segment is always stretched to align with the bottom of the row rule painted in the gap.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates setting `column-rule-inset-junction-end` to inset the end edge of junction segments on flex containers.

#### HTML

```html
<h1>Insetting junction column rule endpoints</h1>
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

We use the {{cssxref("display")}} property to turn the `.flexbox` elements into flex containers. We balance the items into three flex lines using {{cssxref("flex-wrap")}} and {{cssxref("flex-line-count")}}. We define a light blue {{cssxref("rule")}} to paint both row and column gaps, then overwrite the {{cssxref("column-rule-color")}}, setting darker `blue` column gap decorations. We also set the {{cssxref("
  rule-overlap")}} property to `column-over-row` to ensure the column segments are drawn on top of the row segments when the segments overlap. Finally, we set the `column-rule-inset-junction-end` to `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;
  rule-overlap: column-over-row;

  column-rule-inset-junction-end: 16px;
}
```

We also set the {{cssxref("flex-direction")}} on the `.column` container to `column`, changing the main axis of the flex container to run up and down the page and making the items flow in columns rather than rows.

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
  containers[0].style.columnRuleInsetJunctionEnd = val;
  containers[1].style.columnRuleInsetJunctionEnd = val;
  output.innerText = val;
});
```

#### Result

{{EmbedLiveSample("Basic usage", "", "330")}}

Change the size of the inset. Note that in the right-hand example, where the column rule is a single segment that goes from top to bottom, the segment has two cap endpoints and no junction endpoints. Therefore, changing the `column-rule-inset-junction-end` value does not affect this example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("column-rule-inset-junction-start")}}
- {{cssxref("column-rule-inset-junction")}} shorthand
- {{cssxref("rule-inset-junction-start")}} shorthand
- {{cssxref("column-rule-inset")}} shorthand
- {{cssxref("rule-inset")}} shorthand
- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}} shorthand
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
