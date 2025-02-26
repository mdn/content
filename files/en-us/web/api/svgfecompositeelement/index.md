---
title: SVGFECompositeElement
slug: Web/API/SVGFECompositeElement
page-type: web-api-interface
browser-compat: api.SVGFECompositeElement
---

{{APIRef("SVG")}}

The **`SVGFECompositeElement`** interface corresponds to the {{SVGElement("feComposite")}} element.

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
      <td><code>SVG_FECOMPOSITE_OPERATOR_UNKNOWN</code></td>
      <td>0</td>
      <td>
        The type is not one of predefined types. It is invalid to attempt to
        define a new value of this type or to attempt to switch an existing
        value to this type.
      </td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_OVER</code></td>
      <td>1</td>
      <td>Corresponds to the <code>over</code> value.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_IN</code></td>
      <td>2</td>
      <td>Corresponds to the <code>in</code> value.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_OUT</code></td>
      <td>3</td>
      <td>Corresponds to <code>out</code> value.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_ATOP</code></td>
      <td>4</td>
      <td>Corresponds to <code>atop</code> value.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_XOR</code></td>
      <td>5</td>
      <td>Corresponds to <code>xor</code> value.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_ARITHMETIC</code></td>
      <td>6</td>
      <td>Corresponds to <code>arithmetic</code> value.</td>
    </tr>
  </tbody>
</table>

## Instance properties

_This interface also inherits properties from its parent interface, {{domxref("SVGElement")}}._

- {{domxref("SVGFECompositeElement.height")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given element.
- {{domxref("SVGFECompositeElement.in1")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("in")}} attribute of the given element.
- {{domxref("SVGFECompositeElement.in2")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("in2")}} attribute of the given element.
- {{domxref("SVGFECompositeElement.operator")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("operator")}} attribute of the given element.
- {{domxref("SVGFECompositeElement.k1")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the {{SVGAttr("k1")}} attribute of the given element.
- {{domxref("SVGFECompositeElement.k2")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the {{SVGAttr("k2")}} attribute of the given element.
- {{domxref("SVGFECompositeElement.k3")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the {{SVGAttr("k3")}} attribute of the given element.
- {{domxref("SVGFECompositeElement.k4")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the {{SVGAttr("k4")}} attribute of the given element.
- {{domxref("SVGFECompositeElement.result")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("result")}} attribute of the given element.
- {{domxref("SVGFECompositeElement.type")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("type")}} attribute of the given element. It takes one of the `SVG_FECOMPOSITE_OPERATOR_*` constants defined on this interface.
- {{domxref("SVGFECompositeElement.values")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumberList")}} corresponding to the {{SVGAttr("values")}} attribute of the given element.
- {{domxref("SVGFECompositeElement.width")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given element.
- {{domxref("SVGFECompositeElement.x")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given element.
- {{domxref("SVGFECompositeElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given element.

## Instance methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("feComposite")}}
