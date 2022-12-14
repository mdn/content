---
title: 'VirtualKeyboard: geometrychange event'
slug: Web/API/VirtualKeyboard/geometrychange_event
page-type: web-api-event
tags:
  - API
  - Event
  - Reference
  - VirtualKeyboard
  - geometrychange
  - Experimental
browser-compat: api.VirtualKeyboard.geometrychange_event
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

The **`geometrychange`** event of the {{domxref("VirtualKeyboard")}}
interface fires when the on-screen virtual keyboard is toggled.

The `geometrychange` event is useful to know when the virtual keyboard appears, and disappears, when using the {{domxref("VirtualKeyboard_API", "Virtual Keyboard API")}} to prevent the browser from automatically resizing the viewport when the virtual keyboard is displayed.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
navigator.virtualKeyboard.addEventListener('geometrychange', (event) => { });

navigator.virtualKeyboard.ongemoetrychange = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

The following code snippet uses the `geometrychange` event to know when the virtual keyboard geometry changes, and then accesses the {{domxref("VirtualKeyboard.boundingRect", "boundingRect")}} property to know the size and position of the virtual keyboard:

```js
if("virtualKeyboard" in navigator) {
  navigator.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", event => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
