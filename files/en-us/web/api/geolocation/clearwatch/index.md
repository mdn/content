---
title: Geolocation.clearWatch()
slug: Web/API/Geolocation/clearWatch
page-type: web-api-instance-method
tags:
  - API
  - Geolocation
  - Geolocation API
  - Method
  - NeedsExample
  - Reference
  - Secure context
browser-compat: api.Geolocation.clearWatch
---
{{securecontext_header}}{{ APIref("Geolocation API") }}

The **`Geolocation.clearWatch()`** method is used to unregister
location/error monitoring handlers previously installed using
{{domxref("Geolocation.watchPosition()")}}.

## Syntax

```js
clearWatch(id)
```

### Parameters

- `id`
  - : The ID number returned by the {{domxref("Geolocation.watchPosition()")}} method when
    installing the handler you wish to remove.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
let id;
let target;
let options;

function success(pos) {
  const crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log('Congratulations, you\'ve reached the target!');
    navigator.geolocation.clearWatch(id);
  }
};

function error(err) {
  console.error(`ERROR(${err.code}): ${err.message}`);
};

target = {
  latitude : 0,
  longitude: 0,
}

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using geolocation](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}
- {{domxref("Geolocation.watchPosition()")}}
- {{domxref("Geolocation.getCurrentPosition()")}}
