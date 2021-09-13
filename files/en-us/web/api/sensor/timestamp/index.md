---
title: Sensor.timestamp
slug: Web/API/Sensor/timestamp
tags:
  - API
  - Generic Sensor API
  - Property
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - timeStamp
browser-compat: api.Sensor.timestamp
---
{{APIRef("Sensor API")}}

The **`timestamp`** read-only property
of the {{domxref("Sensor")}} interface returns the time stamp of the latest sensor
reading.

## Syntax

```js
var timestamp = sensorInstance.timestamp
```

Because {{domxref('Sensor')}} is a base class, `timestamp` may only be read
from one of its derived classes.

### Value

A {{domxref("DOMHighResTimeStamp")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
