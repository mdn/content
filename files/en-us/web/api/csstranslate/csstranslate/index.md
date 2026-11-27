---
title: "CSSTranslate: CSSTranslate() constructor"
short-title: CSSTranslate()
slug: Web/API/CSSTranslate/CSSTranslate
page-type: web-api-constructor
browser-compat: api.CSSTranslate.CSSTranslate
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSTranslate()`** constructor creates a new {{domxref("CSSTranslate")}} object, which represents the value of a translation function applied to the CSS {{cssxref("transform")}} property.

## Syntax

```js-nolint
new CSSTranslate(x, y)
new CSSTranslate(x, y, z)
```

### Parameters

- `x`
  - : A {{domxref("CSSNumericValue")}} that is a {{cssxref("length-percentage")}} value, representing the translation distance along the x-axis.
- `y`
  - : A {{domxref("CSSNumericValue")}} that is a {{cssxref("length-percentage")}} value, representing the translation distance along the y-axis.
- `z` {{optional_inline}}
  - : A {{domxref("CSSNumericValue")}} that is a {{cssxref("length")}} value, representing the translation distance along the z-axis.
    If you pass a `z` value, the new object's {{domxref("CSSTransformComponent.is2D", "is2D")}} property is `false`.
    If you don't, the new object's `z` property is set to `0px`, and its `is2D` property is `true`.

### Return value

A new {{domxref("CSSTranslate")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : The value passed for `x` or `y` isn't a {{cssxref("length-percentage")}} value, or the value passed for `z` isn't a {{cssxref("length")}} value.

## Examples

### Creating a 2D translation

This example creates a `CSSTranslate` from just the `x` and `y` distances and logs its properties and string form.

```js
const translate = new CSSTranslate(CSS.px(10), CSS.percent(50));

console.log(translate.is2D); // true
console.log(translate.z); // CSSUnitValue {value: 0, unit: "px"}
console.log(translate.toString()); // "translate(10px, 50%)"
```

Because no `z` value was passed, the translation is 2D, and its `z` property is set to `0px`.

### Creating a 3D translation

This example creates a `CSSTranslate` from `x`, `y`, and `z` distances, then logs its `is2D` property and string form.

```js
const translate = new CSSTranslate(CSS.px(10), CSS.px(20), CSS.px(30));

console.log(translate.is2D); // false
console.log(translate.toString()); // "translate3d(10px, 20px, 30px)"
```

Because a `z` value was passed, the translation is 3D, and {{domxref("CSSTransformComponent.toString()", "toString()")}} returns a string in the `translate3d()` form.

### Passing values of the wrong type

This example passes values that don't match the types the constructor accepts.

```js
try {
  new CSSTranslate(CSS.deg(10), CSS.px(0));
} catch (e) {
  console.log(e.name); // "TypeError"
}

try {
  new CSSTranslate(CSS.px(10), CSS.px(0), CSS.percent(5));
} catch (e) {
  console.log(e.name); // "TypeError"
}
```

The first call throws because an angle isn't a length or percentage.
The second call throws because `z` must be a length, and a percentage isn't one.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform-function/translate", "translate()")}}
- {{cssxref("transform-function/translate3d", "translate3d()")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
