---
title: HTMLInstallElement
slug: Web/API/HTMLInstallElement
page-type: web-api-interface
status:
  - experimental
browser-compat: api.HTMLInstallElement
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`HTMLInstallElement`** interface of the [HTML DOM API](/en-US/docs/Web/API/HTML_DOM_API) represents the {{htmlelement("install")}} element, and provides access to its properties and events.

> [!NOTE]
> The `<install>` element and `HTMLInstallElement` interface provide a declarative way for developers to create a button that will install a [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps) on the user's device.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent interface, {{domxref("HTMLElement")}}._

- {{domxref("HTMLInstallElement.initialPermissionStatus", "initialPermissionStatus")}} {{readonlyinline}} {{experimental_inline}}
  - : An enumerated value representing the permission status for installing PWAs when the page first loads.
- {{domxref("HTMLInstallElement.invalidReason", "invalidReason")}} {{readonlyinline}} {{experimental_inline}}
  - : An enumerated value representing the reason why the `<install>` element is invalid ([blocked](/en-US/docs/Web/HTML/Reference/Elements/install#install_blocking)), if that is the case.
- {{domxref("HTMLInstallElement.isValid", "isValid")}} {{readonlyinline}} {{experimental_inline}}
  - : A boolean value indicating whether the `<install>` element is valid or invalid (blocked).
- {{domxref("HTMLInstallElement.manifest", "manifest")}} {{readonlyinline}} {{experimental_inline}}
  - : A string representing the URL of the [web app manifest](/en-US/docs/Web/Progressive_web_apps/Manifest) defining the app to be installed. Reflects the value of the associated `<install>` element's [`manifest`](/en-US/docs/Web/HTML/Reference/Elements/install#manifest) attribute.
- {{domxref("HTMLInstallElement.manifestId", "manifestId")}} {{readonlyinline}} {{experimental_inline}}
  - : A string representing the ID of the PWA to be installed. Reflects the value of the associated `<install>` element's [`manifestId`](/en-US/docs/Web/HTML/Reference/Elements/install#manifestid) attribute.
- {{domxref("HTMLInstallElement.permissionStatus", "permissionStatus")}} {{readonlyinline}} {{experimental_inline}}
  - : A string representing the current permission status for installing PWAs.

## Instance methods

_Inherits properties from its parent interface, {{domxref("HTMLElement")}}._

## Events

_Also inherits events from its parent interface, {{domxref("HTMLElement")}}._

- {{domxref("HTMLInstallElement.installresult_event", "installresult")}} {{experimental_inline}}
  - : Fired when a PWA installation attempt completes; it can be used to report whether the installation attempt was successful.
- {{domxref("HTMLInstallElement.validationstatuschange_event", "validationstatuschange")}} {{experimental_inline}}
  - : Fired whenever the `<install>` element's {{domxref("HTMLInstallElement.isValid", "isValid")}} value changes.

## Description

The `HTMLInstallElement` interface represents the {{htmlelement("install")}} element, which creates a button that will install a [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps) on the user's device that is more consistent across supporting browsers, has greater flexibility as to where it can be implemented, and is easier to discover than the browser's built-in install functionality.

When the user activates the control, they are presented with a dialog box that asks them for permission to install the app. If they grant permission, the browser will attempt to install a PWA:

- If the `manifest` attribute is not specified, the browser will attempt to install the current document as a PWA, finding the app's manifest via its [`<link rel="manifest">`](/en-US/docs/Web/HTML/Reference/Attributes/rel/manifest) element.
- If the `manifest` attribute is specified, the browser will attempt to install the app identified by that manifest. This can be a same-origin or a cross-origin manifest. For cross-origin apps, the permission flow is different — in addition to asking the user whether they want to install each specific app, they are also asked to confirm whether they give the current site permission to install apps.

If the referenced manifests do not specify an [`id`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/id) field, the manifest `id` must be specified in the `manifestId` attribute.

You can check whether an installation was successful by listening for the {{domxref("HTMLInstallElement.installresult_event", "installresult")}} event and querying the event object's {{domxref("InstallResultEvent.result", "result")}} property.

When a [blocker](/en-US/docs/Web/HTML/Reference/Elements/install#install_blocking) is active on an {{htmlelement("install")}} element, it is prevented from functioning (invalid), either temporarily or permanently, depending on the reason. You can check whether it is invalid by querying the {{domxref("HTMLInstallElement.isValid")}} property. You can also return the reason why it is invalid via the {{domxref("HTMLInstallElement.invalidReason")}} property — see that page for a full list of possible reasons.

## Examples

### Basic usage

If a PWA landing page has an `<install>` element included on it:

```html
<install></install>
```

We can grab a reference to it and access its properties:

```js
const installElem = document.querySelector("install");
console.log(installElem.manifestId);
console.log(installElem.manifest);
console.log(installElem.isValid);
console.log(installElem.invalidReason);
console.log(installElem.initialPermissionStatus);
console.log(installElem.permissionStatus);
```

If we want to track whether the installation was successful when the install button is pressed, we can add an {{domxref("HTMLInstallElement.installresult_event", "installresult")}} event listener, and query the event object's {{domxref("InstallResultEvent.result", "result")}} property:

```js
installElem.addEventListener("installresult", (e) => {
  console.log(`Install result: ${e.result}`);
});
```

We can also query changes in the `<install>` element's validation status (see [`<install>` blocking](/en-US/docs/Web/HTML/Reference/Elements/install#install_blocking)) using a {{domxref("HTMLInstallElement.validationstatuschange_event", "validationstatuschange")}} event listener:

```js
installElem.addEventListener("validationstatuschange", (e) => {
  console.log(e);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("install")}} element
- The {{httpheader("Permissions-Policy/web-app-installation", "web-app-installation")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
