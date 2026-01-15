---
title: "HTMLGeolocationElement: isValid property"
short-title: isValid
slug: Web/API/HTMLGeolocationElement/isValid
page-type: web-api-instance-property
browser-compat: api.HTMLGeolocationElement.isValid
---

{{APIRef("Navigation API")}}

The **`isValid`** read-only property of the {{domxref("HTMLGeolocationElement")}} interface returns a boolean value indicating whether the associated {{htmlelement("geolocation")}} element is valid or invalid (blocked).

When a [blocker](/en-US/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking) is active on a `<geolocation>` element, it is prevented from functioning (invalid), either temporarily or permanently, depending on the reason.

You can return the reason why it is invalid via the {{domxref("HTMLGeolocationElement.invalidReason")}} property — see that page for a full list of possible reasons.

## Value

A boolean value:

- If `true`, the `<geolocation>` element is valid and functional, meaning that it can be used to request location data.
- If `false`, the `<geolocation>` element is invalid and non-functional, meaning that it can't be used to request location data.

Defaults to `false`.

## Examples

### Basic usage

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.isValid);
// true, provided the `<geolocation>` element is not blocked in some way
```

See the {{domxref("HTMLGeolocationElement.invalidReason")}} page for a more functional example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("geolocation")}} element
