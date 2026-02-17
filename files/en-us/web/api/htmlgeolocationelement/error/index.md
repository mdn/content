---
title: "HTMLGeolocationElement: error property"
short-title: error
slug: Web/API/HTMLGeolocationElement/error
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLGeolocationElement.error
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`error`** read-only property of the {{domxref("HTMLGeolocationElement")}} interface returns a {{domxref("GeolocationPositionError")}} object representing error information, in the event of a failure to retrieve location data.

If location data retrieval is successful, the data is available in the {{domxref("HTMLGeolocationElement.position")}} property.

## Value

A {{domxref("GeolocationPositionError")}} object, or `null` if location data was successfully retrieved.

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

See our [Embedded map example walkthrough](/en-US/docs/Web/API/HTMLGeolocationElement#embedded_map_example) for a real-world example that includes `error`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("geolocation")}} element
