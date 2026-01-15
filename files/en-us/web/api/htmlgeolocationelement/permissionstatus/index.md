---
title: "HTMLGeolocationElement: permissionStatus property"
short-title: permissionStatus
slug: Web/API/HTMLGeolocationElement/permissionStatus
page-type: web-api-instance-property
browser-compat: api.HTMLGeolocationElement.permissionStatus
---

{{APIRef("Navigation API")}}

The **`permissionStatus`** read-only property of the {{domxref("HTMLGeolocationElement")}} interface returns an enumerated value representing the current permission status for the `geolocation` feature.

If you want to access the initial permission status for the `geolocation` feature as it was when the page first loaded, use the {{domxref("HTMLGeolocationElement.initialPermissionStatus")}} property.

## Value

An enumerated value, which can be one of:

- `granted`
  - : The user has granted permission for the browser to use the `geolocation` feature, either via the {{htmlelement("geolocation")}} element or some other mechanism. When using the `<geolocation>` element, this means that the user has pressed the rendered button and selected an "allow" option, at which point the browser will start to request location data.
- `denied`
  - : The user has denied permission for the browser to use the `geolocation` feature, either via the `<geolocation>` element or some other mechanism. When using the `<geolocation>` element, this means that the user has pressed the rendered button and selected a "don't allow" option, at which point the browser will not request location data until the user presses the rendered button again and selects an "allow" option.
- `prompt`
  - : The user has not specifically granted or denied permission for the browser to use the `geolocation` feature, which means that the browser won't request location data until they grant permission. When using the `<geolocation>` element, this means that the user has not yet pressed the rendered button. When they do, they'll be given the option to grant or deny permission for the browser to request location data.

The permission status persists between page loads. If the `<geolocation>` element has its [`autolocate`](/en-US/docs/Web/HTML/Reference/Elements/geolocation#autolocate) attribute set to `true`, and permission was previously granted, the browser will start to request location data as soon as the `<geolocation>` element renders without requiring the user to press the button.

## Examples

### Basic usage

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.permissionStatus);
// "prompt" if this is the first time the user has accessed this page
```

### Using permission status to inform the user

In our [Embedded map](#) example (see [source code](#)), we add a {{domxref("HTMLGeolocationElement.promptaction_event", "promptaction")}} event listener to the `HTMLGeolocationElement` object representing our `<geolocation>` element.

```js
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

In the referenced `notifyUserGrantPermission()` function, we use the `permissionStatus` property to check whether the permission status is `denied` or `prompt` and if so, we ask the user to press the button again and allow location. We don't need to ask this if they grant permission.

```js
function notifyUserGrantPermission() {
  if (geo.permissionStatus === "denied" || geo.permissionStatus === "prompt") {
    statusElem.textContent =
      'Please press the "Use location" button again and allow location for this site.';
  }
}
```

See the main {{domxref("HTMLGeolocationElement")}} page for a full walkthrough of this example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("geolocation")}} element
