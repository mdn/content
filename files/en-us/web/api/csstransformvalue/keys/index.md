---
title: "CSSTransformValue: keys() method"
short-title: keys()
slug: Web/API/CSSTransformValue/keys
page-type: web-api-instance-method
browser-compat: api.CSSTransformValue.keys
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`keys()`** method of the {{domxref("CSSTransformValue")}} interface returns a new _array iterator_ that yields the index of each item in the object.

## Syntax

```js-nolint
keys()
```

### Parameters

None.

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Iterating over indexes

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

for (const index of transform.keys()) {
  console.log(index);
}
// 0
// 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTransformValue.CSSTransformValue", "CSSTransformValue()")}}
- {{domxref("CSSTransformValue.entries()")}}
- {{domxref("CSSTransformValue.forEach()")}}
- {{domxref("CSSTransformValue.length")}}
- {{domxref("CSSTransformValue.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
