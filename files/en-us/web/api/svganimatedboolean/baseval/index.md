---
title: "SVGAnimatedBoolean: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedBoolean/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedBoolean.baseVal
---

{{APIRef("SVG")}}

The **`SVGAnimatedBoolean.baseVal`** property of the {{domxref("SVGAnimatedBoolean")}} interface reflects the base (non-animated) boolean value of the associated SVG attribute. It is writable and represents the current value before any animations are applied.

## Value

A `boolean` representing the base value of the reflected attribute:

- `true` if the reflected attribute is `"true"`.
- `false` if the reflected attribute is `"false"` or not present.

When setting, the reflected attribute is set to `"true"` if the value is `true` and `"false"` otherwise.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedBoolean.animVal")}}
