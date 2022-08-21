---
title: GeolocationPositionError
slug: Web/API/GeolocationPositionError
page-type: web-api-interface
tags:
  - API
  - Geolocation API
  - GeolocationPositionError
  - Interface
  - Secure context
browser-compat: api.GeolocationPositionError
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`GeolocationPositionError`** interface represents the reason of an error occurring when using the geolocating device.

## Properties

_The `GeolocationPositionError` interface doesn't inherit any property._

- {{domxref("GeolocationPositionError.code")}} {{ReadOnlyInline}} {{securecontext_inline}}

  - : Returns an `unsigned short` representing the error code. The following values are possible:

    | Value | Associated constant    | Description                                                                                                                                                               |
    | ----- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `1`   | `PERMISSION_DENIED`    | The acquisition of the geolocation information failed because the page didn't have the permission to do it.                                                               |
    | `2`   | `POSITION_UNAVAILABLE` | The acquisition of the geolocation failed because at least one internal source of position returned an internal error.                                                    |
    | `3`   | `TIMEOUT`              | The time allowed to acquire the geolocation was reached before the information was obtained. |

- {{domxref("GeolocationPositionError.message")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : Returns a human-readable string describing the details of the error. Specifications note that this is primarily intended for debugging use and not to be shown directly in a user interface.

## Methods

_The `GeolocationPositionError` interface neither implements nor inherits any method._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}
