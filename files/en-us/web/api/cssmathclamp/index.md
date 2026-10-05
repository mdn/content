---
title: CSSMathClamp
slug: Web/API/CSSMathClamp
page-type: web-api-interface
browser-compat: api.CSSMathClamp
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSMathClamp`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) represents the CSS {{CSSXref("clamp","clamp()")}} function.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSMathClamp.CSSMathClamp", "CSSMathClamp()")}}
  - : Creates a new `CSSMathClamp` object.

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("CSSMathValue")}}._

- {{domxref("CSSMathClamp.lower")}} {{readonlyinline}}
  - : Returns a {{domxref("CSSNumericValue")}} object containing the minimum value.
- {{domxref("CSSMathClamp.value")}} {{readonlyinline}}
  - : Returns a {{domxref("CSSNumericValue")}} object containing the preferred value.
- {{domxref("CSSMathClamp.upper")}} {{readonlyinline}}
  - : Returns a {{domxref("CSSNumericValue")}} object containing the upper value.

## Static methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSMathValue")}}._

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSMathValue")}}._

## Description

The CSS {{CSSXref("clamp", "clamp()")}} function takes three arguments: a minimum, preferred, and maximum value, and returns the preferred value, clamped between the minimum and maximum.

If all three arguments are absolute values, such as pixel lengths, `clamp()` is resolved to a single value at parse time, represented by the CSS Typed Object Model as a {{domxref("CSSUnitValue")}}.
If the `clamp()` expression can't be resolved to a single value at parse time (say, because one of its arguments uses a relative unit like `vw` or `%`), the function is represented as a `CSSMathClamp` object, and the three arguments passed to `clamp()` (or to the `CSSMathClamp()` constructor) are exposed as the `lower`, `value`, and `upper` properties.

Note that `CSSMathClamp` represents the `clamp()` function, not its resolved value.
In order to determine the value of a clamped property, you need to read its computed style (for example with {{domxref("Window.getComputedStyle", "getComputedStyle()")}}).

## Examples

### Basic usage

The following code creates a `CSSMathClamp` instance from three lengths, then reads back its `lower`, `value`, and `upper` properties.

```js
const clamp = new CSSMathClamp(CSS.px(10), CSS.percent(50), CSS.px(500));

console.log(clamp.constructor.name); // "CSSMathClamp"
console.log(clamp.lower); // CSSUnitValue {value: 10, unit: "px"}
console.log(clamp.value); // CSSUnitValue {value: 50, unit: "percent"}
console.log(clamp.upper); // CSSUnitValue {value: 500, unit: "px"}
```

### `clamp()` representations

This example shows how {{CSSXref("clamp","clamp()")}} is represented by a {{domxref("CSSUnitValue")}} or a `CSSMathClamp`, depending on whether all of its arguments are absolute values.

#### HTML

First we declare a {{htmlelement("div")}} element, `#demoBox`, on which we'll set some clamped properties.

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

The `width` of the box is set using a `clamp()` whose three arguments are all absolute lengths, so the browser can resolve it to a single fixed value immediately.
`font-size` is set using a `clamp()` whose preferred value uses the relative unit `vw`, so the browser can't resolve it until layout (this will be represented by a `CSSMathClamp`).

```css
#demoBox {
  width: clamp(10px, 50px, 500px);
  font-size: clamp(1rem, 5vw, 3rem);
}
```

```css hidden
#log {
  height: 200px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

First we find the demo box's style rule and read its `width` and `font-size` values using {{domxref("CSSStyleRule.styleMap", "styleMap")}}.

```js
const demoBox = document.querySelector("#demoBox");

const rules = document.getElementById("css-output").sheet.cssRules;
const rule = [...rules].find((r) => r.selectorText === "#demoBox");
const styleMap = rule.styleMap;
const width = styleMap.get("width");
const fontSize = styleMap.get("font-size");
```

We then log the type and value of the CSS Typed OM representations, followed by the computed (resolved) values.

```js
log("width");
log(` type: ${width.constructor.name}`);
log(` value: ${width}`);
log(` resolved: ${getComputedStyle(demoBox).width}`);

log("\nfont-size");
log(` type: ${fontSize.constructor.name}`);
log(` lower: ${fontSize.lower}`);
log(` value: ${fontSize.value}`);
log(` upper: ${fontSize.upper}`);
log(` resolved: ${getComputedStyle(demoBox).fontSize}`);
```

#### Result

`width` logs as a single `CSSUnitValue`, and its resolved value matches that value directly.
`font-size` logs as a `CSSMathClamp`, exposing the `clamp()` function's original operands.

{{EmbedLiveSample("`clamp()` representations", 300, 300)}}

### Inspecting a clamped value

This example uses three range sliders to set the `lower`, `preferred`, and `upper` values of a `CSSMathClamp`, then applies it to the width of a box using {{domxref("StylePropertyMap.set", "attributeStyleMap.set()")}}.
This allows you to see the effect of changing the range on the clamped value of the `width`.

Dragging a slider changes what `lower`, `value`, and `upper` report, because they always mirror the three operands passed to the `CSSMathClamp` — note that `value` is reported in `vw`, not the pixels shown on its slider. The output next to the preferred slider shows both its pixel value and the `vw` equivalent actually passed to the constructor, so the conversion stays visible. The box's actual rendered width, by contrast, is the result of clamping that `vw` value between the two pixel bounds, and can differ substantially from `value` itself — for example, when the preferred slider is dragged below the lower slider or above the upper slider.

#### HTML

First we define a {{htmlelement("div")}} element for the resizable box, three sliders to set the minimum, preferred, and upper values of its width, and {{htmlelement("output")}} elements to display the slider values numerically.
All three sliders share the same 0 to 400 pixel range, so their positions are directly comparable.
We set the initial values so that `lower < pref < upper`.

```html
<div id="box"></div>
<div class="controls">
  <label for="lower">Lower (px)</label>
  <input id="lower" type="range" min="0" max="400" value="50" />
  <output for="lower" id="lowerOut"></output>

  <label for="pref">Preferred (px)</label>
  <input id="pref" type="range" min="0" max="400" value="180" />
  <output for="pref" id="prefOut"></output>

  <label for="upper">Upper (px)</label>
  <input id="upper" type="range" min="0" max="400" value="350" />
  <output for="upper" id="upperOut"></output>
</div>
<pre id="log"></pre>
```

At the end we define a `#log` element to output information returned about the box width.

#### CSS

The CSS sets the visual properties and alignment of the box, sliders, and other elements.

```css
#box {
  height: 50px;
  background: rebeccapurple;
}

.controls {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem 1rem;
  max-width: 400px;
}

.controls output {
  font-family: monospace;
  text-align: right;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

First we create variables to reference the box, the sliders, and the output elements.

```js
const box = document.querySelector("#box");
const lowerInput = document.querySelector("#lower");
const prefInput = document.querySelector("#pref");
const upperInput = document.querySelector("#upper");
const lowerOut = document.querySelector("#lowerOut");
const prefOut = document.querySelector("#prefOut");
const upperOut = document.querySelector("#upperOut");
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Then we call the `update()` function to update the box and output elements based on the slider value.
We set up a listener so that the function is called whenever the slider positions are changed.

```js
[lowerInput, prefInput, upperInput].forEach((el) =>
  el.addEventListener("input", update),
);
update();
```

The `update()` function is shown below.
This logs the values of the sliders and uses them when creating a `CSSMathClamp` that is then set on the `width` attribute of the box.
The attribute styles of the box are then read using {{domxref("HTMLElement.attributeStyleMap")}} and the retrieved values of `width` are also logged, along with the rendered width of the box.

One complexity in the code is that while `lower` and `upper` are passed to the `CSSMathClamp()` constructor as pixels, exactly matching their sliders, the pixel value of `preferred` is first converted to `vw` (viewport width) units.
This has been done because if all three operands were absolute lengths (for example, all in pixels), the browser could resolve `clamp()` down to a single fixed number, which would be read back as a {{domxref("CSSUnitValue")}} instead of a `CSSMathClamp`.
Converting `preferred` to a relative unit like `vw` means the browser can't resolve the expression until layout, so it keeps the value as a live `CSSMathClamp` with all three operands intact.

```js
function update() {
  logElement.innerText = "";

  // The preferred slider uses the same 0-400px scale as lower and upper,
  // so its value is converted to vw before being passed to CSSMathClamp.
  const prefVw = (prefInput.value / window.innerWidth) * 100;
  lowerOut.textContent = `${lowerInput.value}px`;
  prefOut.textContent = `${prefInput.value}px (~${prefVw.toFixed(1)}vw)`;
  upperOut.textContent = `${upperInput.value}px`;

  try {
    const clampValue = new CSSMathClamp(
      CSS.px(lowerInput.value),
      CSS.vw(prefVw),
      CSS.px(upperInput.value),
    );
    box.attributeStyleMap.set("width", clampValue);
    const widthClamp = box.attributeStyleMap.get("width");
    const valuePx = (widthClamp.value.value / 100) * window.innerWidth;
    log(`type: ${widthClamp.constructor.name}`);
    log(`lower: ${widthClamp.lower}`);
    log(`value: ${widthClamp.value} (~${valuePx.toFixed(1)}px)`);
    log(`upper: ${widthClamp.upper}`);
    log(`rendered width: ${getComputedStyle(box).width}`);
  } catch (e) {
    log(`Error: ${e.message}`);
  }
}
```

#### Result

Drag the sliders to see how `lower`, `value`, and `upper` always match the slider positions, while the rendered width is clamped between `lower` and `upper`.

{{EmbedLiveSample("Inspecting a clamped value", 300, 350)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSMathMax")}}
- {{domxref("CSSMathMin")}}
