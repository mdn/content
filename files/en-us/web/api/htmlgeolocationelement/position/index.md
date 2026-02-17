---
title: "HTMLGeolocationElement: position property"
short-title: position
slug: Web/API/HTMLGeolocationElement/position
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLGeolocationElement.position
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`position`** read-only property of the {{domxref("HTMLGeolocationElement")}} interface returns a {{domxref("GeolocationPosition")}} object representing the user's position, in the event of successful location data retrieval.

The retrieved position may or may not be up to date. The user's position will only be retrieved once when the `<geolocation>` element's button control is pressed, unless you set the [`watch`](/en-US/docs/Web/HTML/Reference/Elements/geolocation#watch) attribute to `true`, in which case a new position will be retrieved each time the user's device moves. To read the user's current position, you should read the `position` property in response to the {{domxref("HTMLGeolocationElement.location_event", "location")}} event firing.

If location data retrieval fails, associated error information will be available in the {{domxref("HTMLGeolocationElement.error")}} property.

## Value

A {{domxref("GeolocationPosition")}} object, or `null` if location data retrieval failed or data has not yet been retrieved.

## Examples

### Basic usage

```html
<geolocation autolocate></geolocation>
```

```js
const geo = document.querySelector("geolocation");
geo.addEventListener("location", () => {
  if (geo.position) {
    console.log(
      `(${geo.position.coords.latitude},${geo.position.coords.longitude})`,
    );
  } else if (geo.error) {
    console.log(geo.error.message);
  }
});
```

See our [Embedded map example walkthrough](/en-US/docs/Web/API/HTMLGeolocationElement#embedded_map_example) for a real-world example that includes `position`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("geolocation")}} element
