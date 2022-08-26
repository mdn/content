---
title: UserProximityEvent
slug: Web/API/UserProximityEvent
page-type: web-api-interface
tags:
  - API
  - Interface
  - Proximity Events
  - Reference
  - Deprecated
  - Non-standard
browser-compat: api.UserProximityEvent
---
{{APIRef("Proximity Events")}}{{Deprecated_Header}}{{Non-standard_Header}}

> **Warning:** `UserProximityEvent` is not supported by any current major browser, and should not be used.

The **`UserProximityEvent`** indicates whether a nearby physical object is present by using the proximity sensor of a device.

## Properties

- `UserProximityEvent.near` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Indicates if the device has sensed a nearby physical object.

## Examples

```js
window.addEventListener('userproximity', (event) => {
  // if not near, power off the screen
  navigator.mozPower.screenEnabled = !event.near;
});
```

## Browser compatibility

{{Compat}}

## See also

- [Proximity Events](/en-US/docs/Web/API/Proximity_Events)
- {{domxref("DeviceProximityEvent")}}
