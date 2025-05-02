---
title: SVGFEDisplacementMapElement
slug: Web/API/SVGFEDisplacementMapElement
page-type: web-api-interface
browser-compat: api.SVGFEDisplacementMapElement
---

{{APIRef("SVG")}}

The **`SVGFEDisplacementMapElement`** interface corresponds to the {{SVGElement("feDisplacementMap")}} element.

{{InheritanceDiagram}}

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
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("xChannelSelector")}} attribute of the given element. It takes one of the `SVG_CHANNEL_*` constants defined on this interface.
- {{domxref("SVGFEDisplacementMapElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given element.
- {{domxref("SVGFEDisplacementMapElement.yChannelSelector")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("yChannelSelector")}} attribute of the given element. It takes one of the `SVG_CHANNEL_*` constants defined on this interface.

## Instance methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGElement")}}._

## Static properties

- `SVG_CHANNEL_UNKNOWN` (0)
  - : The type is not one of predefined types. It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `SVG_CHANNEL_R` (1)
  - : Corresponds to the value `R`.
- `SVG_CHANNEL_G` (2)
  - : Corresponds to the value `G`.
- `SVG_CHANNEL_B` (3)
  - : Corresponds to the value `B`.
- `SVG_CHANNEL_A` (4)
  - : Corresponds to the value `A`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("feDisplacementMap")}}
