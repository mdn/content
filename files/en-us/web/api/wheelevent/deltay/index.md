---
title: "WheelEvent: deltaY property"
short-title: deltaY
slug: Web/API/WheelEvent/deltaY
page-type: web-api-instance-property
browser-compat: api.WheelEvent.deltaY
---

{{APIRef("UI Events")}}

The **`WheelEvent.deltaY`** read-only property is a
`double` representing the vertical scroll amount in the
{{domxref("WheelEvent.deltaMode")}} unit.

You must check the `deltaMode` property to determine the unit of the `deltaY` value. Do not assume that the `deltaY` value is specified in pixels. Some browsers, for compatibility reasons, may return different units for the `deltaY` value depending on whether `deltaMode` has been accessed, to accommodate for websites not explicitly checking the `deltaMode` property.

## Value

A number.

## Examples

```js
const syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaY: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaY);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element/wheel_event","wheel")}}
- {{domxref("WheelEvent")}}
