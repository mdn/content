---
title: SVGFEBlendElement
slug: Web/API/SVGFEBlendElement
page-type: web-api-interface
browser-compat: api.SVGFEBlendElement
---

{{APIRef("SVG")}}

The **`SVGFEBlendElement`** interface corresponds to the {{SVGElement("feBlend")}} element.

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
      <td><code>SVG_FEBLEND_MODE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        The type is not one of predefined types. It is invalid to attempt to
        define a new value of this type or to attempt to switch an existing
        value to this type.
      </td>
    </tr>
    <tr>
      <td><code>SVG_FEBLEND_MODE_NORMAL</code></td>
      <td>1</td>
      <td>Corresponds to the value <code>normal</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FEBLEND_MODE_MULTIPLY</code></td>
      <td>2</td>
      <td>Corresponds to the value <code>multiply</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FEBLEND_MODE_SCREEN</code></td>
      <td>3</td>
      <td>Corresponds to the value <code>screen</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FEBLEND_MODE_DARKEN</code></td>
      <td>4</td>
      <td>Corresponds to the value <code>darken</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FEBLEND_MODE_LIGHTEN</code></td>
      <td>5</td>
      <td>Corresponds to the value <code>lighten</code>.</td>
    </tr>
  </tbody>
</table>

## Instance properties

_This interface also inherits properties from its parent interface, {{domxref("SVGElement")}}._

- {{domxref("SVGFEBlendElement.height")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given element.
- {{domxref("SVGFEBlendElement.in1")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("in")}} attribute of the given element.
- {{domxref("SVGFEBlendElement.in2")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("in2")}} attribute of the given element.
- {{domxref("SVGFEBlendElement.mode")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("mode")}} attribute of the given element. It takes one of the `SVG_FEBLEND_MODE_*` constants defined on this interface.
- {{domxref("SVGFEBlendElement.result")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("result")}} attribute of the given element.
- {{domxref("SVGFEBlendElement.width")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given element.
- {{domxref("SVGFEBlendElement.x")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given element.
- {{domxref("SVGFEBlendElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given element.

## Instance methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("feBlend")}}
