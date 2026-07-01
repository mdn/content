---
title: SVGGradientElement
slug: Web/API/SVGGradientElement
page-type: web-api-interface
browser-compat: api.SVGGradientElement
---

{{APIRef("SVG")}}

The **`SVGGradient`** interface is a base interface used by {{domxref("SVGLinearGradientElement")}} and {{domxref("SVGRadialGradientElement")}}.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent, {{domxref("SVGElement")}}._

- {{domxref("SVGGradientElement.href")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} attribute of the given element.
- {{domxref("SVGGradientElement.gradientUnits")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("gradientUnits")}} attribute on the given element. This property takes one of the constants defined in {{domxref("SVGUnitTypes")}}.
- {{domxref("SVGGradientElement.gradientTransform")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedTransformList")}} corresponding to the {{SVGAttr("gradientTransform")}} attribute on the given element.
- {{domxref("SVGGradientElement.spreadMethod")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("spreadMethod")}} attribute on the given element. One of the spread method types defined on this interface.

## Instance methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGElement")}}._

## Static properties

- `SVG_SPREADMETHOD_UNKNOWN` (0)
  - : The type is not one of predefined types. It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `SVG_SPREADMETHOD_PAD` (1)
  - : Corresponds to value `pad`.
- `SVG_SPREADMETHOD_REFLECT` (2)
  - : Corresponds to value `reflect`.
- `SVG_SPREADMETHOD_REPEAT` (3)
  - : Corresponds to value `repeat`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
