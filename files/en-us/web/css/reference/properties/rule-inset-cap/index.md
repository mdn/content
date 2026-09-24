---
title: "`rule-inset-cap` CSS property"
short-title: rule-inset-cap
slug: Web/CSS/Reference/Properties/rule-inset-cap
page-type: css-property
status:
  - experimental
browser-compat: css.properties.rule-inset-cap
sidebar: cssref
---

{{SeeCompatTable}}

The **`rule-inset-cap`** [CSS](/en-US/docs/Web/CSS) [shorthand](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) property can be used to offset the column and row rule segment [cap endpoints](#understanding_cap_end) to the same value.

{{InteractiveExample("CSS Demo: rule")}}

<!-- negative example must come first -->

```css interactive-example-choice
rule-inset-cap: -20px;
```

```css interactive-example-choice
rule-inset-cap: 0;
```

```css interactive-example-choice
rule-inset-cap: 1em;
```

```css interactive-example-choice
rule-inset-cap: 100%;
```

```css interactive-example-choice
rule-inset-cap: overlap-join;
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
  column-rule-color: rebeccapurple;
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

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("column-rule-inset-cap")}}
- {{cssxref("row-rule-inset-cap")}}

## Syntax

```css
/* Keywords */
rule-inset-cap: overlap-join;

/* A <length-percentage> value */
rule-inset-cap: 0;
rule-inset-cap: 1em;
rule-inset-cap: -5px;
rule-inset-cap: -25%;

/* Two values */
rule-inset-cap: 0 20px;
rule-inset-cap: 1em -5px;
rule-inset-cap: overlap-join -25%;

/* Global values */
rule-inset-cap: inherit;
rule-inset-cap: initial;
rule-inset-cap: revert;
rule-inset-cap: revert-layer;
rule-inset-cap: unset;
```

### Values

This property is specified as one or two values from the following list:

- `overlap-join`
  - : Resolves to `0`.
- {{cssxref("length-percentage")}}
  - : Specifies the size of the inset. Percentage values resolve to `0` for caps at the container's edge. For interior gaps, percentages are relative to the height of the adjacent `row-gap` for column segment caps, or the width of the adjacent `column-gap` for row segment caps.

## Description

The `rule-inset-cap` shorthand property can be used to set the {{cssxref("row-rule-inset-cap")}} and {{cssxref("column-rule-inset-cap")}} properties to the same value in a single declaration, insetting row and column cap segment endpoints by the specified values.

If you specify one value, both the start and end cap segment endpoints are set to that value. If you specify two values, the row and column cap start segment endpoints are set to the first value, and the row and column cap end segment endpoints are set to the second value.

The default value is `0`, which, in the case of cap endpoints, is the same as `overlap-join`. Positive values reduce the segment size, while negative values increase it.

The `rule-inset-cap` property, along with the {{cssxref("rule-inset-junction")}} property, can be set using the {{cssxref("rule-inset")}} shorthand.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example shows how to set `rule-inset-cap` to inset the endpoints of cap segments on flex containers.

#### HTML

```html
<h1>Insetting cap endpoints</h1>
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

We use the {{cssxref("display")}} property to turn the `.flexbox` elements into flex containers. We balance the items into three flex lines using {{cssxref("flex-wrap")}} and {{cssxref("flex-line-count")}}. We define a light blue {{cssxref("rule")}} to paint in both row and column gaps, then override the {{cssxref("column-rule-color")}}, setting darker `blue` vertical gap decorations. Finally, we set the `rule-inset-cap` to `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;

  rule-inset-cap: 16px;
}
```

We also set the {{cssxref("flex-direction")}} on the `.column` container to make its items flow in columns rather than rows. We've hidden the other CSS styles, and the code that make the form interactive, for brevity.

```css
.column {
  flex-direction: column;
}
```

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
  width: 90vw;
  margin: auto;
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
  @supports not (rule-inset-cap: 16px) {
    body::before {
      content: "Your browser doesn't support the rule-inset-cap property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden
const inset = document.getElementById("inset");
const containers = document.querySelectorAll(".flexbox");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  const val = `${inset.value}px`;
  containers[0].style.ruleInsetCap = val;
  containers[1].style.ruleInsetCap = val;
  output.innerText = val;
});
```

#### Result

{{EmbedLiveSample("Basic usage", "", "300")}}

Change the size of the inset.

### Setting two values

#### HTML

```html hidden
<p>
  <label
    >Change the <code>row-rule-inset-cap</code> value.
    <input type="range" min="-40" max="40" value="40" id="row" data-unit="px"
  /></label>
  <output id="og">40px</output>
</p>
<p>
  <label
    >Change the <code>column-rule-inset-cap</code> value.
    <input type="range" min="-40" max="40" value="-40" id="col" data-unit="px"
  /></label>
  <output id="ow">-40px</output>
</p>
```

Our HTML includes an unordered list ({{htmlelement("ul")}}) with nine list items ({{htmlelement("li")}}):

```html
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
</ul>
```

The user interface for selecting different values and the JavaScript that enables the interactivity have been hidden for brevity.

#### CSS

We create a grid container by setting the {{cssxref("display")}} to grid, creating 4 columns with {{cssxref("grid-template-columns")}}, and adding a `30px` {{cssxref("gap")}}. We use the {{cssxref("row-rule")}} and {{cssxref("column-rule")}} properties to define our rules. We then use the `rule-inset-cap` property to inset the start cap segment endpoints by `40px` and outset the end cap segment endpoints by `-40px`.

We also set the 6th grid item to span two columns.

```css
ul {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 30px;
  row-rule: 16px solid olive;
  column-rule: 10px solid palegoldenrod;

  rule-inset-cap: 40px -40px;
}
li:nth-of-type(6) {
  grid-column-end: span 2;
}
```

```css hidden
ul {
  width: calc(95vw - 80px);
  border: 1px solid;
  list-style-type: none;
  margin: auto;
  padding: 0;
  place-items: center;
}
li {
  place-content: center;
  text-align: center;
  font-family: sans-serif;
  background-color: #ededed;
  padding: 5vw;
  width: 100%;
  box-sizing: border-box;
}
li:nth-of-type(6) {
  padding: 2em 0;
}
li code {
  display: block;
  margin: 0 auto;
  text-align: left;
  background-color: #fcfcfc;
  width: calc(47.5vw - 40px);
}
output {
  font-family: monospace;
}
input {
  accent-color: olive;
}
```

```js hidden
const ul = document.querySelector("ul");
const rowSize = document.getElementById("row");
const og = document.getElementById("og");
const colSize = document.getElementById("col");
const ow = document.getElementById("ow");
const cell = document.querySelector("li:nth-of-type(6)");
let text = "";
const update = function () {
  ul.style.ruleInsetCap = text = `${rowSize.value}px ${colSize.value}px`;
  cell.innerHTML = `<code>rule-inset-cap: ${text};</code>`;
};

update();

rowSize.addEventListener("input", () => {
  og.innerText = `${rowSize.value}px`;
  update();
});

colSize.addEventListener("input", () => {
  ow.innerText = `${colSize.value}px`;
  update();
});
```

#### Result

{{EmbedLiveSample("Setting two value", "", "500")}}

Change the inset values for the starts and ends of the cap segment endpoints.

### Inner cap segments

This example shows how to set `rule-inset-cap` to inset the endpoints of cap segments on a grid container, and how the {{cssxref("rule-visibility-items")}} property can turn inner endpoints into cap segment endpoints.

#### HTML

We include an unordered list ({{htmlelement("ul")}}) as our container for several list items ({{htmlelement("li")}}).

We also include a {{htmlelement("select")}} element with an {{htmlelement("option")}} for each `rule-visibility-items` keyword, and an {{htmlelement("input")}} of type {{HTMLElement("input/range", "range")}}.

```html live-sample___caps
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

<p>
  <label
    >Change the inset size.
    <input type="range" min="-40" max="16" value="0" id="inset" data-unit="px"
  /></label>
  <output id="o"></output>
</p>
```

#### CSS

We create a grid container by setting the {{cssxref("display")}} to grid, creating 6 columns with {{cssxref("grid-template-columns")}}, and adding a `20px` {{cssxref("gap")}}. We use the {{cssxref("rule")}} property to define our rules, overriding the row rule color with the {{cssxref("row-rule-color")}} property. We set the {{cssxref("rule-break")}} property to break the rules at each intersection, making each rule segment distinct. We explicitly set {{cssxref("rule-visibility-items")}} to the default value of `normal`. We then use the `rule-inset-cap` property to inset all the cap segment endpoints by `16px`.

We also set the seventh list item to span two columns using the {{cssxref("grid-column-end")}} property.

```css
ul {
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 20px;
  rule: 10px solid olive;
  row-rule-color: palegoldenrod;
  rule-break: intersection;
  rule-visibility-items: normal;

  rule-inset-cap: 16px;
}

li:nth-of-type(7) {
  grid-column-end: span 2;
}
```

We've hidden the other CSS styles, and the code that make the form interactive, for brevity.

```css hidden
ul {
  place-items: center;
  padding: 0;
  list-style-type: none;
  border: 1px solid;
  margin: 40px;
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

li:nth-of-type(15) {
  grid-area: 4 / 5 / 5 / 6;
}
li:nth-of-type(16) {
  grid-area: 4 / 6 / 5 / 7;
}
li:nth-of-type(17) {
  display: none;
  grid-area: 5 / 6 / 6 / 7;
}
@layer no-support {
  @supports not (rule-inset-cap: 16px) {
    body::before {
      content: "Your browser doesn't support the rule-inset-cap property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  output.innerText =
    ul.style.ruleInsetCap = `${inset.value}${inset.dataset["unit"]}`;
});

visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
});
```

#### Result

{{EmbedLiveSample("Inner cap segments", "", "400")}}

Select `between` from the dropdown to paint only rule segments when both adjacent grid areas contain a grid item, thereby creating interior cap segments. Now change the inset value to visualize which segment endpoints are cap segment endpoints.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("column-rule-inset-cap")}} shorthand
- {{cssxref("row-rule-inset-cap")}} shorthand
- {{cssxref("column-rule-inset")}} shorthand
- {{cssxref("row-rule-inset")}} shorthand
- {{cssxref("rule-inset-start")}} shorthand
- {{cssxref("rule-inset")}} shorthand
- {{cssxref("rule-break")}} shorthand\
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
