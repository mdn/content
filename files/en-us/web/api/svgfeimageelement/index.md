---
title: SVGFEImageElement
slug: Web/API/SVGFEImageElement
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGFEImageElement
---
{{APIRef("SVG")}}

The **`SVGFEImageElement`** interface corresponds to the {{SVGElement("feImage")}} element.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from its parent interface, {{domxref("SVGElement")}}._

- {{domxref("SVGFEImageElement.crossOrigin")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} reflects the {{SVGAttr("crossorigin")}} attribute of the given element, limited to only known values.
- {{domxref("SVGFEImageElement.height")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given element.
- {{domxref("SVGFEImageElement.href")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} that reflects the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} attribute of the given element.
- {{domxref("SVGFEImageElement.preserveAspectRatio")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedPreserveAspectRatio")}} corresponding to the {{SVGAttr("preserveAspectRatio")}} attribute of the given element.
- {{domxref("SVGFEImageElement.result")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("result")}} attribute of the given element.
- {{domxref("SVGFEImageElement.width")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given element.
- {{domxref("SVGFEImageElement.x")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given element.
- {{domxref("SVGFEImageElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given element.

## Methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("feImage")}}
