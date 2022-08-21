---
title: SVGFEColorMatrixElement
slug: Web/API/SVGFEColorMatrixElement
page-type: web-api-interface
tags:
  - API
  - NeedsBrowserCompatibility
  - NeedsExample
  - NeedsMobileBrowserCompatibility
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGFEColorMatrixElement
---
{{APIRef("SVG")}}

The **`SVGFEColorMatrixElement`** interface corresponds to the {{SVGElement("feColorMatrix")}} element.

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
      <td><code>SVG_FECOLORMATRIX_TYPE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        The type is not one of predefined types. It is invalid to attempt to
        define a new value of this type or to attempt to switch an existing
        value to this type.
      </td>
    </tr>
    <tr>
      <td><code>SVG_FECOLORMATRIX_TYPE_MATRIX</code></td>
      <td>1</td>
      <td>Corresponds to the <code>matrix</code> value.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOLORMATRIX_TYPE_SATURATE</code></td>
      <td>2</td>
      <td>Corresponds to the <code>saturate</code> value.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOLORMATRIX_TYPE_HUEROTATE</code></td>
      <td>3</td>
      <td>Corresponds to <code>hueRotate</code> value.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA</code></td>
      <td>4</td>
      <td>Corresponds to <code>luminanceToAlpha</code> value.</td>
    </tr>
  </tbody>
</table>

## Properties

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

## Methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGElement")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("feColorMatrix")}}
