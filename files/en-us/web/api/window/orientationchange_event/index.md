---
title: 'Window: orientationchange event'
slug: Web/API/Window/orientationchange_event
page-type: web-api-event
tags:
  - API
  - Event
  - Reference
  - Sensors
  - Window
  - orientationchange
  - Deprecated
browser-compat: api.Window.orientationchange_event
---
{{APIRef}}{{Deprecated_Header}}

The `orientationchange` event is fired when the orientation of the device has changed.

This event is not cancelable and does not bubble.

This event is deprecated. Listen for the {{domxref("ScreenOrientation/onchange", "ScreenOrientation.onchange")}} event instead.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('orientationchange', (event) => { });

onorientationchange = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Example

You can use the `orientationchange` event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:

```js
window.addEventListener("orientationchange", (event) => {
  console.log(`the orientation of the device is now ${event.target.screen.orientation.angle}`);
});
```

Or use the `onorientationchange` event handler property:

```js
window.onorientationchange = (event) => {
  console.log(`the orientation of the device is now ${event.target.screen.orientation.angle}`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
