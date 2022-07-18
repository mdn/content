---
title: SVGFEGaussianBlurElement
slug: Web/API/SVGFEGaussianBlurElement
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGFEGaussianBlurElement
---
{{APIRef("SVG")}}

The **`SVGFEGaussianBlurElement`** interface corresponds to the {{SVGElement("feGaussianBlur")}} element.

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

- {{domxref("SVGFEGaussianBlurElement.edgeMode")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("edgeMode")}} attribute of the given element. Takes one of the `SVG_EDGEMODE_*` constants defined on this interface.
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

## Methods

_This interface also inherits methods of its parent, {{domxref("SVGElement")}}._

- {{domxref("SVGFEGaussianBlurElement.setStdDeviation()")}}
  - : Sets the values for the `stdDeviation` attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("feGaussianBlur")}}
