---
title: DeviceProximityEvent
slug: Web/API/DeviceProximityEvent
page-type: web-api-interface
tags:
  - API
  - Interface
  - Proximity Events
  - Reference
  - Deprecated
  - Non-standard
browser-compat: api.DeviceProximityEvent
---
{{APIRef("Proximity Events")}}{{Deprecated_Header}}{{Non-standard_Header}}

> **Warning:** `DeviceProximityEvent` is not supported by any current major browser, and should not be used.

The **`DeviceProximityEvent`** interface provides information about the distance of a nearby physical object using the proximity sensor of a device.

## Properties

- `DeviceProximityEvent.max` {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : The maximum sensing distance the sensor is able to report, in centimeters.
- `DeviceProximityEvent.min` {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : The minimum sensing distance the sensor is able to report, in centimeters. Usually zero.
- `DeviceProximityEvent.value` {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : The current device proximity, in centimeters.

## Examples

```js
window.addEventListener('deviceproximity', (event) => {
  console.log(`value: ${event.value}`, `max: ${event.max}`, `min: ${event.min}`);
});
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("UserProximityEvent")}}
- [Proximity API](/en-US/docs/Web/API/Proximity_Events)
