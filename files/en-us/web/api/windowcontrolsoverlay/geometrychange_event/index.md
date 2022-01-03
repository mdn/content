---
title: 'WindowControlsOverlay: geometrychange event'
slug: Web/API/WindowControlsOverlay/geometrychange_event
tags:
  - Event
  - Reference
  - Progressive Web Apps
  - Window Controls Overlay
  - events
browser-compat: api.WindowControlsOverlay.geometrychange_event
---
{{APIRef("EyeDropper API")}}

The `geometrychange` event is fired when the position, size, or visibility of a desktop Progressive Web App's title bar area changes.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('geometrychange', (event) => { });
geometrychange = (event) => { });
```

## Event type

A {{domxref("GeometryChangeEvent")}}. Inherits from {{domxref("Event")}}.
{{InheritanceDiagram(500, 70, 50, "GeometryChangeEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- `titlebarAreaRect`
  - : A {{domxref("DOMRect")}} representing the position and size of the title bar.
- `visible`
  - : A {{Glossary("Boolean")}} that indicates whether the window controls overlay is visible or not.

## Examples

Using `addEventListener()`:

```js
navigator.windowControlsOverlay.addEventListener('geometrychange', (event) => {
  const {x, y, width, height} = event.titlebarAreaRect;
  console.log(`The titlebar area coordinates are x:${x}, y:${y}, width:${width}, height:${height}`);
});
```

Using the `ongeometrychange` event handler property:

```js
navigator.windowControlsOverlay.ongeometrychange = (event) => {
  const {x, y, width, height} = event.titlebarAreaRect;
  console.log(`The titlebar area coordinates are x:${x}, y:${y}, width:${width}, height:${height}`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
