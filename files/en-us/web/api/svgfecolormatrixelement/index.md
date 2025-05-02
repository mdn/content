---
title: SVGFEColorMatrixElement
slug: Web/API/SVGFEColorMatrixElement
page-type: web-api-interface
browser-compat: api.SVGFEColorMatrixElement
---

{{APIRef("SVG")}}

The **`SVGFEColorMatrixElement`** interface corresponds to the {{SVGElement("feColorMatrix")}} element.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent interface, {{domxref("SVGElement")}}._

- {{domxref("SVGFEColorMatrixElement.height")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given element.
- {{domxref("SVGFEColorMatrixElement.in1")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("in")}} attribute of the given element.
- {{domxref("SVGFEColorMatrixElement.result")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("result")}} attribute of the given element.
- {{domxref("SVGFEColorMatrixElement.type")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("type")}} attribute of the given element. It takes one of the `SVG_FECOLORMATRIX_TYPE_*` constants defined on this interface.
- {{domxref("SVGFEColorMatrixElement.values")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumberList")}} corresponding to the {{SVGAttr("values")}} attribute of the given element.
- {{domxref("SVGFEColorMatrixElement.width")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given element.
- {{domxref("SVGFEColorMatrixElement.x")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given element.
- {{domxref("SVGFEColorMatrixElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given element.

## Instance methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGElement")}}_.

## Static properties

- `SVG_FECOLORMATRIX_TYPE_UNKNOWN` (0)
  - : The type is not one of predefined types. It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `SVG_FECOLORMATRIX_TYPE_MATRIX` (1)
  - : Corresponds to the value `matrix`.
- `SVG_FECOLORMATRIX_TYPE_SATURATE` (2)
  - : Corresponds to the value `saturate`.
- `SVG_FECOLORMATRIX_TYPE_HUEROTATE` (3)
  - : Corresponds to the value `hueRotate`.
- `SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA` (4)
  - : Corresponds to the value `luminanceToAlpha`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("feColorMatrix")}}
