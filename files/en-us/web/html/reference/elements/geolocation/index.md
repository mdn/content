---
title: "`<geolocation>` HTML geolocation element"
short-title: <geolocation>
slug: Web/HTML/Reference/Elements/geolocation
page-type: html-element
status:
  - experimental
browser-compat: html.elements.geolocation
sidebar: htmlsidebar
---

{{SeeCompatTable}}

The **`<geolocation>`** [HTML](/en-US/docs/Web/HTML) element creates an interactive control for the user to share their location data with the page.

It provides:

- An intuitive browser-defined UI.
- A process for handling the necessary permissions for the `geolocation` feature.
- API features for accessing location data and responding to received location data and permission changes.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

- `autolocate` {{experimental_inline}}
  - : A boolean attribute that, when set to `true`, specifies that the browser should immediately retrieve location data when the `<geolocation>` element is rendered, provided permission was previously granted. If set to `false`, location data is not retrieved until the user activates the control. Defaults to `false`.

    If permission was not previously granted, this attribute has no effect.

- `watch` {{experimental_inline}}
  - : A boolean attribute that, when set to `true`, specifies that the browser should retrieve location data whenever the position of the user's device changes. If set to `false`, location data is only retrieved once. Defaults to `false`.

## Description

The `<geolocation>` element provides a declarative browser-defined control for sharing location data. In Chrome, for example, the button features a "map pin" icon and intuitive text ("Use location" in English content). It one one of the [permission elements](/en-US/docs/Web/HTML/Guides/Permission_elements).

It also allows for intuitive management of user permissions.
For example, in Chrome, if the user previously denied permission to access location data, or dismissed the permission dialog without making a choice, they are free to press the button again to update their choice.
In cases where they previously denied permission, subsequent dialogs will inform them that they previously didn't allow location data to be shared, and ask them whether they want to continue not allowing it, or to allow it.

The element's DOM API interface, {{domxref("HTMLGeolocationElement")}}, provides features to access returned position data, current permission status, and errors if the data retrieval was unsuccessful, reducing the amount of JavaScript logic that needs to be written. It also has events available to run code in response to location data being received, changes in permission status, and user interactions with the permission dialog.

> [!NOTE]
> For performance reasons, a maximum of three `<geolocation>` elements are allowed on any one page. If this quota is exceeded, all `<geolocation>` elements have their functionality disabled.

See our [Permission elements](/en-US/docs/Web/HTML/Guides/Permission_elements) guide for more information on features that `<geolocation>` shares with the other permission elements, such as setting the button language, including fallback content, validation and blocking mechanism, styling restrictions, and accessibility features.

### Relationship with the Geolocation API

The [Geolocation API](/en-US/docs/Web/API/Geolocation_API) provides an older alternative for handling location data. This API has some shortcomings that the `<geolocation>` element aims to solve, most notably that the UI and underlying logic for requesting the data needs to be implemented from scratch each time, and the handling of permissions can be unintuitive.

The `<geolocation>` element uses features of the Geolocation API in the background. By default, the browser requests location data once, as if the {{domxref("Geolocation.getCurrentPosition()")}} method was called. However, if the `watch` attribute is set to `true`, the browser updates the data whenever the device position changes, as if {{domxref("Geolocation.watchPosition()")}} was called.

If data is successfully retrieved, it is available in the {{domxref("HTMLGeolocationElement.position")}} property, which contains a {{domxref("GeolocationPosition")}} object. If data retrieval is unsuccessful, error information is available in the {{domxref("HTMLGeolocationElement.error")}} property, which contains a {{domxref("GeolocationPositionError")}} object.

## Examples

### Basic usage example

This example uses the `<geolocation>` element to retrieve your current location, which is printed out below the button in a {{htmlelement("p")}} element. The example also uses a regular `<button>` fallback to retrieve the location data in non-supporting browsers.

#### HTML

We include a `<geolocation>` element with a `<button>` fallback nested inside it, which will be rendered in browsers that do not support `<geolocation>`. We also include a `<p>` to output location data and errors into.

```html
<geolocation>
  <button id="fallback">Use location</button>
</geolocation>
<p id="output"></p>
```

#### JavaScript

In our script, we start off by grabbing a reference to the output `<p>` element. We then detect whether the `<geolocation>` element is supported by testing `typeof HTMLGeolocationElement === "function"`:

- If it is supported, we first grab a reference to the `<geolocation>` element and then add a {{domxref("HTMLGeolocationElement.location_event", "location")}} event listener.
  When the button is pressed and the data is retrieved, the listener prints the (lat, long) coordinates to the output `<p>` (retrieved via the {{domxref("HTMLGeolocationElement.position", "position")}} property), or an error message if the data retrieval was unsuccessful (retrieved via the {{domxref("HTMLGeolocationElement.error", "error")}} property).
- If it isn't supported, we grab a reference to the fallback `<button>` element and retrieve and print the same data, except that this time we are using a `click` event listener on the button, and a {{domxref("Geolocation.getCurrentPosition()")}} call to retrieve the data.

```js
const outputElem = document.querySelector("#output");

if (typeof HTMLGeolocationElement === "function") {
  const geo = document.querySelector("geolocation");
  geo.addEventListener("location", () => {
    if (geo.position) {
      outputElem.textContent += `(${geo.position.coords.latitude},${geo.position.coords.longitude}), `;
    } else if (geo.error) {
      outputElem.textContent += `${geo.error.message}, `;
    }
  });
} else {
  const fallback = document.querySelector("#fallback");
  fallback.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        outputElem.textContent += `(${position.coords.latitude}, ${position.coords.longitude}), `;
      },
      (error) => {
        outputElem.textContent += `${error.message}, `;
      },
    );
  });
}
```

#### Result

See this code [running live](https://mdn.github.io/dom-examples/geolocation-element/basic-example/) ([source code](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-example)). You can also find a version of this example that includes the `watch` attribute on the `<geolocation>` element and therefore fetches location data each time the user's device position changes (see it [running live](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/), and the [source code](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)).

Try viewing the demos in a supported browser and an unsupported browser if possible, and note the difference in permissions dialog flow when you choose to allow or deny permission to use `geolocation`.

For a walkthrough of a more complete example that uses location data to create a map of your local area, see the {{domxref("HTMLGeolocationElement")}} reference page.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        >, interactive content, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>Any suitable transparent fallback content.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>Any element that accepts phrasing content.</td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLGeolocationElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLGeolocationElement")}}
- The {{httpheader("Permissions-Policy/geolocation", "geolocation")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
- [Geolocation API](/en-US/docs/Web/API/Geolocation_API)
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
- [Introducing the `<geolocation>` HTML element](https://developer.chrome.com/blog/geolocation-html-element) on developer.chrome.com (2026)
