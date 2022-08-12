---
title: CanvasPattern
slug: Web/API/CanvasPattern
page-type: web-api-interface
tags:
  - API
  - Canvas
  - Interface
  - Reference
browser-compat: api.CanvasPattern
---
{{APIRef("Canvas API")}}

The **`CanvasPattern`** interface represents an [opaque object](https://en.wikipedia.org/wiki/Opaque_data_type) describing a pattern, based on an image, a canvas, or a video, created by the {{domxref("CanvasRenderingContext2D.createPattern()")}} method.

It can be used as a {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} or {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}.

## Properties

_As an opaque object, this has no exposed property._

## Methods

_There are no inherited method._

- {{domxref("CanvasPattern.setTransform()")}}
  - : Applies an {{domxref("SVGMatrix")}} or {{domxref("DOMMatrix")}} representing a linear transform to the pattern.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D.createPattern()")}}
- The {{HTMLElement("canvas")}} element and its associated interface, {{domxref("HTMLCanvasElement")}}
