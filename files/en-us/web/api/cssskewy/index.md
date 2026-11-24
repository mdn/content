---
title: CSSSkewY
slug: Web/API/CSSSkewY
page-type: web-api-interface
browser-compat: api.CSSSkewY
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSSkewY`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) represents the value of a {{cssxref("transform-function/skewY", "skewY()")}} function applied to the CSS {{cssxref("transform")}} property.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSSkewY.CSSSkewY", "CSSSkewY()")}}
  - : Creates a new `CSSSkewY` object.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("CSSTransformComponent")}}._

- {{domxref("CSSSkewY.ay", "ay")}}
  - : Represents the skew angle along the y-axis.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("CSSTransformComponent")}}._

## Description

A `CSSSkewY` represents a {{cssxref("transform-function/skewY", "skewY()")}} function, which is one of the {{cssxref("transform-function")}}s that can make up the value of the `transform` property.
A {{domxref("CSSTransformValue")}} represents the whole value, and contains a `CSSSkewY` for each `skewY()` function, along with objects for any other transform functions.

A skew along the y-axis slants an element by sliding its points up or down, so that a rectangle becomes a parallelogram.
The transform origin, which is set by the {{cssxref("transform-origin")}} property, stays in place.
The farther a point is to the left or right of the transform origin, the farther it slides.
The `ay` property is the skew angle along the y-axis.
The element's horizontal edges are tilted by this angle.
A positive `ay` moves the right side of the element down relative to its left side.
A negative `ay` slants the element the other way.

The skew angle must be an {{cssxref("angle")}} value, such as `CSS.deg(20)` or `CSS.turn(0.1)`.
The {{domxref("CSSSkewY.CSSSkewY", "CSSSkewY()")}} constructor throws a {{jsxref("TypeError")}} if the value doesn't meet this requirement.

The inherited {{domxref("CSSTransformComponent.is2D", "is2D")}} property is always `true`, because a skew is a 2D transform.
Setting `is2D` has no effect.

The inherited {{domxref("CSSTransformComponent.toString()", "toString()")}} method returns a string in the form `skewY(ay)`.

## Examples

### Creating a skew and logging its properties

This example constructs a `CSSSkewY` and logs its properties and string form.
It also tries to set `is2D` to `false`.

```js
const skewY = new CSSSkewY(CSS.deg(-15));

console.log(skewY.ay); // CSSUnitValue {value: -15, unit: "deg"}
console.log(skewY.is2D); // true
console.log(skewY.toString()); // "skewY(-15deg)"

skewY.is2D = false;

console.log(skewY.is2D); // true
```

The `ay` value of `-15deg` would move the right side of an element up relative to its left side.
After `skewY.is2D` is set to `false`, it's still `true`, because setting it has no effect on a skew.

### Skewing a box

This example uses `CSSSkewY` to change a box's skew each time you click a button.
The code that logs the results is hidden, because it isn't relevant to the example.

#### HTML

First, we define the box and the button that skews it.

```html
<div id="skew-box"></div>
<button id="skew-button">Add 10° to ay</button>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

The following CSS styles the box.
The margin leaves room for the slanted corners.
The box starts with `skewY(10deg)`, which tilts its horizontal edges by 10 degrees (so the JavaScript has an initial skew to read).
The `transition` property animates each change to the skew.

```css
#skew-box {
  width: 50px;
  height: 50px;
  margin: 1.5rem 2rem;
  background-color: #6666dd;
  transform: skewY(10deg);
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
The computed `transform` value is a {{domxref("CSSTransformValue")}}, and its first item is the `CSSSkewY` that represents `skewY(10deg)`.

```js
const skewBox = document.getElementById("skew-box");

let ay = skewBox.computedStyleMap().get("transform")[0].ay.value;
log(`initial ay: ${ay}deg`);
```

Then, we create a `CSSSkewY` for the box, get the button, and add a click handler.
Each click adds 10 degrees to the skew angle.
When the angle reaches 40 degrees, the next click sets it back to 0 degrees, and the box returns to its normal shape.
The handler sets the skew's `ay` property to the new angle.
It then wraps the `CSSSkewY` in a {{domxref("CSSTransformValue")}} and uses {{domxref("HTMLElement.attributeStyleMap", "attributeStyleMap")}} to set the result as the box's inline `transform`.

```js
const skewY = new CSSSkewY(CSS.deg(ay));

const skewButton = document.getElementById("skew-button");
skewButton.addEventListener("click", () => {
  ay = (ay + 10) % 50;
  skewY.ay = CSS.deg(ay);

  skewBox.attributeStyleMap.set("transform", new CSSTransformValue([skewY]));
  log(`ay: ${ay}deg`);
});
```

#### Result

Click the **Add 10° to ay** button to change the box's skew.

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
- {{domxref("CSSSkewX")}}
- {{domxref("CSSPerspective")}}
- {{domxref("CSSMatrixComponent")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
