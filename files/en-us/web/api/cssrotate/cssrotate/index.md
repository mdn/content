---
title: "CSSRotate: CSSRotate() constructor"
short-title: CSSRotate()
slug: Web/API/CSSRotate/CSSRotate
page-type: web-api-constructor
browser-compat: api.CSSRotate.CSSRotate
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSRotate()`** constructor creates a new {{domxref("CSSRotate")}} object representing the {{cssxref("transform-function/rotate", "rotate()")}} value of the individual {{cssxref("transform")}} property in CSS.

This can be specified as either a 2D rotation by a particular angle, or as a 3D rotation by an angle around a particular axis.

## Syntax

```js-nolint
new CSSRotate(angle)
new CSSRotate(x, y, z, angle)
```

### Parameters

- {{domxref("CSSRotate.angle", "angle")}}
  - : A value for the angle of rotation of the {{domxref("CSSRotate")}} object to be constructed.
    This must be a {{domxref("CSSNumericValue")}}.
- {{domxref("CSSRotate.x", "x")}} {{optional_inline}}
  - : A number or {{domxref("CSSNumericValue")}} value indicating the x-coordinate of the rotation axis vector of the {{domxref("CSSRotate")}} object to be constructed.
    Only used, and required, when constructing a 3D rotation; the 2-argument form implies a rotation axis of `(0, 0, 1)` (the z-axis).
- {{domxref("CSSRotate.y", "y")}} {{optional_inline}}
  - : A number or {{domxref("CSSNumericValue")}} value indicating the y-coordinate of the rotation axis vector of the {{domxref("CSSRotate")}} object to be constructed.
    Only used, and required, when constructing a 3D rotation.
- {{domxref("CSSRotate.z", "z")}} {{optional_inline}}
  - : A number or {{domxref("CSSNumericValue")}} value indicating the z-coordinate of the rotation axis vector of the {{domxref("CSSRotate")}} object to be constructed.
    Only used, and required, when constructing a 3D rotation.

### Exceptions

- [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Raised if the value of the `angle` property is not an [`<angle>`](/en-US/docs/Web/CSS/Reference/Values/angle) value or `CSSRotate.x`, `CSSRotate.y`, `CSSRotate.z` are not [`<number>`](/en-US/docs/Web/CSS/Reference/Values/number) values.

## Examples

### Constructing a 2D rotation

The 2-argument form takes only an angle, and implies a rotation around the z-axis (equivalent to `rotate3d(0, 0, 1, angle)`):

```js
const rotate2D = new CSSRotate(CSS.deg(45));

console.log(rotate2D.is2D); // true
console.log(rotate2D.toString()); // "rotate(45deg)"
```

### Constructing a 3D rotation

The 4-argument form takes the rotation axis coordinates followed by the angle:

```js
const rotate3D = new CSSRotate(1, 1, 0, CSS.deg(45));

console.log(rotate3D.is2D); // false
console.log(rotate3D.toString()); // "rotate3d(1, 1, 0,45deg)"
```

### Handling an invalid angle

```js
try {
  const rotate = new CSSRotate(CSS.px(45));
} catch (e) {
  console.log(e); // TypeError: px is not an angle
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSRotate.angle")}}
- {{domxref("CSSRotate.x")}}
- {{domxref("CSSRotate.y")}}
- {{domxref("CSSRotate.z")}}
- {{domxref("CSSTransformComponent")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
