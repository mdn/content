---
title: Geolocation.getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
tags:
  - API
  - Geolocation
  - Geolocation API
  - Method
  - Reference
  - Secure context
  - getCurrentPosition
browser-compat: api.Geolocation.getCurrentPosition
---
{{securecontext_header}}{{ APIRef("Geolocation API") }}

The
**`Geolocation.getCurrentPosition()`** method is used to get
the current position of the device.

## Syntax

```js
navigator.geolocation.getCurrentPosition(success, error, [options])
```

### Parameters

- `success`
  - : A callback function that takes a {{domxref("GeolocationPosition")}} object as its
    sole input parameter.
- `error` {{optional_inline}}
  - : An optional callback function that takes a {{domxref("GeolocationPositionError")}}
    object as its sole input parameter.
- `options` {{optional_inline}}

  - : An optional {{domxref("PositionOptions")}} object.
    Options includes:

    - `maximumAge`: integer (milliseconds) | infinity - maximum cached
      position age.
    - `timeout`: integer (milliseconds) - amount of time before the error
      callback is invoked, if 0 it will never invoke.
    - `enableHighAccuracy`: false | true

## Examples

```js
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the
  Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Navigator.geolocation")}}
