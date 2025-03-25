---
title: "WheelEvent: deltaZ property"
short-title: deltaZ
slug: Web/API/WheelEvent/deltaZ
page-type: web-api-instance-property
browser-compat: api.WheelEvent.deltaZ
---

{{APIRef("UI Events")}}

The **`WheelEvent.deltaZ`** read-only property is a
`double` representing the scroll amount along the z-axis, in the
{{domxref("WheelEvent.deltaMode")}} unit.

You must check the `deltaMode` property to determine the unit of the `deltaZ` value. Do not assume that the `deltaZ` value is specified in pixels. Some browsers, for compatibility reasons, may return different units for the `deltaZ` value depending on whether `deltaMode` has been accessed, to accommodate for websites not explicitly checking the `deltaMode` property.

## Value

A number.

## Examples

```js
const syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaZ: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaZ);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element/wheel_event","wheel")}}
- {{domxref("WheelEvent")}}
