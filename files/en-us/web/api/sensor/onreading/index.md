---
title: Sensor.onreading
slug: Web/API/Sensor/onreading
tags:
  - API
  - EventHandler
  - Generic Sensor API
  - Property
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - onreading
  - reading
browser-compat: api.Sensor.onreading
---
{{APIRef("Sensor API")}}

The **`onreading`**
[event handler](/en-US/docs/Web/Events/Event_handlers) is called when a reading is taken on one of the child
interfaces of the {{domxref("Sensor")}} interface.

## Syntax

```js
sensorInstance.onreading = function
  sensorInstance.addEventListener('reading', function() { /* ... */ })
```

Because {{domxref('Sensor')}} is a base class, `onreading` may only be used
on one of its derived classes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
