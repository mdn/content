---
title: WheelEvent.deltaX
slug: Web/API/WheelEvent/deltaX
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Property
  - Read-only
  - Reference
  - WheelEvent
browser-compat: api.WheelEvent.deltaX
---
{{APIRef("UI Events")}}

The **`WheelEvent.deltaX`** read-only property is a
`double` representing the horizontal scroll amount in the
{{domxref("WheelEvent.deltaMode")}} unit.

## Value

A number.

## Examples

```js
const syntheticEvent = new WheelEvent("syntheticWheel", { "deltaX": 4, "deltaMode": 0 });

console.log(syntheticEvent.deltaX);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element/wheel_event","wheel")}}
- {{domxref("WheelEvent")}}
