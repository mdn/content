---
title: PointerEvent.pointerId
slug: Web/API/PointerEvent/pointerId
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Interface
  - PointerEvent
  - Property
  - Reference
browser-compat: api.PointerEvent.pointerId
---
{{ APIRef("Pointer Events") }}

The **`pointerId`** read-only property of the
{{domxref("PointerEvent")}} interface is an identifier assigned to a given pointer
event. The identifier is unique, being different from the identifiers of all other
active pointer events. Since the value may be randomly generated, it is not guaranteed
to convey any particular meaning.

## Value

A number.

## Examples

The following code snippet compares a previously saved `pointerId` with the
one of the {{domxref("HTMLElement/pointerdown_event", "pointerdown")}} event that was just fired.

```js
let id; // Let's assume that this is a previously saved pointerId

target.addEventListener('pointerdown', (event) => {
  // Compare previous event's ID that was cached
  // to current event's ID and handle accordingly
  if (id === event.pointerId) process_event(event);
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
