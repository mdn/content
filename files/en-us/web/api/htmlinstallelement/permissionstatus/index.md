---
title: "HTMLInstallElement: permissionStatus property"
short-title: permissionStatus
slug: Web/API/HTMLInstallElement/permissionStatus
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLInstallElement.permissionStatus
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`permissionStatus`** read-only property of the {{domxref("HTMLInstallElement")}} interface returns an enumerated value representing the current permission status for the `web-app-installation` feature.

If you want to access the initial permission status for the `web-app-installation` feature as it was when the page first loaded, use the {{domxref("HTMLInstallElement.initialPermissionStatus", "initialPermissionStatus")}} property.

## Value

An enumerated value, which can be one of:

- `granted`
  - : The user has granted permission for the browser to use the `web-app-installation` feature, either via the {{htmlelement("install")}} element or the {{domxref("Navigator.install()")}} method. When using the `<install>` element, this means that the user has pressed the rendered button and selected an "allow" option.
- `denied`
  - : The user has denied permission for the browser to use the `web-app-installation` feature. When using the `<install>` element, this means that the user has pressed the rendered button and selected a "don't allow" option.
- `prompt`
  - : The user has not specifically granted or denied permission for the browser to use the `web-app-installation` feature.

The permission status persists between page loads.

## Examples

### Basic usage

```html
<install></install>
```

```js
const installElem = document.querySelector("install");
console.log(installElem.permissionStatus);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("install")}} element
