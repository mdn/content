---
title: ElementGeometryUpdateEvent
slug: Web/API/ElementGeometryUpdateEvent
page-type: web-api-interface
browser-compat: api.ElementGeometryUpdateEvent
---

{{APIRef("HTML-in-Canvas API")}}

The **`ElementGeometryUpdateEvent`** interface is the event object for the {{domxref("HTMLCanvasElement.elementgeometryupdate_event", "elementgeometryupdate")}} event, which fires when `drawable` element geometry has been updated via an {{domxref("OffscreenCanvas")}}.

This includes when geometry has been updated automatically during a {{domxref("OffscreenCanvasRenderingContext2D.drawElementImage()")}} call, or manually using an {{domxref("OffscreenCanvas.updateElementGeometry()")}} call.

{{InheritanceDiagram}}

## Constructor

- {{domxref("ElementGeometryUpdateEvent.ElementGeometryUpdateEvent", "ElementGeometryUpdateEvent()")}}
  - : Returns a new `ElementGeometryUpdateEvent` event object instance.

## Instance properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ElementGeometryUpdateEvent.elements")}} {{ReadOnlyInline}}
  - : An array of references to the elements whose geometry was changed.

## Instance methods

_Inherits methods from its parent, {{domxref("Event")}}_.

## Examples

### Reporting geometry updates from an offscreen canvas

Our [Canvas 2D context offscreen canvas example](https://mdn.github.io/dom-examples/html-in-canvas//2d-context-offscreencanvas) ([source code](https://github.com/mdn/dom-examples/tree/main/html-in-canvas/2d-context-offscreencanvas)) shows how to render an element on an offscreen canvas using `drawElementImage()`.

In this example, our main thread includes an `elementgeometryupdate` event handler on the `<canvas>` that logs the `drawable` elements whose geometry has been changed via the worker (the resulting array will only contain a reference to the `<form>` element), and the transform {{domxref("DOMMatrix")}} applied to it (retrieved using {{domxref("HTMLCanvasElement.getElementTransform", "getElementTransform()")}}):

```js
canvas.addEventListener("elementgeometryupdate", (e) => {
  console.log("Geometry update:", e.elements);
  console.log(canvas.getElementTransform(e.elements[0]));
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement.elementgeometryupdate_event", "elementgeometryupdate")}} event
- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
