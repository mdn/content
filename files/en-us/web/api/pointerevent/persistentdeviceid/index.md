---
title: "PointerEvent: persistentDeviceId property"
short-title: persistentDeviceId
slug: Web/API/PointerEvent/persistentDeviceId
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PointerEvent.persistentDeviceId
---

{{ APIRef("Pointer Events") }}{{SeeCompatTable}}

The **`persistentDeviceId`** read-only property of the
{{domxref("PointerEvent")}} interface is a unique identifier for the pointing device generating the `PointerEvent`. This provides a secure, reliable way to identify multiple pointing devices (such as pens) interacting with the screen simultaneously.

A `persistentDeviceId` persists for the lifetime of a browsing session. To avoid the risk of fingerprinting/tracking, pointing devices are assigned a new `persistentDeviceId` at the start of each session.

Pointer events whose generating device could not be identified are assigned a `persistentDeviceId` value of `0`.

## Value

An integer, or `0` if the device generating the `PointerEvent` could not be identified.

> [!NOTE]
> Due to digitizer and pointing device hardware constraints, a `persistentDeviceId` may not be available for all pointer events, particularly with older hardware. For example, the pointing device might not report its hardware ID to the digitizer in time for `pointerdown` to receive a `persistentDeviceId`: it may initially be `0` and change to a valid value for later events in the stroke.

## Examples

Assuming the following HTML:

```html
<canvas id="inking-surface" width="1280" height="720"></canvas>
```

The following JavaScript assigns a different inking color to unique pointers interacting with a canvas:

```js
const colorBlue = 0;
const colorGreen = 1;
const colorYellow = 2;
const colors = [colorBlue, colorGreen, colorYellow];

const pointerToColorMap = new Map();
const colorAssignmentIndex = 0;

const canvas = document.querySelector("#inking-surface");

// Listen for a pointerdown event and map the persistentDeviceId to a color
// if it exists and has not been mapped yet
canvas.addEventListener("pointerdown", (e) => {
  if (e.persistentDeviceId && !pointerToColorMap.has(e.persistentDeviceId)) {
    pointerToColorMap.set(e.persistentDeviceId, colors[colorAssignmentIndex]);

    // Bump the color assignment index and loop back over if needed
    colorAssignmentIndex = (colorAssignmentIndex + 1) % colors.length;
  }
});

// Listen for a `pointermove` and get the color assigned to this pointer
// if persistentDeviceId exists and the pointer has been color mapped
canvas.addEventListener("pointermove", (e) => {
  if (e.persistentDeviceId && pointerToColorMap.has(e.persistentDeviceId)) {
    const pointerColor = pointerToColorMap.get(e.persistentDeviceId);
    // Do some inking on the <canvas>
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
