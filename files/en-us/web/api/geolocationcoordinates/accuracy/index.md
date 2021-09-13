---
title: GeolocationCoordinates.accuracy
slug: Web/API/GeolocationCoordinates/accuracy
tags:
  - API
  - Geolocation API
  - GeolocationCoordinates
  - Property
  - Secure context
  - accuracy
browser-compat: api.GeolocationCoordinates.accuracy
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`GeolocationCoordinates.accuracy`** read-only property is
a strictly positive `double` representing the accuracy, with a 95% confidence
level, of the {{domxref("GeolocationCoordinates.latitude")}} and
{{domxref("GeolocationCoordinates.longitude")}} properties expressed in meters.

## Syntax

```js
let acc = geolocationCoordinatesInstance.accuracy
```

### Value

A positive `double` representing the accuracy, with a 95% confidence level,
of the {{domxref("GeolocationCoordinates.latitude")}} and
{{domxref("GeolocationCoordinates.longitude")}} properties expressed in meters.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}
