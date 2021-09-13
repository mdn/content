---
title: CanvasGradient
slug: Web/API/CanvasGradient
tags:
  - API
  - Canvas
  - CanvasGradient
  - Gradients
  - Interface
  - Reference
browser-compat: api.CanvasGradient
---
The **`CanvasGradient`** interface represents an [opaque object](https://en.wikipedia.org/wiki/Opaque_data_type) describing a gradient. It is returned by the methods {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}, {{domxref("CanvasRenderingContext2D.createConicGradient()")}} or {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}.

It can be used as a {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} or {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}.

## Properties

_As an opaque object, there is no exposed property._

## Methods

- {{domxref("CanvasGradient.addColorStop()")}}
  - : Adds a new stop, defined by an `offset` and a `color`, to the gradient. If the offset is not between `0` and `1`, inclusive, an `INDEX_SIZE_ERR` is raised; if the color can't be parsed as a CSS {{cssxref("&lt;color&gt;")}}, a `SYNTAX_ERR` is raised.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Creator methods in {{domxref("CanvasRenderingContext2D")}}.
- The {{HTMLElement("canvas")}} element and its associated interface, {{domxref("HTMLCanvasElement")}}.

{{APIRef("Canvas API")}}
