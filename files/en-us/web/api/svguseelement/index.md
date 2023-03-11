---
title: SVGUseElement
slug: Web/API/SVGUseElement
page-type: web-api-interface
browser-compat: api.SVGUseElement
---

{{APIRef("SVG")}}

## SVG use DOM interface

The **`SVGUseElement`** interface corresponds to the {{SVGElement("use")}} element.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent interface, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGUseElement.href")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} attribute of the given element.
- {{domxref("SVGUseElement.x")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given element.
- {{domxref("SVGUseElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given element.
- {{domxref("SVGUseElement.width")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given element.
- {{domxref("SVGUseElement.height")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given element.

## Instance methods

_This interface doesn't implement any specific methods, but inherits methods from its parent interface, {{domxref("SVGGraphicsElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("use")}}
