---
title: "CSSTransformValue: values() method"
short-title: values()
slug: Web/API/CSSTransformValue/values
page-type: web-api-instance-method
browser-compat: api.CSSTransformValue.values
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`values()`** method of the {{domxref("CSSTransformValue")}} interface returns a new _array iterator_ that yields each item in the object.

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Iterating over values

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

for (const component of transform.values()) {
  console.log(component.toString());
}
// "translate(10px, 20px)"
// "scale(2, 3)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTransformValue.CSSTransformValue", "CSSTransformValue()")}}
- {{domxref("CSSTransformValue.entries()")}}
- {{domxref("CSSTransformValue.forEach()")}}
- {{domxref("CSSTransformValue.keys()")}}
- {{domxref("CSSTransformValue.length")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
