---
title: SVGFEGaussianBlurElement
slug: Web/API/SVGFEGaussianBlurElement
page-type: web-api-interface
browser-compat: api.SVGFEGaussianBlurElement
---

{{APIRef("SVG")}}

The **`SVGFEGaussianBlurElement`** interface corresponds to the {{SVGElement("feGaussianBlur")}} element.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent interface, {{domxref("SVGElement")}}._

- {{domxref("SVGFEGaussianBlurElement.edgeMode")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("edgeMode")}} attribute of the given element. Returns two identical values that are one of the following values:
    - `SVG_EDGEMODE_UNKNOWN` (0)
      - : The type is not one of predefined types. It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
    - `SVG_EDGEMODE_DUPLICATE` (1)
      - : Corresponds to the `duplicate` value.
    - `SVG_EDGEMODE_WRAP` (2)
      - : Corresponds to the `wrap` value.
    - `SVG_EDGEMODE_NONE` (3)
      - : Corresponds to `none` value.
- {{domxref("SVGFEGaussianBlurElement.height")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given element.
- {{domxref("SVGFEGaussianBlurElement.in1")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("in")}} attribute of the given element.
- {{domxref("SVGFEGaussianBlurElement.result")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("result")}} attribute of the given element.
- {{domxref("SVGFEGaussianBlurElement.stdDeviationX")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the (possibly automatically computed) X component of the {{SVGAttr("stdDeviation")}} attribute of the given element.
- {{domxref("SVGFEGaussianBlurElement.stdDeviationY")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the (possibly automatically computed) Y component of the {{SVGAttr("stdDeviation")}} attribute of the given element.
- {{domxref("SVGFEGaussianBlurElement.width")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given element.
- {{domxref("SVGFEGaussianBlurElement.x")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given element.
- {{domxref("SVGFEGaussianBlurElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given element.

## Instance methods

_This interface also inherits methods of its parent, {{domxref("SVGElement")}}._

- {{domxref("SVGFEGaussianBlurElement.setStdDeviation()")}}
  - : Sets the values for the `stdDeviation` attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("feGaussianBlur")}}
