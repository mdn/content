---
title: GeolocationPosition
slug: Web/API/GeolocationPosition
page-type: web-api-interface
browser-compat: api.GeolocationPosition
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`GeolocationPosition`** interface represents the position of the concerned device at a given time. The position, represented by a {{domxref("GeolocationCoordinates")}} object, comprehends the 2D position of the device, on a spheroid representing the Earth, but also its altitude and its speed.

## Instance properties

_The `GeolocationPosition` interface doesn't inherit any properties._

- {{domxref("GeolocationPosition.coords")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : Returns a {{domxref("GeolocationCoordinates")}} object defining the current location.
- {{domxref("GeolocationPosition.timestamp")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : Returns a timestamp, given as [Unix time](/en-US/docs/Glossary/Unix_time) in milliseconds, representing the time at which the location was retrieved.

## Instance methods

_The `GeolocationPosition` interface neither implements, nor inherits any methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}
