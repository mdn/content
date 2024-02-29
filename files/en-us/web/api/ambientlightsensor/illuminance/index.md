---
title: "AmbientLightSensor: illuminance property"
short-title: illuminance
slug: Web/API/AmbientLightSensor/illuminance
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.AmbientLightSensor.illuminance
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`illuminance`** read-only property of the {{domxref("AmbientLightSensor")}} interface returns the current light level in [lux](https://en.wikipedia.org/wiki/Lux) of the ambient light level around the hosting device.

## Value

A {{jsxref('Number')}} indicating the current light level in lux.

## Examples

```js
if ("AmbientLightSensor" in window) {
  const sensor = new AmbientLightSensor();
  sensor.addEventListener("reading", (event) => {
    console.log("Current light level:", sensor.illuminance);
  });
  sensor.addEventListener("error", (event) => {
    console.log(event.error.name, event.error.message);
  });
  sensor.start();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
