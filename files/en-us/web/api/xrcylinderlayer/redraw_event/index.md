---
title: 'XRCylinderLayer: redraw event'
slug: Web/API/XRCylinderLayer/redraw_event
tags:
  - API
  - Event
  - Reference
  - VR
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
browser-compat: api.XRCylinderLayer.redraw_event
---
{{APIRef("WebXR Device API")}}

The `redraw` event is sent to the `XRCylinderLayer` object when the underlying resources of the layer are lost or when the XR Compositor can no longer reproject the layer. If this event is sent, authors should redraw the content of the layer in the next XR animation frame.

See also the {{domxref("XRCompositionLayer.needsRedraw")}} property which is also available to `XRCylinderLayer` objects through inheritance from {{domxref("XRCompositionLayer")}}.

The event is of type {{domxref("XRLayerEvent")}}. Also available through the `XRCylinderLayer.onredraw` event handler property.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("XRLayerEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler</th>
      <td><code>XRCylinderLayer.onredraw</code></td>
    </tr>
  </tbody>
</table>

## Examples

### Using the `redraw` event

You can pass `redraw` to {{domxref("EventTarget.addEventListener()", "addEventListener()")}}:

```js
cylinderLayer.addEventListener("redraw", function(event) {
  // redraw the layer
});
```

Alternatively, you can use the `onredraw` event handler property to establish a handler for the `redraw` event:

```js
cylinderLayer.onredraw = function(event) {
 // redraw the layer
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRCompositionLayer.needsRedraw")}}
