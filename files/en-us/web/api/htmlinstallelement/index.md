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

## Constructor

- {{domxref("HTMLInstallElement.HTMLInstallElement", "HTMLInstallElement()")}} {{experimental_inline}}
  - : Creates a new `HTMLInstallElement` object instance. Note that this constructor is not normally called directly, but via a DOM method such as {{domxref("Document.createElement()")}}.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("HTMLElement")}}._

- {{domxref("HTMLInstallElement.initialPermissionStatus", "initialPermissionStatus")}} {{readonlyinline}} {{experimental_inline}}
  - : An enumerated value representing the permission status for installing PWAs when the page first loads.
- {{domxref("HTMLInstallElement.invalidReason", "invalidReason")}} {{readonlyinline}} {{experimental_inline}}
  - : An enumerated value representing the reason why the `<install>` element is invalid ([blocked](/en-US/docs/Web/HTML/Reference/Elements/install#install_blocking)), if that is the case.
- {{domxref("HTMLInstallElement.isValid", "isValid")}} {{readonlyinline}} {{experimental_inline}}
  - : A boolean value indicating whether the `<install>` element is valid or invalid (blocked).
- {{domxref("HTMLInstallElement.manifest", "manifest")}} {{readonlyinline}} {{experimental_inline}}
  - : A string representing the [web app manifest](/en-US/docs/Web/Progressive_web_apps/Manifest) of the PWA to be installed. Reflects the value of the associated `<install>` element's [`manifest`](/en-US/docs/Web/HTML/Reference/Elements/install#manifest) attribute.
- {{domxref("HTMLInstallElement.manifestId", "manifestId")}} {{readonlyinline}} {{experimental_inline}}
  - : A string representing the ID of the PWA to be installed. Reflects the value of the associated `<install>` element's [`manifestId`](/en-US/docs/Web/HTML/Reference/Elements/install#manifestid) attribute.
- {{domxref("HTMLInstallElement.permissionStatus", "permissionStatus")}} {{readonlyinline}} {{experimental_inline}}
  - : A string representing the current permission status for installing PWAs.

## Instance methods

_Inherits properties from its parent interface, {{domxref("HTMLElement")}}._

## Events

_Also inherits events from its parent interface, {{domxref("HTMLElement")}}._

- {{domxref("HTMLInstallElement.installresult_event", "installresult")}} {{experimental_inline}}
  - : Fired when a PWA installation attempt completes; reports whether the installation attempt was successful.
- {{domxref("HTMLInstallElement.validationstatuschange_event", "validationstatuschange")}} {{experimental_inline}}
  - : Fired whenever the `<geolocation>` element's {{domxref("HTMLInstallElement.isValid", "isValid")}} value changes.

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

GOT HERE

For minimal examples that use the `<geolocation>` element and its associated `HTMLGeolocationElement` object to return location data, see our [basic example](https://mdn.github.io/dom-examples/geolocation-element/basic-example/) ([source code](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-example)) and [basic watch example](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/) ([source code](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)).

See the [`<geolocation>`](/en-US/docs/Web/HTML/Reference/Elements/geolocation#basic_usage_example) reference page for a walkthrough.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("geolocation")}} element
- The {{httpheader("Permissions-Policy/geolocation", "geolocation")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
- [Geolocation API](/en-US/docs/Web/API/Geolocation_API)
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
- [Introducing the `<geolocation>` HTML element](https://developer.chrome.com/blog/geolocation-html-element) on developer.chrome.com (2026)
