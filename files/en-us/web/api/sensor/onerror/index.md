---
title: Sensor.onerror
slug: Web/API/Sensor/onerror
tags:
  - API
  - Error
  - EventHandler
  - Generic Sensor API
  - Property
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - onerror
browser-compat: api.Sensor.onerror
---
{{APIRef("Sensor API")}}

The **`onerror`**
[event handler](/en-US/docs/Web/Events/Event_handlers) is called when an error occurs on one of the child
interfaces of the {{domxref("Sensor")}} interface.

## Syntax

```js
sensorInstance.onerror = function
  sensorInstance.addEventListener('error', function() { /* ... */ })
```

Because {{domxref('Sensor')}} is a base class, `onerror` may only be used on
one of its derived classes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
