---
title: "XREquirectLayer: redraw event"
short-title: redraw
slug: Web/API/XREquirectLayer/redraw_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.XREquirectLayer.redraw_event
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The `redraw` event is sent to the `XREquirectLayer` object when the underlying resources of the layer are lost or when the XR Compositor can no longer reproject the layer. If this event is sent, authors should redraw the content of the layer in the next XR animation frame.

See also the {{domxref("XRCompositionLayer.needsRedraw")}} property which is also available to `XREquirectLayer` objects through inheritance from {{domxref("XRCompositionLayer")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("redraw", (event) => {});

onredraw = (event) => {};
```

## Event type

An {{domxref("XRLayerEvent")}}. Inherits from {{domxref("Event")}}.

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("XRLayerEvent.layer", "layer")}} {{ReadOnlyInline}}
  - : The {{domxref("XRLayer")}} which generated the event.

## Examples

### Using the `redraw` event

You can pass `redraw` to {{domxref("EventTarget.addEventListener()", "addEventListener()")}}:

```js
equirectLayer.addEventListener("redraw", (event) => {
  // redraw the layer
});
```

Alternatively, you can use the `onredraw` event handler property to establish a handler for the `redraw` event:

```js
equirectLayer.onredraw = (event) => {
  // redraw the layer
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRCompositionLayer.needsRedraw")}}
