---
title: GeolocationCoordinates.longitude
slug: Web/API/GeolocationCoordinates/longitude
page-type: web-api-instance-property
tags:
  - API
  - GPS
  - Geolocation
  - Geolocation API
  - GeolocationCoordinates
  - Global Positioning System
  - Property
  - Read-only
  - Reference
  - Secure context
  - longitude
browser-compat: api.GeolocationCoordinates.longitude
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

The {{domxref("GeolocationCoordinates")}} interface's read-only
**`longitude`** property is a double-precision floating point
value which represents the longitude of a geographical position, specified in decimal
degrees. Together with a {{domxref("DOMTimeStamp")}} indicating a time of measurement,
the `GeolocationCoordinates` object is part of the
{{domxref("GeolocationPosition")}} interface, which is the object type returned by
Geolocation API functions that obtain and return a geographical position.

## Value

The value in `longitude` is the geographical longitude of the location on
Earth described by the `Coordinates` object, in decimal degrees. The value is
defined by the World Geodetic System 1984 specification (WGS 84).

> **Note:** The zero meridian (also known as the prime meridian or the
> reference meridian) is not precisely the same as the Greenwich meridian that most
> people think of. It is, instead, the [IERS Reference Meridian](https://en.wikipedia.org/wiki/IERS_Reference_Meridian), which is located 5.3 [arcseconds](https://en.wikipedia.org/wiki/Arcseconds) (102
> meters / 335 feet) east of the [Greenwich meridian](https://en.wikipedia.org/wiki/Greenwich_meridian). This
> is the same standard used by the [Global Positioning System](https://en.wikipedia.org/wiki/Global_Positioning_System) (GPS).

## Examples

In this simple example, we fetch the user's location and display the resulting
coordinates once they're returned.

### JavaScript

The JavaScript code below creates an event listener so that when the user clicks on a
button, the location information is retrieved and displayed.

```js
let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    latText.innerText = lat.toFixed(2);
    longText.innerText = long.toFixed(2);
  });
});
```

After setting up variables to more conveniently reference the button element and the
two elements into which the latitude and longitude will be drawn, the event listener is
established by calling {{domxref("EventTarget.addEventListener", "addEventListener()")}}
on the {{HTMLElement("button")}} element. When the user clicks the button, we'll fetch
and display the location information.

Upon receiving a {{domxref("Element/click_event", "click")}} event, we call
{{domxref("Geolocation.getCurrentPosition", "getCurrentPosition()")}} to request the
device's current position. This is an asynchronous request, so we provide a callback
which receives as in put a {{domxref("GeolocationPosition")}} object describing the
determined position.

From the `GeolocationPosition` object, we obtain the user's latitude and
longitude using {{domxref("GeolocationCoordinates/latitude", "position.coords.latitude")}} and
`position.coords.longitude` so we can update the displayed coordinates. The
two {{HTMLElement("span")}} elements are updated to display the corresponding values
after being converted to a value with two decimal places.

### HTML

The HTML used to present the results looks like this:

```html
<p>
  Your location is <span id="latitude">0.00</span>°
  latitude by <span id="longitude">0.00</span>° longitude.
</p>
<button id="get-location">
  Get My Location
</button>
```

### Result

Take this example for a test drive here:

{{EmbedLiveSample("Examples", 600, 120)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- The {{domxref("GeolocationCoordinates")}} interface it belongs to.
- The {{domxref("GeolocationPosition")}} interface, which is the top-level interface
  used to return geolocation data from the Geolocation API functions
  {{domxref("Geolocation.getCurrentPosition()")}} and
  {{domxref("Geolocation.watchPosition", "watchPosition()")}}.
