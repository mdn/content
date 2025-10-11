---
title: <corner-shape-value>
slug: Web/CSS/corner-shape-value
page-type: css-type
status:
  - experimental
browser-compat: css.types.corner-shape-value
sidebar: cssref
---

{{SeeCompatTable}}

The **`<corner-shape-value>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_values_and_units/CSS_data_types) describes the shape of a container corner. It is used by the {{cssxref("corner-shape")}} shorthand property and its [constituent properties](/en-US/docs/Web/CSS/corner-shape#constituent_properties) to specify the shape to apply to affected container corners.

## Syntax

The `<corner-shape-value>` data type can take a {{cssxref("superellipse()")}} function that defines a custom shape, or one of six keyword values that describe common `superellipse()` values.

### Values

- {{cssxref("superellipse()")}}
  - : Defines a custom corner superellipse shape. A negative parameter creates an inward, or concave, curve while a positive parameter creates an outward, or convex, curve.
- Keywords
  - : The available keyword values are as follows:
    - `bevel`
      - : Defines a straight, diagonal corner, which is neither convex nor concave. The `bevel` keyword is equivalent to `superellipse(0)`.
    - `notch`
      - : Defines a 90-degree concave square corner. The `notch` keyword is equivalent to `superellipse(-infinity)`.
    - `round`
      - : Defines a convex ordinary ellipse, which is the standard rounded corner created by {{cssxref("border-radius")}} without a `corner-shape` applied. The `round` keyword is equivalent to `superellipse(1)`. This is the default (initial) value for all `corner-shape` properties.
    - `scoop`
      - : Defines a concave ordinary ellipse. The `scoop` keyword is equivalent to `superellipse(-1)`.
    - `square`
      - : Defines a 90-degree convex square corner, which is the default corner shape when no `border-radius` (or `border-radius: 0`) is applied. The `square` keyword is equivalent to `superellipse(infinity)`.
    - `squircle`
      - : Defines a "squircle", which is a convex curve in between `round` and `square`. The `squircle` keyword is equivalent to `superellipse(2)`.

> [!NOTE]
> You can smoothly animate between different `superellipse()` values, and between different corner shape keywords, as the animation interpolates between their `superellipse()` equivalents.

## Formal syntax

{{csssyntax}}

## Examples

### `<corner-shape-value>` value comparison

In this example, we provide a drop-down menu allowing you to select different `<corner-shape-value>` values and a slider that updates the container's {{cssxref("border-radius")}}. This enables visualizing the effect of the different keywords and `superellipse()` parameter values.

The `corner-shape` property defines the shape of the box's corners while the region the shape is applied to is specified by the `border-radius` property. The code is hidden for brevity, but you can find a [full explanation of `corner-shape` values](/en-US/docs/Web/CSS/corner-shape#comparing_corner-shape_values) along with other related examples on the {{cssxref("corner-shape")}} reference page.

```html hidden live-sample___value-comparison
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

```css hidden live-sample___value-comparison
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

section {
  box-shadow: 1px 1px 3px gray;
}
```

```js hidden live-sample___value-comparison
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

{{EmbedLiveSample("value-comparison", "100%", "300")}}

> [!NOTE]
> See also the [`superellipse()` function value comparison](/en-US/docs/Web/CSS/superellipse#superellipse_value_comparison) example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("corner-shape")}}
- {{cssxref("border-radius")}}
- {{cssxref("superellipse()")}}
- [CSS borders and box decorations](/en-US/docs/Web/CSS/CSS_borders_and_box_decorations) module
