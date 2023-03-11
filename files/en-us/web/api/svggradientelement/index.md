---
title: SVGGradientElement
slug: Web/API/SVGGradientElement
page-type: web-api-interface
browser-compat: api.SVGGradientElement
---

{{APIRef("SVG")}}

The **`SVGGradient`** interface is a base interface used by {{domxref("SVGLinearGradientElement")}} and {{domxref("SVGRadialGradientElement")}}.

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
      <td><code>SVG_SPREADMETHOD_UNKNOWN</code></td>
      <td>0</td>
      <td>
        The type is not one of predefined types. It is invalid to attempt to
        define a new value of this type or to attempt to switch an existing
        value to this type.
      </td>
    </tr>
    <tr>
      <td><code>SVG_SPREADMETHOD_PAD</code></td>
      <td>1</td>
      <td>Corresponds to value <em>pad</em>.</td>
    </tr>
    <tr>
      <td><code>SVG_SPREADMETHOD_REFLECT</code></td>
      <td>2</td>
      <td>Corresponds to value <em>reflect</em>.</td>
    </tr>
    <tr>
      <td><code>SVG_SPREADMETHOD_REPEAT</code></td>
      <td>3</td>
      <td>Corresponds to value <em>repeat</em>.</td>
    </tr>
  </tbody>
</table>

## Instance properties

_This interface also inherits properties from its parent, {{domxref("SVGElement")}}._

- {{domxref("SVGGradientElement.href")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} attribute of the given element.
- {{domxref("SVGGradientElement.gradientUnits")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("gradientUnits")}} attribute on the given element. This property takes one of the constants defined in {{domxref("SVGUnitTypes")}}.
- {{domxref("SVGGradientElement.gradientTransform")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedTransformList")}} corresponding to the {{SVGAttr("gradientTransform")}} attribute on the given element.
- {{domxref("SVGGradientElement.spreadMethod")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("spreadMethod")}} attribute on the given element. One of the spread method types defined on this interface.

## Instance methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
