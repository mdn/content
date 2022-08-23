---
title: 'Sensor: error event'
slug: Web/API/Sensor/error_event
page-type: web-api-event
tags:
  - API
  - Generic Sensor API
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - Event
browser-compat: api.Sensor.error_event
---
{{APIRef("Sensor API")}}

The **`error`** event is fired when an exception occurs on a sensor.

The {{domxref('Sensor')}} interface is a base class, `onerror` and the `error` event may only be used
on one of the [derived classes](/en-US/docs/Web/API/Sensor#interfaces_based_on_sensor).

After this event has occurred, the {{domxref('Sensor')}} object becomes idle. If the sensor was reading values, it will stop until it restarts.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('error', (event) => { })

onerror = (event) => { }
```

## Event type

A {{domxref("SensorErrorEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SensorErrorEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref('SensorErrorEvent.error', 'error')}} {{ReadOnlyInline}}
  - : Returns the {{domxref('DOMException')}} that has been thrown.

## Examples

### Log accelerometer exceptions

This example adds an event listener to log errors occurred on an {{domxref("Accelerometer")}}.

```js
const acl = new Accelerometer({frequency: 60});
acl.addEventListener('error', (error) => console.log(`Error: ${error.name}`));
acl.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Sensor {{domxref('Sensor.activate_event', 'activate')}} event
- Sensor {{domxref('Sensor.reading_event', 'reading')}} event
