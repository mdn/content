---
title: "VirtualKeyboard: geometrychange event"
short-title: geometrychange
slug: Web/API/VirtualKeyboard/geometrychange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.VirtualKeyboard.geometrychange_event
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

The **`geometrychange`** event of the {{domxref("VirtualKeyboard")}}
interface fires when the on-screen virtual keyboard is toggled between shown and hidden states.

The `geometrychange` event is useful to detect when the virtual keyboard appears and disappears, so you can adjust the layout as appropriate. This is necessary when using the {{domxref("VirtualKeyboard_API", "Virtual Keyboard API", "", "nocode")}} to disable the browser's default automatic resizing of the viewport when the virtual keyboard is shown and hidden.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {});

navigator.virtualKeyboard.ongeometrychange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

The following code snippet uses the `geometrychange` event to detect when the virtual keyboard geometry changes, and then accesses the {{domxref("VirtualKeyboard.boundingRect", "boundingRect")}} property to query the size and position of the virtual keyboard:

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("VirtualKeyboard_API", "The VirtualKeyboard API", "", "nocode")}}
- [Full control with the VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
