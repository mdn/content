---
title: "PointerEvent: width property"
short-title: width
slug: Web/API/PointerEvent/width
page-type: web-api-instance-property
browser-compat: api.PointerEvent.width
---

{{ APIRef("Pointer Events") }}

The **`width`** read-only property of the
{{domxref("PointerEvent")}} interface represents the width of the pointer's contact
geometry along the x-axis, measured in CSS pixels. Depending on the source of the
pointer device (such as a finger), for a given pointer, each event may produce a
different value.

If the input hardware cannot report the contact geometry to the browser, the width
defaults to `1`.

## Value

The width of the event's contact area (in CSS pixels).

## Examples

This example illustrates using the {{domxref("PointerEvent")}} interface's
{{domxref("PointerEvent.width","width")}} and
{{domxref("PointerEvent.height","height")}} properties to calculate the contact area.

```js
target.addEventListener(
  "pointerdown",
  (ev) => {
    // Calculate the contact area
    const area = ev.width * ev.height;
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
