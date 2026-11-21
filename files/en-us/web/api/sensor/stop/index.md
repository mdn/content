---
title: "Sensor: stop() method"
short-title: stop()
slug: Web/API/Sensor/stop
page-type: web-api-instance-method
browser-compat: api.Sensor.stop
---

{{securecontext_header}}{{APIRef("Sensor API")}}

The **`stop()`** method of the {{domxref("Sensor")}} interface deactivates the current sensor.

## Syntax

```js-nolint
stop()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Stopping after one reading

This example reads one value from the {{domxref("Accelerometer")}} and stops it.

```js
const sensor = new Accelerometer();

sensor.addEventListener("reading", () => {
  console.log(sensor.x, sensor.y, sensor.z); // e.g., 0 0 9.81
  sensor.stop();
});
sensor.addEventListener("error", (event) => {
  console.error(event.error);
});
sensor.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
