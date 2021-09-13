---
title: Window.ondevicemotion
slug: Web/API/Window/ondevicemotion
tags:
  - API
  - Device Orientation
  - Event Handler
  - Mobile
  - Motion
  - Orientation
  - Property
  - Reference
browser-compat: api.Window.ondevicemotion
---
{{APIRef("Device Orientation Events")}}

An event handler for the {{domxref("Window/devicemotion_event", "devicemotion")}}
events sent to the window.

## Syntax

```js
window.ondevicemotion = funcRef;
```

Where `funcRef` is a reference to a function. This function receives a
{{DOMxRef("DeviceMotionEvent")}} object describing the motion that occurred.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window/devicemotion_event", "devicemotion")}}
- {{DOMxRef("DeviceMotionEvent")}}
- [Detecting device
  orientation](/en-US/docs/Web/API/Detecting_device_orientation)
