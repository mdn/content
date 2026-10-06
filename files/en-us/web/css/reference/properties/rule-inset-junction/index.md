---
title: "`rule-inset-junction` CSS property"
short-title: rule-inset-junction
slug: Web/CSS/Reference/Properties/rule-inset-junction
page-type: css-property
status:
  - experimental
browser-compat: css.properties.rule-inset-junction
sidebar: cssref
---

{{SeeCompatTable}}

The **`rule-inset-junction`** [CSS](/en-US/docs/Web/CSS) [shorthand](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) property can be used to offset the column and row rule segment [junction endpoints](#understanding_junction_endpoints) to the same value.

{{InteractiveExample("CSS Demo: rule-inset-junction")}}

```css interactive-example-choice
rule-inset-junction: 0;
```

```css interactive-example-choice
rule-inset-junction: 10px;
```

```css interactive-example-choice
rule-inset-junction: 0.5em -0.5em;
```

```css interactive-example-choice
rule-inset-junction: overlap-join;
```

```css interactive-example-choice
rule-inset-junction: overlap-join 10px;
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
  rule-break: intersection;
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

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("column-rule-inset-junction")}}
- {{cssxref("row-rule-inset-junction")}}

## Syntax

```css
/* Keywords */
rule-inset-junction: overlap-join;

/* <length-percentage> values */
rule-inset-junction: 0;
rule-inset-junction: 1em;
rule-inset-junction: -5px;
rule-inset-junction: -25%;

/* Two values */
rule-inset-junction: 0 1em;
rule-inset-junction: -5px -25%;
rule-inset-junction: overlap-join 10px;

/* Global values */
rule-inset-junction: inherit;
rule-inset-junction: initial;
rule-inset-junction: revert;
rule-inset-junction: revert-layer;
rule-inset-junction: unset;
```

### Values

This property is specified as one or two values from the following list:

- `overlap-join`
  - : Specifies that the junction segment should extend across the row-rule, resolving to half the {{cssxref("row-gap")}} value plus half the used {{cssxref("row-rule-width")}} value.
- {{cssxref("length-percentage")}}
  - : Specifies the size of the inset. Percentage values are relative to the junction endpoint, which is the `row-gap` value for column segments and the `column-gap` value for row segments.

## Description

The `rule-inset-junction` shorthand property can be used to set the {{cssxref("row-rule-inset-junction")}} and {{cssxref("column-rule-inset-junction")}} properties to the same value in a single declaration, insetting row and column junction segment endpoints by the specified values.

If one value is specified, both properties are set to that value. If two values are specified, `-start` is set to the first value and `-end` is set to the second. Positive values reduce (or inset) the segment size, while negative values and the [`overlap-join` keyword](/en-US/docs/Web/CSS/Reference/Properties/rule-inset-junction-end#the_overlap-join_value) increase (or outset) it. The default value is `0`.

To inset both cap and junction segment endpoints, the `rule-inset-junction` shorthand property, along with the {{cssxref("rule-inset-cap")}} shorthand property, can be set using the {{cssxref("rule-inset")}} shorthand.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates setting `rule-inset-junction` to inset the edges of junction segments on flex containers.

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

We use the {{cssxref("display")}} property to turn the `.flexbox` elements into flex containers. We balance the items into three flex lines using {{cssxref("flex-wrap")}} and {{cssxref("flex-line-count")}}. We define a {{cssxref("rule")}} and set the `rule-inset-junction` to `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid blue;

  rule-inset-junction: 16px;
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
  @supports not (rule-inset-junction: 16px) {
    body::before {
      content: "Your browser doesn't support the rule-inset-junction property";
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
  containers[0].style.ruleInsetJunction = val;
  containers[1].style.ruleInsetJunction = val;
  output.innerText = val;
});
```

#### Result

{{EmbedLiveSample("Basic usage", "", "330")}}

Change the size of the inset. Note that where the rule is a single segment that goes from one edge of the container to the opposite edge, the segment has two cap endpoints and no junction endpoints. Therefore, changing the `rule-inset-junction` value does not affect these segments.

### With grid layout

This example demonstrates using the `rule-inset-junction` property to inset junction segment endpoints to two different values on a grid container.

#### HTML

We include the {{htmlelement("ul")}} element as a container with several {{htmlelement("li")}} children which will each be converted into a grid item.

```html live-sample___junctions
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
  <li>17</li>
  <li>18</li>
  <li>19</li>
</ul>
```

```html hidden live-sample___junctions
<p>
  <label
    >Change the <code>-start</code> value.
    <input type="range" min="-40" max="40" value="16" id="start" data-unit="px"
  /></label>
  <output id="og">16px</output>
</p>
<p>
  <label
    >Change the <code>-end</code> value.
    <input type="range" min="-40" max="40" value="0" id="end" data-unit="px"
  /></label>
  <output id="ow">0px</output>
</p>
```

#### CSS

We turn the `<ul>` into a grid container by setting the {{cssxref("display")}} property to `grid`. The {{cssxref("grid-template-columns")}} property specifies that the grid has five columns. We remove the bullets with the {{cssxref("list-style-type")}} property and set the row and column gaps to `20px` with the {{cssxref("gap")}} shorthand. We set the color, size, and line style of all the rules using the {{cssxref("rule")}} shorthand, then change just the row rule color with the {{cssxref("row-rule-color")}} property.

We break the rules at every intersection using the {{cssxref("rule-break")}} property. If the rules didn't break, there would be no junction segments to style!

Finally, we set the start of each column junction to be inset by `16px` and the end to not be inset using the `rule-inset-junction` property.

We also set the 6th grid item to span three columns.

```css live-sample___junctions
ul {
  display: grid;
  grid-template-columns: repeat(5, auto);
  list-style-type: "";
  gap: 20px;
  rule: 10px solid olive;
  row-rule-color: palegoldenrod;
  rule-break: intersection;

  rule-inset-junction: 16px 0;
}

li:nth-of-type(7) {
  grid-column-end: span 3;
}
```

The rest of the CSS is hidden for brevity.

```css hidden live-sample___junctions
ul {
  border: 1px solid;
  place-items: center;
  width: 95vw;
  padding: 0;
}
li {
  text-align: center;
  font-family: sans-serif;
  background-color: #ededed;
  padding: 2em 1em;
  width: 100%;
  box-sizing: border-box;
}
li code {
  display: block;
  margin: 0 auto;
  text-align: left;
  width: 30vw;
}
output {
  font-family: monospace;
}
input {
  accent-color: olive;
}
@layer no-support {
  @supports not (rule-inset-junction: 16px) {
    body::before {
      content: "Your browser doesn't support the rule-inset-junction property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden live-sample___junctions
const ul = document.querySelector("ul");
const startSize = document.getElementById("start");
const og = document.getElementById("og");
const endSize = document.getElementById("end");
const ow = document.getElementById("ow");
const cell = document.querySelector("li:nth-of-type(7)");
let text = "";
function update() {
  ul.style.ruleInsetJunction = text = `${startSize.value}px ${endSize.value}px`;
  cell.innerHTML = `<code>rule-inset-cap: ${text};</code>`;
}

update();

startSize.addEventListener("input", () => {
  og.innerText = `${startSize.value}px`;
  update();
});

endSize.addEventListener("input", () => {
  ow.innerText = `${endSize.value}px`;
  update();
});
```

#### Result

{{EmbedLiveSample("junctions", "", "500")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("rule-inset-cap")}} shorthand
- {{cssxref("rule-inset")}} shorthand
- {{cssxref("rule-break")}} shorthand
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
