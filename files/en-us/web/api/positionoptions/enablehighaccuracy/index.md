---
title: PositionOptions.enableHighAccuracy
slug: Web/API/PositionOptions/enableHighAccuracy
tags:
  - API
  - Geolocation API
  - NeedsExample
  - PositionOptions
  - Property
  - Reference
  - Secure context
browser-compat: api.PositionOptions.enableHighAccuracy
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`PositionOptions.enableHighAccuracy`** property is a
boolean value that indicates the application would like to receive the best
possible results. If `true` and if the device is able to provide a more
accurate position, it will do so. Note that this can result in slower response times
or increased power consumption (with a GPS chip on a mobile device for example). On
the other hand, if `false` (the default value), the device can take the
liberty to save resources by responding more quickly and/or using less power.

## Syntax

```js
positionOptions.enableHighAccuracy = booleanValue
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using geolocation](/en-US/docs/Web/API/Geolocation_API)
- The {{domxref("PositionOptions")}} interface it belongs to.
