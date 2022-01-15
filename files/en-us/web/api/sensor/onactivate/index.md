---
title: Sensor.onactivate
slug: Web/API/Sensor/onactivate
tags:
  - API
  - EventHandler
  - Generic Sensor API
  - Property
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - activate
  - onactivate
browser-compat: api.Sensor.onactivate
---
{{APIRef("Sensor API")}}

The **`onactivate`** [event handler](/en-US/docs/Web/Events/Event_handlers) is
called when one of the Sensor interface's child interfaces becomes active.

## Syntax

```js
sensorInstance.onactivate = function
   sensorInstance.addEventListener('activate', function() { /* ... */ })
```

Because {{domxref('Sensor')}} is a base class, `onactivate` may only be used
on one of its derived classes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
