---
title: "GeolocationCoordinates: heading property"
short-title: heading
slug: Web/API/GeolocationCoordinates/heading
page-type: web-api-instance-property
browser-compat: api.GeolocationCoordinates.heading
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`GeolocationCoordinates.heading`** read-only property is
a `double` representing the direction in which the device is traveling. This
value, specified in degrees, indicates how far off from heading due north the device is.
`0` degrees represents true north, and the direction is determined
clockwise (which means that east is `90` degrees and west is `270`
degrees). If {{domxref("GeolocationCoordinates.speed")}} is `0`,
`heading` is
[`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN). If
the device is not able to provide heading information, this value is `null`.

## Value

A `double` representing the direction in which the device is traveling.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}
