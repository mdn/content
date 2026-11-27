---
title: "`row-rule-inset-end` CSS property"
short-title: row-rule-inset-end
slug: Web/CSS/Reference/Properties/row-rule-inset-end
page-type: css-property
browser-compat: css.properties.row-rule-inset-end
sidebar: cssref
---

The **`row-rule-inset-end`** [CSS](/en-US/docs/Web/CSS) property can be used to offset the end edges of row rule segments.

{{InteractiveExample("CSS Demo: row-rule-inset-end")}}

```css interactive-example-choice
row-rule-inset-end: 0;
```

```css interactive-example-choice
row-rule-inset-end: 0.5em;
```

```css interactive-example-choice
row-rule-inset-end: 10px;
```

```css interactive-example-choice
row-rule-inset-end: -100%;
```

```css interactive-example-choice
row-rule-inset-end: overlap-join;
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
  grid-template-rows: repeat(5, 1fr);
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
  background-color: #efefef;
  padding: 1em;
}
```

## Syntax

```css
/* Keywords */
row-rule-inset-end: overlap-join;

/* <length-percentage> values */
row-rule-inset-end: 0;
row-rule-inset-end: 1em;
row-rule-inset-end: -5px;
row-rule-inset-end: -25%;

/* Global values */
row-rule-inset-end: inherit;
row-rule-inset-end: initial;
row-rule-inset-end: revert;
row-rule-inset-end: revert-layer;
row-rule-inset-end: unset;
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("row-rule-inset-cap-end")}}
- {{cssxref("row-rule-inset-junction-end")}}

### Values

This property is specified as a single value from the following list:

- `overlap-join`
  - : Specifies that the junction segment should extend across the column-rule, resolving to half the {{cssxref("column-gap")}} value plus half the used {{cssxref("column-rule-width")}} value for junction endpoints and `0` for cap endpoints.
- {{cssxref("length-percentage")}}
  - : Specifies the size of the inset. Percentage values are relative to the gap at the endpoint, which is the `column-gap` value for junction endpoints and `0` for cap endpoints..

## Description

The `row-rule-inset-end` property can be used to inset or outset row segment endpoints, setting both the `row-rule-inset-cap-end` and `row-rule-inset-junction-end` to the same value. The default value is `0`.

Row rules are painted within a row gap as one or more segments, with segments occurring between:

- Adjacent rows in CSS grid layouts.
- Adjacent flex items or flex lines in flex layouts, depending on the `flex-direction`.
- Adjacent rows in multi-col layouts.

Whether a row rule spans multiple columns or is broken at each column-gap intersection is defined by the {{cssxref("row-rule-break")}} property. Each row segment has start and end endpoints, with the `row-rule-inset-end` property enabling specifying an inset or outset for the latter endpoint only. Whether the right or left edge of the segment is the end edge depends on the writing mode. In left-to-right languages, like English, the right side of each row rule segment is the end edge.

Each endpoint is either a **junction** or a **cap** endpoint. A _junction segment endpoint_ is any segment endpoint at an interior gap intersection where other column or row rule segments are present. A _cap segment endpoint_ is any segment endpoint that is not a junction segment endpoint. This includes endpoints at the container's content edges, as well as endpoints at a gap junction where no other column or row segments are present. In other words, if the end edge of the row segment is at a gap junction where other row or rule segments are present, it is a _junction end_. Otherwise, it is a _cap end_.

- To inset both left and right row segment endpoints, the `row-rule-inset-end` property, along with the {{cssxref("row-rule-inset-start")}} property, can be set using the {{cssxref("row-rule-inset")}} shorthand.

- To inset the ends of both row and column rule segments to the same value, the `row-rule-inset-end` property, along with the {{cssxref("column-rule-inset-end")}} property, can be set using the {{cssxref("rule-inset-end")}} shorthand.

All segment endpoints, including this property's `-start`, and `column-` equivalents, can be set using the {{cssxref("rule-inset")}} shorthand.

### The `overlap-join` value

The `overlap-join` value outsets the end edge of junction segments so they align with the opposite side of the intersected column-rule. The value resolves to half the {{cssxref("column-gap")}} size (which would extend it to the middle of the gap) plus half the column rule width. It makes the end edges of junction end segments extend into the column gap to meet, or "join", the other side of the column rule painted in that gap. For cap endpoints, the `overlap-join` value resolves to `0`.

In the following live example, `row-rule-inset-end` is set to `overlap-join`:

```html hidden
<p>
  <label
    >Change the <code>column-gap</code>.
    <input type="range" min="10" max="40" value="30" id="gap" data-unit="px"
  /></label>
  <output id="og">30px</output>
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
  grid-template-rows: repeat(4, auto);
  list-style-type: none;
  gap: 30px;
  row-rule: 16px solid olive;
  column-rule: 10px solid palegoldenrod;
  rule-overlap: row-over-column;
  rule-visibility-items: around;
  row-rule-break: intersection;
  row-rule-inset-end: overlap-join;
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
@layer no-support {
  @supports not (row-rule-inset-end: overlap-join) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-end property";
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

Change the size of the {{cssxref("column-rule-width")}} and the {{cssxref("column-gap")}}. Notice how, no matter the size of the gap or column rule, the end edge of the row segments that meet a column rule are always stretched to align with the opposite side of that column rule.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates setting `row-rule-inset-end` to inset the end edge of junction segments on flex containers.

#### HTML

The markup includes two {{htmlelement("div")}} elements, each containing seven children. The only difference between the two containers is that the second one has an added `column` class.

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

We use the {{cssxref("display")}} property to turn the `.flexbox` elements into flex containers. We balance the items into three flex lines using {{cssxref("flex-wrap")}} and {{cssxref("flex-line-count")}}. We define a light blue {{cssxref("rule")}} to paint both column and row rules, then overwrite the {{cssxref("row-rule-color")}}, setting darker `blue` row gap decorations. We also set the {{cssxref("rule-overlap")}} property to `row-over-column` to ensure the row segments are drawn on top of the column segments when the segments overlap. Finally, we set the `row-rule-inset-end` to `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;
  rule-overlap: row-over-column;

  row-rule-inset-end: 16px;
}
```

We also set the {{cssxref("flex-direction")}} on the `.column` container to `column`, changing the main axis of the flex container to run up and down the page and making the items flow in columns rather than rows.

```css
.row {
  flex-direction: row;
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
  @supports not (row-rule-inset-end: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-end property";
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
  containers[0].style.rowRuleInsetEnd = val;
  containers[1].style.rowRuleInsetEnd = val;
  output.innerText = val;
});
```

#### Result

{{EmbedLiveSample("Basic usage", "", "330")}}

Change the size of the inset.

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
- [Defining rule insets](/en-US/docs/Web/CSS/Guides/Gaps/Rule_insets) guide
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
