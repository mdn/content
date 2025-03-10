---
title: GeolocationCoordinates
slug: Web/API/GeolocationCoordinates
page-type: web-api-interface
browser-compat: api.GeolocationCoordinates
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`GeolocationCoordinates`** interface represents the position and altitude of the device on Earth, as well as the accuracy with which these properties are calculated.
The geographic position information is provided in terms of World Geodetic System coordinates (WGS84).

## Instance properties

_The `GeolocationCoordinates` interface doesn't inherit any properties._

- {{domxref("GeolocationCoordinates.latitude")}} {{ReadOnlyInline}}
  - : Returns a `double` representing the position's latitude in decimal degrees.
- {{domxref("GeolocationCoordinates.longitude")}} {{ReadOnlyInline}}
  - : Returns a `double` representing the position's longitude in decimal degrees.
- {{domxref("GeolocationCoordinates.altitude")}} {{ReadOnlyInline}}
  - : Returns a `double` representing the position's altitude in meters, relative to nominal sea level. This value can be `null` if the implementation cannot provide the data.
- {{domxref("GeolocationCoordinates.accuracy")}} {{ReadOnlyInline}}
  - : Returns a `double` representing the accuracy of the `latitude` and `longitude` properties, expressed in meters.
- {{domxref("GeolocationCoordinates.altitudeAccuracy")}} {{ReadOnlyInline}}
  - : Returns a `double` representing the accuracy of the `altitude` expressed in meters. This value can be `null` if the implementation cannot provide the data.
- {{domxref("GeolocationCoordinates.heading")}} {{ReadOnlyInline}}
  - : Returns a `double` representing the direction towards which the device is facing. This value, specified in degrees, indicates how far off from heading true north the device is. `0` degrees represents true north, and the direction is determined clockwise (which means that east is `90` degrees and west is `270` degrees). If `speed` is `0` or the device is unable to provide `heading` information, `heading` is `null`.
- {{domxref("GeolocationCoordinates.speed")}} {{ReadOnlyInline}}
  - : Returns a `double` representing the velocity of the device in meters per second. This value can be `null`.

## Instance methods

_The `GeolocationCoordinates` interface doesn't inherit any methods._

- {{domxref("GeolocationCoordinates.toJSON()")}}
  - : Returns a JSON representation of the `GeolocationCoordinates` object and enables serialization with {{jsxref("JSON.stringify()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}
