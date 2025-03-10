---
title: "Geolocation: watchPosition() method"
short-title: watchPosition()
slug: Web/API/Geolocation/watchPosition
page-type: web-api-instance-method
browser-compat: api.Geolocation.watchPosition
---

{{securecontext_header}}{{ APIref("Geolocation API") }}

The **`watchPosition()`** method of the {{domxref("Geolocation")}} interface is used to register a handler function that will be called automatically each time the position of the device changes.
You can also, optionally, specify an error handling callback function.

Note that in addition to requiring a secure context this feature may be blocked by the [`geolocation`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/geolocation) `Permissions-Policy`, and also requires that explicit permission be granted by the user.
If required, the user will be prompted when this method is called.
The permission state can be queried using the `geolocation` user permission in the [Permissions API](/en-US/docs/Web/API/Permissions_API).

## Syntax

```js-nolint
watchPosition(success)
watchPosition(success, error)
watchPosition(success, error, options)
```

### Parameters

- `success`
  - : A callback function that takes a {{domxref("GeolocationPosition")}} object as an input parameter.
- `error` {{optional_inline}}
  - : An optional callback function that takes a {{domxref("GeolocationPositionError")}} object as an input parameter.
- `options` {{optional_inline}}
  - : An optional object that provides configuration options for the location watch.
    See {{domxref("Geolocation.getCurrentPosition()")}} for more details on possible options.

### Return value

An integer ID that identifies the registered handler.
The ID can be passed to the {{domxref("Geolocation.clearWatch()")}} to unregister the handler.

## Examples

```js
let id;
let target;
let options;

function success(pos) {
  const crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Congratulations, you reached the target");
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.error(`ERROR(${err.code}): ${err.message}`);
}

target = {
  latitude: 0,
  longitude: 0,
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

id = navigator.geolocation.watchPosition(success, error, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- The interface it belongs to, {{domxref("Geolocation")}}, and the way to access it —
  {{domxref("Navigator.geolocation")}}.
- The opposite operation: {{domxref("Geolocation.clearWatch()")}}
- A similar method: {{domxref("Geolocation.getCurrentPosition()")}}
