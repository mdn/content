---
title: "SVGAnimatedBoolean: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedBoolean/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedBoolean.baseVal
---

{{APIRef("SVG")}}

The **`baseVal`** property of the {{domxref("SVGAnimatedBoolean")}} interface is the value of the associated animatable boolean SVG attribute in its base (none-animated) state. It reflects the value of the associated animatable boolean attribute when no animations are applied.

Some boolean SVG attributes, such as [`preserveAlpha`](/en-US/docs/Web/SVG/Attribute/preserveAlpha), are animatable. In such cases, `SVGAnimatedBoolean.baseVal` property is `false` when the attribute is set to `false`, is omitted and defaults to `false`, or is inheritable and inherits `false`. Otherwise, the value is `true`.

## Value

A boolean; the base value of the reflected attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGElement")}}
- {{domxref("SVGAnimationElement")}}
