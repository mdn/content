---
title: CSSSkewX
slug: Web/API/CSSSkewX
page-type: web-api-interface
browser-compat: api.CSSSkewX
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSSkewX`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) represents the value of a {{cssxref("transform-function/skewX", "skewX()")}} function applied to the CSS {{cssxref("transform")}} property.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSSkewX.CSSSkewX", "CSSSkewX()")}}
  - : Creates a new `CSSSkewX` object.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("CSSTransformComponent")}}._

- {{domxref("CSSSkewX.ax", "ax")}}
  - : Represents the skew angle along the x-axis.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("CSSTransformComponent")}}._

## Description

A `CSSSkewX` represents a {{cssxref("transform-function/skewX", "skewX()")}} function, which is one of the {{cssxref("transform-function")}}s that can make up the value of the `transform` property.
A {{domxref("CSSTransformValue")}} represents the whole value, and contains a `CSSSkewX` for each `skewX()` function, along with objects for any other transform functions.

A skew along the x-axis slants an element by sliding its points left or right, so that a rectangle becomes a parallelogram.
The transform origin, which is set by the {{cssxref("transform-origin")}} property, stays in place.
The farther a point is above or below the transform origin, the farther it slides.
The `ax` property is the skew angle along the x-axis.
The element's vertical edges are tilted by this angle.
A positive `ax` moves the bottom of the element to the right relative to its top.
A negative `ax` slants the element the other way.

The skew angle must be an {{cssxref("angle")}} value, such as `CSS.deg(20)` or `CSS.turn(0.1)`.
The {{domxref("CSSSkewX.CSSSkewX", "CSSSkewX()")}} constructor throws a {{jsxref("TypeError")}} if the value doesn't meet this requirement.

The inherited {{domxref("CSSTransformComponent.is2D", "is2D")}} property is always `true`, because a skew is a 2D transform.
Setting `is2D` has no effect.

The inherited {{domxref("CSSTransformComponent.toString()", "toString()")}} method returns a string in the form `skewX(ax)`.

## Examples

### Creating a skew and logging its properties

This example constructs a `CSSSkewX` and logs its properties and string form.
It also tries to set `is2D` to `false`.

```js
const skewX = new CSSSkewX(CSS.deg(30));

console.log(skewX.ax); // CSSUnitValue {value: 30, unit: "deg"}
console.log(skewX.is2D); // true
console.log(skewX.toString()); // "skewX(30deg)"

skewX.is2D = false;

console.log(skewX.is2D); // true
```

After `skewX.is2D` is set to `false`, it's still `true`, because setting it has no effect on a skew.

### Skewing a box

This example uses `CSSSkewX` to change a box's skew each time you click a button.
The code that logs the results is hidden, because it isn't relevant to the example.

#### HTML

First, we define the box and the button that skews it.

```html
<div id="skew-box"></div>
<button id="skew-button">Add 10° to ax</button>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

The following CSS styles the box.
The margin leaves room for the slanted corners.
The box starts with `skewX(10deg)`, which tilts its vertical edges by 10 degrees (so the JavaScript has an initial skew to read).
The `transition` property animates each change to the skew.

```css
#skew-box {
  width: 50px;
  height: 50px;
  margin: 1.5rem 2rem;
  background-color: #6666dd;
  transform: skewX(10deg);
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

Next, we get a reference to the box and use {{domxref("Element.computedStyleMap", "computedStyleMap()")}} to read and log its initial skew angle.
The computed `transform` value is a {{domxref("CSSTransformValue")}}, and its first item is the `CSSSkewX` that represents `skewX(10deg)`.

```js
const skewBox = document.getElementById("skew-box");

let ax = skewBox.computedStyleMap().get("transform")[0].ax.value;
log(`initial ax: ${ax}deg`);
```

Then, we create a `CSSSkewX` for the box, get the button, and add a click handler.
Each click adds 10 degrees to the skew angle.
When the angle reaches 40 degrees, the next click sets it back to 0 degrees, and the box returns to its normal shape.
The handler sets the skew's `ax` property to the new angle.
It then wraps the `CSSSkewX` in a {{domxref("CSSTransformValue")}} and uses {{domxref("HTMLElement.attributeStyleMap", "attributeStyleMap")}} to set the result as the box's inline `transform`.

```js
const skewX = new CSSSkewX(CSS.deg(ax));

const skewButton = document.getElementById("skew-button");
skewButton.addEventListener("click", () => {
  ax = (ax + 10) % 50;
  skewX.ax = CSS.deg(ax);

  skewBox.attributeStyleMap.set("transform", new CSSTransformValue([skewX]));
  log(`ax: ${ax}deg`);
});
```

#### Result

Click the **Add 10° to ax** button to change the box's skew.

{{EmbedLiveSample("Skewing a box", "", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTranslate")}}
- {{domxref("CSSRotate")}}
- {{domxref("CSSScale")}}
- {{domxref("CSSSkew")}}
- {{domxref("CSSSkewY")}}
- {{domxref("CSSPerspective")}}
- {{domxref("CSSMatrixComponent")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
