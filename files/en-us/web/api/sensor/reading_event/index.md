---
title: 'Sensor: reading event'
slug: Web/API/Sensor/reading_event
page-type: web-api-event
tags:
  - API
  - Generic Sensor API
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - Event
browser-compat: api.Sensor.reading_event
---
{{APIRef("Sensor API")}}

The **`reading`** event is fired when a new reading is available on a sensor.

The {{domxref('Sensor')}} interface is a base class, `onreading` and the `reading` event may only be used
on one of the [derived classes](/en-US/docs/Web/API/Sensor#interfaces_based_on_sensor).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('reading', (event) => { })

onreading = (event) => { }
```

## Event type

A generic {{domxref("Event")}} with no added properties.

## Examples

### Reading acceleration

This example adds an event listener to read acceleration values of an {{domxref("Accelerometer")}}. It reads sixty times a second.

```js
const acl = new Accelerometer({frequency: 60});
acl.addEventListener('reading', () => {
  console.log(`Acceleration along the X-axis ${acl.x}`);
  console.log(`Acceleration along the Y-axis ${acl.y}`);
  console.log(`Acceleration along the Z-axis ${acl.z}`);
});
acl.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Sensor {{domxref('Sensor.activate_event', 'activate')}} event
- Sensor {{domxref('Sensor.error_event', 'error')}} event
