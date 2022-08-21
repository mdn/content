---
title: GeolocationCoordinates.altitudeAccuracy
slug: Web/API/GeolocationCoordinates/altitudeAccuracy
page-type: web-api-instance-property
tags:
  - API
  - Geolocation API
  - GeolocationCoordinates
  - Property
  - Secure context
  - altitudeAccuracy
browser-compat: api.GeolocationCoordinates.altitudeAccuracy
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`GeolocationCoordinates.altitudeAccuracy`** read-only
property is a strictly positive `double` representing the accuracy, with a
95% confidence level, of the `altitude` expressed in meters. This value is
`null` if the implementation doesn't support measuring altitude.

## Value

A positive `double` representing the accuracy, with a 95% confidence level,
of the `altitude` expressed in meters.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}
