---
title: "`ellipse()` CSS function"
short-title: ellipse()
slug: Web/CSS/Reference/Values/basic-shape/ellipse
page-type: css-function
browser-compat: css.types.basic-shape.ellipse
sidebar: cssref
---

The **`ellipse()`** [CSS](/en-US/docs/Web/CSS) function is one of the {{cssxref("basic-shape")}} [data types](/en-US/docs/Web/CSS/Reference/Values/Data_types).

{{InteractiveExample("CSS Demo: ellipse()")}}

```css interactive-example-choice
clip-path: ellipse(20px 50px);
```

```css interactive-example-choice
clip-path: ellipse(4rem 50% at right center);
```

```css interactive-example-choice
clip-path: ellipse(closest-side closest-side at 5rem 6rem);
```

```css interactive-example-choice
clip-path: ellipse(closest-side farthest-side);
```

```css interactive-example-choice
clip-path: ellipse(closest-corner closest-corner at 25% 25%);
```

```css interactive-example-choice
clip-path: ellipse(closest-side closest-corner at 25% 25%);
```

```css interactive-example-choice
clip-path: ellipse(closest-side farthest-corner at 25% 25%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## Syntax

```css
shape-outside: ellipse(40% 50% at left);
shape-outside: ellipse(closest-side farthest-side at 30%);
border-shape: ellipse(50% 40%);
```

An ellipse is essentially a squashed circle and so `ellipse()` acts in a very similar way to {{cssxref("basic-shape/circle","circle()")}} except that we have to specify two radii x and y.

### Values

- `<shape-radius>`
  - : Two radii, x and y, in that order. These may be a {{cssxref("length")}}, a {{cssxref("percentage")}}, or any of the following keyword values:
    - `closest-side`
      - : The radius is the length from the center of the ellipse to the closest side of the reference box in the given radius direction, so that the ellipse's boundary just touches that side.
    - `farthest-side`
      - : The radius is the length from the center of the ellipse to the farthest side of the reference box in the given radius direction, so that the ellipse's boundary just touches that side.
    - `closest-corner`
      - : The radius is the length from the center of the ellipse to the closest corner of the reference box in the given radius direction.
    - `farthest-corner`
      - : The radius is the length from the center of the ellipse to the farthest corner of the reference box in the given radius direction.

- `<position>`
  - : Moves the center of the ellipse. May be a {{cssxref("length")}}, or a {{cssxref("percentage")}}, or a values such as `left`. The `<position>` value defaults to center if omitted.

## Formal syntax

{{csssyntax}}

## Examples

### Basic ellipse() example

This example shows an ellipse that is floated left that has a horizontal radius of 40%, a vertical radius of 50%, and a left position. This means that the center of the ellipse is on the left edge of the box giving us a half ellipse shape to wrap our text around.
Click "Play" in the code blocks to change these values to see how the ellipse changes:

```html live-sample___ellipse
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___ellipse
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(40% 50% at left);
  margin: 20px;
  width: 100px;
  height: 200px;
}
```

{{EmbedLiveSample("ellipse", "", "300px")}}

### Using closest-side / farthest-side values

The keyword values of `closest-side` and `farthest-side` are useful to create a quick ellipse based on the size of the floated element reference box.

```html live-sample___ellipse-keywords
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___ellipse-keywords
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(closest-side farthest-side at 30%);
  margin: 20px;
  width: 100px;
  height: 140px;
}
```

{{EmbedLiveSample("ellipse-keywords", "", "300px")}}

### Radius keyword interactive example

This example allows you to test the effect of moving the center point of the ellipse when using each of the four `<shape-radius>` keywords — chosen independently for the x-radius and the y-radius.

The code defines a reference box (`#refbox`) that contains a `.fill` element.
We set a `clip-path` on `#refbox` to clip the box and the fill to the computed ellipse (the colored ellipse is the fill's gradient, clipped to an ellipse geometry).
The geometry that is used depends on the selected x-radius and y-radius keywords and the position of the center within the reference box.

Because `closest-corner` and `farthest-corner` are a newer addition to `ellipse()`, the script feature-tests each keyword with {{domxref("CSS.supports_static", "CSS.supports()")}} before enabling it.
Any keyword your browser doesn't yet support is disabled in both dropdowns (and labeled "not supported").

```html live-sample___ellipse-keywords-interactive
<div class="controls">
  <label>
    X radius:
    <select id="radius-x-keyword">
      <option value="closest-side">closest-side</option>
      <option value="closest-corner">closest-corner</option>
      <option value="farthest-side">farthest-side</option>
      <option value="farthest-corner" selected>farthest-corner</option>
    </select>
  </label>
  <label>
    Y radius:
    <select id="radius-y-keyword">
      <option value="closest-side">closest-side</option>
      <option value="closest-corner">closest-corner</option>
      <option value="farthest-side" selected>farthest-side</option>
      <option value="farthest-corner">farthest-corner</option>
    </select>
  </label>
  <label>
    Position X: <input type="range" id="pos-x" min="0" max="200" value="120" />
  </label>
  <label>
    Position Y: <input type="range" id="pos-y" min="0" max="120" value="40" />
  </label>
</div>

<p id="support-note"></p>

<div class="canvas">
  <div class="outline"></div>
  <div class="refbox" id="refbox">
    <div class="fill"></div>
  </div>
  <div class="outline"></div>
  <div class="center-marker" id="center-marker"></div>
</div>

<pre id="declaration"></pre>
```

```css live-sample___ellipse-keywords-interactive
body {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}

.canvas {
  position: relative;
  width: 640px;
  height: 480px;
  overflow: hidden;
  border: 1px solid #888;
}

.outline,
.refbox {
  position: absolute;
  top: 180px;
  left: 220px;
  width: 200px;
  height: 120px;
}

.outline {
  border: 3px dashed #e6007a;
  pointer-events: none;
}

.fill {
  position: absolute;
  inset: -240px;
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
}

.center-marker {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  border: 2px solid black;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

#support-note {
  color: #b3001b;
}
```

```js live-sample___ellipse-keywords-interactive
const selectX = document.getElementById("radius-x-keyword");
const selectY = document.getElementById("radius-y-keyword");
const posX = document.getElementById("pos-x");
const posY = document.getElementById("pos-y");
const refbox = document.getElementById("refbox");
const declaration = document.getElementById("declaration");
const marker = document.getElementById("center-marker");
const supportNote = document.getElementById("support-note");

// Feature-test each keyword, since closest-corner/farthest-corner are a
// newer addition to ellipse() and may not be supported everywhere yet.
function checkSupport() {
  const unsupported = new Set();
  for (const option of selectX.options) {
    const test = `ellipse(${option.value} ${option.value} at 0px 0px)`;
    if (!CSS.supports("clip-path", test)) {
      unsupported.add(option.value);
    }
  }
  for (const select of [selectX, selectY]) {
    for (const option of select.options) {
      if (unsupported.has(option.value)) {
        option.disabled = true;
        option.textContent += " (not supported)";
      }
    }
    if (select.selectedOptions[0]?.disabled) {
      const firstSupported = [...select.options].find(
        (option) => !option.disabled,
      );
      if (firstSupported) {
        select.value = firstSupported.value;
      }
    }
  }
  if (unsupported.size > 0) {
    supportNote.textContent = `Your browser doesn't support: ${[...unsupported].join(", ")}.`;
  }
}

function update() {
  const xKeyword = selectX.value;
  const yKeyword = selectY.value;
  const x = Number(posX.value);
  const y = Number(posY.value);
  const value = `ellipse(${xKeyword} ${yKeyword} at ${x}px ${y}px)`;

  // Set the clip path when either keyword or the center position changes
  refbox.style.clipPath = value;
  declaration.textContent = `clip-path: ${value};`;
  marker.style.left = `${refbox.offsetLeft + x}px`;
  marker.style.top = `${refbox.offsetTop + y}px`;
}

selectX.addEventListener("change", update);
selectY.addEventListener("change", update);
posX.addEventListener("input", update);
posY.addEventListener("input", update);
checkSupport();
update();
```

Change the position of the center and the keyword for each radius to see their relative effects.

{{EmbedLiveSample("ellipse-keywords-interactive", "", "680px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("border-shape")}}, {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Guide to Basic Shapes](/en-US/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
