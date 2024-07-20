---
title: "InputDeviceCapabilities: firesTouchEvents property"
short-title: firesTouchEvents
slug: Web/API/InputDeviceCapabilities/firesTouchEvents
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.InputDeviceCapabilities.firesTouchEvents
---

{{APIRef("Input Device Capabilities API")}}{{SeeCompatTable}}

The **`firesTouchEvents`** read-only property of the {{domxref("InputDeviceCapabilities")}} interface returns a boolean value that indicates whether the device dispatches touch events.

You can use this property to detect mouse events that represent an action that may
already have been handled by touch event handlers. This doesn't necessarily mean the
device is a touch screen. For example, stylus and mouse devices typically generate
touch events on mobile browsers.

## Syntax

```js-nolint
const boolean = InputDeviceCapabilities.firesTouchEvents
```

### Return value

A {{jsxref('Boolean')}}

## Example

```js
myButton.addEventListener("mousedown", (e) => {
  if (!e.sourceCapabilities.firesTouchEvents) myButton.classList.add("pressed");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
