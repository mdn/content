---
title: WheelEvent.deltaY
slug: Web/API/WheelEvent/deltaY
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Property
  - Read-only
  - Reference
  - WheelEvent
browser-compat: api.WheelEvent.deltaY
---
{{APIRef("UI Events")}}

The **`WheelEvent.deltaY`** read-only property is a
`double` representing the vertical scroll amount in the
{{domxref("WheelEvent.deltaMode")}} unit.

## Value

A number.

## Examples

```js
const syntheticEvent = new WheelEvent("syntheticWheel", { "deltaY": 4, "deltaMode": 0 });

console.log(syntheticEvent.deltaY);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element/wheel_event","wheel")}}
- {{domxref("WheelEvent")}}
