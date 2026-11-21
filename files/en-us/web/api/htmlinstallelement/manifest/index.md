---
title: "HTMLInstallElement: manifest property"
short-title: manifest
slug: Web/API/HTMLInstallElement/manifest
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLInstallElement.manifest
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`manifest`** property of the {{domxref("HTMLInstallElement")}} interface gets and sets a URL pointing to the [web app manifest](/en-US/docs/Web/Progressive_web_apps/Manifest) representing the [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps) to be installed.

It reflects the value of the `<install>` [`manifest`](/en-US/docs/Web/HTML/Reference/Elements/install#manifest) attribute.

`manifest` URLs can be absolute or relative. If a relative URL is specified, it is resolved against the current document's base URL.

## Value

A string representing the URL of the web app manifest.

Regardless of whether a relative or absolute `manifest` URL is set, getting the property value always results in the resolved absolute URL, unless the `manifest` attribute is not set on the `<install>` element, in which case the value is `null`.

## Examples

### Basic usage

Consider the following `<install>` element:

```html
<install manifest="manifest.json" manifestId="https://example.com/index.html">
  Install this app
</install>
```

We could log the `manifest` and `manifestId` like this (the logs shown in comments assume that the site's base URL is `https://example.com`):

```js
const installElem = document.querySelector("install");
console.log(installElem.manifest);
// https://example.com/manifest.json
console.log(installElem.manifestId);
// https://example.com/index.html
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInstallElement.manifestId", "manifestId")}} property
- {{htmlelement("install")}} element
  - [`manifest`](/en-US/docs/Web/HTML/Reference/Elements/install#manifest) attribute
