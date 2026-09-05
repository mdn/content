---
title: "HTMLInstallElement: manifest property"
short-title: manifest
slug: Web/API/HTMLInstallElement/manifest
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLInstallElement.manifest
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`manifest`** property of the {{domxref("HTMLInstallElement")}} interface gets and sets the [web app manifest](/en-US/docs/Web/Progressive_web_apps/Manifest) representing the [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps) to be installed.

It reflects the value of the `<install>` [`manifest`](/en-US/docs/Web/HTML/Reference/Elements/install#manifest) attribute.

## Value

A string representing the web app manifest of the PWA to be installed.

## Examples

### Basic usage

```html
<install></install>
```

```js
const installElem = document.querySelector("install");
console.log(installElem.manifest);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("install")}} element
