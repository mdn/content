---
title: "WindowControlsOverlay: geometrychange event"
short-title: geometrychange
slug: Web/API/WindowControlsOverlay/geometrychange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.WindowControlsOverlay.geometrychange_event
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

The `geometrychange` event is fired when the position, size, or visibility of a Progressive Web App's title bar area changes.

This only applies to Progressive Web Apps installed on desktop operating systems and use the [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API).

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("geometrychange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
ongeometrychange = (event) => { }
```

## Event type

A {{domxref("WindowControlsOverlayGeometryChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("WindowControlsOverlayGeometryChangeEvent")}}

## Examples

Using `addEventListener()`:

```js
navigator.windowControlsOverlay.addEventListener("geometrychange", (event) => {
  const { x, y, width, height } = event.titlebarAreaRect;
  console.log(
    `The titlebar area coordinates are x:${x}, y:${y}, width:${width}, height:${height}`,
  );
});
```

Using the `ongeometrychange` event handler property (but note that this replaces other event listeners added using `ongeometrychange`, if any):

```js
navigator.windowControlsOverlay.ongeometrychange = (event) => {
  const { x, y, width, height } = event.titlebarAreaRect;
  console.log(
    `The titlebar area coordinates are x:${x}, y:${y}, width:${width}, height:${height}`,
  );
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
