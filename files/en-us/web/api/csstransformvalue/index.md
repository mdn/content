---
title: CSSTransformValue
slug: Web/API/CSSTransformValue
page-type: web-api-interface
browser-compat: api.CSSTransformValue
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSTransformValue`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) represents `transform-list` values as used by the CSS {{cssxref("transform")}} property.
It is an iterable of {{domxref("CSSTransformComponent")}} objects, each representing a single {{cssxref("transform-function")}}.

The items can be accessed and set by index (`transformValue[0]`), and as an iterable it can be used with a {{jsxref("Statements/for...of", "for...of")}} loop or the spread syntax.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSTransformValue.CSSTransformValue", "CSSTransformValue()")}}
  - : Creates a new `CSSTransformValue` object.

## Instance properties

- {{domxref("CSSTransformValue.length")}} {{ReadOnlyInline}}
  - : Returns the number of items in the object.
- {{domxref("CSSTransformValue.is2D")}} {{ReadOnlyInline}}
  - : Returns a boolean indicating whether the transform is 2D or 3D.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("CSSStyleValue")}}._

- {{domxref("CSSTransformValue.toMatrix()")}}
  - : Returns a new {{domxref("DOMMatrix")}} object.
- {{domxref("CSSTransformValue.entries()")}}
  - : Returns a new _array iterator_ that yields `[index, value]` pairs for each item in the object.
- {{domxref("CSSTransformValue.forEach()")}}
  - : Executes a provided function once for each item in the object.
- {{domxref("CSSTransformValue.keys()")}}
  - : Returns a new _array iterator_ that yields the index of each item in the object.
- {{domxref("CSSTransformValue.values()")}}
  - : Returns a new _array iterator_ that yields each item in the object.

## Description

Each item in a `CSSTransformValue` is a {{domxref("CSSTransformComponent")}}-derived object, such as a {{domxref("CSSScale")}} or {{domxref("CSSTranslate")}}, representing a single {{cssxref("transform-function", "transform function")}} object.

The {{domxref("CSSTransformValue.CSSTransformValue", "CSSTransformValue()")}} constructor throws a {{jsxref("TypeError")}} if given an empty array — a `CSSTransformValue` always contains at least one component.

{{domxref("CSSTransformValue.is2D")}} is `true` only if every component's own `is2D` is `true`; if any component is a 3D transform, the whole `CSSTransformValue` is treated as 3D.

## Examples

### Creating, reading, and updating a `CSSTransformValue`

This example creates a `CSSTransformValue`, then reads its items via `length`, indexed access, and iteration, and finally replaces one of the items by assigning to its index.

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

console.log(transform.length); // 2
console.log(transform[0].toString()); // "translate(10px, 20px)"

for (const component of transform) {
  console.log(component.toString());
}
// "translate(10px, 20px)"
// "scale(2, 3)"

transform[1] = new CSSScale(4, 5);
console.log(transform[1].toString()); // "scale(4, 5)"
```

### Reading a transform from a computed style map

A `CSSTransformValue` instance is returned when you read the value of the {{cssxref("transform")}} property from a {{domxref("StylePropertyMapReadOnly")}}.
This example reads the computed `transform` of a button styled with `transform: scale(0.95)`.
See the [`CSSTransformValue` with `CSSScale`](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide#csstransformvalue_with_cssscale) section of the CSS Typed OM guide for more detail on this example.

```html
<button id="btn">Styled button</button>
```

```css
#btn {
  display: inline-block;
  transform: scale(0.95);
}
```

```js
const styleMap = document.getElementById("btn").computedStyleMap();
const transform = styleMap.get("transform");

console.log(transform); // CSSTransformValue {0: CSSScale, length: 1, is2D: true}
console.log(transform.length); // 1
console.log(transform[0].x); // CSSUnitValue {value: 0.95, unit: "number"}
console.log(transform.is2D); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTransformComponent")}}
- {{domxref("CSSImageValue")}}
- {{domxref("CSSKeywordValue")}}
- {{domxref("CSSNumericValue")}}
- {{domxref("CSSPositionValue")}}
- {{domxref("CSSUnparsedValue")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
