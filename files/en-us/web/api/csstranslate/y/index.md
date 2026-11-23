---
title: "CSSTranslate: y property"
short-title: y
slug: Web/API/CSSTranslate/y
page-type: web-api-instance-property
browser-compat: api.CSSTranslate.y
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`y`** property of the {{domxref("CSSTranslate")}} interface represents the translation distance along the y-axis.
A positive value moves the transformed element down, and a negative value moves it up.

## Value

A {{domxref("CSSNumericValue")}} that is a {{cssxref("length-percentage")}} value: a length, a percentage, or a combination of the two, such as `CSS.px(10).add(CSS.percent(5))`.
A percentage is relative to the height of the element's reference box, which is set by the {{cssxref("transform-box")}} property.

## Examples

### Reading and setting the `y` distance

This example creates a translation, logs its `y` distance, and then changes it to a combination of a length and a percentage.

```js
const translate = new CSSTranslate(CSS.px(10), CSS.px(20));

console.log(translate.y); // CSSUnitValue {value: 20, unit: "px"}

translate.y = CSS.percent(50).add(CSS.px(10));

console.log(translate.toString()); // "translate(10px, calc(50% + 10px))"
```

The new `y` value would move an element down by half the height of its reference box plus 10 pixels.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform-function/translateY", "translateY()")}}
- {{cssxref("transform-function/translate", "translate()")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
