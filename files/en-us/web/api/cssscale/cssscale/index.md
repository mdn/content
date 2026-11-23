---
title: "CSSScale: CSSScale() constructor"
short-title: CSSScale()
slug: Web/API/CSSScale/CSSScale
page-type: web-api-constructor
browser-compat: api.CSSScale.CSSScale
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSScale()`** constructor creates a new {{domxref("CSSScale")}} object, which represents the value of a scaling function applied to the CSS {{cssxref("transform")}} property.

## Syntax

```js-nolint
new CSSScale(x, y)
new CSSScale(x, y, z)
```

### Parameters

- `x`
  - : A JavaScript number or a {{domxref("CSSNumericValue")}} that is a {{cssxref("number")}} value, representing the scale factor along the x-axis.
- `y`
  - : A JavaScript number or a {{domxref("CSSNumericValue")}} that is a {{cssxref("number")}} value, representing the scale factor along the y-axis.
- `z` {{optional_inline}}
  - : A JavaScript number or a {{domxref("CSSNumericValue")}} that is a {{cssxref("number")}} value, representing the scale factor along the z-axis.
    If you pass a `z` value, the new object's {{domxref("CSSTransformComponent.is2D", "is2D")}} property is `false`.
    If you don't, the new object's `z` property is set to `1`, and its `is2D` property is `true`.

### Return value

A new {{domxref("CSSScale")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : The value passed for `x`, `y`, or `z` isn't a {{cssxref("number")}} value.

## Examples

### Creating a 2D scale

This example creates a `CSSScale` from just the `x` and `y` scale factors and logs its properties and string form.

```js
const scale = new CSSScale(2, 0.5);

console.log(scale.x); // CSSUnitValue {value: 2, unit: "number"}
console.log(scale.is2D); // true
console.log(scale.z); // CSSUnitValue {value: 1, unit: "number"}
console.log(scale.toString()); // "scale(2, 0.5)"
```

The number `2` passed for `x` is converted to a `CSSUnitValue` with the unit `"number"`.
Because no `z` value was passed, the scale is 2D, and its `z` property is set to `1`.

### Creating a 3D scale

This example creates a `CSSScale` from `CSSNumericValue` objects for `x`, `y`, and `z`, then logs its `is2D` property and string form.

```js
const scale = new CSSScale(CSS.number(2), CSS.number(0.5), CSS.number(3));

console.log(scale.is2D); // false
console.log(scale.toString()); // "scale3d(2, 0.5, 3)"
```

Because a `z` value was passed, the scale is 3D, and {{domxref("CSSTransformComponent.toString()", "toString()")}} returns a string in the `scale3d()` form.

### Passing values of the wrong type

This example passes values that don't match the types the constructor accepts.

```js
try {
  new CSSScale(CSS.px(2), 1);
} catch (e) {
  console.log(e.name); // "TypeError"
}

try {
  new CSSScale(1, 1, CSS.percent(50));
} catch (e) {
  console.log(e.name); // "TypeError"
}
```

The first call throws because a length isn't a `<number>`.
The second call throws because a percentage isn't a `<number>`.
To represent `scale(50%)`, pass `0.5` instead of `CSS.percent(50)`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform-function/scale", "scale()")}}
- {{cssxref("transform-function/scale3d", "scale3d()")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
