---
title: InputDeviceCapabilities.firesTouchEvents
slug: Web/API/InputDeviceCapabilities/firesTouchEvents
page-type: web-api-instance-property
tags:
  - needsTags
  - Experimental
browser-compat: api.InputDeviceCapabilities.firesTouchEvents
---
{{APIRef}}{{SeeCompatTable}}

The **`InputDeviceCapabilities.firesTouchEvents`** read-only
property returns a boolean value that indicates whether the device dispatches
touch events.

You can use this property to detect mouse events that represent an action that may
already have been handled by touch event handlers. This doesn't necessarily mean the
device is a touch screen. For example, stylus and mouse devices typically generate
touch events on mobile browsers.

## Syntax

```js
const boolean = InputDeviceCapabilities.firesTouchEvents
```

### Returns

A {{jsxref('Boolean')}}

## Example

```js
myButton.addEventListener('mousedown', (e) => {
  if (!e.sourceCapabilities.firesTouchEvents)
    myButton.classList.add("pressed");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
