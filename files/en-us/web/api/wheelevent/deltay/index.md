---
title: WheelEvent.deltaY
slug: Web/API/WheelEvent/deltaY
tags:
  - API
  - DOM
  - Property
  - Read-only
  - Reference
  - WheelEvent
browser-compat: api.WheelEvent.deltaY
---
{{APIRef("DOM Events")}}

The **`WheelEvent.deltaY`** read-only property is a
`double` representing the vertical scroll amount in the
{{domxref("WheelEvent.deltaMode")}} unit.

## Syntax

```js
var dY = event.deltaY;
```

## Example

```js
var syntheticEvent = new WheelEvent("syntheticWheel", {"deltaY": 4, "deltaMode": 0});

console.log(syntheticEvent.deltaY);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ event("wheel") }}
- {{domxref("WheelEvent")}}
