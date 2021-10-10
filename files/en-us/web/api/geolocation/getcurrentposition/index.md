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
  - : An optional object including the following parameters:
    - `maximumAge`
      - : Is a positive `long` value indicating the maximum age in milliseconds of a possible cached position that is acceptable to return. If set to `0`, it means that the device cannot use a cached position and must attempt to retrieve the real current position. If set to [`Infinity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity) the device must return a cached position regardless of its age. Default: 0.
    - `timeout`
       : Is a positive `long` value representing the maximum length of time (in milliseconds) the device is allowed to take in order to return a position. The default value is [`Infinity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity), meaning that `getCurrentPosition()` won't return until the position is available.
    - `enableHighAccuracy`
      - : Is a boolean value that indicates the application would like to receive the best possible results. If `true` and if the device is able to provide a more accurate position, it will do so. Note that this can result in slower response times or increased power consumption (with a GPS chip on a mobile device for example). On the other hand, if `false`, the device can take the liberty to save resources by responding more quickly and/or using less power. Default: `false`.


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
