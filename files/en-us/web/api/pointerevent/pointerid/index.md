---
title: "PointerEvent: pointerId property"
short-title: pointerId
slug: Web/API/PointerEvent/pointerId
page-type: web-api-instance-property
browser-compat: api.PointerEvent.pointerId
---

{{ APIRef("Pointer Events") }}

The **`pointerId`** read-only property of the
{{domxref("PointerEvent")}} interface is an identifier assigned to a given pointer
event. The identifier is unique, being different from the identifiers of all other
active pointer events. Since the value may be randomly generated, it is not guaranteed
to convey any particular meaning.

> [!NOTE]
> The `pointerId` property is implemented inconsistently across browsers and does not always persist for each ink stroke or interaction with the screen. For a reliable way of identifying multiple pointing devices on a screen simultaneously, see {{domxref("PointerEvent.persistentDeviceId")}}.

## Value

A number.

## Examples

The following code snippet compares a previously saved `pointerId` with the
one of the {{domxref("Element/pointerdown_event", "pointerdown")}} event that was just fired.

```js
let id; // Let's assume that this is a previously saved pointerId

target.addEventListener(
  "pointerdown",
  (event) => {
    // Compare previous event's ID that was cached
    // to current event's ID and handle accordingly
    if (id === event.pointerId) process_event(event);
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
