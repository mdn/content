---
title: SVGImageElement
slug: Web/API/SVGImageElement
tags:
  - API
  - Image
  - Interface
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
  - SVGImageElement
browser-compat: api.SVGImageElement
---
{{APIRef("SVG")}}

The **`SVGImageElement`** interface corresponds to the {{SVGElement("image")}} element.

{{InheritanceDiagram(600, 140)}}

## Properties

_This interface also inherits properties from its parent, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGImageElement.href")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} attribute of the given {{SVGElement("image")}} element.
- {{domxref("SVGImageElement.crossOrigin")}}
  - : A {{domxref("DOMString")}} corresponding to the {{SVGAttr("crossorigin")}} attribute of the given {{SVGElement("image")}} element.
- {{domxref("SVGImageElement.decoding")}}
  - : A {{domxref("DOMString")}} representing a hint given to the browser on how it should decode the image.
- {{domxref("SVGImageElement.height")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given {{SVGElement("image")}} element.
- {{domxref("SVGImageElement.preserveAspectRatio")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedPreserveAspectRatio")}} corresponding to the {{SVGAttr("preserveAspectRatio")}} attribute of the given {{SVGElement("image")}} element.
- {{domxref("SVGImageElement.width")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given {{SVGElement("image")}} element.
- {{domxref("SVGImageElement.x")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given {{SVGElement("image")}} element.
- {{domxref("SVGImageElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given {{SVGElement("image")}} element.

## Methods

_This interface also inherits methods from its parent interface, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGImageElement.decode()")}}
  - : Initiates asynchronous decoding of the image data. Returns a {{jsxref("Promise")}} which resolves once the image data is ready to be used.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
