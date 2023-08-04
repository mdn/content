---
title: CanvasGradient
slug: Web/API/CanvasGradient
page-type: web-api-interface
browser-compat: api.CanvasGradient
---

{{APIRef("Canvas API")}}

The **`CanvasGradient`** interface represents an [opaque object](https://en.wikipedia.org/wiki/Opaque_data_type) describing a gradient. It is returned by the methods {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}, {{domxref("CanvasRenderingContext2D.createConicGradient()")}} or {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}.

It can be used as a {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} or {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}.

## Instance properties

_As an opaque object, there is no exposed property._

## Instance methods

- {{domxref("CanvasGradient.addColorStop()")}}
  - : Adds a new stop, defined by an `offset` and a `color`, to the gradient.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Creator methods in {{domxref("CanvasRenderingContext2D")}}.
- The {{HTMLElement("canvas")}} element and its associated interface, {{domxref("HTMLCanvasElement")}}.
