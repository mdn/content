---
title: CSSScale
slug: Web/API/CSSScale
page-type: web-api-interface
browser-compat: api.CSSScale
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSScale`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) represents the value of a scaling function applied to the CSS {{cssxref("transform")}} property.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSScale.CSSScale", "CSSScale()")}}
  - : Creates a new `CSSScale` object.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("CSSTransformComponent")}}._

- {{domxref("CSSScale.x", "x")}}
  - : Represents the scale factor along the x-axis.
- {{domxref("CSSScale.y", "y")}}
  - : Represents the scale factor along the y-axis.
- {{domxref("CSSScale.z", "z")}}
  - : Represents the scale factor along the z-axis.
    It has no effect when {{domxref("CSSTransformComponent.is2D", "is2D")}} is `true`.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("CSSTransformComponent")}}._

## Description

A `CSSScale` can represent any of the scaling functions: {{cssxref("transform-function/scale", "scale()")}}, {{cssxref("transform-function/scaleX", "scaleX()")}}, {{cssxref("transform-function/scaleY", "scaleY()")}}, {{cssxref("transform-function/scaleZ", "scaleZ()")}}, or {{cssxref("transform-function/scale3d", "scale3d()")}}.
These are some of the {{cssxref("transform-function")}}s that can make up the value of the `transform` property.
A {{domxref("CSSTransformValue")}} represents the whole value, and contains a `CSSScale` for each scaling function, along with objects for any other transform functions.

A scale resizes an element by a scale factor along each axis.
The `x`, `y`, and `z` properties are the scale factors along the x-axis, y-axis, and z-axis.
A scale factor of `2` doubles the element's size along that axis, `0.5` halves it, and `1` leaves it unchanged.
A negative scale factor flips the element along that axis.

Each scale factor is a {{cssxref("number")}} value.
The constructor and the `x`, `y`, and `z` properties accept either a JavaScript number or a {{domxref("CSSNumericValue")}}, such as `CSS.number(2)`.
A JavaScript number is converted to a {{domxref("CSSUnitValue")}} with the unit `"number"`.
A percentage in a CSS scaling function, such as `scale(50%)`, is represented by the equivalent number, `0.5`.
The {{domxref("CSSScale.CSSScale", "CSSScale()")}} constructor throws a {{jsxref("TypeError")}} if a value is a `CSSNumericValue` that isn't a {{cssxref("number")}}, such as `CSS.px(2)`.

The inherited {{domxref("CSSTransformComponent.is2D", "is2D")}} property indicates whether the object represents a 2D or a 3D scale.
If you pass a `z` value to the constructor, `is2D` is `false`.
If you don't, `z` is set to `1`, and `is2D` is `true`.
A scale read from CSS has `is2D` set to `false` if it comes from a `scale3d()` or `scaleZ()` function.
You can also set `is2D` yourself.
Setting `is2D` to `true` makes the scale 2D, so `z` has no effect even if its value isn't `1`.
Setting `is2D` to `false` makes the scale 3D, so it uses the current `z` value.

The inherited {{domxref("CSSTransformComponent.toString()", "toString()")}} method returns a string in the `scale()` form if `is2D` is `true`, and the `scale3d()` form if it's `false`.
A `CSSScale` doesn't include information about which function it was created from, so a scale from another function, such as `scaleX()`, is converted to one of these two forms.

## Examples

### Creating scales and switching between 2D and 3D

This example constructs a 2D and a 3D `CSSScale` and logs their properties and string forms.
It then sets `is2D` to `true` on the 3D scale to make it 2D, and to `false` on the 2D scale to make it 3D.

```js
const scale2D = new CSSScale(2, 0.5);

console.log(scale2D.x); // CSSUnitValue {value: 2, unit: "number"}
console.log(scale2D.y); // CSSUnitValue {value: 0.5, unit: "number"}
console.log(scale2D.z); // CSSUnitValue {value: 1, unit: "number"}
console.log(scale2D.is2D); // true
console.log(scale2D.toString()); // "scale(2, 0.5)"

const scale3D = new CSSScale(CSS.number(1.5), CSS.number(3), CSS.number(2));

console.log(scale3D.is2D); // false
console.log(scale3D.toString()); // "scale3d(1.5, 3, 2)"

scale3D.is2D = true;

console.log(scale3D.z); // CSSUnitValue {value: 2, unit: "number"}
console.log(scale3D.toString()); // "scale(1.5, 3)"

scale2D.is2D = false;

console.log(scale2D.toString()); // "scale3d(2, 0.5, 1)"
```

The numbers passed to the constructor for `scale2D` are converted to `CSSUnitValue` objects.
`scale2D.z` is `1` because no `z` value was passed to the constructor.
After `scale3D.is2D` is set to `true`, its `z` is still `2`, but its `toString()` uses the 2D `scale()` form, so `z` no longer appears.
After `scale2D.is2D` is set to `false`, its `toString()` uses the 3D `scale3d()` form, which includes the default `z` value of `1`.

### Growing a box

This example uses `CSSScale` to make a box bigger each time you click a button.
The code that logs the results is hidden, because it isn't relevant to the example.

#### HTML

First, we define the box and the button that grows it.

```html
<div id="grow-box"></div>
<button id="grow-button">Grow by 0.25</button>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

The following CSS styles the box.
The margin leaves room for the box to grow without covering the button.
The box starts with `scale(125%)`, a quarter bigger than its normal size (so the JavaScript has an initial scale factor to read).
The `transition` property animates each change to the scale.

```css
#grow-box {
  width: 50px;
  height: 50px;
  margin: 30px;
  background-color: #6666dd;
  transform: scale(125%);
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

Next, we get a reference to the box and use {{domxref("Element.computedStyleMap", "computedStyleMap()")}} to read and log its initial scale factor along the x-axis.
The computed `transform` value is a {{domxref("CSSTransformValue")}}, and its first item is the `CSSScale` that represents `scale(125%)`.
The percentage is read as the equivalent number, so the initial scale factor is `1.25`.

```js
const growBox = document.getElementById("grow-box");

let factor = growBox.computedStyleMap().get("transform")[0].x.value;
log(`initial scale factor: ${factor}`);
```

Then, we create a `CSSScale` for the box, get the button, and add a click handler.
Each click adds 0.25 to the scale factor.
When the factor reaches 2, the next click sets it back to 1, and the box returns to its normal size.
The handler sets the scale's `x` and `y` properties to the new factor, which makes the box grow evenly in both directions.
It then wraps the `CSSScale` in a {{domxref("CSSTransformValue")}} and uses {{domxref("HTMLElement.attributeStyleMap", "attributeStyleMap")}} to set the result as the box's inline `transform`.

```js
const scale = new CSSScale(factor, factor);

const growButton = document.getElementById("grow-button");
growButton.addEventListener("click", () => {
  factor = factor >= 2 ? 1 : factor + 0.25;
  scale.x = factor;
  scale.y = factor;

  growBox.attributeStyleMap.set("transform", new CSSTransformValue([scale]));
  log(`scale factor: ${factor}`);
});
```

#### Result

Click the **Grow by 0.25** button to make the box bigger.

{{EmbedLiveSample("Growing a box", "", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTranslate")}}
- {{domxref("CSSRotate")}}
- {{domxref("CSSSkew")}}
- {{domxref("CSSSkewX")}}
- {{domxref("CSSSkewY")}}
- {{domxref("CSSPerspective")}}
- {{domxref("CSSMatrixComponent")}}
- {{cssxref("scale")}}: CSS property that scales an element without using `transform`
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
