---
title: SVGFEDisplacementMapElement
slug: Web/API/SVGFEDisplacementMapElement
page-type: web-api-interface
browser-compat: api.SVGFEDisplacementMapElement
---

{{APIRef("SVG")}}

The **`SVGFEDisplacementMapElement`** interface corresponds to the {{SVGElement("feDisplacementMap")}} element.

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
      <td><code>SVG_CHANNEL_UNKNOWN</code></td>
      <td>0</td>
      <td>
        The type is not one of predefined types. It is invalid to attempt to
        define a new value of this type or to attempt to switch an existing
        value to this type.
      </td>
    </tr>
    <tr>
      <td><code>SVG_CHANNEL_R</code></td>
      <td>1</td>
      <td>Corresponds to the <code>R</code> value.</td>
    </tr>
    <tr>
      <td><code>SVG_CHANNEL_G</code></td>
      <td>2</td>
      <td>Corresponds to the <code>G</code> value.</td>
    </tr>
    <tr>
      <td><code>SVG_CHANNEL_B</code></td>
      <td>3</td>
      <td>Corresponds to the <code>B</code> value.</td>
    </tr>
    <tr>
      <td><code>SVG_CHANNEL_A</code></td>
      <td>4</td>
      <td>Corresponds to the <code>A</code> value.</td>
    </tr>
  </tbody>
</table>

## Instance properties

_This interface also inherits properties from its parent interface, {{domxref("SVGElement")}}._

- {{domxref("SVGFEDisplacementMapElement.height")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given element.
- {{domxref("SVGFEDisplacementMapElement.in1")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("in")}} attribute of the given element.
- {{domxref("SVGFEDisplacementMapElement.in2")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("in2")}} attribute of the given element.
- {{domxref("SVGFEDisplacementMapElement.result")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("result")}} attribute of the given element.
- {{domxref("SVGFEDisplacementMapElement.scale")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the {{SVGAttr("scale")}} attribute of the given element.
- {{domxref("SVGFEDisplacementMapElement.width")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given element.
- {{domxref("SVGFEDisplacementMapElement.x")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given element.
- {{domxref("SVGFEDisplacementMapElement.xChannelSelector")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("xChannelSelect")}} attribute of the given element. It takes one of the `SVG_CHANNEL_*` constants defined on this interface.
- {{domxref("SVGFEDisplacementMapElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given element.
- {{domxref("SVGFEDisplacementMapElement.yChannelSelector")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("yChannelSelect")}} attribute of the given element. It takes one of the `SVG_CHANNEL_*` constants defined on this interface.

## Instance methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("feDisplacementMap")}}
