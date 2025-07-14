---
title: "WheelEvent: deltaX property"
short-title: deltaX
slug: Web/API/WheelEvent/deltaX
page-type: web-api-instance-property
browser-compat: api.WheelEvent.deltaX
---

{{APIRef("UI Events")}}

The **`WheelEvent.deltaX`** read-only property is a
`double` representing the horizontal scroll amount in the
{{domxref("WheelEvent.deltaMode")}} unit.

You must check the `deltaMode` property to determine the unit of the `deltaX` value. Do not assume that the `deltaX` value is specified in pixels. Some browsers, for compatibility reasons, may return different units for the `deltaX` value depending on whether `deltaMode` has been accessed, to accommodate for websites not explicitly checking the `deltaMode` property.

## Value

A number.

## Examples

```js
const syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaX: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaX);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element/wheel_event","wheel")}}
- {{domxref("WheelEvent")}}
