---
title: "CSSTranslate: x property"
short-title: x
slug: Web/API/CSSTranslate/x
page-type: web-api-instance-property
browser-compat: api.CSSTranslate.x
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`x`** property of the {{domxref("CSSTranslate")}} interface represents the translation distance along the x-axis.
A positive value moves the transformed element to the right, and a negative value moves it to the left.

## Value

A {{domxref("CSSNumericValue")}} that is a {{cssxref("length-percentage")}} value: a length, a percentage, or a combination of the two, such as `CSS.px(10).add(CSS.percent(5))`.
A percentage is relative to the width of the element's reference box, which is set by the {{cssxref("transform-box")}} property.

## Examples

### Reading and setting the `x` distance

This example creates a translation, logs its `x` distance, and then changes it to a percentage.

```js
const translate = new CSSTranslate(CSS.px(10), CSS.px(20));

console.log(translate.x); // CSSUnitValue {value: 10, unit: "px"}

translate.x = CSS.percent(50);

console.log(translate.toString()); // "translate(50%, 20px)"
```

The new `x` value of `50%` would move an element to the right by half the width of its reference box.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform-function/translateX", "translateX()")}}
- {{cssxref("transform-function/translate", "translate()")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
