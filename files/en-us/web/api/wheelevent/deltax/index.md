---
title: WheelEvent.deltaX
slug: Web/API/WheelEvent/deltaX
tags:
  - API
  - DOM
  - Property
  - Read-only
  - Reference
  - WheelEvent
browser-compat: api.WheelEvent.deltaX
---
{{APIRef("DOM Events")}}

The **`WheelEvent.deltaX`** read-only property is a
`double` representing the horizontal scroll amount in the
{{domxref("WheelEvent.deltaMode")}} unit.

## Syntax

```js
var dX = event.deltaX;
```

## Example

```js
var syntheticEvent = new WheelEvent("syntheticWheel", {"deltaX": 4, "deltaMode": 0});

console.log(syntheticEvent.deltaX);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ event("wheel") }}
- {{domxref("WheelEvent")}}
