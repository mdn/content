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

The `flex-wrap` property is specified as a single keyword chosen from the following values, or two space-separated keywords consisting of `balance` and either `wrap` or `wrap-reverse`, in any order.

- `nowrap`
  - : The flex items are laid out in a single line which may cause the flex container to overflow. This is the initial value.
- `wrap`
  - : The flex items break into multiple lines.
- `wrap-reverse`
  - : Behaves the same as `wrap`, but with the lines laid out in reverse order.
- `balance`
  - : Specifies that flex items broken across multiple lines are distributed so that the line lengths are as similar as possible. If `balance` is specified as the only keyword, the other keyword defaults to `wrap`.

## Description

The `flex-wrap` property is used to specify whether items laid out inside a flex container will wrap onto multiple flex lines or not.

The initial value of `nowrap` specifies that all items should be laid out on a single line, which means that they may overflow the container.

The `wrap` keyword specifies that the flex items should be broken across multiple lines to avoid overflow, with the cross-start being the equivalent of [inline-start or block-start](/en-US/docs/Glossary/Flow_relative_values), depending on the current [writing mode](/en-US/docs/Web/CSS/Guides/Writing_modes) and the {{cssxref("flex-direction")}} value. The lines are laid out along the cross-axis from start to end.

The `wrap-reverse` keyword has the same effect as `wrap`, except that the lines are laid out along the cross-axis in reverse order, from end to start.

### Balancing flex item distribution

By default, when `wrap` or `wrap-reverse` are specified, each line is filled with flex items before moving onto the next line. This can result in uneven distribution of items, with only one or two items sitting in the last line for example. To evenly distribute the items across lines, specify the `balance` keyword along with `wrap` or `wrap-reverse`. If `balance` is the only keyword specified, the other keyword defaults to `wrap`.

Note that when specifying the `balance` keyword inside the `flex-wrap` value, you can include the {{cssxref("flex-line-count")}} property alongside it to specify the minimum number of lines you want to distribute the flex items over. The `flex-line-count` property has no effect if `balance` is not specified inside `flex-wrap`.

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

### Demonstrating the effects of the `balance` keyword

This example provides a JavaScript-powered form that you can use to change the `flex-wrap` and `flex-line-count` values applied to a flex container, demonstrating the effect of the `balance` keyword and associated features in the process.

#### HTML

First, we include three form controls — an [`<input type="checkbox">`](/en-US/docs/Web/HTML/Reference/Elements/input/checkbox) that toggles between setting `flex-wrap: wrap` and `wrap-reverse` on the flex container, another checkbox that toggles between setting the `balance` keyword in `flex-wrap` and not setting it, and a [`<input type="range">`](/en-US/docs/Web/HTML/Reference/Elements/input/range) slider that changes the `flex-line-count` value applied to the flex container.

```html live-sample___the-balance-keyword
<form>
  <div>
    <input type="checkbox" id="reverse" name="reverse" />
    <label for="reverse">Set <code>wrap-reverse</code>?</label>
  </div>
  <div>
    <input type="checkbox" id="balance" name="balance" />
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
```

We also include a {{htmlelement("p")}} element into which we'll print the updated `flex-wrap` and `flex-line-count` values applied to the flex container as the form elements are manipulated.

```html live-sample___the-balance-keyword
<p>Currently set: <code>flex-wrap: wrap; flex-line-count: 3;</code></p>

<hr />
```

Finally, we include a container {{htmlelement("div")}} with a `class` of `box`, which has ten child `<div>`s. The `<div class="box">` is the container that will be laid out using flexbox.

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

#### CSS

The CSS applied to the flex container and its children is shown below. Most notably, we apply some `flex-wrap` and `flex-line-count` values to the flex container to begin with, which we'll later change via JavaScript when the form controls are manipulated. We also set a {{cssxref("flex")}} value of `1 1 150px` on the flex children so they will take a base width of 150px and then share out the remaining space on each flex line equally.

```css live-sample___the-balance-keyword
.box {
  width: 100%;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  flex-line-count: 3;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 150px;
}
```

```css hidden live-sample___the-balance-keyword
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

#### JavaScript

We start our script by grabbing references to all the HTML elements we need to access via JavaScript. We also create two variables, `wrapValue` and `lineCountValue`, into which we store the starting values of the `flex-wrap` and `flex-line-count` properties.

```js live-sample___the-balance-keyword
const boxElem = document.querySelector(".box");
const outputElem = document.querySelector("output");
const pCodeElem = document.querySelector("p code");
const reverseInput = document.getElementById("reverse");
const balanceInput = document.getElementById("balance");
const lineCountInput = document.getElementById("line-count");

let wrapValue = "wrap";
let lineCountValue = "3";
```

Next, we define a custom function called `updateCurrentlySet()`, which updates the `flex-wrap` and `flex-line-count` values displayed in the `<p>` element with the values stored in `wrapValue` and `lineCountValue`:

```js live-sample___the-balance-keyword
function updateCurrentlySet() {
  pCodeElem.textContent = `flex-wrap: ${wrapValue}; flex-line-count: ${lineCountValue};`;
}
```

Next, we define a function called `setFlexWrap()`. This constructs a new value to set for the flex container's `flex-wrap` property depending on whether the two checkboxes are checked, storing it in `wrapValue`. It then sets that as the property value then runs `updateCurrentlySet()` to update the displayed property value in the `<p>` ellement.

```js live-sample___the-balance-keyword
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
```

Next, we define a function called `setFlexLineCount()`. This constructs a new value to set for the flex container's `flex-line-count` property equal to the range slider's value, storing it in `lineCountValue`. It then sets that as the property value then runs `updateCurrentlySet()` to update the displayed property value in the `<p>` ellement.

```js live-sample___the-balance-keyword
function setFlexLineCount() {
  lineCountValue = lineCountInput.value;
  boxElem.style.flexLineCount = lineCountValue;
  outputElem.textContent = lineCountValue;
  updateCurrentlySet();
}
```

Finally, we set event listeners on the form controls, running `setFlexWrap()` if either of the checkboxes are toggled, and running `setFlexLineCount()` whenever the range slider's value is changed.

```js live-sample___the-balance-keyword
reverseInput.addEventListener("change", setFlexWrap);
balanceInput.addEventListener("change", setFlexWrap);
lineCountInput.addEventListener("input", setFlexLineCount);
```

#### Results

{{ EmbedLiveSample("the-balance-keyword", "100%", "400") }}

Change the form control settings to see how they affect the output. Note how:

- Toggling between `wrap` and `wrap-reverse` changes the direction in which the flex lines are laid out along the cross-axis.
- Checking `balance` causes the space to be evenly distributed across the flex items in each line.
- The `flex-line-count` slider has no effect unless `balance` is checked.
- Changing the `flex-line-count` between `1` and `3` has no effect, as in this case, the flex items will fit into a minimum of three lines anyway.
- Setting `flex-line-count` values of `10` or more will always have the same effect — there are ten flex items, and you will see one flex item placed in each of ten flex lines.
- Varying `flex-line-count` between `3` and `5` will produce the most interesting effects.

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
