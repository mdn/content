---
title: SVGFEConvolveMatrixElement
slug: Web/API/SVGFEConvolveMatrixElement
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGFEConvolveMatrixElement
---
{{APIRef("SVG")}}

The **`SVGFEConvolveMatrixElement`** interface corresponds to the {{SVGElement("feConvolveMatrix")}} element.

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
      <td><code>SVG_EDGEMODE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        The type is not one of predefined types. It is invalid to attempt to
        define a new value of this type or to attempt to switch an existing
        value to this type.
      </td>
    </tr>
    <tr>
      <td><code>SVG_EDGEMODE_DUPLICATE</code></td>
      <td>1</td>
      <td>Corresponds to the <code>duplicate</code> value.</td>
    </tr>
    <tr>
      <td><code>SVG_EDGEMODE_WRAP</code></td>
      <td>2</td>
      <td>Corresponds to the <code>wrap</code> value.</td>
    </tr>
    <tr>
      <td><code>SVG_EDGEMODE_NONE</code></td>
      <td>3</td>
      <td>Corresponds to <code>none</code> value.</td>
    </tr>
  </tbody>
</table>

## Properties

_This interface also inherits properties from its parent interface, {{domxref("SVGElement")}}._

- {{domxref("SVGFEConvolveMatrixElement.bias")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the {{SVGAttr("bias")}} attribute of the given element.
- {{domxref("SVGFEConvolveMatrixElement.divisor")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the {{SVGAttr("divisor")}} attribute of the given element.
- {{domxref("SVGFEConvolveMatrixElement.edgeMode")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("edgeMode")}} attribute of the given element. Takes one of the `SVG_EDGEMODE_*` constants defined on this interface.
- {{domxref("SVGFEConvolveMatrixElement.height")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given element.
- {{domxref("SVGFEConvolveMatrixElement.in1")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("in")}} attribute of the given element.
- {{domxref("SVGFEConvolveMatrixElement.kernelMatrix")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumberList")}} corresponding to the {{SVGAttr("kernelMatrix")}} attribute of the given element.
- {{domxref("SVGFEConvolveMatrixElement.kernelUnitLengthX")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the {{SVGAttr("kernelUnitLength")}} attribute of the given element.
- {{domxref("SVGFEConvolveMatrixElement.kernelUnitLengthY")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the {{SVGAttr("kernelUnitLength")}} attribute of the given element.
- {{domxref("SVGFEConvolveMatrixElement.orderX")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedInteger")}} corresponding to the {{SVGAttr("order")}} attribute of the given element.
- {{domxref("SVGFEConvolveMatrixElement.orderY")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedInteger")}} corresponding to the {{SVGAttr("order")}} attribute of the given element.
- {{domxref("SVGFEConvolveMatrixElement.preserveAlpha")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedBoolean")}} corresponding to the {{SVGAttr("preserveAlpha")}} attribute of the given element.
- {{domxref("SVGFEConvolveMatrixElement.result")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("result")}} attribute of the given element.
- {{domxref("SVGFEConvolveMatrixElement.targetX")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedInteger")}} corresponding to the {{SVGAttr("targetX")}} attribute of the given element.
- {{domxref("SVGFEConvolveMatrixElement.targetY")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedInteger")}} corresponding to the {{SVGAttr("targetY")}} attribute of the given element.
- {{domxref("SVGFEConvolveMatrixElement.width")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given element.
- {{domxref("SVGFEConvolveMatrixElement.x")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given element.
- {{domxref("SVGFEConvolveMatrixElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given element.

## Methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("feConvolveMatrix")}}
