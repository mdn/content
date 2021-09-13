---
title: GeolocationPosition.coords
slug: Web/API/GeolocationPosition/coords
tags:
  - API
  - Geolocation API
  - GeolocationPosition
  - Property
  - Secure context
  - coords
browser-compat: api.GeolocationPosition.coords
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`GeolocationPosition.coords`** read-only property returns
a {{domxref("GeolocationCoordinates")}} object representing a geographic position. It
contains the location, that is longitude and latitude on the Earth, the altitude, and
the speed of the object concerned, regrouped inside the returned value. It also contains
accuracy information about these values.

## Syntax

```js
let coord = geolocationPositionInstance.coords
```

### Value

A {{domxref("GeolocationCoordinates")}} object instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationPosition")}}
