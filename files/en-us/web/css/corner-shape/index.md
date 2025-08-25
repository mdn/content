---
title: corner-shape
slug: Web/CSS/corner-shape
page-type: css-shorthand-property
browser-compat: css.properties.corner-shape
sidebar: cssref
---

The **`corner-shape`** [shorthand](/en-US/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property specifies the shape of a box's corners, within the area specified by its {{cssxref("border-radius")}} property value.

## Constituent properties

The `corner-shape` property is a shorthand for the following physical properties:

- {{cssxref("corner-top-left-shape")}}
- {{cssxref("corner-top-right-shape")}}
- {{cssxref("corner-bottom-left-shape")}}
- {{cssxref("corner-bottom-right-shape")}}

### Other related properties

The following logical properties also exist to define a single corner shape based on its position relative to a container's block and inline axes:

- {{cssxref("corner-start-start-shape")}}
- {{cssxref("corner-start-end-shape")}}
- {{cssxref("corner-end-start-shape")}}
- {{cssxref("corner-end-end-shape")}}

The following physical and logical shorthand properties each define the shape of two corners along one edge of a container:

- {{cssxref("corner-top-shape")}}
- {{cssxref("corner-right-shape")}}
- {{cssxref("corner-bottom-shape")}}
- {{cssxref("corner-left-shape")}}
- {{cssxref("corner-block-start-shape")}}
- {{cssxref("corner-block-end-shape")}}
- {{cssxref("corner-inline-start-shape")}}
- {{cssxref("corner-inline-end-shape")}}

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

### Values

The `corner-shape` property may be specified using one, two, three, or four {{cssxref("&lt;corner-shape-value>")}} values:

- If one value is used, it specifies the shape of all four corners.
- If two values are used, they specify the shape of the top-left and bottom-right corners, and the top-right and bottom-left corners, respectively.
- If three values are used, they specify the shape of the top-left corner, top-right and bottom-left corners, and bottom-right corner, respectively.
- If four values are used, they specify the shape of the top-left corner, top-right corner, bottom-right corner, and bottom-left corner, respectively.

## Description

The `corner-shape` property is used to modify the shape of rounded corners created by the {{cssxref("border-radius")}} property and its associated longhands. Already-rounded corners can be further customized in terms of the degree of rounding applied to them, allowing the creation of, for example, bevelled, notched, and squircle corners.

If a visible `border-radius` is not applied to a container, `corner-shape` will have no effect on it.

The values available to be used within `corner-shape` values — and those of its associated and `corner-*-shape` shorthands and longhands — are defined inside the {{cssxref("&lt;corner-shape-value>")}} data type. This includes several keywords for commonly-used shapes, plus the {{cssxref("superellipse()")}} function, which enables custom shapes to be specified.

The default (initial) value of `corner-shape` is `round`, which gives the same effect as using `border-radius` on its own, without `corner-shape`. There is also a keyword value `square`, which gives the same effect as default square corners, with no `border-radius` applied. These values are useful because they can be smoothly animated to other `corner-shape` values. When two `corner-shape` values are animated between, and one or both of them are keywords, the `superellipse()` equivalents of those keywords are interpolated between.

The `corner-shape` shorthand is especially useful when you want all four borders to be the same, or you want to set different values using a single declaration. To set only one or two corner shapes at a time, use the `corner-*-shape` shorthands and longhands lister earlier.

### Constraining opposite corner shape radii

When opposite corners have `border-radius` and `corner-shape` values set that would cause the shapes to overlap, the browser constrains the values to result in non-overlap.

For example, the below values would cause the top-left and bottom-right corners to overlap, therefore the browser adjusts the first `border-radius` component to a value that avoids this (`70%`, according to the computed value displayed in the browser DevTools).

```css
div {
  corner-shape: scoop;
  border-radius: 80% 20px;
}
```

### Properties that follow the corner shape

The following properties all follow the shape of the corner when set on the container:

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("overflow")}}
- {{cssxref("backdrop-filter")}}

See [Demonstration of styles following `corner-shape`](#demonstration_of_styles_following_corner-shape) for some examples.

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

We give the box some basic styles, which we've hidden for brevity. We also apply a {{cssxref("box-shadow")}}, a `border-radius` of 30 pixels, and a `corner-shape` of `scoop`.

```css hidden live-sample___basic-corner-shape
body {
  font-family: Arial, Helvetica, sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}
```

```css live-sample___basic-corner-shape
div {
  box-shadow: 1px 1px 3px gray;
  border-radius: 30px;
  corner-shape: scoop;
}
```

#### Result

The rendered result looks like this:

{{EmbedLiveSample("basic-corner-shape", "100%", "240")}}

Note how the `corner-shape` value of `scoop` gives the container concave corners — the curve is an inversion of the default `border-radius` curve. Note also how the `box-shadow` follows the shape of the curve.

### Demonstration of styles following `corner-shape`

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element with some text content inside it.

```html live-sample___styles-following-corner-shape
<div>
  Some styles follow the corner shape, such as border, outline, box-shadow,
  overflow, and backdrop-filter. This is useful for helping various aspects of
  your design to not clash. It can result in some strange effects, however, so
  you should test your visuals carefully and thoroughly.
</div>
```

#### CSS

Again, many of the basic setup styles are hidden for brevity. To demonstrate how some styles follow the shape of a container's corners, we apply a {{cssxref("background-image")}} to the document `<body>`, then apply a `border-radius` of 40 pixels and a `corner-shape` of `scoop notch` to the `<div>`.

We then apply the following to the `<div>`:

- A semi-transparent {{cssxref("background-color")}}.
- A different color and style of {{cssxref("border")}} on each edge.
- A {{cssxref("backdrop-filter")}} that inverts the `background-image` set on the `<body>`.

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
```

#### Result

The rendered result looks like this:

{{EmbedLiveSample("styles-following-corner-shape", "100%", "240")}}

Note how most of the set styles follow the shape of the `<div>` resulting from its `corner-shape` styles.

### Comparing `corner-shape` values

In this example, we provide a {{htmlelement("select")}} picker and an [`<input type="range">`](/en-US/docs/Web/HTML/Reference/Elements/input/range) slider allowing you to set different `corner-shape` values and {{cssxref("border-radius")}} values on a container to compare the effects.

#### HTML

The markup for this example contains a `<select>` element from which different `corner-shape` values can be selected, an `<input type="range">` element to select different `border-radius` values, and a {{htmlelement("section")}} element to apply those values to. The select {{htmlelement("option")}} elements provide multiple keyword and {{cssxref("superellipse()")}} value choices, broken into two groups using {{htmlelement("optgroup")}} elements. In the case of the keyword values, we've also included the `superellipse()` value equivalent for each one, separated by a pipe character.

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

> [!NOTE]
> The JavaScript that applies the `<select>` values to the `<div>` has been hidden for brevity.

#### CSS

We give the `<section>` and form elements some basic styles, which we've hidden for brevity. Most notably, we apply a {{cssxref("box-shadow")}} to the `<section>`.

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
  background-color: orange;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
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
  rectangle.innerHTML = `<div><code>corner-shape: ${select.value}</code><br><code>border-radius: ${brValue}</code></div>`;
}

select.addEventListener("change", setCorners);
range.addEventListener("input", setCorners);
setCorners();
```

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

> [!NOTE]
> The JavaScript that applies the `<input>` values to the `<div>` has been hidden for brevity.

#### CSS

We give the `<section>` element some basic styles, which we've mostly hidden for brevity. Most notably, we apply a {{cssxref("box-shadow")}} to it.

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
  rectangle.innerHTML = `<div><code>corner-shape: ${seValue}</code><br><code>border-radius: ${brValue}</code></div>`;
}

superEllipseRange.addEventListener("input", setCorners);
borderRadiusRange.addEventListener("input", setCorners);
setCorners();
```

#### Result

The rendered result looks like this:

{{EmbedLiveSample("superellipse-slider", "100%", "300")}}

Try selecting different values to see how this affects the shape of the corners.

### `corner-shape` animation

In this example, we demonstrate how the `corner-shape` property can be animated.

#### HTML

The markup for this example contains a single `<div>`, with [`tabindex="0"`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) applied so it can be focused.

```html live-sample___corner-shape-animation
<div tabindex="0"></div>
```

#### CSS

We give the `<div>` element some basic styles, which we've hidden for brevity. Most notably, we create a set of {{cssxref("@keyframes")}} that animate smoothly between the `corner-shape` values of `square` and `notch`. We then apply an {{cssxref("animation")}} based on those `@keyframes` to the `<div>` when its containing `<html>` element is hovered over, or it is focused.

```css hidden live-sample___corner-shape-animation
body {
  width: 200px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 200px;
  background-color: orange;
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
```

```css live-sample___corner-shape-animation
@keyframes cornerpulse {
  from {
    corner-shape: square;
  }

  to {
    corner-shape: notch;
  }
}

html:hover div,
div:focus {
  animation: cornerpulse infinite alternate 1.5s linear;
}
```

#### Result

The rendered result looks like this:

{{EmbedLiveSample("corner-shape-animation", "100%", "270")}}

Hover or focus the shape to see the animation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("border-radius")}}
