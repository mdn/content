---
title: "HTMLGeolocationElement: location event"
short-title: location
slug: Web/API/HTMLGeolocationElement/location_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.HTMLGeolocationElement.location_event
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`location`** event of the {{domxref("HTMLGeolocationElement")}} interface is fired whenever the browser receives location data, or error information when a location data request was unsuccessful.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("location", (event) => { })

onlocation = (event) => { }
```

## Event type

An {{domxref("Event")}}.

## Examples

### Using `location` to respond to location data and errors

In our [Embedded map demo](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([source code](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)), we use a `location` event handler to respond to location data and errors being received:

```js
geo.addEventListener("location", () => {
  if (geo.position) {
    console.log(
      `${geo.position.coords.latitude},${geo.position.coords.longitude}`,
    );
    drawMap(geo.position.coords.latitude, geo.position.coords.longitude, geo);
  } else if (geo.error) {
    console.log(geo.error.message);
  }
});
```

If location data is returned successfully, we access it via the {{domxref("HTMLGeolocationElement.position")}} property, and retrieve the latitude and longitude values. We log those to the console, then plot them on a map by passing them into the `drawMap()` function along with a reference to the `HTMLGeolocationElement` object. If the data request fails, we access the error via the {{domxref("HTMLGeolocationElement.error")}} property and log the error message to the console.

See the main {{domxref("HTMLGeolocationElement")}} page for a full walkthrough of this example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("geolocation")}} element
