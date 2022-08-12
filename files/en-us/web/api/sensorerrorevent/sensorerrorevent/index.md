---
title: SensorErrorEvent()
slug: Web/API/SensorErrorEvent/SensorErrorEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Error
  - Generic Sensor API
  - Reference
  - Sensor
  - Sensor APIs
  - SensorErrorEvent
  - Sensors
browser-compat: api.SensorErrorEvent.SensorErrorEvent
---
{{APIRef("Sensor API")}}

The **`SensorErrorEvent`** constructor
creates a new {{domxref("SensorErrorEvent")}} object which provides information about
errors thrown by any of the interfaces based on {{domxref('Sensor')}}.

## Syntax

```js
new SensorErrorEvent(type, options)
```

### Parameters

- `type`
  - :A string with the name of the event.
    It is case-sensitive and browsers always set it to `error`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `error`
      - : A {{domxref('DOMException')}} object describing the error.

### Return value

A new {{domxref("SensorErrorEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
