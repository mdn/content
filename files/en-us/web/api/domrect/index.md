---
title: DOMRect
slug: Web/API/DOMRect
page-type: web-api-interface
tags:
  - API
  - DOM
  - DOMRect
  - Geometry
  - Geometry Interfaces
  - Interface
  - Rectangle
  - Reference
browser-compat: api.DOMRect
---
{{APIRef("Geometry Interfaces")}}

A **`DOMRect`** describes the size and position of a rectangle.

The type of box represented by the `DOMRect` is specified by the method or property that returned it. For example, {{domxref("VREyeParameters.renderRect")}} from the WebVR API specifies the viewport of a [canvas](/en-US/docs/Web/API/HTMLCanvasElement) into which visuals for one eye of a head mounted display should be rendered.

It inherits from its parent, {{domxref("DOMRectReadOnly")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("DOMRect.DOMRect","DOMRect()")}}
  - : Creates a new `DOMRect` object.

## Properties

_`DOMRect` inherits properties from its parent, {{domxref("DOMRectReadOnly")}}. The difference is that they are not read-only anymore._

- {{domxref("DOMRectReadOnly.x")}}
  - : The x coordinate of the `DOMRect`'s origin (typically the top-left corner of the rectangle).
- {{domxref("DOMRectReadOnly.y")}}
  - : The y coordinate of the `DOMRect`'s origin (typically the top-left corner of the rectangle).
- {{domxref("DOMRectReadOnly.width")}}
  - : The width of the `DOMRect`.
- {{domxref("DOMRectReadOnly.height")}}
  - : The height of the `DOMRect`.
- {{domxref("DOMRectReadOnly.top")}}
  - : Returns the top coordinate value of the `DOMRect` (has the same value as `y`, or `y + height` if `height` is negative.)
- {{domxref("DOMRectReadOnly.right")}}
  - : Returns the right coordinate value of the `DOMRect` (has the same value as `x + width`, or `x` if `width` is negative.)
- {{domxref("DOMRectReadOnly.bottom")}}
  - : Returns the bottom coordinate value of the `DOMRect` (has the same value as `y + height`, or `y` if `height` is negative.)
- {{domxref("DOMRectReadOnly.left")}}
  - : Returns the left coordinate value of the `DOMRect` (has the same value as `x`, or `x + width` if `width` is negative.)

## Methods

_`DOMRect` inherits methods from its parent, {{domxref("DOMRectReadOnly")}}._

## Static methods

- {{domxref("DOMRect.fromRect()")}}
  - : Creates a new `DOMRect` object with a given location and dimensions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMPoint")}}
