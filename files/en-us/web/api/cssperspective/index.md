---
title: CSSPerspective
slug: Web/API/CSSPerspective
page-type: web-api-interface
browser-compat: api.CSSPerspective
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSPerspective`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) represents the value of a {{cssxref("transform-function/perspective", "perspective()")}} function applied to the CSS {{cssxref("transform")}} property.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSPerspective.CSSPerspective", "CSSPerspective()")}}
  - : Creates a new `CSSPerspective` object.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("CSSTransformComponent")}}._

- {{domxref("CSSPerspective.length", "length")}}
  - : Represents the distance between the viewer and the z=0 plane.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("CSSTransformComponent")}}._

## Description

A `CSSPerspective` represents a {{cssxref("transform-function/perspective", "perspective()")}} function, which is one of the {{cssxref("transform-function")}}s that can make up the value of the `transform` property.
A {{domxref("CSSTransformValue")}} represents the whole value, and contains a `CSSPerspective` for each `perspective()` function, along with objects for any other transform functions.

A perspective makes the parts of an element that are closer to the viewer look larger, and the parts that are farther away look smaller.
The `length` property is the distance between the viewer and the z=0 plane, which is the flat surface where an element sits before any 3D transform moves it toward or away from the viewer.
Points on the z=0 plane don't change, so a perspective on its own has no effect on a flat element.
A perspective has a visible effect only when a 3D transform moves points off the z=0 plane, such as a {{cssxref("transform-function/rotateY", "rotateY()")}} function that comes after it in the same `transform` value.
A shorter distance makes the perspective effect stronger: `1000px` gives a moderate effect, and `200px` gives a strong one.
A length smaller than `1px` is treated as `1px` when the element is drawn, but the `length` value doesn't change.

The `length` property must be a {{cssxref("length")}}, such as `CSS.px(500)`, or the keyword `none`, which applies no perspective.
You can pass `none` to the constructor as a string or as a {{domxref("CSSKeywordValue")}}.
The {{domxref("CSSPerspective.CSSPerspective", "CSSPerspective()")}} constructor throws a {{jsxref("TypeError")}} if the value isn't a length or the keyword `none`.

The inherited {{domxref("CSSTransformComponent.is2D", "is2D")}} property is always `false`, because a perspective is a 3D transform.
Setting `is2D` has no effect.

The inherited {{domxref("CSSTransformComponent.toString()", "toString()")}} method returns a string in the form `perspective(length)`.
The `perspective()` function doesn't accept a plain negative length, so if `length` is negative, the method wraps it in `calc()`, giving a string such as `perspective(calc(-10px))`.
The inherited {{domxref("CSSTransformComponent.toMatrix()", "toMatrix()")}} method returns a {{domxref("DOMMatrix")}}.
It needs `length` in pixels to build the matrix, so it throws a {{jsxref("TypeError")}} if `length` is a [relative length](/en-US/docs/Web/CSS/Reference/Values/length#relative_length_units), such as `em`.
A `length` smaller than `1px` is treated as `1px` in the matrix, and `none` gives an identity matrix, which leaves the element unchanged.

## Examples

### Creating perspectives and logging their properties

This example constructs a `CSSPerspective`, logs its properties and string form, and tries to set `is2D` to `true`.
It then constructs a second `CSSPerspective` from the keyword `none` and logs its `length` and string form.

```js
const perspective = new CSSPerspective(CSS.px(500));

console.log(perspective.length); // CSSUnitValue {value: 500, unit: "px"}
console.log(perspective.is2D); // false
console.log(perspective.toString()); // "perspective(500px)"

perspective.is2D = true;

console.log(perspective.is2D); // false

const noPerspective = new CSSPerspective("none");

console.log(noPerspective.length); // CSSKeywordValue {value: "none"}
console.log(noPerspective.toString()); // "perspective(none)"
```

After `perspective.is2D` is set to `true`, it's still `false`, because setting it has no effect on a perspective.
The constructor converts the `"none"` string for `noPerspective` into a {{domxref("CSSKeywordValue")}}.

### Viewing a rotated box in perspective

This example uses `CSSPerspective` to change the perspective distance of a rotated box each time you click a button.
The code that logs the results is hidden, because it isn't relevant to the example.

#### HTML

First, we define the box and the button that changes its perspective.

```html
<div id="perspective-box"></div>
<button id="perspective-button">Add 100px</button>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

The following CSS styles the box.
The margin leaves room for the parts of the box that look larger.
The box starts with `perspective(200px) rotateY(45deg)`, which turns it 45 degrees around its vertical axis and shows it as if seen from 200 pixels away (so the JavaScript has an initial perspective to read).
The `transition` property animates each change to the perspective.

```css
#perspective-box {
  width: 80px;
  height: 80px;
  margin: 1.5rem 2rem;
  background-color: #6666dd;
  transform: perspective(200px) rotateY(45deg);
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

Next, we get a reference to the box and use {{domxref("Element.computedStyleMap", "computedStyleMap()")}} to read and log its initial perspective distance.
The computed `transform` value is a {{domxref("CSSTransformValue")}}.
Its first item is the `CSSPerspective` that represents `perspective(200px)`, and its second item is the {{domxref("CSSRotate")}} that represents `rotateY(45deg)`.
The perspective has no visible effect without a rotation, so we store the `CSSRotate` in `rotate`, to include it again when the JavaScript replaces the whole `transform` value.

```js
const perspectiveBox = document.getElementById("perspective-box");

const transform = perspectiveBox.computedStyleMap().get("transform");
let distance = transform[0].length.value;
const rotate = transform[1];
log(`initial length: ${distance}px`);
```

Then, we create a `CSSPerspective` for the box, get the button, and add a click handler.
Each click adds 100 pixels to the distance, which makes the box look flatter.
When the distance reaches 500 pixels, the next click sets it back to 100 pixels, which gives the strongest effect in this example.
The handler sets the perspective's `length` property to the new distance.
It then wraps the `CSSPerspective` and the `CSSRotate` in a {{domxref("CSSTransformValue")}} and uses {{domxref("HTMLElement.attributeStyleMap", "attributeStyleMap")}} to set the result as the box's inline `transform`.

```js
const perspective = new CSSPerspective(CSS.px(distance));

const perspectiveButton = document.getElementById("perspective-button");
perspectiveButton.addEventListener("click", () => {
  distance = (distance % 500) + 100;
  perspective.length = CSS.px(distance);

  perspectiveBox.attributeStyleMap.set(
    "transform",
    new CSSTransformValue([perspective, rotate]),
  );
  log(`length: ${distance}px`);
});
```

#### Result

Click the **Add 100px** button to change the perspective distance.

{{EmbedLiveSample("Viewing a rotated box in perspective", "", 300)}}

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
- {{domxref("CSSSkewY")}}
- {{domxref("CSSMatrixComponent")}}
- {{cssxref("perspective")}}: CSS property that applies a perspective to an element's children
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
