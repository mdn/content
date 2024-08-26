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

A random number, or `0` if the device generating the `PointerEvent` could not be identified.

> [!NOTE]
> Due to digitizer and pointing device hardware constraints, a `persistentDeviceId` may not be available for all pointer events. For example, the pointing device might not report its hardware ID to the digitizer in time for `pointerdown` to receive a `persistentDeviceId`: it may initially be `0` and change to a valid value later.

## Examples

Assuming the following HTML:

```html
<canvas id="inking-surface" width="1280" height="720"></canvas>
```

The following JavaScript assigns a different inking color to each unique pen interacting with a canvas:

```js
const COLOR_BLUE = 0;
const COLOR_GREEN = 1;
const COLOR_YELLOW = 2;
const COLORS = [COLOR_BLUE, COLOR_GREEN, COLOR_YELLOW];

const pen_to_color_map = new Map();
const color_assignment_index = 0;

const canvas = document.querySelector("#inking-surface");

// Listen for a pointerdown event and map the persistentDeviceId to a color
// if it exists and has not been mapped yet
canvas.addEventListener("pointerdown", (e) => {
  if (
    e.persistentDeviceId &&
    e.persistentDeviceId > 1 &&
    !pen_to_color_map.has(e.persistentDeviceId)
  ) {
    pen_to_color_map.set(e.persistentDeviceId, COLORS[color_assignment_index]);

    // Bump the color assignment index and loop back over if needed
    color_assignment_index = (color_assignment_index + 1) % COLORS.length;
  }
});

// Listen for a `pointermove` and get the color assigned to this pen
// if persistentDeviceId exists and the pen has been color mapped
canvas.addEventListener("pointermove", function (e) {
  if (e.persistentDeviceId && pen_to_color_map.has(e.persistentDeviceId)) {
    const pen_color = pen_to_color_map.get(e.persistentDeviceId);
    // Do some inking on the <canvas>
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
