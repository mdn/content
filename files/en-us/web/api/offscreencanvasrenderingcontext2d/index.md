---
title: OffscreenCanvasRenderingContext2D
slug: Web/API/OffscreenCanvasRenderingContext2D
page-type: web-api-interface
tags:
  - API
  - Canvas
  - OffscreenCanvasRenderingContext2D
  - Games
  - Graphics
  - Reference
browser-compat: api.OffscreenCanvasRenderingContext2D
---

{{APIRef}}

The **`OffscreenCanvasRenderingContext2D`** interface is a {{domxref("CanvasRenderingContext2D")}} interface rendering context for drawing to the bitmap of an `OffscreenCanvas` object.
It is similar to the `CanvasRenderingContext2D` object, with the following differences:

- there is no support for user interface features;
- its canvas attribute refers to an `OffscreenCanvas` object rather than a canvas element;
- it has a `commit()` method for pushing the rendered image to the context's `OffscreenCanvas` object's placeholder canvas element.

## Constructor

- {{domxref("OffscreenCanvasRenderingContext2D.OffscreenCanvasRenderingContext2D()", "OffscreenCanvasRenderingContext2D()")}}
  - : Creates a new `OffscreenCanvasRenderingContext2D` instance.

## Properties

_Also inherits properties from its parent interface, {{domxref("CanvasRenderingContext2D")}}._

## Methods

_Also inherits methods from its parent interface, {{domxref("CanvasRenderingContext2D")}}._

### Unsupported methods

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement")}}
- {{HTMLElement("canvas")}}
