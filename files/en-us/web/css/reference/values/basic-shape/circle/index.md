---
title: "`circle()` CSS function"
short-title: circle()
slug: Web/CSS/Reference/Values/basic-shape/circle
page-type: css-function
browser-compat: css.types.basic-shape.circle
sidebar: cssref
---

The **`circle()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) defines a circle using a radius and a position. It is one of the {{cssxref("basic-shape")}} data types.

{{InteractiveExample("CSS Demo: circle()")}}

```css interactive-example-choice
clip-path: circle(50px);
```

```css interactive-example-choice
clip-path: circle(6rem at right center);
```

```css interactive-example-choice
clip-path: circle(10% at 2rem 90%);
```

```css interactive-example-choice
clip-path: circle(closest-side at 5rem 6rem);
```

```css interactive-example-choice
clip-path: circle(farthest-side);
```

```css interactive-example-choice
clip-path: circle(closest-corner at 70% 70%);
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
shape-outside: circle(50%);
clip-path: circle(6rem at 12rem 8rem);
border-shape: circle(60%);
```

### Values

- `<shape-radius>`
  - : This may be a {{cssxref("length")}}, a {{cssxref("percentage")}}, or any of the following keyword values:
    - `closest-side`
      - : The radius is the length from the center of the circle to the closest side of the reference box, so that the circle's boundary just touches that side.
    - `farthest-side`
      - : The radius is the length from the center of the circle to the farthest side of the reference box, so that the circle's boundary just touches that side.
    - `closest-corner`
      - : The radius is the length from the center of the circle to the closest corner of the reference box, so that the circle's boundary passes through that corner.
    - `farthest-corner`
      - : The radius is the length from the center of the circle to the farthest corner of the reference box, so that the circle's boundary passes through that corner.

- `<position>`
  - : Moves the center of the circle. May be a {{cssxref("length")}}, or a {{cssxref("percentage")}}, or a values such as `left`. The `<position>` value defaults to center if omitted.

## Formal syntax

{{csssyntax}}

## Examples

### Basic circle

In the example below, the {{cssxref("shape-outside")}} property has a value of `circle(50%)`, which defines a circle on a floated element for the text to flow round.

```html live-sample___circle
<div class="box">
  <img
    alt="A hot air balloon"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
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

```css live-sample___circle
body {
  font: 1.2em / 1.5 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "300px")}}

### Radius keyword interactive example

This example allows you to test the effect of moving the center point of the circle when using each of the four `<shape-radius>` keywords.

#### HTML

The HTML first defines controls for selecting a chosen radius keyword and setting the position where the circle is to be displayed, followed by a {{htmlelement("pre")}} element for displaying the {{cssxref("clip-path")}} that the control values select.
After this a `#support-note` element is provided for indicating when particular radius keywords are not supported.

```html live-sample___circle-keywords-interactive
<div class="controls">
  <div class="controls-row">
    <label>
      Shape radius:
      <select id="radius-keyword">
        <option value="closest-side">closest-side</option>
        <option value="closest-corner">closest-corner</option>
        <option value="farthest-side">farthest-side</option>
        <option value="farthest-corner" selected>farthest-corner</option>
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

The HTML then defines a number of {{htmlelement("div")}} elements that are used to render the circle, reference box and center marker.
The most important elements are the reference box (`#refbox`) and the `.fill` element it contains, which define the gradient that is drawn (as discussed in the following CSS section).
A `clipPath` is set on the reference box in JavaScript to clip that gradient to a circular shape.

```html live-sample___circle-keywords-interactive
<div class="canvas">
  <div class="refbox" id="refbox">
    <div class="fill"></div>
  </div>
  <div class="outline"></div>
  <div class="center-marker" id="center-marker"></div>
</div>
```

Note that the `.outline` and `.center-marker` are provided to make it easier to see the reference box and the center of the clipping circle, which would otherwise be invisible.
The `.outline` element must be placed after `#refbox` in the markup: since it isn't clipped itself, painting it after the reference box means its dashed border always renders on top of the `.fill` gradient, even when the clipping circle extends beyond the reference box.

#### CSS

The CSS for the canvas, reference box and fill elements are shown below.
Note that the `.fill` defines a gradient that overflows the reference box, filling most of the canvas.
This is the gradient that we will clip using the `circle()` (we do this by setting the CSS clip path dynamically in our JavaScript code).

```css live-sample___circle-keywords-interactive
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

The CSS for the controls and other elements is not shown, as it isn't needed to understand the `circle()` method.
Interested readers can view it in the example playground.

```css live-sample___circle-keywords-interactive hidden
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

```css live-sample___circle-keywords-interactive hidden
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

The JavaScript for the example is shown below.
First we get handles to each of the elements used by the example.

Then we define `checkSupport()` method to feature-test whether each radius keyword is supported and enable/disable the associated selection options.
This uses the {{domxref("CSS.supports_static", "CSS.supports()")}} method to check for keyword support.

```js live-sample___circle-keywords-interactive
const select = document.getElementById("radius-keyword");
const posX = document.getElementById("pos-x");
const posY = document.getElementById("pos-y");
const refbox = document.getElementById("refbox");
const declaration = document.getElementById("declaration");
const marker = document.getElementById("center-marker");
const supportNote = document.getElementById("support-note");

// Feature-test each keyword
function checkSupport() {
  const unsupported = [];
  for (const option of select.options) {
    if (!CSS.supports("clip-path", `circle(${option.value} at 0px 0px)`)) {
      option.disabled = true;
      option.textContent += " (not supported)";
      unsupported.push(option.value);
    }
  }
  if (unsupported.length > 0) {
    supportNote.textContent = `Your browser doesn't support: ${unsupported.join(", ")}.`;
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
```

Next we define an `update()` function that is called whenever the input controls are changed.
This sets the clip path on the reference box based on the selected keyword and position, and moves the center marker to match.

```js live-sample___circle-keywords-interactive
function update() {
  const keyword = select.value;
  const x = Number(posX.value);
  const y = Number(posY.value);

  // Build the clip-path value and apply it to the reference box
  const value = `circle(${keyword} at ${x}px ${y}px)`;
  refbox.style.clipPath = value;

  // Update the displayed declaration text and marker position
  declaration.textContent = `clip-path: ${value};`;
  marker.style.left = `${refbox.offsetLeft + x}px`;
  marker.style.top = `${refbox.offsetTop + y}px`;
}

select.addEventListener("change", update);
posX.addEventListener("input", update);
posY.addEventListener("input", update);
checkSupport();
update();
```

#### Result

Change the position of the center and the keyword used to see their relative effects.
Note that the reference box, together with the selected radius keyword and position, is used to calculate the clipping circle.
This circle can extend beyond the reference box (for example, with `closest-corner` or `farthest-corner`); the `.fill` gradient is deliberately sized larger than the reference box so that it always fully covers the clipped circle, however far it extends.

{{EmbedLiveSample("circle-keywords-interactive", "", "640px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("border-shape")}}, {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Guide to Basic Shapes](/en-US/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
