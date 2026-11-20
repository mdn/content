---
title: "`column-rule-inset-start` CSS property"
short-title: column-rule-inset-start
slug: Web/CSS/Reference/Properties/column-rule-inset-start
page-type: css-property
browser-compat: css.properties.column-rule-inset-start
sidebar: cssref
---

The **`column-rule-inset-start`** [CSS](/en-US/docs/Web/CSS) property can be used to offset the top endpoints of column rule segments.

{{InteractiveExample("CSS Demo: column-rule-inset-start")}}

```css interactive-example-choice
column-rule-inset-start: 0;
```

```css interactive-example-choice
column-rule-inset-start: 0.5em;
```

```css interactive-example-choice
column-rule-inset-start: 10px;
```

```css interactive-example-choice
column-rule-inset-start: -100%;
```

```css interactive-example-choice
column-rule-inset-start: overlap-join;
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
column-rule-inset-start: overlap-join;

/* <length-percentage> values */
column-rule-inset-start: 0;
column-rule-inset-start: 1em;
column-rule-inset-start: -5px;
column-rule-inset-start: -25%;

/* Global values */
column-rule-inset-start: inherit;
column-rule-inset-start: initial;
column-rule-inset-start: revert;
column-rule-inset-start: revert-layer;
column-rule-inset-start: unset;
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("column-rule-inset-cap-start")}}
- {{cssxref("column-rule-inset-junction-start")}}

### Values

This property is specified as a single value from the following list:

- `overlap-join`
  - : Specifies that the junction segment should extend across the row-rule, resolving to half the {{cssxref("row-gap")}} value plus half the used {{cssxref("row-rule-width")}} value for junction endpoints and `0` for cap endpoints.
- {{cssxref("length-percentage")}}
  - : Specifies the size of the inset. Percentage values are relative to the gap at the endpoint, which is the `row-gap` value for junction endpoints and `0` for cap endpoints..

## Description

The `column-rule-inset-start` property can be used to inset or outset column segment endpoints, setting both the `column-rule-inset-cap-start` and `column-rule-inset-junction-start` to the same value. The default value is `0`.

Column rules are painted within a column gap as one or more segments, with segments occurring between:

- Adjacent columns in CSS grid layouts.
- Adjacent flex items or flex lines in flex layouts, depending on the `flex-direction`.
- Adjacent columns in multi-col layouts.

Whether a column rule spans multiple rows or is broken at each row-gap intersection into multiple segments is defined by the {{cssxref("column-rule-break")}} property. Each column segment has start and end endpoints, at the top and bottom of the segment, respectively, with the `column-rule-inset-start` property enabling specifying an inset or outset for the former endpoint only.

Each endpoint is either a **junction** or a **cap** endpoint. A _junction segment endpoint_ is any segment endpoint at an interior gap that ends at a gap intersection where other rule or column segments are present. A _cap segment endpoint_ is any segment endpoint that is not a junction segment endpoint. This includes endpoints at the container's content edges, as well as endpoints at a gap junction where no other row or column segments are present.

If the top of a column segment ends at a gap junction where other column or rule segments are present, it is a _junction end_. Otherwise, it is a _cap end_.

- To inset both top and bottom column segment endpoints, the `column-rule-inset-start` property, along with the {{cssxref("column-rule-inset-end")}} property, can be set using the {{cssxref("column-rule-inset")}} shorthand.

- To inset the starts of both column and row rule segments to the same value, the `column-rule-inset-start` property, along with the {{cssxref("row-rule-inset-start")}} property, can be set using the {{cssxref("rule-inset-start")}} shorthand.

All segment endpoints, including this property's `-end`, and `row-` equivalents, can be set using the {{cssxref("rule-inset")}} shorthand.

### The `overlap-join` value

The `overlap-join` value outsets the top end of junction segments so they align with the top of the intersected row-rule. The value resolves to half the {{cssxref("row-gap")}} size (which would extend it to the middle of the gap) plus half the row rule width. It makes the top ends of the junction end segments extend up into the row gap to meet, or "join", the top edge of the row rule painted in that gap. For cap endpoints, the `overlap-join` value resolves to `0`.

In the following live example, `column-rule-inset-start` is set to `overlap-join`:

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
  column-rule-inset-start: overlap-join;
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
  @supports not (column-rule-inset-start: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-start property";
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
  og.innerText = ul.style.rowGap = `${gapSize.value}px`;
});

ruleWidth.addEventListener("input", () => {
  ow.innerText = ul.style.rowRuleWidth = `${ruleWidth.value}px`;
});
```

{{EmbedLiveSample("the overlap-join value", "", "430")}}

Change the size of the {{cssxref("row-rule-width")}} and the {{cssxref("row-gap")}}. Notice how, no matter the size of the gap or row rule, the tops of the column segments that meet a row rule are always stretched to align with the top of that row rule.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates setting `column-rule-inset-start` to inset the start edge of junction segments on flex containers.

#### HTML

The markup includes two {{htmlelement("div")}} elements, each containing seven children. The only difference between the two containers is that the second one has an added `column` class.

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

We use the {{cssxref("display")}} property to turn the `.flexbox` elements into flex containers. We balance the items into three flex lines using {{cssxref("flex-wrap")}} and {{cssxref("flex-line-count")}}. We define a light blue {{cssxref("rule")}} to paint both row and column rules, then overwrite the {{cssxref("column-rule-color")}}, setting darker `blue` column gap decorations. We also set the {{cssxref("rule-overlap")}} property to `column-over-row` to ensure the column segments are drawn on bottom of the row segments when the segments overlap. Finally, we set the `column-rule-inset-start` to `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;
  rule-overlap: column-over-row;

  column-rule-inset-start: 16px;
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
  @supports not (column-rule-inset-start: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-start property";
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
  containers[0].style.columnRuleInsetStart = val;
  containers[1].style.columnRuleInsetStart = val;
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

- {{cssxref("column-rule-inset-junction-end")}}
- {{cssxref("column-rule-inset-junction")}} shorthand
- {{cssxref("rule-inset-junction-end")}} shorthand
- {{cssxref("column-rule-inset")}} shorthand
- {{cssxref("rule-inset")}} shorthand
- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}} shorthand
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} shorthand
- [Defining rule insets](/en-US/docs/Web/CSS/Guides/Gaps/Rule_insets) guide
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
