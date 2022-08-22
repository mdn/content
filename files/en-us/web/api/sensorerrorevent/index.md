---
title: SensorErrorEvent
slug: Web/API/SensorErrorEvent
page-type: web-api-interface
tags:
  - API
  - Error
  - Generic Sensor API
  - Interface
  - Reference
  - Sensor
  - Sensor APIs
  - SensorErrorEvent
  - Sensors
browser-compat: api.SensorErrorEvent
---
{{APIRef("Sensor API")}}

The **`SensorErrorEvent`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) provides information about errors thrown by a {{domxref('Sensor')}} or derived interface.

{{InheritanceDiagram}}

## Constructor

- {{domxref("SensorErrorEvent.SensorErrorEvent", "SensorErrorEvent()")}}
  - : Creates a new `SensorErrorEvent` object.

## Properties

- {{domxref('SensorErrorEvent.error')}} {{ReadOnlyInline}}
  - : Returns the {{domxref('DOMException')}} object passed in the event's constructor.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
