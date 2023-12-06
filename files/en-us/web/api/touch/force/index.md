---
title: "Touch: force property"
short-title: force
slug: Web/API/Touch/force
page-type: web-api-instance-property
browser-compat: api.Touch.force
---

{{ APIRef("Touch Events") }}

The **`Touch.force`** read-only property returns the amount of
pressure the user is applying to the touch surface for a {{ domxref("Touch") }} point.

## Value

A `float` that represents the amount of pressure the user is applying to the
touch surface. This is a value between `0.0` (no pressure) and
`1.0` (the maximum amount of pressure the hardware can recognize). A value of
`0.0` is returned if no value is known (for example the touch device does not
support this property). In environments where force is known, the absolute pressure
represented by the force attribute, and the sensitivity in levels of pressure, may vary.

## Examples

This example illustrates using the {{domxref("Touch")}} interface's
{{domxref("Touch.force")}} property. This property is a relative value of pressure
applied, in the range `0.0` to `1.0`, where `0.0` is no
pressure, and `1.0` is the highest level of pressure the touch device is
capable of sensing.

In following code snippet, the {{domxref("Element/touchstart_event", "touchstart")}} event handler iterates through
the `targetTouches` list and logs the `force` value of each touch
point but the code could invoke different processing depending on the value.

```js
someElement.addEventListener(
  "touchstart",
  (e) => {
    // Iterate through the list of touch points and log each touch
    // point's force.
    for (let i = 0; i < e.targetTouches.length; i++) {
      // Add code to "switch" based on the force value. For example
      // minimum pressure vs. maximum pressure could result in
      // different handling of the user's input.
      console.log(`targetTouches[${i}].force = ${e.targetTouches[i].force}`);
    }
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
