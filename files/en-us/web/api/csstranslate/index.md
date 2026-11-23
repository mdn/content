---
title: CSSTranslate
slug: Web/API/CSSTranslate
page-type: web-api-interface
browser-compat: api.CSSTranslate
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSTranslate`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) represents the value of a translation function applied to the CSS {{cssxref("transform")}} property.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSTranslate.CSSTranslate", "CSSTranslate()")}}
  - : Creates a new `CSSTranslate` object.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("CSSTransformComponent")}}._

- {{domxref("CSSTranslate.x", "x")}}
  - : Represents the translation distance along the x-axis.
- {{domxref("CSSTranslate.y", "y")}}
  - : Represents the translation distance along the y-axis.
- {{domxref("CSSTranslate.z", "z")}}
  - : Represents the translation distance along the z-axis, closer to or farther from the viewer.
    It has no effect when {{domxref("CSSTransformComponent.is2D", "is2D")}} is `true`.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("CSSTransformComponent")}}._

## Description

A `CSSTranslate` can represent any of the translation functions: {{cssxref("transform-function/translate", "translate()")}}, {{cssxref("transform-function/translateX", "translateX()")}}, {{cssxref("transform-function/translateY", "translateY()")}}, {{cssxref("transform-function/translateZ", "translateZ()")}}, or {{cssxref("transform-function/translate3d", "translate3d()")}}.
A {{domxref("CSSTransformValue")}} represents the whole value of the `transform` property.
It contains a `CSSTranslate` for each translation function in the value, along with objects for any other {{cssxref("transform-function")}}s.

A translation moves an element by a vector, which is made up of the distances along each axis.
The `x` and `y` properties are the distances along the x-axis and y-axis.
They can be any {{cssxref("length-percentage")}} value: a length, a percentage, or a combination of the two, such as `CSS.px(10).add(CSS.percent(5))`.
A percentage is relative to the width (for `x`) or height (for `y`) of the element's reference box, which is set by the {{cssxref("transform-box")}} property.
The `z` property is the distance along the z-axis and must be a length.
A positive `z` value moves the element closer to the viewer, and a negative value moves it farther away.
The {{domxref("CSSTranslate.CSSTranslate", "CSSTranslate()")}} constructor throws a {{jsxref("TypeError")}} if a value doesn't meet these requirements.

The inherited {{domxref("CSSTransformComponent.is2D", "is2D")}} property indicates whether the object represents a 2D or a 3D translation.
If you pass a `z` value to the constructor, `is2D` is `false`.
If you don't, `z` is set to `0px`, and `is2D` is `true`.
A translation read from CSS has `is2D` set to `false` if it comes from a `translate3d()` or `translateZ()` function.
You can also set `is2D` yourself.
Setting `is2D` to `true` makes the translation 2D, so `z` has no effect even if its value isn't `0px`.
Setting `is2D` to `false` makes the translation 3D, so it uses the current `z` value.

The inherited {{domxref("CSSTransformComponent.toString()", "toString()")}} method returns a string in the form `translate(x, y)` if `is2D` is `true`, and `translate3d(x, y, z)` if it's `false`.
A `CSSTranslate` doesn't include information about which function it was created from, so a translation from another function, such as `translateX()`, is converted to one of these two forms.
The inherited {{domxref("CSSTransformComponent.toMatrix()", "toMatrix()")}} method returns a {{domxref("DOMMatrix")}}, which needs values in pixels, so the method throws a {{jsxref("TypeError")}} if the translation uses a percentage or a [relative length](/en-US/docs/Web/CSS/Reference/Values/length#relative_length_units), such as `em`.

## Examples

### Creating translations and switching between 2D and 3D

This example constructs a 2D and a 3D `CSSTranslate` and logs their properties and string forms.
It then sets `is2D` to `true` on the 3D translation to make it 2D, and to `false` on the 2D translation to make it 3D.

```js
const translate2D = new CSSTranslate(CSS.px(40), CSS.percent(25));

console.log(translate2D.x); // CSSUnitValue {value: 40, unit: "px"}
console.log(translate2D.y); // CSSUnitValue {value: 25, unit: "percent"}
console.log(translate2D.z); // CSSUnitValue {value: 0, unit: "px"}
console.log(translate2D.is2D); // true
console.log(translate2D.toString()); // "translate(40px, 25%)"

const translate3D = new CSSTranslate(CSS.px(5), CSS.px(15), CSS.px(50));

console.log(translate3D.is2D); // false
console.log(translate3D.toString()); // "translate3d(5px, 15px, 50px)"

translate3D.is2D = true;

console.log(translate3D.z); // CSSUnitValue {value: 50, unit: "px"}
console.log(translate3D.toString()); // "translate(5px, 15px)"

translate2D.is2D = false;

console.log(translate2D.toString()); // "translate3d(40px, 25%, 0px)"
```

`translate2D.z` is `0px` because no `z` value was passed to the constructor.
After `translate3D.is2D` is set to `true`, its `z` is still `50px`, but its `toString()` uses the 2D `translate()` form, so `z` no longer appears.
After `translate2D.is2D` is set to `false`, its `toString()` uses the 3D `translate3d()` form, which includes the default `z` value of `0px`.

### Moving a box

This example uses `CSSTranslate` to move a box each time you click a button.
The code that logs the results is hidden, because it isn't relevant to the example.

#### HTML

First, we define the box and the button that moves it.

```html
<div id="move-box"></div>
<button id="move-button">Move 20px</button>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

The following CSS styles the box.
The box starts with `translate(20px)`, 20 pixels to the right of its normal position (so the JavaScript has an initial translation to read).
The `transition` property animates each change to the translation.

```css
#move-box {
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
  background-color: #6666dd;
  transform: translate(20px);
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

Next, we get a reference to the box and use {{domxref("Element.computedStyleMap", "computedStyleMap()")}} to read and log its initial translation distance along the x-axis.
The computed `transform` value is a {{domxref("CSSTransformValue")}}, and its first item is the `CSSTranslate` that represents `translate(20px)`.

```js
const moveBox = document.getElementById("move-box");

let distance = moveBox.computedStyleMap().get("transform")[0].x.value;
log(`initial x: ${distance}px`);
```

Then, we create a `CSSTranslate` for the box, get the button, and add a click handler.
Each click moves the box another 20 pixels to the right.
When the distance reaches 180 pixels, the next click sets it back to 0 pixels, and the box returns to its normal position.
The handler sets the translation's `x` property to the new distance.
It then wraps the `CSSTranslate` in a {{domxref("CSSTransformValue")}} and uses {{domxref("HTMLElement.attributeStyleMap", "attributeStyleMap")}} to set the result as the box's inline `transform`.

```js
const translate = new CSSTranslate(CSS.px(distance), CSS.px(0));

const moveButton = document.getElementById("move-button");
moveButton.addEventListener("click", () => {
  distance = (distance + 20) % 200;
  translate.x = CSS.px(distance);

  moveBox.attributeStyleMap.set(
    "transform",
    new CSSTransformValue([translate]),
  );
  log(`x: ${distance}px`);
});
```

#### Result

Click the **Move 20px** button to move the box.

{{EmbedLiveSample("Moving a box", "", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSRotate")}}
- {{domxref("CSSScale")}}
- {{domxref("CSSSkew")}}
- {{domxref("CSSSkewX")}}
- {{domxref("CSSSkewY")}}
- {{domxref("CSSPerspective")}}
- {{domxref("CSSMatrixComponent")}}
- {{cssxref("translate")}}: CSS property that translates an element without using `transform`
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
