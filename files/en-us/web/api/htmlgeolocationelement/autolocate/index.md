---
title: "HTMLGeolocationElement: autolocate property"
short-title: autolocate
slug: Web/API/HTMLGeolocationElement/autolocate
page-type: web-api-instance-property
browser-compat: api.HTMLGeolocationElement.autolocate
---

{{APIRef("Navigation API")}}

The **`autolocate`** property of the {{domxref("HTMLGeolocationElement")}} interface gets and sets a boolean value indicating whether the browser should immediately request location data when the {{htmlelement("geolocation")}} element is rendered, provided permission to use the `geolocation` feature is already granted.

It reflects the value of the `<geolocation>` [`autolocate`](/en-US/docs/Web/HTML/Reference/Elements/geolocation#autolocate) attribute.

## Value

A boolean value:

- If `true`, location data is requested as soon as the `<geolocation>` element is rendered, provided permission to use the `geolocation` feature was previously granted.
- If `false`, location data is only requested when the user presses the `<geolocation>` button.

Defaults to `false`.

If permission to use the `geolocation` feature was not previously granted, the `autolocate` property is ignored.

## Examples

### Basic usage

```html
<geolocation autolocate></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.autolocate); // true
```

See our [Embedded map example walkthrough](/en-US/docs/Web/API/HTMLGeolocationElement#embedded_map_example) for a real-world example that includes `autolocate`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("geolocation")}} element
