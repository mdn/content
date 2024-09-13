---
title: Using the Geolocation API
slug: Web/API/Geolocation_API/Using_the_Geolocation_API
page-type: guide
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

The Geolocation API is used to retrieve the user's location, so that it can for example be used to display their position using a mapping API. This article explains the basics of how to use it.

## The geolocation object

The [Geolocation API](/en-US/docs/Web/API/Geolocation) is available through the {{domxref("navigator.geolocation")}} object.

If the object exists, geolocation services are available. You can test for the presence of geolocation thusly:

```js
if ("geolocation" in navigator) {
  /* geolocation is available */
} else {
  /* geolocation IS NOT available */
}
```

### Getting the current position

To obtain the user's current location, you can call the {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} method. This initiates an asynchronous request to detect the user's position, and queries the positioning hardware to get up-to-date information. When the position is determined, the defined callback function is executed. You can optionally provide a second callback function to be executed if an error occurs. A third, optional, parameter is an options object where you can set the maximum age of the position returned, the time to wait for a request, and if you want high accuracy for the position.

> [!NOTE]
> By default, {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} tries to answer as fast as possible with a low accuracy result. It is useful if you need a quick answer regardless of the accuracy. Devices with a GPS, for example, can take a minute or more to get a GPS fix, so less accurate data (IP location or Wi-Fi) may be returned to `getCurrentPosition()`.

```js
navigator.geolocation.getCurrentPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

The above example will cause the `doSomething()` function to execute when the location is obtained.

### Watching the current position

If the position data changes (either by device movement or if more accurate geo information arrives), you can set up a callback function that is called with that updated position information. This is done using the {{domxref("Geolocation.watchPosition","watchPosition()")}} function, which has the same input parameters as {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}}. The callback function is called multiple times, allowing the browser to either update your location as you move, or provide a more accurate location as different techniques are used to geolocate you. The error callback function, which is optional just as it is for `getCurrentPosition()`, can be called repeatedly.

> [!NOTE]
> You can use {{domxref("Geolocation.watchPosition","watchPosition()")}} without an initial {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} call.

```js
const watchID = navigator.geolocation.watchPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

The {{domxref("Geolocation.watchPosition","watchPosition()")}} method returns an ID number that can be used to uniquely identify the requested position watcher; you use this value in tandem with the {{domxref("Geolocation.clearWatch","clearWatch()")}} method to stop watching the user's location.

```js
navigator.geolocation.clearWatch(watchID);
```

### Fine tuning the response

Both {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} and {{domxref("Geolocation.watchPosition","watchPosition()")}} accept a success callback, an optional error callback, and an optional options object.

This object allows you to specify whether to enable high accuracy, a maximum age for the returned position value (up until this age it will be cached and reused if the same position is requested again; after this the browser will request fresh position data), and a timeout value that dictates how long the browser should attempt to get the position data for, before it times out.

A call to {{domxref("Geolocation.watchPosition","watchPosition")}} could look like:

```js
function success(position) {
  doSomething(position.coords.latitude, position.coords.longitude);
}

function error() {
  alert("Sorry, no position available.");
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

const watchID = navigator.geolocation.watchPosition(success, error, options);
```

## Describing a position

The user's location is described using a {{domxref("GeolocationPosition")}} object instance, which itself contains a {{domxref("GeolocationCoordinates")}} object instance.

The `GeolocationPosition` instance contains only two things, a `coords` property that contains the `GeolocationCoordinates` instance, and a `timestamp` property that contains a timestamp, given as {{Glossary("Unix time")}} in milliseconds, at which the position data was retrieved.

The `GeolocationCoordinates` instance contains a number of properties, but the two you'll use most commonly are `latitude` and `longitude`, which are what you need to draw your position on a map. Hence many Geolocation success callbacks look fairly simple:

```js
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Do something with your latitude and longitude
}
```

You can however get a number of other bits of information from a `GeolocationCoordinates` object, including altitude, speed, what direction the device is facing, and an accuracy measure of the altitude, longitude, and latitude data.

## Handling errors

The error callback function, if provided when calling `getCurrentPosition()` or `watchPosition()`, expects a [`GeolocationPositionError`](/en-US/docs/Web/API/GeolocationPositionError) object instance as its first parameter. This object type contains two properties, a `code` indicating what type of error has been returned, and a human-readable `message` that describes what the error code means.

You could use it like so:

```js
function errorCallback(error) {
  alert(`ERROR(${error.code}): ${error.message}`);
}
```

## Examples

In the following example the Geolocation API is used to retrieve the user's latitude and longitude. If successful, the available hyperlink is populated with an `openstreetmap.org` URL that will show their location.

```css hidden
body {
  padding: 20px;
  background-color: #ffffc9;
}

button {
  margin: 0.5rem 0;
}
```

### HTML

```html
<button id="find-me">Show my location</button><br />
<p id="status"></p>
<a id="map-link" target="_blank"></a>
```

### JavaScript

```js
function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);
```

### Result

{{EmbedLiveSample('Examples', 350, 150, "", "", "", "geolocation")}}
