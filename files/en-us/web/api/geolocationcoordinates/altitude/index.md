---
title: "GeolocationCoordinates: altitude property"
short-title: altitude
slug: Web/API/GeolocationCoordinates/altitude
page-type: web-api-instance-property
browser-compat: api.GeolocationCoordinates.altitude
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`GeolocationCoordinates.altitude`** read-only property is
a `double` representing the altitude of the position in meters above the [WGS84](https://gis-lab.info/docs/nima-tr8350.2-wgs84fin.pdf)
ellipsoid (which defines the nominal sea level surface). This value is `null`
if the implementation cannot provide this data.

## Value

A `double` representing the altitude of the position in meters above the [WGS84](https://gis-lab.info/docs/nima-tr8350.2-wgs84fin.pdf)
ellipsoid.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- The {{domxref("GeolocationCoordinates")}} interface it belongs to.
- [National Imagery and Mapping Agency Technical Report 8350.2, Third Edition (WGS84)](https://gis-lab.info/docs/nima-tr8350.2-wgs84fin.pdf)
