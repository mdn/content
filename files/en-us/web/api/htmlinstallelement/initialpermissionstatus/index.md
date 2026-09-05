---
title: "HTMLInstallElement: initialPermissionStatus property"
short-title: initialPermissionStatus
slug: Web/API/HTMLInstallElement/initialPermissionStatus
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLInstallElement.initialPermissionStatus
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`initialPermissionStatus`** read-only property of the {{domxref("HTMLInstallElement")}} interface returns an enumerated value representing the permission status for the `web-app-installation` feature when the page first loads.

If you want to access the current permission status for the `web-app-installation` feature, use the {{domxref("HTMLInstallElement.permissionStatus")}} property.

## Value

An enumerated value, which can be one of:

- `granted`
  - : The user previously granted permission for the browser to use the `web-app-installation` feature, either via the {{htmlelement("install")}} element or the {{domxref("Navigator.install()")}} method. When using the `<install>` element, this means that the user previously pressed the rendered button and selected an "allow" option.
- `denied`
  - : The user previously denied permission for the browser to use the `web-app-installation` feature. When using the `<install>` element, this means that the user previously pressed the rendered button and selected a "don't allow" option.
- `prompt`
  - : The user has not previously granted or denied permission for the browser to use the `web-app-installation` feature.

## Examples

### Basic usage

```html
<install></install>
```

```js
const installElem = document.querySelector("install");
console.log(installElem.initialPermissionStatus);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("install")}} element
