---
title: HTMLGeolocationElement
slug: Web/API/HTMLGeolocationElement
page-type: web-api-interface
browser-compat: api.HTMLGeolocationElement
---

{{APIRef("HTML DOM")}}

The **`HTMLGeolocationElement`** interface represents the {{htmlelement("geolocation")}} element, and provides access to its properties and events.

This element is based on, and inherits properties and methods from, the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram}}

## Constructor

- {{domxref("HTMLGeolocationElement.HTMLGeolocationElement", "HTMLGeolocationElement()")}} {{experimental_inline}}
  - : Creates a new `HTMLGeolocationElement` object instance.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("HTMLElement")}}._

- {{domxref("HTMLGeolocationElement.autolocate", "autolocate")}} {{experimental_inline}}
  - : A boolean value indicating whether the browser should immediately request location data when the `<geolocation>` element is rendered, provided permission was previously granted. Mirrors the value of the `<geolocation>` [`autolocate`](/en-US/docs/Web/HTML/Reference/Elements/geolocation#autolocate) attribute.
- {{domxref("HTMLGeolocationElement.error", "error")}} {{readonlyinline}} {{experimental_inline}}
  - : A {{domxref("GeolocationPositionError")}} object representing error information, in the event of a failure to retrieve data.
- {{domxref("HTMLGeolocationElement.initialPermissionStatus", "initialPermissionStatus")}} {{readonlyinline}} {{experimental_inline}}
  - : An enumerated value representing the permission status for the `geolocation` feature when the page first loads.
- {{domxref("HTMLGeolocationElement.invalidReason", "invalidReason")}} {{readonlyinline}} {{experimental_inline}}
  - : An enumerated value representing the reason why the `<geolocation>` element is invalid ([blocked](/en-US/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking)), if that is the case.
- {{domxref("HTMLGeolocationElement.isValid", "isValid")}} {{readonlyinline}} {{experimental_inline}}
  - : A boolean value indicating whether the `<geolocation>` element is valid or invalid (blocked).
- {{domxref("HTMLGeolocationElement.permissionStatus", "permissionStatus")}} {{readonlyinline}} {{experimental_inline}}
  - : A string representing the current permission status for the `geolocation` feature.
- {{domxref("HTMLGeolocationElement.position", "position")}} {{readonlyinline}} {{experimental_inline}}
  - : A {{domxref("GeolocationPosition")}} object representing the user's current position, in the event of successful location data retrieval.
- {{domxref("HTMLGeolocationElement.watch", "watch")}} {{experimental_inline}}
  - : A boolean value indicating whether the browser should request location data continuously, whenever the position of the user's device changes, or only once. Mirrors the value of the `<geolocation>` [`watch`](/en-US/docs/Web/HTML/Reference/Elements/geolocation#watch) attribute.

## Instance methods

_Inherits properties from its parent interface, {{domxref("HTMLElement")}}._

## Events

_Also inherits events from its parent interface, {{domxref("HTMLElement")}}._

- {{domxref("HTMLGeolocationElement.location_event", "location")}} {{experimental_inline}}
  - : Fired whenever the browser receives location data, or error information when the location data request was unsuccessful.
- {{domxref("HTMLGeolocationElement.promptaction_event", "promptaction")}} {{experimental_inline}}
  - : Fired whenever the user activates the `<geolocation>` element and selects an option from the resulting dialog, either to grant or deny `geolocation` permission.
- {{domxref("HTMLGeolocationElement.promptdismiss_event", "promptdismiss")}} {{experimental_inline}}
  - : Fired whenever the user activates the `<geolocation>` element and dismisses the resulting dialog, by pressing the "close" button or the <kbd>Esc</kbd> key.
- {{domxref("HTMLGeolocationElement.validationstatuschange_event", "validationstatuschange")}} {{experimental_inline}}
  - : Fired whenever the `<geolocation>` element's {{domxref("HTMLGeolocationElement.isValid", "isValid")}} value changes.

## Description

The `HTMLGeolocationElement` interface represents the {{htmlelement("geolocation")}} element, which creates an interactive control to allow the user to share their location data with the page in a more consistent and intuitive way than rolling your own solution via the [Geolocation API](/en-US/docs/Web/API/Geolocation_API).

When the user activates the control, they are presented with a dialog box that asks them for permission to share their location data. If they grant permission, the browser will attempt to retrieve the user's location data using the Geolocation API in the background.

By default, the browser requests location data once, as if the {{domxref("Geolocation.getCurrentPosition()")}} method was called. However, if the [`watch`](/en-US/docs/Web/HTML/Reference/Elements/geolocation#watch) attribute is set to `true`, the browser constantly requests the data, as if {{domxref("Geolocation.watchPosition()")}} was called.

When the data request returns, the {{domxref("HTMLGeolocationElement.location_event", "location")}} event fires, allowing you to respond appropriately, for example by grabbing the data and plotting the location on a map.

- If location data is successfully retrieved, it is available in the {{domxref("HTMLGeolocationElement.position")}} property, which contains a {{domxref("GeolocationPosition")}} object.
- If data retrieval is unsuccessful, error information is available in the {{domxref("HTMLGeolocationElement.error")}} property, which contains a {{domxref("GeolocationPositionError")}} object.

The {{domxref("HTMLGeolocationElement.promptaction_event", "promptaction")}} and {{domxref("HTMLGeolocationElement.promptdismiss_event", "promptdismiss")}} events allow you to respond to the user's interactions with the `<geolocation>` dialog box, for example to ask them to make a different choice if they denied permission to access the data.

When a [blocker](/en-US/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking) is active on a {{htmlelement("geolocation")}} element, it is prevented from functioning (invalid), either temporarily or permanently, depending on the reason. You can check whether it is invalid by querying the {{domxref("HTMLGeolocationElement.isValid")}} property. You can also return the reason why it is invalid via the {{domxref("HTMLGeolocationElement.invalidReason")}} property — see that page for a full list of possible reasons.

## Examples

### Basic usage

For minimal examples that use the `<geolocation>` element and its associated `HTMLGeolocationElement` object to return location data, see our [basic example](https://mdn.github.io/dom-examples/geolocation-element/basic-example/) ([source code](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-example)) and [basic watch example](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/) ([source code](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)).

See the [`<geolocation>`](/en-US/docs/Web/HTML/Reference/Elements/geolocation#basic_usage_example) reference page for a walkthrough.

### Embedded map example

This example uses the `<geolocation>` element to retrieve your current location, which is plotted on a map rendered using [Leaflet JS](https://leafletjs.com/). The example also uses a regular `<button>` fallback to retrive the location data in non-supporting browsers.

#### HTML

We include a `<geolocation>` element with an `autolocate` attribute so that the browser will attempt to retrieve location data automatically, provided `geolocation` permission was previously granted. Inside the `<geolocation>` element we nest a {{htmlelement("button")}} fallback, which will be rendered in browsers that do not support `<geolocation>` to enable location data to be requested.

```html
<geolocation autolocate>
  <button id="fallback">Use location</button>
</geolocation>
```

Next, we include a {{htmlelement("p")}} element to print status messages and errors into.

```html
<p id="status">Status:</p>
```

Finally, we include a {{htmlelement("div")}} element to render the map into.

```html
<div id="map"></div>
```

#### JavaScript

In our script, we start off by grabbing a reference to the status `<p>` element:

```js
const statusElem = document.querySelector("#status");
```

Next, we detect whether the `<geolocation>` element is supported by testing `typeof HTMLGeolocationElement === "function"`:

```js
if (typeof HTMLGeolocationElement === "function") {
  // <geolocation> is supported
} else {
  // <geolocation> is not supported; use fallback button
}
```

If `<geolocation>` is supported, the `if` block executes. It starts by grabbing a reference to the `<geolocation>` element:

```js
const geo = document.querySelector("geolocation");
```

Next, we add a {{domxref("HTMLGeolocationElement.location_event", "location")}} event listener to the resulting `HTMLGeolocationElement` object, to detect when the location data request is returned. If the data is returned successfully, we access it via the {{domxref("HTMLGeolocationElement.position")}} property, and retrieve the latitude and longitude values. We log those to the console, then plot them on a map by passing them into the `drawMap()` function (which we will define later) along with a reference to the `HTMLGeolocationElement` object. If the data request fails, we access the error via the {{domxref("HTMLGeolocationElement.error")}} property and log the error message to the console.

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

Next up, we add {{domxref("HTMLGeolocationElement.promptdismiss_event", "promptdismiss")}} and {{domxref("HTMLGeolocationElement.promptaction_event", "promptaction")}} event listeners to the resulting `HTMLGeolocationElement` object. These allow us to run functions in response to the user dismissing the `<geolocation>` prompt, or choosing an option from the prompt, respectively.

```js
geo.addEventListener("promptdismiss", notifyUserRetrySelection);
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

Finally for the `if` block, we define the `notifyUserRetrySelection()` and `notifyUserGrantPermission()` functions referenced in the previous two event listeners. The former prints a message to the status paragraph telling the user to press the button again and allow location, as in this case, we will always want them to retry. The latter uses the {{domxref("HTMLGeolocationElement.permissionStatus")}} property to check whether the permission status is `denied` or `prompt` and if so, we ask them to press the button again and allow location. We don't need to ask this if they already granted permission.

```js
function notifyUserRetrySelection() {
  statusElem.textContent =
    'Please press the "Use location" button again and allow location for this site.';
}

function notifyUserGrantPermission() {
  if (geo.permissionStatus === "denied" || geo.permissionStatus === "prompt") {
    statusElem.textContent =
      'Please press the "Use location" button again and allow location for this site.';
  }
}
```

If `<geolocation>` is not supported, the `else` block executes. This starts by grabbing a reference to the fallback `<button>` element:

```js
const fallback = document.querySelector("#fallback");
```

Next, we add a `click` event handler to the resulting `HTMLButtonElement` object. Inside, we use a {{domxref("Geolocation.getCurrentPosition()")}} call to emulate the success and failure cases in the `HTMLGeolocationElement` code path. The result is the same — we either plot the location data on a map by passing it into the `drawMap()` function (along with a reference to the `HTMLButtonElement` object), or print the error message to the status paragraph.

```js
fallback.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      drawMap(position.coords.latitude, position.coords.longitude, fallback);
    },
    (error) => {
      statusElem.textContent += `${error.message}, `;
    },
  );
});
```

The final step is to define the `drawMap()` function, which takes the latitude and longitude data as arguments, along with a reference to the button that triggered the command. The function body uses [Leaflet JS](https://leafletjs.com/) code (see the [Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/) for an explanation) to plot the user's location on a map, prints a success message to the status paragraph, and hides the button. The last step is a simplification to stop the code erroring if the user presses the button again after success.

```js
function drawMap(lat, long, btn) {
  const map = L.map("map").setView([lat, long], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  const marker = L.marker([lat, long]).addTo(map);

  statusElem.textContent = "Map drawn successfully.";
  btn.style.display = "none";
}
```

#### Result

See this code [running live](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([source code](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)). Try viewing the demos in a supported browser and an unsupported browser if possible, and note the difference in permissions dialog flow when you allow permission to use `geolocation`.

Also try the following:

- After you've allowed `geolocation` permission and seen the map render, try revoking that permission using the available browser controls and then refresh the page to rest the example.
- Now try denying permission to use `geolocation` or dismissing the permission dialog and note how the `promptdismiss` and `promptaction` event listeners we set up earlier cause a message to be printed to the status paragraph to help the user use the page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("geolocation")}} element
- [Geolocation API](/en-US/docs/Web/API/Geolocation_API)
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
- [Introducing the `<geolocation>` HTML element](https://developer.chrome.com/blog/geolocation-html-element) on developer.chrome.com (2026)
