---
title: "`row-rule-inset-junction-end` CSS property"
short-title: row-rule-inset-junction-end
slug: Web/CSS/Reference/Properties/row-rule-inset-junction-end
page-type: css-property
status:
  - experimental
browser-compat: css.properties.row-rule-inset-junction-end
sidebar: cssref
---

{{SeeCompatTable}}

The **`row-rule-inset-junction-end`** [CSS](/en-US/docs/Web/CSS) property can be used to offset the property can be used to offset the end of row rule segment [junction endpoints](#understanding_junction_end).

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
row-rule-inset-junction-end: 0;
```

```css interactive-example-choice
row-rule-inset-junction-end: 0.5em;
```

```css interactive-example-choice
row-rule-inset-junction-end: 5px;
```

```css interactive-example-choice
row-rule-inset-junction-end: -50%;
```

```css interactive-example-choice
row-rule-inset-junction-end: overlap-join;
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
  grid-template-columns: repeat(5, 1fr);
  rule: solid thick lightpink;
  row-rule-color: magenta;
  row-rule-break: intersection;
  gap: 1.5em;
  rule-overlap: row-over-column;
  border: 1px solid rebeccapurple;
  margin: auto;
  rule-visibility-items: around;
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
row-rule-inset-junction-end: overlap-join;

/* <length-percentage> values */
row-rule-inset-junction-end: 0;
row-rule-inset-junction-end: 1em;
row-rule-inset-junction-end: -5px;
row-rule-inset-junction-end: -25%;

/* Global values */
row-rule-inset-junction-end: inherit;
row-rule-inset-junction-end: initial;
row-rule-inset-junction-end: revert;
row-rule-inset-junction-end: revert-layer;
row-rule-inset-junction-end: unset;
```

### Values

This property is specified as a single value from the following list:

- `overlap-join`
  - : Specifies the junction segment should extend across the column-rule, resolving to half the {{cssxref("column-gap")}} value plus half the used {{cssxref("column-rule-width")}} value.
- {{cssxref("length-percentage")}}
  - : Specifies the size of the inset. Percentage values are relative to the junction endpoint, which is the `column-gap` value.

## Description

The `row-rule-inset-junction-end` property can be used to inset or outset [junction segment endpoints](#understanding_junction_end) occurring at the end o row rule segments. The default value is `0`. Positive values reduce the segment size, while negative values and the [`overlap-join` keyword](#the_overlap-join_value) increase it.

Row rules are painted within a row gap as one or more segments, with segments occurring between:

- Adjacent rows in CSS grid layouts.
- Adjacent flex items or flex lines in flex layouts, depending on the `flex-direction`.
- Adjacent rows in multi-col layouts, which may exist when {{cssxref("column-height")}} is set to a {{cssxref("&lt;length>")}}.

Whether a row rule spans multiple columns or is broken into multiple segments is defined by the {{cssxref("row-rule-break")}} property. Interior breaks between row rule segments are the size of the {{cssxref("column-gap")}}. A junction end occurs at the end of every row segment where the segment ends at a gap junction with other row or rule segments present. If the `row-rule-break` isn't set to break,

The `row-rule-inset-junction-end` property is a constituent property of several [shorthand properties](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- To inset both left and right row segment junction endpoints, the `row-rule-inset-junction-end` property, along with the {{cssxref("row-rule-inset-junction-start")}} property, can be set using the {{cssxref("row-rule-inset-junction")}} shorthand.

- To inset all row segment endpoints, the `row-rule-inset-junction-end` property, along with the {{cssxref("row-rule-inset-cap-end")}} property, can be set using the {{cssxref("row-rule-inset-end")}} shorthand.

- To inset the end of row segment junction endpoints and bottom of column segment junction endpoints, the `row-rule-inset-junction-end` property, along with the {{cssxref("column-rule-inset-junction-end")}} property, can be set using the {{cssxref("rule-inset-junction-end")}} shorthand.

All segment endpoints, including this property's `-start`, `-cap`, and `column-` equivalents, can be set using the {{cssxref("rule-inset")}} shorthand.

### Understanding junction endpoints

A _junction segment endpoint_ is any segment endpoint at an interior gap that ends at a gap intersection where other column rule or row rule segments are present. The `row-rule-inset-junction-end` property controls the inset of the end edge of row junction segments, allowing the segments to be shrunk or extended.

Length `row-rule-inset-junction-end` values inset junction segments by the specified value. Percentage values are relative to the size of the {{cssxref("column-gap")}}. Negative values create an outset, extending the end of the junction segment. Setting `-50%` outsets the end of the junction segment half way through the adjacent column gap, no matter how wide the column gap is.

In the following demonstration, the row rule segments in the top two columns end in junction endpoints. With `row-rule-inset-junction-end: 16px` set, the right, or end, of these segments are inset by `16px`. Change the inset `<length>` value to better visualize which segments end in junction segment endpoints.

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
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li class="b">21</li>
  <li class="c">23</li>
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
    <input type="range" min="-20" max="16" value="16" id="inset" data-unit="px"
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
      value="50"
      id="inset"
      data-unit="%"
  /></label>
  <output id="o">50%</output>
</p>
```

```css hidden live-sample___junctions live-sample___percents
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
  row-rule-inset-junction-end: 16px;

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
.b {
  grid-column: 3 / 4;
  grid-row: 4 / 5;
}
.c {
  grid-column: 5 / 6;
  grid-row: 4 / 5;
}
@layer no-support {
  @supports not (row-rule-inset-junction-end: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-junction-end property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```css hidden live-sample___percents
ul {
  row-rule-inset-junction-end: 100%;
  row-rule-style: inset;
}
```

```js hidden live-sample___junctions live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.rowRuleInsetJunctionEnd = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___junctions
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value == "between") {
    ul.style.rowRuleStyle = "repeat(3, solid), repeat(2, double)";
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

{{EmbedLiveSample("junctions", "", "400")}}

The {{cssxref("rule-break")}} property is set to `intersection`, breaking all the row and column segments at every gap junction, with the end of each interior row segment abutting a column gap by default. The default value of the `row-rule-inset-junction-end` property is `0`.

Change the inset value. Note how only the right ends of the row segments in the middle of the grid change when the property value changes. The segment endpoints at the containers do not change: these are _cap endpoints_, and are not affected by the `row-rule-inset-junction-end` property.

Select `between` as the `rule-visibility-items` value. This value causes rules in gap segments to be painted only if items occupy both adjacent areas. The row rule segment between `17` and `24` now ends at an interior junction where no other rule segments are present: the end of this row segment is a _cap segment endpoint_ and isn't affected by the `row-rule-inset-junction-end` property. The `row-rule-inset-cap-end` property can be used to inset this segment endpoint.

The `around` value paints rules in gap segments if an item occupies at least one of the two adjacent areas. In this example, no junction segment endpoints became cap segment endpoints, but some cap segments were not drawn.

### The `overlap-join` value

The `overlap-join` value outsets the end of interior segments so they align with the far edge of the intersected column-rule. The value resolves to half the {{cssxref("column-gap")}} size (which would extend it to the middle of the gap) plus half the column rule width. When `row-rule-inset-junction-end` is set to the `overlap-join` keyword value, the ends of the junction end segments extend into the column gap to meet, or "join", the opposite edge of the column rule painted in that gap.

In the following live example, `row-rule-inset-junction-end` is set to `overlap-join`:

```html hidden
<p>
  <label
    >Change the <code>column-gap</code>.
    <input type="range" min="10" max="40" value="40" id="gap" data-unit="px"
  /></label>
  <output id="og">40px</output>
</p>
<p>
  <label
    >Change the <code>column-rule-width</code>.
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
  row-rule: 16px solid olive;
  column-rule: 10px solid palegoldenrod;
  rule-overlap: row-over-column;
  rule-visibility-items: around;
  row-rule-break: intersection;
  row-rule-inset-junction-end: overlap-join;
  border: 1px solid;
}
ul {
  place-items: center;
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
@layer no-support {
  @supports not (row-rule-inset-junction-end: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-junction-end property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden
const ul = document.querySelector("ul");
const gapSize = document.getElementById("gap");
const og = document.getElementById("og");
const ruleWidth = document.getElementById("rrw");
const ow = document.getElementById("ow");

gapSize.addEventListener("input", () => {
  og.innerText = ul.style.columnGap = `${gapSize.value}px`;
});

ruleWidth.addEventListener("input", () => {
  ow.innerText = ul.style.columnRuleWidth = `${ruleWidth.value}px`;
});
```

{{EmbedLiveSample("the overlap-join value", "", "430")}}

Change the size of the {{cssxref("column-rule-width")}} and the {{cssxref("column-gap")}}. Notice how, no matter the size of the gap or column rule, the end of the row segment is always stretched across the column rule, with the endpoint aligned with the opposite edge of the column rule painted in the gap.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates setting `row-rule-inset-junction-end` to inset the end edge of junction segments on flex containers.

#### HTML

```html
<h1>Insetting junction row rule endpoints</h1>
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

We use the {{cssxref("display")}} property to turn the `.flexbox` elements into flex containers. We balance the items into three flex lines using {{cssxref("flex-wrap")}} and {{cssxref("flex-line-count")}}. We define a light blue {{cssxref("rule")}} to paint both column and row gaps, then overwrite the {{cssxref("row-rule-color")}}, setting darker `blue` row gap decorations. Finally, we set the `row-rule-inset-junction-end` to `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;

  row-rule-inset-junction-end: 16px;
}
```

We also set the {{cssxref("flex-direction")}} on the `.column` container to `column`, changing the main axis of the flex container, making the items flow in columns rather than rows.

```css
.column {
  flex-direction: column;
}
```

The rest of the CSS is hidden for brevity.

```css hidden
h1,
article {
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
@layer no-support {
  @supports not (row-rule-inset-junction-end: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-junction-end property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden live-sample___basic
const inset = document.getElementById("inset");
const containers = document.querySelectorAll(".flexbox");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  const val = `${inset.value}px`;
  containers[0].style.rowRuleInsetJunctionEnd = val;
  containers[1].style.rowRuleInsetJunctionEnd = val;
  output.innerText = val;
});
```

#### Result

{{EmbedLiveSample("Basic usage", "", "330")}}

Change the size of the inset. Note that in the right-hand example, where the row rule is a single segment that goes from left to right, the segment has two cap endpoints and no junction endpoints. Therefore, changing the `row-rule-inset-junction-end` value does not affect this example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("row-rule-inset-junction-start")}}
- {{cssxref("row-rule-inset-junction")}} shorthand
- {{cssxref("rule-inset-junction-start")}} shorthand
- {{cssxref("row-rule-inset")}} shorthand
- {{cssxref("rule-inset")}} shorthand
- {{cssxref("row-rule-break")}}
- {{cssxref("rule-break")}} shorthand
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
