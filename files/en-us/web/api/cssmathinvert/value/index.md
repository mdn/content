---
title: "CSSMathInvert: value property"
short-title: value
slug: Web/API/CSSMathInvert/value
page-type: web-api-instance-property
browser-compat: api.CSSMathInvert.value
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`value`** read-only property of the {{domxref("CSSMathInvert")}} interface returns the {{domxref("CSSNumericValue")}} that is being inverted.

This is the parameter that was passed to the constructor when this object was created.

## Value

A {{domxref('CSSNumericValue')}} or one of its derived types.

## Examples

### Basic usage

The following code creates a `CSSMathInvert` object, then reads its `value`.

```js
const inverted = new CSSMathInvert(CSS.percent(4));

console.log(inverted.value); // CSSUnitValue {value: 4, unit: "percent"}
```

`value` returns whatever was passed to `arg` in the constructor.
In this case, we passed `CSS.percent(4)`, so `value` is a {{domxref('CSSUnitValue')}}.
Passing an expression such as `CSS.percent(4).add(CSS.em(2))` would result in `value` returning a {{domxref('CSSMathSum')}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSMathNegate.value")}}
