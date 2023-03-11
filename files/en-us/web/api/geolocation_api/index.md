---
title: Geolocation API
slug: Web/API/Geolocation_API
page-type: web-api-overview
browser-compat: api.Geolocation
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

The **Geolocation API** allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.

WebExtensions that wish to use the `Geolocation` object must add the `"geolocation"` permission to their manifest. The user's operating system will prompt the user to allow location access the first time it is requested.

## Concepts and usage

You will often want to retrieve a user's location information in your web app, for example to plot their location on a map, or display personalized information relevant to their location.

The Geolocation API is accessed via a call to {{domxref("Navigator.geolocation", "navigator.geolocation")}}; this will cause the user's browser to ask them for permission to access their location data. If they accept, then the browser will use the best available functionality on the device to access this information (for example, GPS).

The developer can now access this location information in a couple of different ways:

- {{domxref("Geolocation.getCurrentPosition()")}}: Retrieves the device's current location.
- {{domxref("Geolocation.watchPosition()")}}: Registers a handler function that will be called automatically each time the position of the device changes, returning the updated location.

In both cases, the method call takes up to three arguments:

- A mandatory success callback: If the location retrieval is successful, the callback executes with a {{domxref("GeolocationPosition")}} object as its only parameter, providing access to the location data.
- An optional error callback: If the location retrieval is unsuccessful, the callback executes with a {{domxref("GeolocationPositionError")}} object as its only parameter, providing access information on what went wrong.
- An optional object which provides options for retrieval of the position data.

For further information on Geolocation usage, read [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

## Interfaces

- {{domxref("Geolocation")}}
  - : The main class of this API — contains methods to retrieve the user's current position, watch for changes in their position, and clear a previously-set watch.
- {{domxref("GeolocationPosition")}}
  - : Represents the position of a user. A `GeolocationPosition` instance is returned by a successful call to one of the methods contained inside {{domxref("Geolocation")}}, inside a success callback, and contains a timestamp plus a {{domxref("GeolocationCoordinates")}} object instance.
- {{domxref("GeolocationCoordinates")}}
  - : Represents the coordinates of a user's position; a `GeolocationCoordinates` instance contains latitude, longitude, and other important related information.
- {{domxref("GeolocationPositionError")}}
  - : A `GeolocationPositionError` is returned by an unsuccessful call to one of the methods contained inside {{domxref("Geolocation")}}, inside an error callback, and contains an error code and message.
- {{domxref("Navigator.geolocation")}}
  - : The entry point into the API. Returns a {{domxref("Geolocation")}} object instance, from which all other functionality can be accessed.

## Examples

See [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Availability

As Wi-Fi-based locating is often provided by Google, the vanilla Geolocation API may be unavailable in China. You may use local third-party providers such as [Baidu](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation), or [Tencent](https://lbs.qq.com/tool/component-geolocation.html). These services use the user's IP address and/or a local app to provide enhanced positioning.

## See also

- [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [Geolocation API on w3.org](https://www.w3.org/TR/geolocation/)
- [Who moved my geolocation?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks blog)
