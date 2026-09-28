---
title: CSSRotate
slug: Web/API/CSSRotate
page-type: web-api-interface
browser-compat: api.CSSRotate
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSRotate`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) represents the value of a rotation function in the {{cssxref("transform")}} property in CSS.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSRotate.CSSRotate", "CSSRotate()")}}
  - : Creates a new `CSSRotate` object.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("CSSTransformComponent")}}._

- {{domxref("CSSRotate.angle", "angle")}}
  - : Represents the angle of rotation.
- {{domxref("CSSRotate.x", "x")}}
  - : Represents the x-coordinate of the rotation axis vector.
- {{domxref("CSSRotate.y", "y")}}
  - : Represents the y-coordinate of the rotation axis vector.
- {{domxref("CSSRotate.z", "z")}}
  - : Represents the z-coordinate of the rotation axis vector.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("CSSTransformComponent")}}._

## Description

The **`CSSRotate`** interface is used to represent rotation functions in a list of {{cssxref("transform-function")}}s defined for a CSS {{cssxref("transform")}} property.
This includes rotations declared with: {{cssxref("transform-function/rotate", "rotate()")}}, {{cssxref("transform-function/rotate3d", "rotate3d()")}}, {{cssxref("transform-function/rotateX", "rotateX()")}}, {{cssxref("transform-function/rotateY", "rotateY()")}}, or {{cssxref("transform-function/rotateZ", "rotateZ()")}}.

The list itself is represented by a {{domxref("CSSTransformValue")}} object that can be iterated to get the objects representing each of the functions (and may include objects representing other transforms).

A rotation is defined by an axis vector (`x`, `y`, `z`) and an `angle` of rotation around that axis.
The 2-argument constructor form is shorthand for a rotation around the z-axis: it sets the axis to `(0, 0, 1)`, which is why a 2D CSS {{cssxref("transform-function/rotate", "rotate()")}} is equivalent to `rotate3d(0, 0, 1, angle)`.
The 4-argument form lets you specify any axis, for an arbitrary 3D rotation.

## Examples

### Basic usage

This example constructs a `CSSRotate` and logs its structure and properties.

```js
const rotate = new CSSRotate(CSS.deg(45));

console.log(rotate); // CSSRotate {x: CSSUnitValue, y: CSSUnitValue, z: CSSUnitValue, angle: CSSUnitValue, is2D: true}
console.log(rotate.angle.value, rotate.angle.unit); // 45 "deg"
console.log(rotate.x.value, rotate.y.value, rotate.z.value); // 0 0 1
console.log(rotate.toString()); // "rotate(45deg)"
```

### Incrementing a rotation

This example demonstrates how `CSSRotate` might be used.

Note that there is hidden logging code that isn't relevant to the example.

#### HTML

First we define the elements for the box to rotate, and the button we use to rotate it.

```html
<div id="increment-box"></div>
<button id="increment-button">Rotate 15°</button>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

The CSS for the box we will rotate is shown below.
Note that the box is initially rotated by 15 degrees.

```css
#increment-box {
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
  background-color: #66d;
  transform: rotate(15deg);
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

The code first gets a handle to the box we're rotating, then uses {{domxref("Element.computedStyleMap", "computedStyleMap()")}} to get and log the initial transform angle.

```js
const incrementBox = document.getElementById("increment-box");

let angle = incrementBox.computedStyleMap().get("transform")[0].angle.value;
log(`initial angle: ${angle}deg`);
```

Then we get the button and add a handler to rotate it 15 degrees each time the button is clicked.
Note that we use `CSSRotate` to define the rotation, add it to a {{domxref("CSSTransformValue")}}, and then set that as the style for the box.

```js
const incrementButton = document.getElementById("increment-button");
incrementButton.addEventListener("click", () => {
  angle = (angle + 15) % 360;
  const rotate = new CSSRotate(CSS.deg(angle));

  incrementBox.attributeStyleMap.set(
    "transform",
    new CSSTransformValue([rotate]),
  );
  log(`angle: ${angle}deg`);
});
```

#### Result

This example starts with a box already rotated `15deg` in CSS.
Click the button to rotate it.

{{EmbedLiveSample("Incrementing a rotation", 120, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTransformComponent")}}
- {{domxref("CSSTransformValue")}}
- {{domxref("CSSTranslate")}}
- {{domxref("CSSScale")}}
- {{domxref("CSSSkew")}}
- {{domxref("CSSSkewX")}}
- {{domxref("CSSSkewY")}}
- {{domxref("CSSPerspective")}}
- {{domxref("CSSMatrixComponent")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
