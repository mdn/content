---
title: InputDeviceCapabilities.firesTouchEvents
slug: Web/API/InputDeviceCapabilities/firesTouchEvents
tags:
  - needsTags
browser-compat: api.InputDeviceCapabilities.firesTouchEvents
---
{{SeeCompatTable}}{{APIRef()}}

The **`InputDeviceCapabilities.firesTouchEvents`** read-only
property returns a boolean value that indicates whether the device dispatches
touch events.

You can use this property to detect mouse events that represent an action that may
already have been handled by touch event handlers. This doesn't necessarily mean the
device is a touch screen. For example, stylus and mouse devices typically generate
touch events on mobile browsers.

## Syntax

```js
var boolean = InputDeviceCapabilities.firesTouchEvents
```

### Returns

A {{jsxref('Boolean')}}

## Example

```js
myButton.addEventListener('mousedown', function(e) {
  if (!e.sourceCapabilities.firesTouchEvents)
    myButton.classList.add("pressed");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
