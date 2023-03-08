---
title: GeolocationCoordinates
slug: Web/API/GeolocationCoordinates
page-type: web-api-interface
browser-compat: api.GeolocationCoordinates
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`GeolocationCoordinates`** interface represents the position and altitude of the device on Earth, as well as the accuracy with which these properties are calculated.

## Instance properties

_The `GeolocationCoordinates` interface doesn't inherit any properties._

- {{domxref("GeolocationCoordinates.latitude")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : Returns a `double` representing the position's latitude in decimal degrees.
- {{domxref("GeolocationCoordinates.longitude")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : Returns a `double` representing the position's longitude in decimal degrees.
- {{domxref("GeolocationCoordinates.altitude")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : Returns a `double` representing the position's altitude in meters, relative to sea level. This value can be `null` if the implementation cannot provide the data.
- {{domxref("GeolocationCoordinates.accuracy")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : Returns a `double` representing the accuracy of the `latitude` and `longitude` properties, expressed in meters.
- {{domxref("GeolocationCoordinates.altitudeAccuracy")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : Returns a `double` representing the accuracy of the `altitude` expressed in meters. This value can be `null`.
- {{domxref("GeolocationCoordinates.heading")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : Returns a `double` representing the direction towards which the device is facing. This value, specified in degrees, indicates how far off from heading true north the device is. `0` degrees represents true north, and the direction is determined clockwise (which means that east is `90` degrees and west is `270` degrees). If `speed` is `0`, `heading` is [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN). If the device is unable to provide `heading` information, this value is `null`.
- {{domxref("GeolocationCoordinates.speed")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : Returns a `double` representing the velocity of the device in meters per second. This value can be `null`.

## Instance methods

_The `GeolocationCoordinates` interface neither implements, nor inherits any method._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}
