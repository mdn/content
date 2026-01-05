---
title: SVGFEMorphologyElement
slug: Web/API/SVGFEMorphologyElement
page-type: web-api-interface
browser-compat: api.SVGFEMorphologyElement
---

{{APIRef("SVG")}}

The **`SVGFEMorphologyElement`** interface corresponds to the {{SVGElement("feMorphology")}} element.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent interface, {{domxref("SVGElement")}}._

- {{domxref("SVGFEMorphologyElement.height")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given element.
- {{domxref("SVGFEMorphologyElement.in1")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("in")}} attribute of the given element.
- {{domxref("SVGFEMorphologyElement.operator")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("operator")}} attribute of the given element. It takes one of the `SVG_MORPHOLOGY_OPERATOR_*` constants defined on this interface.
- {{domxref("SVGFEMorphologyElement.radiusX")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the X component of the {{SVGAttr("radius")}} attribute of the given element.
- {{domxref("SVGFEMorphologyElement.radiusY")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the Y component of the {{SVGAttr("radius")}} attribute of the given element.
- {{domxref("SVGFEMorphologyElement.result")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("result")}} attribute of the given element.
- {{domxref("SVGFEMorphologyElement.width")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given element.
- {{domxref("SVGFEMorphologyElement.x")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given element.
- {{domxref("SVGFEMorphologyElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given element.

## Instance methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGElement")}}._

## Static properties

- `SVG_MORPHOLOGY_OPERATOR_UNKNOWN` (0)
  - : The type is not one of predefined types. It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `SVG_MORPHOLOGY_OPERATOR_ERODE` (1)
  - : Corresponds to the value `erode`.
- `SVG_MORPHOLOGY_OPERATOR_DILATE` (2)
  - : Corresponds to the value `dilate`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("feMorphology")}}
