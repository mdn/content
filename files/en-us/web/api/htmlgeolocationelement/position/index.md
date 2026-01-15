---
title: "HTMLGeolocationElement: position property"
short-title: position
slug: Web/API/HTMLGeolocationElement/position
page-type: web-api-instance-property
browser-compat: api.HTMLGeolocationElement.position
---

{{APIRef("Navigation API")}}

The **`position`** read-only property of the {{domxref("HTMLGeolocationElement")}} interface returns a {{domxref("GeolocationPosition")}} object representing the user's current position, in the event of successful location data retrieval.

## Value

A {{domxref("GeolocationPosition")}} object, or `null` if location data retrieval failed.

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
