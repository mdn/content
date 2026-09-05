---
title: "HTMLInstallElement: manifestId property"
short-title: manifestId
slug: Web/API/HTMLInstallElement/manifestId
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLInstallElement.manifestId
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`manifestId`** property of the {{domxref("HTMLInstallElement")}} interface gets and sets the ID of the [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps) to be installed.

It reflects the value of the `<install>` [`manifestId`](/en-US/docs/Web/HTML/Reference/Elements/install#manifestId) attribute.

## Value

A string representing the ID of the PWA to be installed, or `null` if no `manifestId` attribute was set on the `<install>` element.

## Examples

### Basic usage

```html
<install></install>
```

```js
const installElem = document.querySelector("install");
console.log(installElem.manifestId);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("install")}} element
