---
title: corner-shape
slug: Web/CSS/corner-shape
page-type: css-shorthand-property
status:
  - experimental
browser-compat: css.properties.corner-shape
sidebar: cssref
---

{{SeeCompatTable}}

The **`corner-shape`** [shorthand](/en-US/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property specifies the shape of a box's corners, within the area specified by its {{cssxref("border-radius")}} property value.

## Constituent properties

The `corner-shape` property is a shorthand for the following physical properties:

- {{cssxref("corner-top-left-shape")}}
- {{cssxref("corner-top-right-shape")}}
- {{cssxref("corner-bottom-left-shape")}}
- {{cssxref("corner-bottom-right-shape")}}

## Syntax

```css
/* Single value set for all four corners */
corner-shape: bevel;

/* top-left and bottom-right, top-right and bottom-left */
corner-shape: notch superellipse(0.6);

/* top-left, top-right and bottom-left, bottom-right */
corner-shape: superellipse(-1.2) square squircle;

/* top-left, top-right, bottom-right, bottom-left */
corner-shape: scoop superellipse(-1.6) superellipse(-2.2) round;

/* Global values */
corner-shape: inherit;
corner-shape: initial;
corner-shape: revert;
corner-shape: revert-layer;
corner-shape: unset;
```

The `corner-shape` property may be specified using one, two, three, or four {{cssxref("&lt;corner-shape-value>")}} values:

- If **one** value is used, it specifies the shape of **all four corners**.
- If **two** values are used, the first shape applies to the **top-left and bottom-right** corners, and the second to the **top-right and bottom-left corners**.
- If **three** values are used, the first shape specifies the shape of the **top-left corner**, the second to the **top-right and bottom-left corners**, and the third to the **bottom-right corner**.
- If four values are used, they specify the shape of the **top-left**, **top-right**, **bottom-right**, and **bottom-left** corners, in that order (clockwise).

### Values

- {{cssxref("corner-shape-value")}}
  - : A {{cssxref("superellipse()")}} or keyword equivalent describing the shape of the corner.

## Description

The `corner-shape` property is used to modify the shape of rounded corners created by the {{cssxref("border-radius")}} property and its associated longhands. Already-rounded corners can be further customized in terms of the degree of rounding applied to them, allowing the creation of, for example, bevelled, notched, and squircle corners. Borders, outlines, shadows, and background effects applied to the container will follow the defined corner shape.

If a `border-radius` is not applied to a container, or the `border-radius` resolves to `0`, `corner-shape` will have no effect.

The `corner-shape` shorthand property and its associated [`corner-*-shape` shorthands and longhands](#corner--shape_shorthands_and_longhands) accept one to four {{cssxref("&lt;corner-shape-value>")}} values. Each is specified directly as a {{cssxref("superellipse()")}} function or a keyword describing a common shape. Each keyword is equivalent to a specific `superellipse()` value.

The default (initial) value of `corner-shape` is `round`, which gives the same effect as using `border-radius` on its own, without `corner-shape`. There is also a keyword value `square`, which gives the same effect as default square corners, effectively removing any `border-radius` applied. The `bevel` value has the effect of drawing a straight line between the two ends of a `border-radius`.

Different `corner-shape` values can be smoothly animated between, as the `superellipse()` equivalents of the keyword values are used as interpolation values.

The `corner-shape` shorthand is especially useful when you want all four borders to be the same, or you want to set different values using a single declaration. To set only one or two corner shapes at a time, use the `corner-*-shape` shorthands and longhands.

### `corner-*-shape` shorthands and longhands

The `corner-shape` shorthand defines the shapes of all four corners in one declaration.

To set only one corner shape at a time, use the corner shape longhands:

- Physical longhand corner shape properties:
  - {{cssxref("corner-bottom-left-shape")}}
  - {{cssxref("corner-bottom-right-shape")}}
  - {{cssxref("corner-top-left-shape")}}
  - {{cssxref("corner-top-right-shape")}}
- Logical longhand corner shape properties:
  - {{cssxref("corner-start-start-shape")}}
  - {{cssxref("corner-start-end-shape")}}
  - {{cssxref("corner-end-start-shape")}}
  - {{cssxref("corner-end-end-shape")}}

To set two corner shapes at a time, use the side shorthands:

- Physical side shorthand properties:
  - {{cssxref("corner-top-shape")}}
  - {{cssxref("corner-right-shape")}}
  - {{cssxref("corner-bottom-shape")}}
  - {{cssxref("corner-left-shape")}}
- Logical side shorthand properties:
  - {{cssxref("corner-block-start-shape")}}
  - {{cssxref("corner-block-end-shape")}}
  - {{cssxref("corner-inline-start-shape")}}
  - {{cssxref("corner-inline-end-shape")}}

### Constraining opposite corner shape radii

When opposite corners have `border-radius` and `corner-shape` values set that would cause the shapes to overlap, the browser constrains the values to prevent the overlap.

For example, the following values would cause the top-left and bottom-right corners to overlap, therefore the browser adjusts the first `border-radius` component to a value that avoids this.

```css
div {
  width: 480px;
  height: 200px;
  background-color: goldenrod;
  border-radius: 80% 20px;
  corner-shape: scoop;
}
```

### Properties that follow the corner shape

The following properties all follow the shape of the corner when set on the container:

- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("overflow")}}
- {{cssxref("backdrop-filter")}}

See [Demonstration of properties that follow the `corner-shape`](#demonstration_of_properties_that_follow_the_corner-shape) for some examples.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `corner-shape` usage

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element.

```html live-sample___basic-corner-shape
<div>Nice scooped corners</div>
```

#### CSS

We give the box a fixed {{cssxref("height")}}, a {{cssxref("box-shadow")}}, a `border-radius` of 30 pixels, and a `corner-shape` of `scoop`, along with some additional styles that we've hidden for brevity.

```css hidden live-sample___basic-corner-shape
body {
  font-family: Arial, Helvetica, sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cyan;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

@supports not (corner-shape: scoop) {
  body {
    all: unset !important;
  }

  body::before {
    content: "Your browser does not support the 'corner-shape' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___basic-corner-shape
div {
  height: 180px;
  box-shadow: 1px 1px 3px gray;
  border-radius: 30px;
  corner-shape: scoop;
}
```

#### Result

The rendered result looks like this:

{{EmbedLiveSample("basic-corner-shape", "100%", "240")}}

Note how the `corner-shape` value of `scoop` gives the container concave corners — the curve is an inversion of the default `border-radius` curve. Note also how the background, border, and box shadow follow the shape of the curve.

### Demonstration of properties that follow the `corner-shape`

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element with some text content inside it.

```html live-sample___styles-following-corner-shape
<div>
  Some styles follow the corner shape, such as border, outline, box-shadow,
  overflow, and backdrop-filter. This is useful for helping various aspects of
  your design to not clash. As shown, it can result in some interesting visual
  effects, so you should test your design carefully.
</div>
```

#### CSS

To demonstrate how some styles follow the shape of a container's corners, we apply a {{cssxref("background-image")}} to the document `<body>`, then apply a `border-radius` of `40px` and a `corner-shape` of `scoop notch` to the `<div>`.

We then apply the following to the `<div>`:

- A semi-transparent {{cssxref("background-color")}}.
- A different color and style of {{cssxref("border")}} on each edge.
- A {{cssxref("backdrop-filter")}} that inverts the `background-image` set on the `<body>`.
- A `:hover` style so you can see that the clickable content area falls outside the corner shape.

Additional set up styles have been hidden for brevity.

```css hidden live-sample___styles-following-corner-shape
html {
  height: 100%;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  height: inherit;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

div {
  width: 240px;
  height: 180px;
}

@supports not (corner-shape: scoop notch) {
  body {
    all: unset !important;
  }

  body::before {
    content: "Your browser does not support the 'corner-shape' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___styles-following-corner-shape
body {
  background: url("https://mdn.github.io/shared-assets/images/examples/leopard.jpg")
    no-repeat;
  background-size: cover;
}

div {
  border-radius: 40px;
  corner-shape: scoop notch;
  background-color: rgb(255 255 255 / 0.2);
  border-top: 3px solid blue;
  border-left: 6px dashed red;
  border-bottom: 9px solid yellow;
  border-right: 12px double green;
  backdrop-filter: invert(100%);
}

div:hover {
  background-color: white;
}
```

#### Result

The rendered result looks like this:

{{EmbedLiveSample("styles-following-corner-shape", "100%", "240")}}

Note how most of the set styles follow the shape of the `<div>` resulting from its `corner-shape` styles, but not all. The content is displayed relative to the original box, and the hover effect is still applied if you hover over the text sticking out past the top- and bottom-left corners.

### Comparing `corner-shape` values

In this demonstration, you can select different `corner-shape` values and set different {{cssxref("border-radius")}} values on a container and compare the effects.

#### HTML

The markup for this example contains a {{htmlelement("select")}} picker from which different `corner-shape` values can be selected, an [`<input type="range">`](/en-US/docs/Web/HTML/Reference/Elements/input/range) slider to select different `border-radius` values, and a {{htmlelement("section")}} element to create a container to apply those values to. The select {{htmlelement("option")}} elements provide multiple keyword and {{cssxref("superellipse()")}} value choices, broken into two groups using {{htmlelement("optgroup")}} elements. In the case of the keyword values, we've also included the `superellipse()` value equivalent for each one, separated by a pipe character.

```html live-sample___corner-shape-select
<form>
  <div>
    <label for="corner-shape-choice">Choose a corner-shape value:</label>
    <select id="corner-shape-choice">
      <optgroup label="Keywords">
        <option value="square">square | superellipse(infinity)</option>
        <option selected value="squircle">squircle | superellipse(2)</option>
        <option value="round">round | superellipse(1)</option>
        <option value="bevel">bevel | superellipse(0)</option>
        <option value="scoop">scoop | superellipse(-1)</option>
        <option value="notch">notch | superellipse(-infinity)</option>
      </optgroup>
      <optgroup label="Functions">
        <option>superellipse(3)</option>
        <option>superellipse(1.5)</option>
        <option>superellipse(0.5)</option>
        <option>superellipse(-0.5)</option>
        <option>superellipse(-1.5)</option>
        <option>superellipse(-3)</option>
      </optgroup>
    </select>
  </div>
  <div>
    <label for="radius-slider">Choose a border-radius value:</label>
    <input
      type="range"
      id="radius-slider"
      min="0"
      value="45"
      max="90"
      step="1" />
  </div>
</form>
<section></section>
```

#### CSS

We apply a {{cssxref("box-shadow")}} to the `<section>`. We also give the `<section>` and form elements some basic styles, which we've hidden for brevity.

```css hidden live-sample___corner-shape-select
html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  width: fit-content;
  margin: 20px auto;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

select {
  padding: 3px 5px;
}

form div:nth-of-type(2) {
  margin-top: 5px;
  display: flex;
}

section {
  width: 100%;
  height: 180px;
  background-color: gold;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

@supports not (corner-shape: scoop) {
  body {
    all: unset !important;
  }

  body::before {
    content: "Your browser does not support the 'corner-shape' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___corner-shape-select
section {
  box-shadow: 1px 1px 3px gray;
}
```

```js hidden live-sample___corner-shape-select
const rectangle = document.querySelector("section");
const select = document.querySelector("select");
const range = document.getElementById("radius-slider");

function setCorners() {
  rectangle.style.cornerShape = select.value;
  const brValue = `${range.value}px`;
  rectangle.style.borderRadius = brValue;
  rectangle.innerHTML = `<div><code>corner-shape: ${select.value};</code><br><code>border-radius: ${brValue};</code></div>`;
}

select.addEventListener("change", setCorners);
range.addEventListener("input", setCorners);
setCorners();
```

The JavaScript that applies the user-selected values to the `<section>` has been hidden for brevity.

#### Result

The rendered result looks like this:

{{EmbedLiveSample("corner-shape-select", "100%", "300")}}

Try selecting different values to see how this affects the shape of the corners.

### `superellipse()` value comparison

In this example, we provide two [`<input type="range">`](/en-US/docs/Web/HTML/Reference/Elements/input/range) sliders allowing you to cycle through many different `corner-shape` {{cssxref("superellipse()")}} values and {{cssxref("border-radius")}} values to compare the effects of each on a container.

#### HTML

The markup for this example contains two `<input type="range">` elements from which different `corner-shape` `superellipse()` and `border-radius` values can be selected, and a {{htmlelement("section")}} element to apply those values to.

```html live-sample___superellipse-slider
<form>
  <div>
    <label for="superellipse-slider">Choose a superellipse() value:</label>
    <input
      type="range"
      id="superellipse-slider"
      min="-5"
      value="0"
      max="5"
      step="0.1" />
  </div>
  <div>
    <label for="radius-slider">Choose a border-radius value:</label>
    <input
      type="range"
      id="radius-slider"
      min="0"
      value="45"
      max="90"
      step="1" />
  </div>
</form>
<section></section>
```

#### CSS

We apply a {{cssxref("box-shadow")}} to the `<section>` element. Additional basic styles have been hidden for brevity.

```css hidden live-sample___superellipse-slider
html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  width: fit-content;
  margin: 20px auto;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

form div {
  margin-top: 5px;
  display: flex;
}

section {
  width: 100%;
  height: 180px;
  background-color: orange;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

@supports not (corner-shape: superellipse(0)) {
  body {
    all: unset !important;
  }

  body::before {
    content: "Your browser does not support the 'corner-shape' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___superellipse-slider
section {
  box-shadow: 1px 1px 3px gray;
}
```

```js hidden live-sample___superellipse-slider
const rectangle = document.querySelector("section");
const superEllipseRange = document.getElementById("superellipse-slider");
const borderRadiusRange = document.getElementById("radius-slider");

function setCorners() {
  const seValue = `superellipse(${superEllipseRange.value})`;
  rectangle.style.cornerShape = seValue;
  const brValue = `${borderRadiusRange.value}px`;
  rectangle.style.borderRadius = brValue;
  rectangle.innerHTML = `<div><code>corner-shape: ${seValue};</code><br><code>border-radius: ${brValue};</code></div>`;
}

superEllipseRange.addEventListener("input", setCorners);
borderRadiusRange.addEventListener("input", setCorners);
setCorners();
```

The JavaScript that applies the user-selected values to the `<section>` has been hidden for brevity.

#### Result

The rendered result looks like this:

{{EmbedLiveSample("superellipse-slider", "100%", "300")}}

Try selecting different values to see how this affects the shape of the corners.

### Animating `corner-shape`

In this example, we demonstrate how the `corner-shape` property can be animated.

#### HTML

```html live-sample___corner-shape-animation
<div></div>
```

#### CSS

We create a set of {{cssxref("@keyframes")}} that animate smoothly between the `corner-shape` values of `square` and `notch`. We then apply an {{cssxref("animation")}} based on those `@keyframes` to the `<div>` when its containing `<html>` element is hovered over or focused. Additional basic `<div>` styles have been hidden for brevity.

```css hidden live-sample___corner-shape-animation
body {
  width: 200px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 200px;
  background-color: green;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
  box-shadow: 1px 1px 3px gray;
  border-radius: 50%;
  corner-shape: square;
  outline: none;
}

@supports not (corner-shape: square) {
  body {
    all: unset !important;
  }

  body::before {
    content: "Your browser does not support the 'corner-shape' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___corner-shape-animation
@keyframes corner-pulse {
  0% {
    corner-shape: square;
  }

  /* To make the starting point apparent, let us keep
  the shape the same for a small duration. */
  20% {
    corner-shape: square;
  }

  100% {
    corner-shape: notch;
  }
}

div {
  animation: corner-pulse infinite alternate 4s linear;
}
```

#### Result

The rendered result looks like this:

{{EmbedLiveSample("corner-shape-animation", "100%", "270")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("border-radius")}}
- [CSS borders and box decorations](/en-US/docs/Web/CSS/CSS_borders_and_box_decorations) module
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) module
- [CSS animations](/en-US/docs/Web/CSS/CSS_animations) module
