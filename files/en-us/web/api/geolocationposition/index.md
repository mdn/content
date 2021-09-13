---
title: GeolocationPosition
slug: Web/API/GeolocationPosition
tags:
  - API
  - Geolocation API
  - GeolocationPosition
  - Interface
  - Secure context
browser-compat: api.GeolocationPosition
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`GeolocationPosition`** interface represents the position of the concerned device at a given time. The position, represented by a {{domxref("GeolocationCoordinates")}} object, comprehends the 2D position of the device, on a spheroid representing the Earth, but also its altitude and its speed.

## Properties

_The `GeolocationPosition` interface doesn't inherit any properties._

- {{domxref("GeolocationPosition.coords")}} {{readonlyInline}} {{securecontext_inline}}
  - : Returns a {{domxref("GeolocationCoordinates")}} object defining the current location.
- {{domxref("GeolocationPosition.timestamp")}} {{readonlyInline}} {{securecontext_inline}}
  - : Returns a {{domxref("DOMTimeStamp")}} representing the time at which the location was retrieved.

## Methods

_The `GeolocationPosition` interface neither implements, nor inherits any methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}
