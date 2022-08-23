---
title: 'WindowControlsOverlay: geometrychange event'
slug: Web/API/WindowControlsOverlay/geometrychange_event
page-type: web-api-event
tags:
  - Event
  - Reference
  - Progressive Web Apps
  - Window Controls Overlay
  - events
  - Experimental
browser-compat: api.WindowControlsOverlay.geometrychange_event
---
{{APIRef("EyeDropper API")}}{{SeeCompatTable}}

The `geometrychange` event is fired when the position, size, or visibility of a Progressive Web App's title bar area changes.

This only applies to Progressive Web Apps installed on desktop operating systems and use the [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('geometrychange', (event) => { })

ongeometrychange = (event) => { }
```

## Event type

A {{domxref("WindowControlsOverlayGeometryChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("WindowControlsOverlayGeometryChangeEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- `titlebarAreaRect`
  - : A {{domxref("DOMRect")}} representing the position and size of the title bar area within the app's content.
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
