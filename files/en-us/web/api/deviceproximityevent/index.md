---
title: DeviceProximityEvent
slug: Web/API/DeviceProximityEvent
tags:
  - API
  - Interface
  - Proximity Events
  - Reference
  - Deprecated
browser-compat: api.DeviceProximityEvent
---
{{APIRef("Proximity Events")}}{{deprecated_header}}

> **Warning:** `DeviceProximityEvent` is not supported by any current major browser, and should not be used.

The **`DeviceProximityEvent`** interface provides information about the distance of a nearby physical object using the proximity sensor of a device.

## Properties

- `DeviceProximityEvent.max` {{readonlyinline}}
  - : The maximum sensing distance the sensor is able to report, in centimeters.
- `DeviceProximityEvent.min` {{readonlyinline}}
  - : The minimum sensing distance the sensor is able to report, in centimeters. Ususally zero.
- `DeviceProximityEvent.value` {{readonlyinline}}
  - : The current device proximity, in centimeters.

## Examples

```js
window.addEventListener('deviceproximity', function(event) {
  console.log("value: " + event.value, "max: " + event.max, "min: " + event.min);
});
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("UserProximityEvent")}}
- [Proximity API](/en-US/docs/Web/API/Proximity_Events)
