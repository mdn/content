---
title: 'Sensor: activate event'
slug: Web/API/Sensor/activate_event
page-type: web-api-event
tags:
  - API
  - Generic Sensor API
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - Event
browser-compat: api.Sensor.activate_event
---
{{APIRef("Sensor API")}}

The **`activate`** event is fired when a sensor becomes activated. It means that it will start obtaining readings.

The {{domxref('Sensor')}} interface is a base class, `onactivate` and the `activate` event may only be used
on one of the [derived classes](/en-US/docs/Web/API/Sensor#interfaces_based_on_sensor).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('activate', (event) => { })

onactivate = (event) => { }
```

## Event type

A generic {{domxref("Event")}} with no added properties.

## Examples

### Log when an accelerometer is ready to measure

This example adds an event listener to log the activation of an {{domxref("Accelerometer")}}.

```js
const acl = new Accelerometer({frequency: 60});
acl.addEventListener('activate', () => console.log('Ready to measure.'));
acl.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Sensor {{domxref('Sensor.error_event', 'error')}} event
- Sensor {{domxref('Sensor.reading_event', 'reading')}} event
