---
title: WheelEvent.deltaZ
slug: Web/API/WheelEvent/deltaZ
tags:
  - API
  - DOM
  - Interface
  - Property
  - Read-only
  - Reference
  - WheelEvent
browser-compat: api.WheelEvent.deltaZ
---
{{APIRef("DOM Events")}}

The **`WheelEvent.deltaZ`** read-only property is a
`double` representing the scroll amount along the z-axis, in the
{{domxref("WheelEvent.deltaMode")}} unit.

## Value

A number.

## Examples

```js
var syntheticEvent = new WheelEvent("syntheticWheel", {"deltaZ": 4, "deltaMode": 0});

console.log(syntheticEvent.deltaZ);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ event("wheel") }}
- {{domxref("WheelEvent")}}
