---
title: "`flex-wrap` CSS property"
short-title: flex-wrap
slug: Web/CSS/Reference/Properties/flex-wrap
page-type: css-property
browser-compat: css.properties.flex-wrap
sidebar: cssref
---

The **`flex-wrap`** [CSS](/en-US/docs/Web/CSS) property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

{{InteractiveExample("CSS Demo: flex-wrap")}}

```css interactive-example-choice
flex-wrap: nowrap;
```

```css interactive-example-choice
flex-wrap: wrap;
```

```css interactive-example-choice
flex-wrap: wrap-reverse;
```

```css interactive-example-choice
flex-wrap: wrap balance;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Item One</div>
    <div>Item Two</div>
    <div>Item Three</div>
    <div>Item Four</div>
    <div>Item Five</div>
    <div>Item Six</div>
    <div>Item Seven</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

The {{cssxref("flex-flow")}} property shorthand can be used to set both the {{CSSXRef("flex-direction")}} and `flex-wrap` properties, which define the flex container's main and cross axes, respectively.

## Syntax

```css
/* Keyword values */
flex-wrap: nowrap;
flex-wrap: wrap;
flex-wrap: wrap-reverse;
flex-wrap: balance;
flex-wrap: wrap balance;
flex-wrap: balance wrap-reverse;

/* Global values */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: revert-layer;
flex-wrap: unset;
```

### Values

This property is specified as a single value from the following list or as two space-separated values when using `balance`:

- `nowrap`
  - : The flex items are laid out in a single line which may cause the flex container to overflow. This is the initial value.
- `wrap`
  - : The flex items can break into multiple lines.
- `wrap-reverse`
  - : Behaves the same as `wrap`, but with the lines laid out in reverse order.
- `balance`
  - : Specifies that flex items broken across multiple lines are distributed so that the line lengths are as similar as possible. If `balance` is specified as the only keyword, the other keyword defaults to `wrap`.

## Description

The `flex-wrap` property is used to specify whether the flex container's child flex items may wrap onto multiple flex lines or not and, if set to wrap, whether the children should be evenly distributed across flex lines.

The initial value of `nowrap` specifies that all items should be laid out on a single flex line, which means they may overflow the container. The `wrap` and `wrap-reverse` keywords prevent overflow by specifying that flex items can flow, or wrap, across multiple lines.

With `wrap`, cross-start is the equivalent of [inline-start or block-start](/en-US/docs/Glossary/Flow_relative_values), depending on the {{cssxref("flex-direction")}} value and the current [writing mode](/en-US/docs/Web/CSS/Guides/Writing_modes). With `wrap-reverse`, cross-start is the equivalent of inline-end or block-end.

### Balancing flex item distribution

By default, when `wrap` or `wrap-reverse` is specified, each flex line is filled with flex items before items are wrapped onto the next line. This can result in an uneven distribution of items, with the last flex line composed of fewer items. If those items' {{cssxref("flex-grow")}} values are non-zero, the extra available space is distributed across these fewer items, making them much larger than the items on filled flex lines.

The `balance` keyword can be used to distribute the items across lines in a more even manner. Optionally, the {{cssxref("flex-line-count")}} property can be used to define the minimum number of lines across which the balanced items should be distributed.

If `balance` is the only keyword specified, the other keyword defaults to `wrap`.

A balanced wrapping flex container can have a {{cssxref("flex-line-count")}} value applied to specify the minimum number of lines the flex items should be distributed over. The `flex-line-count` property has no effect if `balance` is not specified inside `flex-wrap`.

If `balance` is specified alongside `nowrap`, the property is invalid.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting flex container wrap values

#### HTML

```html live-sample___flex-wrap-values
<h4>This is an example for flex-wrap:wrap</h4>
<div class="content">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:nowrap</h4>
<div class="content1">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:wrap-reverse</h4>
<div class="content2">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
```

#### CSS

```css live-sample___flex-wrap-values
/* Common Styles */
.content,
.content1,
.content2 {
  color: white;
  font: 100 24px/100px sans-serif;
  height: 150px;
  width: 897px;
  text-align: center;
}

.content div,
.content1 div,
.content2 div {
  height: 50%;
  width: 300px;
}
.red {
  background: orangered;
}
.green {
  background: yellowgreen;
}
.blue {
  background: steelblue;
}

/* Flexbox Styles */
.content {
  display: flex;
  flex-wrap: wrap;
}
.content1 {
  display: flex;
  flex-wrap: nowrap;
}
.content2 {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

#### Results

{{ EmbedLiveSample("flex-wrap-values", "100%", "700") }}

### Demonstrating the `balance` keyword

This example demonstrates the effects of the `balance` keyword within the `flex-wrap` property and different `flex-line-count` values.

#### HTML

```html hidden live-sample___the-balance-keyword
<form>
  <div>
    <input type="checkbox" id="reverse" name="reverse" />
    <label for="reverse">Set <code>wrap-reverse</code>?</label>
  </div>
  <div>
    <input type="checkbox" id="balance" name="balance" checked />
    <label for="balance">Set <code>balance</code>?</label>
  </div>
  <div>
    <label for="line-count"><code>flex-line-count</code></label>
    <input
      type="range"
      id="line-count"
      name="line-count"
      min="1"
      max="12"
      value="3" />
    <output>3</output>
  </div>
</form>

<hr />

<p>Currently set: <code>flex-wrap: wrap; flex-line-count: 3;</code></p>

<hr />
```

We include a container {{htmlelement("div")}} with a `class` of `box`, which has ten child `<div>`s.

```html live-sample___the-balance-keyword
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

We also include controls to enable changing features of the flex container, including:

- Toggling `flex-wrap` between the `wrap` and `wrap-reverse` values.
- Toggling the `balance` keyword on and off.
- Changing the `flex-line-count` value.

We've hidden the HTML and JavaScript for brevity.

#### CSS

We apply `display: flex` to the `.box` to turn it into a flex container, then set some `flex-wrap` and `flex-line-count` values to make the flex children wrap evenly over a minimum of three flex lines. You can change the values in the live demo. We also set a {{cssxref("flex")}} value of `1 1 150px` on the flex children so they will have a base width of `150px`, with any remaining space distributed evenly between items on the same flex line.

```css live-sample___the-balance-keyword
.box {
  display: flex;
  flex-wrap: wrap balance;
  flex-line-count: 3;
}

.box > * {
  flex: 1 1 150px;
}
```

```css hidden live-sample___the-balance-keyword
.box {
  width: 100%;
  border: 2px dotted rgb(96 139 168);
  gap: 10px;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

* {
  box-sizing: border-box;
}

body {
  padding: 10px 30px;
}

@supports not (flex-wrap: balance) {
  body::before {
    content: "Your browser does not support flex-wrap: balance.";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

We've hidden the rest of the CSS for brevity.

```js hidden live-sample___the-balance-keyword
const boxElem = document.querySelector(".box");
const outputElem = document.querySelector("output");
const pCodeElem = document.querySelector("p code");
const reverseInput = document.getElementById("reverse");
const balanceInput = document.getElementById("balance");
const lineCountInput = document.getElementById("line-count");

let wrapValue = "wrap";
let lineCountValue = "3";

function updateCurrentlySet() {
  pCodeElem.textContent = `flex-wrap: ${wrapValue}; flex-line-count: ${lineCountValue};`;
}

function setFlexWrap() {
  wrapValue = "";
  if (reverseInput.checked) {
    wrapValue += "wrap-reverse";
  } else {
    wrapValue += "wrap";
  }

  if (balanceInput.checked) {
    wrapValue += " balance";
  }

  boxElem.style.flexWrap = wrapValue;
  updateCurrentlySet();
}

function setFlexLineCount() {
  lineCountValue = lineCountInput.value;
  boxElem.style.flexLineCount = lineCountValue;
  outputElem.textContent = lineCountValue;
  updateCurrentlySet();
}

reverseInput.addEventListener("change", setFlexWrap);
balanceInput.addEventListener("change", setFlexWrap);
lineCountInput.addEventListener("input", setFlexLineCount);
```

#### Results

{{ EmbedLiveSample("the-balance-keyword", "100%", "400") }}

Change the form control settings to see how they affect the output. Note how:

- Toggling between `wrap` and `wrap-reverse` changes the direction in which the flex lines are laid out along the cross-axis.
- Setting `balance` causes the flex items to be evenly distributed across the available flex lines.
- Changing the `flex-line-count` value changes the minimum number of lines the items will be distributed across. The `flex-line-count` property, and therefore the slider, has no effect unless `balance` is checked.
- As the flex items are distributed over four flex lines by default, changing the `flex-line-count` to a value of less than `5` has no effect. Values from `5` to `10` add an extra flex line.
- As there are 10 flex items, `flex-line-count` values of `10` or greater will all have the same effect — one item will be placed on each of 10 flex lines.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXRef("flex-direction")}}
- {{CSSXRef("flex-flow")}} shorthand
- [Basic concepts of flexbox](/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Mastering wrapping of flex items](/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [CSS flexible box layout](/en-US/docs/Web/CSS/Guides/Flexible_box_layout) module
