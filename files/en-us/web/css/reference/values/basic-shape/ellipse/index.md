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

Because `closest-corner` and `farthest-corner` are a newer addition to `ellipse()`, the script feature-tests each keyword with {{domxref("CSS.supports_static", "CSS.supports()")}} before enabling it.
Any keyword your browser doesn't yet support is disabled in both dropdowns (and labeled "not supported").

#### HTML

The HTML first defines controls for selecting the x-radius and y-radius keywords and setting the position where the ellipse is to be displayed, followed by a {{htmlelement("pre")}} element for displaying the {{cssxref("clip-path")}} that the control values select.
After this a `#support-note` element is provided for indicating when particular radius keywords are not supported.

```html live-sample___ellipse-keywords-interactive
<div class="controls">
  <div class="controls-row">
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
  </div>
  <div class="controls-row">
    <label>
      Position X:
      <input type="range" id="pos-x" min="0" max="200" value="120" />
    </label>
    <label>
      Position Y:
      <input type="range" id="pos-y" min="0" max="120" value="40" />
    </label>
  </div>
</div>

<pre id="declaration"></pre>

<p id="support-note"></p>
```

The HTML then defines several {{htmlelement("div")}} elements used to render the ellipse, reference box, and center marker.
The most important elements are the reference box (`#refbox`) and the `.fill` element it contains, which define the gradient that is drawn (as discussed in the following CSS section).
A `clipPath` is set on the reference box in JavaScript to clip that gradient to an elliptical shape.

```html live-sample___ellipse-keywords-interactive
<div class="canvas">
  <div class="refbox" id="refbox">
    <div class="fill"></div>
  </div>
  <div class="outline"></div>
  <div class="center-marker" id="center-marker"></div>
</div>
```

Note that the `.outline` and `.center-marker` are provided to make it easier to see the reference box and the center of the clipping ellipse, which would otherwise be invisible.
The `.outline` element must be placed after `#refbox` in the markup: since it isn't clipped itself, painting it after the reference box means its dashed border always renders on top of the `.fill` gradient, even when the clipping ellipse extends beyond the reference box.

#### CSS

The CSS for the canvas, reference box, and fill elements is shown below.
Note that the `.fill` defines a gradient that overflows the reference box, filling most of the canvas.
This is the gradient that we will clip using the `ellipse()` function (we do this by setting the CSS clip path dynamically in our JavaScript code).

```css live-sample___ellipse-keywords-interactive
.canvas {
  position: relative;
  width: 640px;
  height: 480px;
  overflow: hidden;
  border: 1px solid #888;
}

.refbox {
  position: absolute;
  top: 180px;
  left: 220px;
  width: 200px;
  height: 120px;
  box-sizing: border-box;
}

.fill {
  position: absolute;
  inset: -240px;
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
}
```

The CSS for the controls and other elements is not shown, as it isn't needed to understand the `ellipse()` method.
Interested readers can view it in the example playground.

```css live-sample___ellipse-keywords-interactive hidden
body {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.controls-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}
```

```css live-sample___ellipse-keywords-interactive hidden
.outline {
  position: absolute;
  top: 180px;
  left: 220px;
  width: 200px;
  height: 120px;
  box-sizing: border-box;
}

.outline {
  border: 3px dashed #e6007a;
  pointer-events: none;
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

#declaration {
  margin: 0;
}

#support-note {
  margin: 0;
  color: #b3001b;
}
```

#### JavaScript

First we get handles to each of the elements used by the example.

```js live-sample___ellipse-keywords-interactive
const selectX = document.getElementById("radius-x-keyword");
const selectY = document.getElementById("radius-y-keyword");
const posX = document.getElementById("pos-x");
const posY = document.getElementById("pos-y");
const refbox = document.getElementById("refbox");
const declaration = document.getElementById("declaration");
const marker = document.getElementById("center-marker");
const supportNote = document.getElementById("support-note");
```

Then we define a `checkSupport()` function to feature-test whether each radius keyword is supported and enable/disable the associated options in both dropdowns.
This uses the {{domxref("CSS.supports_static", "CSS.supports()")}} method to check for keyword support.

```js live-sample___ellipse-keywords-interactive
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
```

Next we define an `update()` function that is called whenever the input controls are changed.
This sets the clip path on the reference box based on the selected x-radius and y-radius keywords and position, and moves the center marker to match.

```js live-sample___ellipse-keywords-interactive
function update() {
  const xKeyword = selectX.value;
  const yKeyword = selectY.value;
  const x = Number(posX.value);
  const y = Number(posY.value);

  // Build the clip-path value and apply it to the reference box
  const value = `ellipse(${xKeyword} ${yKeyword} at ${x}px ${y}px)`;
  refbox.style.clipPath = value;

  // Update the displayed declaration text and marker position
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

#### Result

Change the position of the center and the keyword for each radius to see their relative effects.
Note that the reference box, together with the selected x-radius and y-radius keywords and position, is used to calculate the clipping ellipse.
This ellipse can extend beyond the reference box (for example, with `closest-corner` or `farthest-corner`); the `.fill` gradient is deliberately sized larger than the reference box so that it always fully covers the clipped ellipse, however far it extends.

{{EmbedLiveSample("ellipse-keywords-interactive", "", "680px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("border-shape")}}, {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Guide to Basic Shapes](/en-US/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
