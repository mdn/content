---
title: "HTMLGeolocationElement: initialPermissionStatus property"
short-title: initialPermissionStatus
slug: Web/API/HTMLGeolocationElement/initialPermissionStatus
page-type: web-api-instance-property
browser-compat: api.HTMLGeolocationElement.initialPermissionStatus
---

{{APIRef("Navigation API")}}

The **`initialPermissionStatus`** read-only property of the {{domxref("HTMLGeolocationElement")}} interface returns an enumerated value representing the initial permission status for the `geolocation` feature, when the page first loads.

If you want to access the current permission status for the `geolocation` feature, use the {{domxref("HTMLGeolocationElement.permissionStatus")}} property.

## Value

An enumerated value, which can be one of:

- `granted`
  - : The user previously granted permission for the browser to use the `geolocation` feature, either via the {{htmlelement("geolocation")}} element or some other mechanism. When using the `<geolocation>` element, this means that the user previously pressed the rendered button and selected an "allow" option.

    If the `<geolocation>` element has its [`autolocate`](/en-US/docs/Web/HTML/Reference/Elements/geolocation#autolocate) attribute set to `true`, and permission was previously granted, the browser will start to request location data as soon as the page loads without requiring the user to press the button.

- `denied`
  - : The user previously denied permission for the browser to use the `geolocation` feature, either via the `<geolocation>` element or some other mechanism. When using the `<geolocation>` element, this means that the user previously pressed the rendered button and selected a "don't allow" option.
- `prompt`
  - : The user has not previously granted or denied permission for the browser to use the `geolocation` feature. When using the `<geolocation>` element, this means that the user has not previously pressed the rendered button.

## Examples

### Basic usage

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.initialPermissionStatus);
// "granted" if the user previously granted permission before reloading the page
```

### Using initial permission status to inform the user on page load

In our [Initial permission status](#) example (see [source code](#)), we use initial permission status to print an appropriate message to the screen informing the user what action the {{htmlelement("geolocation")}} button will perform.

#### HTML

We include a `<geolocation>` element and two {{htmlelement("p")}} elements, one to output permission status messages to, and one to output location data to.

```html
<geolocation></geolocation>
<p id="status"></p>
<p id="output"></p>
```

#### JavaScript

In our JavaScript, we start by grabbing references to all three of our HTML elements:

```js
const statusElem = document.querySelector("#status");
const outputElem = document.querySelector("#output");
const geo = document.querySelector("geolocation");
```

Next, we include an `if...else if` structure that checks what the `initialPermissionStatus` is, and prints a status message to the screen to inform the user what the status is, what they need to do to use the app, and what the button will do when pressed.

```js
if (geo.initialPermissionStatus === "prompt") {
  statusElem.textContent =
    "Please press the button to allow access to your location data and start requesting it.";
} else if (geo.initialPermissionStatus === "denied") {
  statusElem.textContent =
    "Permission previously denied. Please press the button to allow access to your location data and start requesting it.";
} else if (geo.initialPermissionStatus === "granted") {
  statusElem.textContent =
    "Permission previously granted. Please press the button to start requesting location data.";
}
```

Finally, we we add a {{domxref("HTMLGeolocationElement.location_event", "location")}} event listener to the `HTMLGeolocationElement` object, to detect when the location data request is returned. If the data is returned successfully, we access it via the {{domxref("HTMLGeolocationElement.position")}} property, and print the latitude and longitude values to the output paragraph. If the data request fails, we access the error via the {{domxref("HTMLGeolocationElement.error")}} property and print it to the output paragraph.

```js
geo.addEventListener("location", () => {
  statusElem.textContent = "Data requested";
  if (geo.position) {
    outputElem.textContent += `(${geo.position.coords.latitude},${geo.position.coords.longitude}), `;
  } else if (geo.error) {
    outputElem.textContent += `${geo.error.message}, `;
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("geolocation")}} element
