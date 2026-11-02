---
title: "XRCubeLayer: redraw event"
short-title: redraw
slug: Web/API/XRCubeLayer/redraw_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.XRCubeLayer.redraw_event
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The `redraw` event is sent to the `XRCubeLayer` object when the underlying resources of the layer are lost or when the XR Compositor can no longer reproject the layer. If this event is sent, authors should redraw the content of the layer in the next XR animation frame.

See also the {{domxref("XRCompositionLayer.needsRedraw")}} property which is also available to `XRCubeLayer` objects through inheritance from {{domxref("XRCompositionLayer")}}.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("redraw", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onredraw = (event) => { }
```

## Event type

An {{domxref("XRLayerEvent")}}. Inherits from {{domxref("Event")}}.

## Examples

### Using the `redraw` event

You can pass `redraw` to {{domxref("EventTarget.addEventListener()", "addEventListener()")}}:

```js
cubeLayer.addEventListener("redraw", (event) => {
  // redraw the layer
});
```

Alternatively, you can use the `onredraw` event handler property to establish a handler for the `redraw` event (but note that this replaces other event listeners added using `onredraw`, if any):

```js
cubeLayer.onredraw = (event) => {
  // redraw the layer
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRCompositionLayer.needsRedraw")}}
