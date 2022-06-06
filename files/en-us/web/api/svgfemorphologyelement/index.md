---
title: SVGFEMorphologyElement
slug: Web/API/SVGFEMorphologyElement
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGFEMorphologyElement
---
{{APIRef("SVG")}}

The **`SVGFEMorphologyElement`** interface corresponds to the {{SVGElement("feMorphology")}} element.

{{InheritanceDiagram}}

## Constants

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>SVG_MORPHOLOGY_OPERATOR_UNKNOWN</code></td>
      <td>0</td>
      <td>
        The type is not one of predefined types. It is invalid to attempt to
        define a new value of this type or to attempt to switch an existing
        value to this type.
      </td>
    </tr>
    <tr>
      <td><code>SVG_MORPHOLOGY_OPERATOR_ERODE</code></td>
      <td>1</td>
      <td>Corresponds to the <code>erode</code> value.</td>
    </tr>
    <tr>
      <td><code>SVG_MORPHOLOGY_OPERATOR_DILATE</code></td>
      <td>2</td>
      <td>Corresponds to <code>dilate</code> value.</td>
    </tr>
  </tbody>
</table>

## Properties

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

## Methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("feMorphology")}}
