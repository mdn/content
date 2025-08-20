---
title: <corner-shape-value>
slug: Web/CSS/corner-shape-value
page-type: css-type
browser-compat: css.types.corner-shape-value
sidebar: cssref
---

The **`<corner-shape-value>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) describes the shape of a container corner. It is used by the shorthand {{cssxref("corner-shape")}} property and its [constituent properties](/en-US/docs/Web/CSS/corner-shape#constituent_properties) to specify the shape to apply to affected container corners.

## Syntax

### Values

The `<corner-shape-value>` data type can take one of the keyword values listed below, which define common shapes, or a {{cssxref("superellipse()")}} function, which can be used to define a custom shape.

Keyword values:

- `bevel`
  - : Defines a straight, diagonal corner, which is neither convex nor concave. The `bevel` keyword is equivalent to `superellipse(0)`.
- `notch`
  - : Defines a concave (90-degree) square corner. The `notch` keyword is equivalent to `superellipse(-infinity)`.
- `round`
  - : Defines a convex quarter-ellipse, which is the standard rounded corner created by {{cssxref("border-radius")}} without a `corner-shape` applied. This is the default (initial) value for all `corner-shape` properties. The `round` keyword is equivalent to `superellipse(1)`.
- `scoop`
  - : Defines a concave quarter-ellipse. The `scoop` keyword is equivalent to `superellipse(-1)`.
- `square`
  - : Defines a 90-degree convex square corner, which is the default corner shape when no `border-radius` (or `border-radius: 0`) is applied. The `square` keyword is equivalent to `superellipse(infinity)`.
- `squircle`
  - : Defines a quarter of a "squircle", which is a convex curve in between `round` and `square`. The `squircle` keyword is equivalent to `superellipse(2)`.

> [!NOTE]
> You can smoothly animate between different keyword corner shapes as the animation interpolates between their `superellipse()` equivalents.

## Formal syntax

{{csssyntax}}

## Examples

### `<corner-shape-value>` value comparison

In this example, we provide a {{htmlelement("select")}} picker allowing you to set different `corner-shape` values on a container to compare the effects of different `<corner-shape-value>` values. We've hidden the code for the example here, for brevity, but you can find a [full explanation of it](/en-US/docs/Web/CSS/corner-shape#comparing_corner-shape_values) along with other related examples on the {{cssxref("corner-shape")}} reference page.

```html hidden live-sample___value-comparison
<form>
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
</form>
<div></div>
```

```css hidden live-sample___value-comparison
html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  width: fit-content;
  margin: 20px auto;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

select {
  padding: 3px 5px;
}

div {
  width: 100%;
  height: 180px;
  background-color: orange;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

div {
  box-shadow: 1px 1px 3px gray;
  border-radius: 30px;
}
```

```js hidden live-sample___value-comparison
const rectangle = document.querySelector("div");
const select = document.querySelector("select");

function setCornerShape() {
  rectangle.style.cornerShape = select.value;
  rectangle.innerHTML = `<code>corner-shape: ${select.value}</code>`;
}

select.addEventListener("change", setCornerShape);
setCornerShape();
```

{{EmbedLiveSample("value-comparison", "100%", "270")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("corner-shape")}}
- {{cssxref("superellipse()")}}
