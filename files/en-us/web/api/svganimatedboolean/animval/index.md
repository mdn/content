---
title: "SVGAnimatedBoolean: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedBoolean/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedBoolean.animVal
---

{{APIRef("SVG")}}

The **`animVal`** read-only property of the {{domxref("SVGAnimatedBoolean")}} interface represents the current animated value of the associated animatable boolean SVG attribute. If the attribute is not animated, `animVal` is the same as {{domxref("SVGAnimatedBoolean.baseVal")}}.

Some boolean SVG attributes, such as [`preserveAlpha`](/en-US/docs/Web/SVG/Attribute/preserveAlpha), are animatable. In such cases, `SVGAnimatedBoolean.animVal` property is `true` when the attribute value resolves to true. Otherwise, the value is `false`.

## Value

A boolean; the value of the animatable boolean attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGElement")}}
- {{domxref("SVGAnimationElement")}}
