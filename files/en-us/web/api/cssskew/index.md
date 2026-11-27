---
title: CSSSkew
slug: Web/API/CSSSkew
page-type: web-api-interface
browser-compat: api.CSSSkew
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSSkew`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) represents the value of a {{cssxref("transform-function/skew", "skew()")}} function applied to the CSS {{cssxref("transform")}} property.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSSkew.CSSSkew", "CSSSkew()")}}
  - : Creates a new `CSSSkew` object.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("CSSTransformComponent")}}._

- {{domxref("CSSSkew.ax", "ax")}}
  - : Represents the skew angle along the x-axis.
- {{domxref("CSSSkew.ay", "ay")}}
  - : Represents the skew angle along the y-axis.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("CSSTransformComponent")}}._

## Description

A `CSSSkew` represents a {{cssxref("transform-function/skew", "skew()")}} function, which is one of the {{cssxref("transform-function")}}s that can make up the value of the `transform` property.
A {{domxref("CSSTransformValue")}} represents the whole value, and contains a `CSSSkew` for each `skew()` function, along with objects for any other transform functions.

A skew slants an element by sliding its points along an axis, so that a rectangle becomes a parallelogram.
The transform origin, which is set by the {{cssxref("transform-origin")}} property, stays in place.
The farther a point is from the transform origin along the other axis, the farther it slides.
The `ax` property is the skew angle along the x-axis.
A skew along the x-axis slides points left or right, which tilts the element's vertical edges by this angle.
A positive `ax` moves the bottom of the element to the right relative to its top.
The `ay` property is the skew angle along the y-axis.
A skew along the y-axis slides points up or down, which tilts the element's horizontal edges by this angle.
A positive `ay` moves the right side of the element down relative to its left side.
Negative angles slant the element the other way.

Each skew angle must be an {{cssxref("angle")}} value, such as `CSS.deg(20)` or `CSS.turn(0.1)`.
The {{domxref("CSSSkew.CSSSkew", "CSSSkew()")}} constructor throws a {{jsxref("TypeError")}} if a value doesn't meet this requirement.

The inherited {{domxref("CSSTransformComponent.is2D", "is2D")}} property is always `true`, because a skew is a 2D transform.
Setting `is2D` has no effect.

The inherited {{domxref("CSSTransformComponent.toString()", "toString()")}} method returns a string in the form `skew(ax, ay)`.
If `ay` is a {{domxref("CSSUnitValue")}} with a value of `0`, the method leaves it out and returns `skew(ax)`, which means the same as `skew(ax, 0deg)`.
A skew read from a `skew()` function with only one angle has an `ay` of `0deg`.

The {{cssxref("transform-function/skewX", "skewX()")}} and {{cssxref("transform-function/skewY", "skewY()")}} functions are represented by the {{domxref("CSSSkewX")}} and {{domxref("CSSSkewY")}} interfaces.
They have their own interfaces because `skew(ax, ay)` has a different effect from `skewX(ax)` followed by `skewY(ay)`.
The `skew()` function applies both slants to the element's original shape.
With two functions, one slant is applied to the shape that the other produces.

## Examples

### Creating skews and logging their properties

This example constructs two `CSSSkew` objects and logs their properties and string forms.
It also tries to set `is2D` to `false`.

```js
const skew = new CSSSkew(CSS.deg(20), CSS.deg(10));

console.log(skew.ax); // CSSUnitValue {value: 20, unit: "deg"}
console.log(skew.ay); // CSSUnitValue {value: 10, unit: "deg"}
console.log(skew.is2D); // true
console.log(skew.toString()); // "skew(20deg, 10deg)"

skew.is2D = false;

console.log(skew.is2D); // true

const skewAlongX = new CSSSkew(CSS.deg(30), CSS.deg(0));

console.log(skewAlongX.toString()); // "skew(30deg)"
```

After `skew.is2D` is set to `false`, it's still `true`, because setting it has no effect on a skew.
The string form of `skewAlongX` leaves out `ay`, because its value is `0deg`.

### Skewing a box

This example uses `CSSSkew` to change a box's skew each time you click a button.
The code that logs the results is hidden, because it isn't relevant to the example.

#### HTML

First, we define the box and a button for each skew angle.

```html
<div id="skew-box"></div>
<button id="ax-button">Add 10° to ax</button>
<button id="ay-button">Add 10° to ay</button>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

The following CSS styles the box.
The margin leaves room for the slanted corners.
The box starts with `skew(10deg)`, which tilts its vertical edges by 10 degrees (so the JavaScript has an initial skew to read).
The `transition` property animates each change to the skew.

```css
#skew-box {
  width: 50px;
  height: 50px;
  margin: 1.5rem 2rem;
  background-color: #6666dd;
  transform: skew(10deg);
  transition: transform 0.3s ease;
}
```

```css hidden
#log {
  height: 80px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Next, we get a reference to the box and use {{domxref("Element.computedStyleMap", "computedStyleMap()")}} to read and log its initial skew angles.
The computed `transform` value is a {{domxref("CSSTransformValue")}}, and its first item is the `CSSSkew` that represents `skew(10deg)`.
The `skew()` function has only one angle, so `ay` is read as `0deg`.

```js
const skewBox = document.getElementById("skew-box");

const initialSkew = skewBox.computedStyleMap().get("transform")[0];
let ax = initialSkew.ax.value;
let ay = initialSkew.ay.value;
log(`initial ax: ${ax}deg, ay: ${ay}deg`);
```

Then, we create a `CSSSkew` for the box and a function that applies it.
The function wraps the `CSSSkew` in a {{domxref("CSSTransformValue")}} and uses {{domxref("HTMLElement.attributeStyleMap", "attributeStyleMap")}} to set the result as the box's inline `transform`.
Finally, we add a click handler to each button.
Each click adds 10 degrees to the angle named on that button and sets the skew's `ax` or `ay` property to the new value.
When an angle reaches 40 degrees, the next click sets it back to 0 degrees.

```js
const skew = new CSSSkew(CSS.deg(ax), CSS.deg(ay));

function applySkew() {
  skewBox.attributeStyleMap.set("transform", new CSSTransformValue([skew]));
  log(`ax: ${ax}deg, ay: ${ay}deg`);
}

const axButton = document.getElementById("ax-button");
axButton.addEventListener("click", () => {
  ax = (ax + 10) % 50;
  skew.ax = CSS.deg(ax);
  applySkew();
});

const ayButton = document.getElementById("ay-button");
ayButton.addEventListener("click", () => {
  ay = (ay + 10) % 50;
  skew.ay = CSS.deg(ay);
  applySkew();
});
```

#### Result

Click the **Add 10° to ax** and **Add 10° to ay** buttons to change the box's skew.

{{EmbedLiveSample("Skewing a box", "", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTranslate")}}
- {{domxref("CSSRotate")}}
- {{domxref("CSSScale")}}
- {{domxref("CSSPerspective")}}
- {{domxref("CSSMatrixComponent")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
