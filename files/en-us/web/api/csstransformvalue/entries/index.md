---
title: "CSSTransformValue: entries() method"
short-title: entries()
slug: Web/API/CSSTransformValue/entries
page-type: web-api-instance-method
browser-compat: api.CSSTransformValue.entries
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`entries()`** method of the {{domxref("CSSTransformValue")}} interface returns a new _array iterator_ that yields `[index, value]` pairs for each item in the object.

## Syntax

```js-nolint
entries()
```

### Parameters

None.

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Iterating over index/value pairs

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

for (const [index, component] of transform.entries()) {
  console.log(index, component.toString());
}
// 0 "translate(10px, 20px)"
// 1 "scale(2, 3)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTransformValue.CSSTransformValue", "CSSTransformValue()")}}
- {{domxref("CSSTransformValue.forEach()")}}
- {{domxref("CSSTransformValue.keys()")}}
- {{domxref("CSSTransformValue.length")}}
- {{domxref("CSSTransformValue.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
