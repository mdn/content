---
title: PointerEvent.height
slug: Web/API/PointerEvent/height
tags:
  - API
  - DOM
  - Interface
  - PointerEvent
  - Property
  - Reference
browser-compat: api.PointerEvent.height
---
{{ APIRef("Pointer Events") }}

The **`height`** read-only property of the
{{domxref("PointerEvent")}} interface represents the height of the pointer's contact
geometry, along the y-axis (in CSS pixels). Depending on the source of the pointer
device (for example a finger), for a given pointer, each event may produce a different
value.

If the input hardware cannot report the contact geometry to the browser, the height
defaults to `1`.

## Syntax

```js
var contactHeight = pointerEvent.height;
```

### Return value

- `contactHeight`
  - : The height of the event's contact area (in CSS pixels).

## Example

An example of this property is included in the [PointerEvent.width example](/en-US/docs/Web/API/PointerEvent/width#example).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
