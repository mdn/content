---
title: "Sensor: activate event"
short-title: activate
slug: Web/API/Sensor/activate_event
page-type: web-api-event
browser-compat: api.Sensor.activate_event
---

{{securecontext_header}}{{APIRef("Sensor API")}}

The **`activate`** event is fired when a sensor becomes activated. It means that it will start obtaining readings.

The {{domxref('Sensor')}} interface is a base class, `onactivate` and the `activate` event may only be used
on one of the [derived classes](/en-US/docs/Web/API/Sensor#interfaces_based_on_sensor).

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("activate", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onactivate = (event) => { }
```

## Event type

A generic {{domxref("Event")}} with no added properties.

## Examples

### Log when an accelerometer is ready to measure

This example adds an event listener to log the activation of an {{domxref("Accelerometer")}}.

```js
const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("activate", () => console.log("Ready to measure."));
acl.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Sensor {{domxref('Sensor.error_event', 'error')}} event
- Sensor {{domxref('Sensor.reading_event', 'reading')}} event
